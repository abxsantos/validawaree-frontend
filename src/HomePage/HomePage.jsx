import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core/';

function HomePage() {
  return (
    <>
      <Grid
        container
        className='LinearityInput'
        spacing={3}
        direction='row'
        justify='justify'
      >
        <div id='mainTitle'>
          <h1>VALIDWARE</h1>
          <h6 id='subtitle'>Analytical method validator</h6>
          <h3>Go to the validation section</h3>
          <h2>The App</h2>
          <p id='intro'>
            An open source tool to validate your method using various
            statistical analytsis without any complications. Just input your
            data and interpret the results! There is no magic or blackbox, all
            the code, statistical methods and calculations are availiable at
            your disposal.
          </p>
          <p>Source code repository</p>
          <h2>Proposal</h2>
          <p id='proposal'>
            When validating a analytical method, planning the experiments, doing
            quantifications and managing the results can be a very difficult
            process.
          </p>
          <p id='proposal'>
            The results analisys itself consists of passing your experiment data
            through many statistical tests, wich can be a very time consuming
            processes.
          </p>
          <p id='proposal'>
            The main idea of this project is to build a free easy to use and
            integrate with existing tools web app, that will be following the
            latest ANVISA legislation for validating an analytical method.
          </p>
          <p id='proposal'>
            There are paid softwares and the option to build your own table in
            existing softwares, but this leads to a very time consuming task,
            and also can lead to the usage of incorrect treatment of the data.
          </p>
        </div>
      </Grid>
    </>
  );
}

export default HomePage;
