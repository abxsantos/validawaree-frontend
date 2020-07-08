import React from 'react';
import './style.css';

import { Grid, Paper } from '@material-ui/core/';

import { GroupButton } from './components/button/GroupButton';
import LinearitySampleInputTable from './components/tables/LinearityInputTable/LinearitySampleInputTable';
import LinearityRegressionAnovaTable from './components/tables/LinearityRegressionAnovaTable';
import LinearityDataStatisticsTable from './components/tables/LinearityDataStatisticsTable';
import LinearityRegressionGraph from './components/charts/LinearityRegressionGraph';
import LinearityResiduesChart from './components/charts/LinearityResiduesGraph';

function LinearityApp() {
  return (
    <div>
      <GroupButton />
      <div styles={{ marginBottom: 100 }}>
        <Grid
          id='linearity-input-table'
          component={Paper}
          elevation={4}
          item
          lg={8}
        >
          <LinearitySampleInputTable />
        </Grid>
      </div>

      <div>
        <Grid
          container
          component={Paper}
          elevation={4}
          styles={{
            marginTop: 100,
            marginRight: 300,
            backgroundColor:
              'linear-gradient(186deg, rgba(0,143,193,1) 0%, rgba(25,216,255,1) 100%)',
          }}
        >
          <Grid
            style={{
              marginTop: '-30px',
              marginLeft: '20px',
              marginBottom: '50px',
              paddingRight: '30px',
              paddingBottom: '20px',
            }}
            elevation={4}
            component={Paper}
            item
            id='linearity-chart-result'
          >
            <div>
              <LinearityRegressionGraph />
            </div>
          </Grid>
          <Grid
            style={{
              marginTop: '-30px',
              marginLeft: '20px',
              marginBottom: '50px',
              paddingRight: '55px',
              paddingBottom: '20px',
            }}
            elevation={4}
            component={Paper}
            item
            id='linearity-residues-chart-result'
          >
            <div>
              <LinearityResiduesChart />
            </div>
          </Grid>
          <Grid
            style={{
              marginTop: '10px',
              marginLeft: '20px',
              marginBottom: '20px',
              marginRight: '20px',
              paddingBottom: '20px',
            }}
            elevation={4}
            container
            id='linearity-residues-chart-result'
          >
            <Paper elevation={4}>
              <LinearityRegressionAnovaTable />
            </Paper>
            <Paper
              elevation={4}
              style={{
                marginTop: '30px',
                marginBottom: '40px',
                marginLeft: '20px',
              }}
            >
              <LinearityDataStatisticsTable />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default LinearityApp;
