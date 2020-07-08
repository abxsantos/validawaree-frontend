import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 250,
    maxWidth: 400
  },
});

function LinearityDataStatisticsTable(props) {
  const classes = useStyles();
  return (
    <Table className={classes.table} size='small' aria-label='a dense table'>
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
          <TableCell align='center'>{props.breuschPaganpValue}</TableCell>
          <TableCell align='center'>{props.shapiropValue}</TableCell>
          <TableCell align='center'>{props.durbinWatsonValue}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
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
