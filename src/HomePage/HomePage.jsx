import React, { Fragment } from 'react';
import { Link, withRouter, Switch } from "react-router-dom"

import { Grid, Divider } from '@material-ui/core/';

import './HomePage.css';

function HomePage(props) {
  return (
    <>
      <Grid
        container
        className='LinearityInput'
        spacing={3}
        direction='column'
        alignItems='center'
      >
        <div>
          <section id='main-title'>
            <h1>VALIDWAREE</h1>
            <h6 id='subtitle'>A free analytical method validator</h6>
          </section>
          <div style={{ textAlign: 'center' }}><Link id='nav-link' to="/linearity">Go check the linearity regression of your data</Link></div>

          <section id='app-section'>
            <h2>The App</h2>
            <p id='app-text'>
              An open source tool to validate your method<br></br>using various
              statistical analysis without any complications.<br></br> Just input your
              data and interpret the results!<br></br>There is no magic or blackbox, all
              the code,<br></br>statistical methods and calculations are availiable at
              your disposal.
            </p>
            <div style={{ textAlign: 'center' }}>
              <a
                href='https://github.com/abxsantos/analytical-validation-backend'
                id='code-reference'
              >
                Source code repository
              </a>

            </div>
          </section>

          <section id='proposal-title'>
            <h2>Proposal</h2>
            <Grid
              container
              direction='column'
              justify='space-evenly'
              alignItems='center'
            >
              <Grid item lg={3}>
                <p class='proposal-text-left'>
                  When validating a analytical method, planning the experiments,
                  doing quantifications and managing the results can be a very
                  difficult process.
                </p>
              </Grid>
              <Grid item lg={3}>
                <Divider variant='middle' />

                <p class='proposal-text-right'>
                  The results analisys itself consists of passing your
                  experiment data through many statistical tests, wich can be
                  time consuming.
                </p>
              </Grid>
              <Grid item lg={3}>
                <Divider variant='middle' />

                <p class='proposal-text-left'>
                  The main idea of this project is to build a free easy to use
                  and integrate with existing tools web app, that will be
                  following the latest ANVISA legislation for validating an
                  analytical method.
                </p>
              </Grid>
              <Grid item lg={3}>
                <Divider variant='middle' />

                <p class='proposal-text-right'>
                  There are paid softwares and the option to build your own
                  table in existing softwares, but this leads to a very time
                  consuming task, and also can lead to the usage of incorrect
                  treatment of the data.
                </p>
              </Grid>
            </Grid>
          </section>
        </div>
      </Grid>
    </>
  );
}

export default withRouter(HomePage);
