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

import { updateSampleValue, updateConcentrationValue } from '../../actions';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function SamplesTable(props) {
  const classes = useStyles();
  return (
    // TODO: Cell for mass of each sample
    // TODO: Cell for volume of stock sample
    // TODO: Dilution factor or % cell instead of concentration
    // TODO: With these values, calculate the concentration for each value in the cell
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='right'>Concentrations</TableCell>
            {buildColumns(props.columns)}
            <TableCell align='right'>Avg</TableCell>
            <TableCell align='right'>Std. Dev</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{buildRows(props)}</TableBody>
      </Table>
    </TableContainer>
  );
}

function handleChange(event, row, column, props) {
  props.updateSampleValue(event.target.value, row, column);
}

function handleChangeC(event, row, props) {
  props.updateConcentrationValue(event.target.value, row);
}

const mapStateToProps = (state) => ({
  rows: state.samples.numRows,
  columns: state.samples.numColumns,
  data: state.samples.data,
  concentrations: state.samples.concentrations,
  averages: state.samples.averages,
  stdDeviations: state.samples.stdDeviations,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateSampleValue: (updatedValue, row, column) => {
      dispatch(updateSampleValue(updatedValue, row, column));
    },
    updateConcentrationValue: (updatedValue, row) => {
      dispatch(updateConcentrationValue(updatedValue, row));
    },
  };
};

function buildColumns(columns) {
  let items = [];
  for (let i = 1; i <= columns; ++i) {
    items.push(
      <TableCell key={`head-${i}`} align='right'>
        Sample #{i}
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
      <TableCell key={`concentration-${i}`} align='right'>
        <TextField
          label='concentrations'
          value={props.concentrations[i]}
          onChange={(e) => handleChangeC(e, i, props)}
        />
      </TableCell>
    );
    for (let j = 0; j < props.columns; ++j) {
      items.push(
        <TableCell key={`sample-${i}${j}`} align='right'>
          <TextField
            label={`Sample ${j + 1}`} 
            helperText={`Concentration: `} //TODO: place concentration value
            value={props.data[i][j]}
            onChange={(e) => handleChange(e, i, j, props)}
          />
        </TableCell>
      );
    }
    items.push(
      <TableCell key={`avg-${i}`} align='right'>
        {props.averages[i]}
      </TableCell>
    );
    items.push(
      <TableCell key={`stddev-${i}`} align='right'>
        {props.stdDeviations[i]}
      </TableCell>
    );
    rowItems.push(<TableRow key={`row-${i}`}>{items}</TableRow>);
  }
  return rowItems;
}

export default connect(mapStateToProps, mapDispatchToProps)(SamplesTable);
