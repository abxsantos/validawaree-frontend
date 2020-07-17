import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import { makeStyles } from "@material-ui/core/styles";

import parseDecimals from './parseDecimals'
import { connect } from "react-redux";
const useStyles = makeStyles({
  table: {
    maxWidth: 700,
    maxHeight: 300,
  },
});
function LinearityRegressionAnovaTable(props) {
  const classes = useStyles();
  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row">
              {"Regression ANOVA"}
            </TableCell>
            <TableCell align="center">{"Degrees \n of \n freedom"}</TableCell>
            <TableCell align="center">{"Sum \n of \n squares"}</TableCell>
            <TableCell align="center">{"Mean \n Squares"}</TableCell>
            <TableCell align="center">F-Test</TableCell>
            <TableCell align="center">
              F<sub>alpha</sub>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={"Model"}>
            <TableCell component="th" scope="row">
              {"Model"}
            </TableCell>
            <TableCell align="center">
              {props.regressionAnova.degrees_of_freedom_model}
            </TableCell>
            <TableCell align="center">
              {props.regressionAnova.sum_of_squares_model !== undefined
                ? parseDecimals(props.regressionAnova.sum_of_squares_model)
                : undefined}
            </TableCell>
            <TableCell align="center">
              {props.regressionAnova.mean_squared_error_model !== undefined
                ? parseDecimals(props.regressionAnova.mean_squared_error_model)
                : undefined}
            </TableCell>
            <TableCell align="center">
              {props.regressionAnova.anova_f_value !== undefined
                ? parseDecimals(props.regressionAnova.anova_f_value)
                : undefined}
            </TableCell>
            <TableCell align="center">
              {props.regressionAnova.anova_f_pvalue !== undefined
                ? parseDecimals(props.regressionAnova.anova_f_pvalue)
                : undefined}
            </TableCell>
          </TableRow>
          <TableRow key={"Residue"}>
            <TableCell component="th" scope="row">
              {"Residue"}
            </TableCell>
            <TableCell align="center">
              {props.regressionAnova.degrees_of_freedom_residues}
            </TableCell>
            <TableCell align="center">
              {props.regressionAnova.sum_of_squares_residues !== undefined
                ? parseDecimals(props.regressionAnova.sum_of_squares_residues)
                : undefined}
            </TableCell>
            <TableCell align="center">
              {props.regressionAnova.mean_squared_error_residues !== undefined
                ? parseDecimals(
                    props.regressionAnova.mean_squared_error_residues
                  )
                : undefined}
            </TableCell>
          </TableRow>
          <TableRow key={"Total"}>
            <TableCell component="th" scope="row">
              {"Total"}
            </TableCell>
            <TableCell align="center">
              {props.regressionAnova.degrees_of_freedom_total}
            </TableCell>
            <TableCell align="center">
              {props.regressionAnova.sum_of_squares_total !== undefined
                ? parseDecimals(props.regressionAnova.sum_of_squares_total)
                : undefined}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const mapStateToProps = function (state) {
  return {
    regressionAnova: state.linearity.regressionAnova,
  };
};

export default connect(mapStateToProps)(LinearityRegressionAnovaTable);
