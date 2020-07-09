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
      <div id='mainTitle'>
        <h1>VALIDWARE</h1>
        <h6 id='subtitle'>Analytical method validator</h6>
        <h3>Go to the validation section</h3>
        <h2>The App</h2>
        <p id='intro'>
          An open source tool to validate your method using various statistical
          analytsis without any complications. Just input your data and
          interpret the results! There is no magic or blackbox, all the code,
          statistical methods and calculations are availiable at your disposal.
        </p>
        <p>Source code repository</p>
        <h2>Proposal</h2>
        <p id='proposal'>
          When validating a analytical method, planning the experiments, doing
          quantifications and managing the results can be a very difficult
          process.
        </p>
        <p id='proposal'>
          The results analisys itself consists of passing your experiment data
          through many statistical tests, wich can be a very time consuming
          processes.
        </p>
        <p id='proposal'>
          The main idea of this project is to build a free easy to use and
          integrate with existing tools web app, that will be following the
          latest ANVISA legislation for validating an analytical method.
        </p>
        <p id='proposal'>
          There are paid softwares and the option to build your own table in
          existing softwares, but this leads to a very time consuming task, and
          also can lead to the usage of incorrect treatment of the data.
        </p>
        <h2>Linearity</h2>
      </div>
      <>
        <GroupButton />
      </>
      <Grid container className='Linearity'>
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
