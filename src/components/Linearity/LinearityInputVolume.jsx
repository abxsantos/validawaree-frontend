import React from "react";

import { Grid, Typography, TextField, withStyles } from "@material-ui/core";
import Fade from "react-reveal";
import LinearityVolumeUnitSelector from "./components/selector/LinearityVolumeUnitSelector";

const StyledTextField = withStyles({
  root: {
    fontFamily: "josegins-sans",
    textAlign: "center",
    margin: '30px'
  },
})(TextField);

function LinearityInputVolume() {
  return (
    <>
      <Fade left cascade duration={1000} delay={500} distance="30px">
        <Grid
          container
          alignItems="center"
          justify="center"
          alignContents="column"
          spacing={3}
        >
          <>
            <Typography>What is the initial volume of your samples?</Typography>
            <Grid
              container
              alignItems="center"
              justify="center"
              alignContents="row"
            >
              <StyledTextField
                id="standard-input-text-field"
                inputProps={{ style: { textAlign: "center" } }}
                InputProps={{
                  style: { fontSize: "16px"},
                }}
                InputLabelProps={{
                  variant: "filled",
                  style: { fontSize: "16px" },
                }}
                label="Volume"
              />
              <LinearityVolumeUnitSelector />
            </Grid>
          </>
        </Grid>
      </Fade>
    </>
  );
}

export default LinearityInputVolume;
