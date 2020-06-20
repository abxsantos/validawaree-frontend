import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function SamplesTable({rows, columns, data}) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Concentration</TableCell>
            {buildColumns(columns)}
            <TableCell align="right">Avg</TableCell>
            <TableCell align="right">Std. Dev</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{buildRows(rows, columns, data)}</TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => ({
  rows: state.samples.numRows,
  columns: state.samples.numColumns,
  data: state.samples.data,
});

function buildColumns(columns) {
  let items = [];
  for (let i = 1; i <= columns; ++i) {
    items.push(<TableCell align="right">Sample #{i}</TableCell>)
  }
  return items;
}

function buildRows(rows, columns, data) {
  let rowItems = [];
  for (let i = 0; i < rows; ++i) {
    let items = [];
    items.push(<TableCell align="right"><TextField id="standard-basic" label="Concentration" defaultValue={data[i][0]}/></TableCell>);
    for (let j = 1; j <= columns; ++j) {
      items.push(<TableCell align="right"><TextField id="standard-basic" label="Sample #{j}" defaultValue={data[i][j]}/></TableCell>);
    }
    items.push(<TableCell align="right">{data[i][columns+1]}</TableCell>);
    items.push(<TableCell align="right">{data[i][columns+2]}</TableCell>);
    rowItems.push(<TableRow>{items}</TableRow>);
  }
  return rowItems;
}

export default connect(mapStateToProps)(SamplesTable);
