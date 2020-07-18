import React, { Fragment } from 'react'; // eslint-disable-line

import Grid from '@material-ui/core/Grid';

import './TitlePage.css';

function TilePage() {
  return (
    <>
      <Grid
        container
        data-test='LinearityMainContainer'
        direction='column'
        alignItems='stretch'
      >
        <>
          <section id='main-title-background'>
            <h1 data-test='mainTitle'>VALIDWAREE</h1>
            <h6 data-test='subtitle'>A free analytical method validator</h6>
          </section>
        </>
      </Grid>
    </>
  );
}

export default TilePage;
