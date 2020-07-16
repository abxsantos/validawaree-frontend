import React, { Fragment } from 'react';

import { Grid, Paper } from '@material-ui/core/';

import { GroupButton } from '../../components/Linearity/components/button/GroupButton';
import LinearitySampleInputTable from '../../components/Linearity/components/tables/LinearityInputTable/LinearitySampleInputTable';
import LinearityRegressionAnovaTable from '../../components/Linearity/components/tables/LinearityRegressionAnovaTable';
import LinearityDataStatisticsTable from '../../components/Linearity/components/tables/LinearityDataStatisticsTable';
import LinearityCoefficientsTable from '../../components/Linearity/components/tables/LinearityCoefficientsTable';
import LinearityRegressionGraph from '../../components/Linearity/components/charts/LinearityRegressionGraph';
import LinearityResiduesChart from '../../components/Linearity/components/charts/LinearityResiduesGraph';
import LinearityInput from '../../components/Linearity/LinearityBlock';


function LinearityPage() {
  return (
    <>
      <Grid
        container
        className='Linearity'
        justify='justify'
        direction='column'
        alignItems='center'
      >
        <section id='linearity-section'>
          <h2>Linearity</h2>
          <LinearityInput/>
          </section>
      </Grid>
    </>
  );
}

export default LinearityPage;
