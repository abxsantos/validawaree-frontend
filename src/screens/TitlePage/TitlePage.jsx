import React, { Fragment } from 'react'; // eslint-disable-line

import Grid from '@material-ui/core/Grid';

import './TitlePage.css';

function TilePage() {
  return (
    <>
      <Grid
        container
        className='LinearityInputComponent'
        direction='column'
        alignItems='stretch'
      >
        <>
          <section id='main-title-background'>
            <h1 className='mainTitle'>VALIDWAREE</h1>
            <h6 className='subtitle'>A free analytical method validator</h6>
          </section>
        </>
      </Grid>
    </>
  );
}

export default TilePage;
