import React, { Fragment } from 'react'; // eslint-disable-line

import Grid from '@material-ui/core/Grid';

import './TitlePage.css';

function TilePage() {
  return (
    <>
      <Grid
        container
        className='LinearityInput'
        direction='column'
        alignItems='stretch'
      >
        <>
          <section id='main-title'>
            <h1>VALIDWAREE</h1>
            <h6 id='subtitle'>A free analytical method validator</h6>
          </section>
        </>
      </Grid>
    </>
  );
}

export default TilePage;
