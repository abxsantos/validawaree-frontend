import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import { makeStyles } from "@material-ui/core/styles";

import parseDecimals from "./parseDecimals"

import { connect } from 'react-redux';
const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    maxHeight: 300
  }
});
export function LinearityDataStatisticsTable(props) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table} component={Paper}>
    <Table size='small' aria-label='a dense table'>
      <TableHead>
        <TableRow>
          <TableCell align='center'>
          {'Breusch-Pagan \n p-value'}
          </TableCell>
          <TableCell align='center'>
          {'Shapiro-Wilk \n p-value'}
          </TableCell>
          <TableCell align='center'>
          {'Durbin-Watson \n test'}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow key={'data-statistics'}>
          <TableCell align='center'>{props.breuschPaganpValue !== undefined
                ? parseDecimals(props.breuschPaganpValue)
                : undefined}</TableCell>
          <TableCell align='center'>{props.shapiropValue !== undefined
                ? parseDecimals(props.shapiropValue)
                : undefined}</TableCell>
          <TableCell align='center'>{props.durbinWatsonValue !== undefined
                ? parseDecimals(props.durbinWatsonValue)
                : undefined}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </TableContainer>
  );
}

const mapStateToProps = function (state) {
  return {
    isNormalDistribution: state.linearity.isNormalDistribution,
    isHomokedastic: state.linearity.isHomokedastic,
    durbinWatsonValue: state.linearity.durbinWatsonValue,
    shapiropValue: state.linearity.shapiropValue,
    breuschPaganpValue: state.linearity.breuschPaganpValue,
  };
};

export default connect(mapStateToProps)(LinearityDataStatisticsTable);
