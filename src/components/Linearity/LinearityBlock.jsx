import React, { Fragment } from "react"; // eslint-disable-line
import { connect } from "react-redux";

import { Grid, Button, withStyles } from "@material-ui/core";

import { getLinearityResults } from "./actions";

import LinearityInputVolume from "./LinearityInputVolume";
import LinearityInputExperimentSize from "./LinearityInputExperimentSize";
import LinearityInputMass from "./LinearityInputMass";
import LinearityInputAnalyticalData from "./LinearityInputAnalyticalData";
import LinearityResultBlock from "./LinearityResutBlock";

const TextButton = withStyles({
  root: {
    fontSize: "2.5rem",
  },
})(Button);

const components = [
  <LinearityInputVolume data-test="inputVolume"/>,
  <LinearityInputExperimentSize data-test="inputExperimentSize"/>,
  <LinearityInputMass data-test="inputMass"/>,
  <LinearityInputAnalyticalData data-test="inputAnalyticalData"/>,
  <LinearityResultBlock data-test="resultBlock"/>,
];

export class LinearityBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      actualComponent: "",
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      if (prevState.count < components.length - 1) {
        return {
          count: prevState.count + 1,
          actualComponent: components[this.state.count],
        };
      }
    });
  };

  handleDispatch = (callback) => {
    this.props.handleLinearityCalculation(callback);
  };

  render() {
    return (
      <>
        <Grid
        data-test="MainContainer"
          container
          spacing={3}
          direction="column"
          style={{ minHeight: "80vh" }}
        >
          <div style={{ margin: "40px" }}>{components[this.state.count]}</div>
          <div style={{textAlign: "center"}}>
            {this.state.count < components.length - 2 ? (
              <TextButton data-test="nextButton"color="primary" onClick={() => this.handleClick()}>
                Next
              </TextButton>
            ) : this.state.count < components.length - 1 ? (
              <TextButton
                data-test="calculateLinearityButton"
                color="primary"
                onClick={() => this.handleDispatch(this.handleClick)}
              >
                Calculate Linearity
              </TextButton>
            ) : (
              ``
            )}
          </div>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    responseStatus: state.linearity.responseStatus,
    responseMessage: state.linearity.responseMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLinearityCalculation: (callback) => {
      dispatch(getLinearityResults(callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LinearityBlock);
