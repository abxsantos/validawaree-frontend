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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function SimpleTable({ row_data }) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (10 g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            {/* <TableCell align="right">ADDED&nbsp;(g)</TableCell> */}
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>  
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{buildNewRows(row_data)}</TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => ({
  column_number: state.change_column_number.column_number,
  row_data: state.change_row_number.row_data,
});

function buildNewRows(row_data) {
  var row_cell = [];
  for (var value of Object.entries(row_data)) {
    value.forEach((data) => {
      row_cell.push(
        <TableRow key={data.name}>
          <TableCell component="th" scope="row">
            {data.name}
          </TableCell>
          <TableCell align="right">{data.calories}</TableCell>
          <TableCell align="right">{data.fat}</TableCell>
          <TableCell align="right">{data.carbs}</TableCell>
          <TableCell align="right">{data.protein}</TableCell>
        </TableRow>
      );
    });
  }
  return row_cell;
}

export default connect(mapStateToProps)(SimpleTable);
