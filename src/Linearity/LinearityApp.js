import React from 'react';

import { makeStyles } from '@material-ui/core';

import LinearitySampleInputTable from './components/tables/LinearitySampleInputTable';
import LinearityRegressionAnovaTable from './components/tables/LinearityRegressionAnovaTable';

import LinearityRegressionChart from './components/charts/LinearityRegressionGraph';
import LinearityResiduesChart from './components/charts/LinearityResiduesGraph';

import LinearityDataStatisticsTable from './components/tables/LinearityDataStatisticsTable';
import LinearityVolumeUnitSelector from './components/selector/LinearityVolumeUnitSelector';
import LinearityMassUnitSelector from './components/selector/LinearityMassUnitSelector';

import AddColumnButton from './components/button/AddColumnButton';
import RemoveColumnButton from './components/button/RemoveColumnButton';
import AddRowButton from './components/button/AddRowButton';
import RemoveRowButton from './components/button/RemoveRowButton';
import CalculateLinearityButton from './components/button/CalculateLinearityButton';

const useStyles = makeStyles({
    root:{},
    table: {
      minWidth: 450,
      maxWidth: 650,
    },
    tableAnalyticalCellBorder: {
      borderWidth: 0,
      borderRightWidth: 1,
      borderLeftWidth: 1,
      borderColor: 'rgba(224, 224, 224, 1)',
      borderStyle: 'solid',
  },
  });



function LinearityApp() {
    const classes = useStyles();

    return (
        <div className="LinearityApp">
            <LinearityMassUnitSelector />
            <LinearityVolumeUnitSelector />
            <AddRowButton />
            <RemoveRowButton />
            <AddColumnButton />
            <RemoveColumnButton />
            <CalculateLinearityButton />
            <LinearitySampleInputTable />
            <LinearityRegressionAnovaTable />
            <LinearityRegressionChart />
            <LinearityResiduesChart />
            <LinearityDataStatisticsTable />
        </div>
    );
}

export default LinearityApp;
