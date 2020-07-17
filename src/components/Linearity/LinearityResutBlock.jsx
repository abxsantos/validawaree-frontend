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
          justify="space-between"
          alignItems="center"
          spacing={0}
        >
          <Grid item >
            <Grid
              container
              direction="column"
            >
              <LinearityRegressionGraph />
              <LinearityRegressionAnovaTable />
            </Grid>
          </Grid>
          <Grid item >
            <Grid
              container
              direction="column"
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
