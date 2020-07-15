import React from "react";
import { connect } from 'react-redux';

import { Grid, Typography, TextField, withStyles } from "@material-ui/core";
import Fade from "react-reveal";
import LinearityVolumeUnitSelector from "./components/selector/LinearityVolumeUnitSelector";

import {changeVolume} from './actions'

const StyledTextField = withStyles({
  root: {
    fontFamily: "josegins-sans",
    textAlign: "center",
    margin: '30px'
  },
})(TextField);

function LinearityInputVolume(props) {
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
                value={props.volume}
                onChange={(e) => handleVolumeChange(e, props)}
              />
              <LinearityVolumeUnitSelector />
            </Grid>
          </>
        </Grid>
      </Fade>
    </>
  );
}

const mapStateToProps = (state) => ({
  volume: state.samples.volume,
});

function handleVolumeChange(event, props) {
  props.updateVolumeValue(event.target.value);
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateVolumeValue: (updatedValue) => {
      dispatch(changeVolume(updatedValue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LinearityInputVolume);
