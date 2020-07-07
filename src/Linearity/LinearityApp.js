import React from 'react';

import { Grid, Paper, makeStyles } from '@material-ui/core/';

import LinearitySampleInputTable from './components/tables/LinearityInputTable/LinearitySampleInputTable';
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

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '10rem',
    marginBottom: '5rem',
    marginLeft: '5rem',
    marginRight: '5rem',
  },
}));

function LinearityApp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems='center' direction='row' spacing={2}>
        <Grid item>
          <Paper>
            <Grid container alignItems='center' direction='row' spacing={2}>
              <Grid item>
                <LinearityMassUnitSelector />
                <LinearityVolumeUnitSelector />
              </Grid>
              <Grid item>
                <AddRowButton />
              </Grid>
              <Grid item>
                <RemoveRowButton />
              </Grid>
              <Grid item>
                <AddColumnButton />
              </Grid>
              <Grid item>
                <RemoveColumnButton />
              </Grid>
              <Grid item>
                <CalculateLinearityButton />
              </Grid>
              <LinearitySampleInputTable />
            </Grid>
          </Paper>
        </Grid>

        <Grid item>
          <Paper
            style={{ background: 'linear-gradient(60deg, #ffa726, #fb8c00)' }}
          >
            <Grid container justify='center'>
              <Grid item sm={12} md={6} lg={3}>
                <LinearityRegressionChart />
              </Grid>
              <Grid item sm={12} md={6} lg={3}>
                <LinearityResiduesChart />
              </Grid>
              <Grid item sm={12} md={8} lg={4}>
                <LinearityRegressionAnovaTable />
              </Grid>
              <Grid item sm={12} md={6} lg={3}>
                <LinearityDataStatisticsTable />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default LinearityApp;
