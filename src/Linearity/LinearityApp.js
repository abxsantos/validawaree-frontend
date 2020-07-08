import React from 'react';
import './style.css';

import { Grid, Paper } from '@material-ui/core/';

import { GroupButton } from './components/button/GroupButton';
import LinearitySampleInputTable from './components/tables/LinearityInputTable/LinearitySampleInputTable';
import LinearityRegressionGraph from './components/charts/LinearityRegressionGraph';
import LinearityResiduesChart from './components/charts/LinearityResiduesGraph';

function LinearityApp() {
  return (
    <div>
      <div>
        <Grid container>
          <Grid item lg={8}>
            <GroupButton />
          </Grid>
          <Grid id='linearity-input-table' component={Paper} item lg={8}>
            <LinearitySampleInputTable />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid component={Paper} container>
          <Grid
            style={{
              marginTop: '-30px',
              marginLeft: '20px',
              marginBottom: '40px',
              paddingRight: '40px',
              paddingBottom: '20px',
            }}
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
              marginBottom: '40px',
              paddingRight: '40px',
              paddingBottom: '20px',
            }}
            component={Paper}
            item
            id='linearity-residues-chart-result'
          >
            <div>
              <LinearityResiduesChart />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default LinearityApp;
