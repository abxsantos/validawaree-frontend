import React, { Fragment } from "react"; // eslint-disable-line

import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal";

import LinearityRegressionAnovaTable from "./components/tables/LinearityRegressionAnovaTable";
import LinearityDataStatisticsTable from "./components/tables/LinearityDataStatisticsTable";
import LinearityCoefficientsTable from "./components/tables/LinearityCoefficientsTable";
import LinearityRegressionGraph from "./components/charts/LinearityRegressionGraph";
import LinearityResiduesChart from "./components/charts/LinearityResiduesGraph";

function LinearityResultBlock() {
  return (
    <>
      <Fade left cascade duration={1000} delay={500} distance="30px">
        <h2>Linearity Results</h2>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={8}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <LinearityRegressionGraph />
              <LinearityRegressionAnovaTable />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <LinearityResiduesChart />
              <LinearityDataStatisticsTable />
              <LinearityCoefficientsTable />
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </>
  );
}
export default LinearityResultBlock;
