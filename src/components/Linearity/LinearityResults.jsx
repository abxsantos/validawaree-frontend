import React, { Fragment } from "react"; // eslint-disable-line

import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal";

import LinearityRegressionAnovaTable from "./components/tables/LinearityRegressionAnovaTable";
import LinearityDataStatisticsTable from "./components/tables/LinearityDataStatisticsTable";
import LinearityCoefficientsTable from "./components/tables/LinearityCoefficientsTable";
import LinearityRegressionGraph from "./components/charts/LinearityRegressionGraph";
import LinearityResiduesChart from "./components/charts/LinearityResiduesGraph";

function LinearityResults() {
  return (
    <>
      <Fade left cascade duration={1000} delay={500} distance="30px">
        <h2>Linearity Results</h2>
        <Grid
          _test="mainContainer"
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={0}
        >
          <Grid item>
            <Grid _test="regressionContainer" container direction="column">
              <LinearityRegressionGraph _test="regressionGraph" />
              <LinearityRegressionAnovaTable _test="anovaTable" />
            </Grid>
          </Grid>
          <Grid item>
            <Grid _test="residuesContainer" container direction="column">
              <LinearityResiduesChart _test="residuesChart" />
              <LinearityDataStatisticsTable _test="statisticsTable" />
              <LinearityCoefficientsTable _test="coefficientsTable" />
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </>
  );
}
export default LinearityResults;
