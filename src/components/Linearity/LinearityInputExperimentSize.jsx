import React from "react";
import { connect } from "react-redux";

import { Grid, Typography, TextField, withStyles } from "@material-ui/core";
import Fade from "react-reveal";

import { changeRows, changeColumns } from "./actions";

const StyledTextField = withStyles({
  root: {
    fontFamily: "josegins-sans",
    textAlign: "center",
    margin: "30px",
  },
})(TextField);

function LinearityInputExperimentSize(props) {
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
            <Typography>How many replicates were used?</Typography>
            <Grid
              container
              alignItems="center"
              justify="center"
              alignContents="row"
            >
              <StyledTextField
                id="standard-number"
                label="Replicates"
                type="number"
                inputProps={{ style: { textAlign: "center" } }}
                InputLabelProps={{
                  shrink: true,
                  style: { fontSize: "16px" },
                }}
                value={props.numColumns}
                onChange={(e) => handleColumnsChange(e, props)}
              />
            </Grid>
          </>
          <>
            <Typography>And how many targeted dilutions were used?</Typography>
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
                  style: { fontSize: "16px" },
                }}
                InputLabelProps={{
                  variant: "filled",
                  style: { fontSize: "16px" },
                }}
                label=""
                value={props.numRows}
                onChange={(e) => handleRowsChange(e, props)}
              />
            </Grid>
          </>
        </Grid>
      </Fade>
    </>
  );
}

const mapStateToProps = (state) => ({
  numColumns: state.samples.numColumns,
  numRows: state.samples.numRows,
});

function handleColumnsChange(event, props) {
  props.updateColumns(event.target.value);
}

function handleRowsChange(event, props) {
  props.updateRows(event.target.value);
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateColumns: (updatedColumnsValue) => {
      dispatch(changeColumns(updatedColumnsValue));
    },
    updateRows: (updatedRowsValue) => {
      dispatch(changeRows(updatedRowsValue));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinearityInputExperimentSize);
