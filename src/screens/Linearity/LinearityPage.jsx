import React, { Fragment } from "react"; // eslint-disable-line

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import LinearityBlock from "../../components/Linearity/LinearityBlock";
import "./LinearityPage.css"

function LinearityPage() {
  return (
    <div id="page-container">
      <Grid
        container
        className="Linearity"
        justify="justify"
        direction="column"
        alignItems="center"
      >
        <Paper
          elevation={6}
          style={{
            margin: "40px 40px 40px 40px",
            width: "90%",
          }}
        >
          <section id="linearity-section">
            <LinearityBlock />
          </section>
        </Paper>
      </Grid>
    </div>
  );
}

export default LinearityPage;
