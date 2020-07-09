import React, { Fragment } from 'react';

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
        <section id='linearity-section'>
          <h2>Linearity</h2>
          <Grid
            container
            className='LinearityInput'
            spacing={4}
            direction='column'
            justify='justify'
            alignItems='center'
          >
            <Grid item lg={3} className='LinearityInputText'>
              <p>
                To start validating your method you need to input your
                measurements in this table. The units of mass and volume can be
                changed clicking the edit button, and you can increase the
                number of rows and columns as you may like. Blank fields will
                not be acounted in the regression analysis.
              </p>
            </Grid>
            <GroupButton />
            <Grid
              item
              className='LinearityInputData'
              lg={8}
              style={{ overflowX: 'auto' }}
            >
              <LinearitySampleInputTable />
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
                lg={6}
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
        </section>
      </Grid>
    </>
  );
}

export default LinearityApp;
