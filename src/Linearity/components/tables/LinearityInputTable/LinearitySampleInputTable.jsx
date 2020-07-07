import { connect } from 'react-redux';
import React from 'react';
import '../../../style.css';

import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import {
  updateSampleValue,
  updateDilutionFactorValue,
  updateVolumeValue,
  updateMassValue,
} from '../../../actions';

import { buildColumns } from './TableBuildColumns';
import { buildRows } from './TableBuildRows';

import { BaseInputTableCell } from './BaseInputTableCell';


const useStyles = makeStyles(() => ({
  root: {
    fontWeight: 600,
  },
  table: {
    maxHeight: 600,
  },

}));

function LinearitySampleInputTable(props) {
  const classes = useStyles();

  return (
    <Table aria-label='sticky table' className={classes.table}>
      <TableHead className={classes.root}>
        <TableRow>
          <TableCell
            id='starter-column'
            align='left'
            padding='dense'
            size='normal'
          >
            Volume
          </TableCell>
          {buildColumns(props.columns, 'Mass')}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow key={'volume'}>
          <BaseInputTableCell
            id='starter-column'
            label='Volume'
            value={props.volume}
            onChangeAction={(e) => handleVolumeChange(e, props)}
          />
          {buildColumns(props.columns, 'Mass', false, props)}
        </TableRow>
      </TableBody>
      <TableHead>
        <TableRow>
          <TableCell align='left' padding='dense' size='normal'>
            Dilution Factor
          </TableCell>
          {buildColumns(props.columns, 'Sample')}
          <TableCell align='center' padding='dense' size='normal'>
            Average
          </TableCell>
          <TableCell align='center' padding='dense' size='normal'>
            Standard Deviation
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{buildRows(props)}</TableBody>
    </Table>
  );
}

function handleVolumeChange(event, props) {
  props.updateVolumeValue(event.target.value);
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinearitySampleInputTable);
