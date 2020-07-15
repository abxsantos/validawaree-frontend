import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';

function LinearityCoefficientsTable(props) {
  return (
    <Table size='small' aria-label='a dense table'>
      <TableHead>
        <TableRow>
          <TableCell align='center'>{'Intercept'}</TableCell>
          <TableCell align='center'>{'Slope'}</TableCell>
          <TableCell align='center'>{'R²'}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow key={'data-statistics'}>
          <TableCell align='center'>{props.intercept}</TableCell>
          <TableCell align='center'>{props.slope}</TableCell>
          <TableCell align='center'>{props.rSquared}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

const mapStateToProps = function (state) {
  return {
    intercept: state.linearity.regressionCoefficients.intercept,
    insignificantIntercept: state.linearity.regressionCoefficients.insignificant_intercept,
    slope: state.linearity.regressionCoefficients.slope,
    significantSlope: state.linearity.regressionCoefficients.significant_slope,
    rSquared: state.linearity.regressionCoefficients.r_squared,
    validRegresion: state.linearity.regressionCoefficients.valid_regression,
  };
};

export default connect(mapStateToProps)(LinearityCoefficientsTable);
