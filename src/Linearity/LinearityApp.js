import React from 'react';
import './style.css';

import { Card , Grid, Paper } from '@material-ui/core/';

import LinearitySampleInputTable from './components/tables/LinearityInputTable/LinearitySampleInputTable';

function LinearityApp() {
  return (
    <div>
      <Grid component={Paper} item lg={8}>
        <LinearitySampleInputTable />
      </Grid>
    </div>
  );
}

export default LinearityApp;
