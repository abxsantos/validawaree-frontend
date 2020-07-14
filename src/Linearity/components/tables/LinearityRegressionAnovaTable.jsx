import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';

function LinearityRegressionAnovaTable(props) {
  return (
    <Table size='small' aria-label='a dense table'>
      <TableHead>
        <TableRow>
          <TableCell component='th' scope='row'>
            {'Regression ANOVA'}
          </TableCell>
          <TableCell align='center'>{'Degrees \n of \n freedom'}</TableCell>
          <TableCell align='center'>{'Sum \n of \n squares'}</TableCell>
          <TableCell align='center'>{'Mean \n Squares'}</TableCell>
          <TableCell align='center'>F-Test</TableCell>
          <TableCell align='center'>
            F<sub>alpha</sub>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow key={'Model'}>
          <TableCell component='th' scope='row'>
            {'Model'}
          </TableCell>
          <TableCell align='center'>
            {props.regressionAnova.degrees_of_freedom_model}
          </TableCell>
          <TableCell align='center'>
            {props.regressionAnova.sum_of_squares_model}
          </TableCell>
          <TableCell align='center'>
            {props.regressionAnova.mean_squared_error_model}
          </TableCell>
          <TableCell align='center'>
            {props.regressionAnova.anova_f_value}
          </TableCell>
          <TableCell align='center'>
            {props.regressionAnova.anova_f_pvalue}
          </TableCell>
        </TableRow>
        <TableRow key={'Residue'}>
          <TableCell component='th' scope='row'>
            {'Residue'}
          </TableCell>
          <TableCell align='center'>
            {props.regressionAnova.degrees_of_freedom_residues}
          </TableCell>
          <TableCell align='center'>
            {props.regressionAnova.sum_of_squares_residues}
          </TableCell>
          <TableCell align='center'>
            {props.regressionAnova.mean_squared_error_residues}
          </TableCell>
        </TableRow>
        <TableRow key={'Total'}>
          <TableCell component='th' scope='row'>
            {'Total'}
          </TableCell>
          <TableCell align='center'>
            {props.regressionAnova.degrees_of_freedom_total}
          </TableCell>
          <TableCell align='center'>
            {props.regressionAnova.sum_of_squares_total}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

const mapStateToProps = function (state) {
  return {
    regressionAnova: state.linearity.regressionAnova,
  };
};

export default connect(mapStateToProps)(LinearityRegressionAnovaTable);