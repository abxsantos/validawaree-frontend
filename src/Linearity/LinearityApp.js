import React from 'react';
import './style.css';

import { Card } from '@material-ui/core/';

import LinearitySampleInputTable from './components/tables/LinearityInputTable/LinearitySampleInputTable';


function LinearityApp() {
  return (
    <Card >
      <LinearitySampleInputTable />
    </Card>
  );
}

export default LinearityApp;
