import React, { Fragment } from 'react';
import './LinearityApp.css';

import { Grid, Paper } from '@material-ui/core/';

import { GroupButton } from './components/button/GroupButton';
import LinearitySampleInputTable from './components/tables/LinearityInputTable/LinearitySampleInputTable';
import LinearityRegressionAnovaTable from './components/tables/LinearityRegressionAnovaTable';
import LinearityDataStatisticsTable from './components/tables/LinearityDataStatisticsTable';
import LinearityCoefficientsTable from './components/tables/LinearityCoefficientsTable';
import LinearityRegressionGraph from './components/charts/LinearityRegressionGraph';
import LinearityResiduesChart from './components/charts/LinearityResiduesGraph';

function LinearityApp() {
  return (
    <>
      <Grid
        container
        className='Linearity'
        justify='justify'
        direction='column'
      >
        <h2>Linearity</h2>
        <GroupButton />
        <Grid
          container
          className='LinearityInput'
          spacing={3}
          direction='row'
          justify='justify'
        >
          <Grid
            item
            className='LinearityInputData'
            lg={8}
            style={{ overflowX: 'auto' }}
          >
            <Paper>
              <LinearitySampleInputTable />
            </Paper>
          </Grid>
          <Grid item lg={4} className='LinearityInputText'>
            <Paper>
              To start validating your method you need to input your
              measurements in this table. The units of mass and volume can be
              changed clicking the edit button, and you can increase the number
              of rows and columns as you may like. Blank fields will not be
              acounted in the regression analysis.
            </Paper>
          </Grid>
        </Grid>
        <h2>Linearity Results</h2>
        <Grid container className='LinearityResults'>
          <Grid
            container
            className='LinearityResultsData'
            direction='row'
            spacing={3}
            justify='space-around'
          >
            <Grid
              container
              className='Tables'
              direction='column'
              md={12}
              lg={7}
              spacing={3}
            >
              <Grid item className='LinearityRegressionGraph'>
                <Paper>
                  <LinearityRegressionGraph />
                </Paper>
              </Grid>
              <Grid item className='LinearityResiduesAnovaTable'>
                <Paper>
                  <LinearityRegressionAnovaTable />
                </Paper>
              </Grid>
            </Grid>
            <Grid
              container
              className='Tables'
              direction='column'
              lg={5}
              md={12}
              spacing={3}
            >
              <Grid item className='LinearityResiduesGraph'>
                <Paper>
                  <LinearityResiduesChart />
                </Paper>
              </Grid>
              <Grid item className='LinearityRegressionCoefficients'>
                <Paper>
                  <LinearityCoefficientsTable />
                </Paper>
              </Grid>
              <Grid item className='LinearityDataStatisticsTable'>
                <Paper>
                  <LinearityDataStatisticsTable />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default LinearityApp;
