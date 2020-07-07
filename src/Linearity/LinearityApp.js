import React from 'react';
import './style.css';

import { Grid, Paper } from '@material-ui/core/';

import LinearitySampleInputTable from './components/tables/LinearityInputTable/LinearitySampleInputTable';
import LinearityRegressionAnovaTable from './components/tables/LinearityRegressionAnovaTable';

import LinearityRegressionChart from './components/charts/LinearityRegressionGraph';
import LinearityResiduesChart from './components/charts/LinearityResiduesGraph';

import LinearityDataStatisticsTable from './components/tables/LinearityDataStatisticsTable';

function LinearityApp() {
  return (
    <Grid container>
      <Grid component={Paper} container>
        <LinearitySampleInputTable />
      </Grid>
      <Grid component={Paper} container>
        <LinearityRegressionChart />
        <LinearityResiduesChart />
        <LinearityRegressionAnovaTable />
        <LinearityDataStatisticsTable />
      </Grid>
    </Grid>
  );
}

export default LinearityApp;
