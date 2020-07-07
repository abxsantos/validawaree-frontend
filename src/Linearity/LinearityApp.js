import React from 'react';
import './style.css';

import { Grid, Paper } from '@material-ui/core/';

import LinearitySampleInputTable from './components/tables/LinearityInputTable/LinearitySampleInputTable';
import { GroupButton } from './components/button/GroupButton';

function LinearityApp() {
  return (
    <div>
      <Grid item lg={8}>
        <GroupButton />
      </Grid>

      <Grid component={Paper} item lg={8}>
        <LinearitySampleInputTable />
      </Grid>
    </div>
  );
}

export default LinearityApp;
