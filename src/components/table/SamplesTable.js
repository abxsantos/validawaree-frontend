import { connect } from 'react-redux';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import { updateSampleValue, updateDilutionFactorValue, updateVolumeValue, updateMassValue } from '../../actions';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function SamplesTable(props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>
              Volume
            </TableCell>
            {buildColumns(props.columns, 'Mass')}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={'volume'}>
            <TableCell align='center'>
              <TextField 
              label='volume' 
              value={props.volume}
              onChange={(e) => handleVolumeChange(e, props)}
              />
            </TableCell>
            {buildColumns(props.columns, 'Mass', false, props)}
          </TableRow>
        </TableBody>

        <TableHead>
          <TableRow>
            <TableCell align='center'>Dilution Factor</TableCell>
            {buildColumns(props.columns, 'Sample')}
            <TableCell align='center'>Avg</TableCell>
            <TableCell align='center'>Std. Dev.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{buildRows(props)}</TableBody>
      </Table>
    </TableContainer>
  );
}

function handleVolumeChange(event, props){
  props.updateVolumeValue(event.target.value);
}

function handleMassChange(event, column, props) {
  props.updateMassValue(event.target.value, column);
}

function handleChange(event, row, column, props) {
  props.updateSampleValue(event.target.value, row, column);
}

function handleChangeDilutionFactor(event, row, props) {
  props.updateDilutionFactorValue(event.target.value, row);
}

const mapStateToProps = (state) => ({
  rows: state.samples.numRows,
  columns: state.samples.numColumns,

  data: state.samples.data,

  dilutionFactor: state.samples.dilutionFactor,

  initialConcentration: state.samples.initialConcentration,
  concentrations: state.samples.concentrations,

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
      dispatch(updateMassValue(updatedValue, column))
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
          <TableCell key={`head-${i}`} align='center'>
            {dataType} #{i}
          </TableCell>
        )
      : items.push(
          <TableCell key={`mass-${i}`} align='center'>
            <TextField 
            label='mass'
            helperText={`Concentration: ${props.initialConcentration[i-1]}`}
            value={props.mass[i-1]}
            onChange={(e) => handleMassChange(e, i-1, props)}
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
      <TableCell key={`dilutionFactor-${i}`} align='center'>
        <TextField
          label='Factor'
          value={props.dilutionFactor[i]}
          onChange={(e) => handleChangeDilutionFactor(e, i, props)}
        />
      </TableCell>
    );
    for (let j = 0; j < props.columns; ++j) {
      items.push(
        <TableCell key={`sample-${i}${j}`} align='center'>
          <TextField
            label={`Sample ${j + 1}`}
            helperText={`Concentration: ${props.concentrations[i][j]}`} //TODO: place concentration value
            value={props.data[i][j]}
            onChange={(e) => handleChange(e, i, j, props)}
          />
        </TableCell>
      );
    }
    items.push(
      <TableCell key={`avg-${i}`} align='center'>
        {props.averages[i]}
      </TableCell>
    );
    items.push(
      <TableCell key={`stddev-${i}`} align='center'>
        {props.stdDeviations[i]}
      </TableCell>
    );
    rowItems.push(<TableRow key={`row-${i}`}>{items}</TableRow>);
  }
  return rowItems;
}

export default connect(mapStateToProps, mapDispatchToProps)(SamplesTable);
