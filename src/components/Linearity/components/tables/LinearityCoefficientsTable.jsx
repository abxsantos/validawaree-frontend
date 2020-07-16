import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    maxHeight: 300,
  },
});
function LinearityCoefficientsTable(props) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">{"Intercept"}</TableCell>
            <TableCell align="center">{"Slope"}</TableCell>
            <TableCell align="center">{"R²"}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={"data-statistics"}>
            <TableCell align="center">{props.intercept}</TableCell>
            <TableCell align="center">{props.slope}</TableCell>
            <TableCell align="center">{props.rSquared}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = function (state) {
  return {
    intercept: state.linearity.regressionCoefficients.intercept,
    insignificantIntercept:
      state.linearity.regressionCoefficients.insignificant_intercept,
    slope: state.linearity.regressionCoefficients.slope,
    significantSlope: state.linearity.regressionCoefficients.significant_slope,
    rSquared: state.linearity.regressionCoefficients.r_squared,
    validRegresion: state.linearity.regressionCoefficients.valid_regression,
  };
};

export default connect(mapStateToProps)(LinearityCoefficientsTable);
