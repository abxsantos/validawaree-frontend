import React, { Fragment } from "react"; // eslint-disable-line

import Grid from "@material-ui/core/Grid";

import LinearityInput from "../../components/Linearity/LinearityBlock";

function LinearityPage() {
  return (
    <>
      <Grid
        container
        className="Linearity"
        justify="justify"
        direction="column"
        alignItems="center"
      >
        <section id="linearity-section">
          <LinearityInput />
        </section>
      </Grid>
    </>
  );
}

export default LinearityPage;
