import { connect } from 'react-redux';
import React from 'react';

import {
  makeStyles,
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@material-ui/core';

import {
  updateSampleValue,
  updateDilutionFactorValue,
  updateVolumeValue,
  updateMassValue,
} from '../../actions';

import AddColumnButton from '../button/AddColumnButton';
import RemoveColumnButton from '../button/RemoveColumnButton';

import AddRowButton from '../button/AddRowButton';
import RemoveRowButton from '../button/RemoveRowButton';
import CalculateLinearityButton from '../button/CalculateLinearityButton';

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
});

function LinearitySampleInputTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center' padding='dense' size="small">Volume</TableCell>
            {buildColumns(props.columns, 'Mass')}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={'volume'}>
            <TableCell align='center' padding='dense' size="small">
              <TextField
                size='small'
                helperText=' '
                label='Volume'                
                value={props.volume}
                onChange={(e) => handleVolumeChange(e, props)}
              />
            </TableCell>
            {buildColumns(props.columns, 'Mass', false, props)}
            <AddColumnButton />
            <RemoveColumnButton />
          </TableRow>
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell align='center' padding='dense' size="small">Dilution Factor</TableCell>
            {buildColumns(props.columns, 'Sample')}
            <TableCell align='center' padding='dense' size="small">Average</TableCell>
            <TableCell align='center' padding='dense' size="small">Standard Deviation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{buildRows(props)}</TableBody>
      </Table>
      <AddRowButton />
      <RemoveRowButton />
      <CalculateLinearityButton />
    </TableContainer>
  );
}

function handleVolumeChange(event, props) {
  if (!isNaN(event.target.value)) {
    props.updateVolumeValue(event.target.value);
  }
}

function handleMassChange(event, column, props) {
  if (!isNaN(event.target.value)) {
    props.updateMassValue(event.target.value, column);
  }
}

function handleChange(event, row, column, props) {
  if (!isNaN(event.target.value)) {
    props.updateSampleValue(event.target.value, row, column);
  }
}

function handleChangeDilutionFactor(event, row, props) {
  if (!isNaN(event.target.value)) {
    props.updateDilutionFactorValue(event.target.value, row);
  }
}

const mapStateToProps = (state) => ({
  rows: state.samples.numRows,
  columns: state.samples.numColumns,

  analyticalData: state.samples.analyticalData,

  dilutionFactor: state.samples.dilutionFactor,

  concentrations: state.samples.concentrations,
  initialConcentrations: state.samples.initialConcentrations,

  mass: state.samples.mass,
  volume: state.samples.volume,

  averages: state.samples.averages,
  stdDeviations: state.samples.stdDeviations,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateVolumeValue: (updatedValue) => {
      dispatch(updateVolumeValue(updatedValue));
    },
    updateMassValue: (updatedValue, column) => {
      dispatch(updateMassValue(updatedValue, column));
    },
    updateSampleValue: (updatedValue, row, column) => {
      dispatch(updateSampleValue(updatedValue, row, column));
    },
    updateDilutionFactorValue: (updatedValue, row) => {
      dispatch(updateDilutionFactorValue(updatedValue, row));
    },
  };
};

function buildColumns(columns, dataType, isHeader = true, props) {
  let items = [];
  for (let i = 1; i <= columns; ++i) {
    isHeader
      ? items.push(
          <TableCell key={`head-${dataType}-${i}`} align='center' padding='default' size="normal">
            {dataType} #{i}
          </TableCell>
        )
      : items.push(
          <TableCell key={`mass-${i}`} align='center' padding='none' size="small">
            <TextField
              label='Mass'
              size='small'
              helperText={`Concentration: ${
                props.initialConcentrations[i - 1]
              }`}
              value={props.mass[i - 1]}
              onChange={(e) => handleMassChange(e, i - 1, props)}
            />
          </TableCell>
        );
  }
  return items;
}

function buildRows(props) {
  let rowItems = [];
  for (let i = 0; i < props.rows; ++i) {
    let items = [];
    items.push(
      <TableCell key={`dilutionFactor-${i}`} align='center' padding='none' size="small">
        <Tooltip
          title='Initial volume divided by Final Volume'
          placement='bottom'
          arrow
          disableFocusListener
          disableTouchListener
        >
          <TextField
            label='Dilution factor'
            size='small'
            id='dilution-factor-text-field'
            defaultValue={undefined}
            helperText=' '
            value={props.dilutionFactor[i]}
            onChange={(e) => handleChangeDilutionFactor(e, i, props)}
          />
        </Tooltip>
      </TableCell>
    );
    for (let j = 0; j < props.columns; ++j) {
      items.push(
        <TableCell key={`sample-${i}${j}`} align='center' padding='none' size="small">
          <TextField
            label={`Analytical signal`}
            id='sample-text-field'
            size='small'
            defaultValue={undefined}
            helperText={`Concentration: ${props.concentrations[i][j]}`}
            value={props.analyticalData[i][j]}
            onChange={(e) => handleChange(e, i, j, props)}
          />
        </TableCell>
      );
    }
    items.push(
      <TableCell key={`avg-${i}`} align='center' padding='none' size="small">
        {props.averages[i]}
      </TableCell>
    );
    items.push(
      <TableCell key={`stddev-${i}`} align='center' padding='none' size="small">
        {props.stdDeviations[i]}
      </TableCell>
    );
    rowItems.push(<TableRow key={`row-${i}`}>{items}</TableRow>);
  }
  return rowItems;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinearitySampleInputTable);
