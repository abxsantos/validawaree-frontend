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
  var table_row = [];
  row_data.forEach((row_set) => {
    table_row.push(<TableRow key={row_set[0]}>{buildNewRowCells(row_set)}</TableRow>);
  });
  return table_row;
}

function buildNewRowCells(row_set) {
  var cell_data = [];
  row_set.forEach((cell_value) => {
    cell_value === row_set[0]  // Check if its the first value (concentration)
      ? cell_data.push(
          <TableCell component="th" scope="row">
            {cell_value}
          </TableCell>
        )
      : cell_data.push(<TableCell align="center">{cell_value}</TableCell>);
  });
  return cell_data;
}


export default connect(mapStateToProps)(SimpleTable);
