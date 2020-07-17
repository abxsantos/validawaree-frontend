import React, { Fragment } from "react"; // eslint-disable-line
import { connect } from "react-redux";

import { Grid, Button } from "@material-ui/core";

import { getLinearityResults } from "./actions";

import LinearityInputVolume from "./LinearityInputVolume";
import LinearityInputExperimentSize from "./LinearityInputExperimentSize";
import LinearityInputMass from "./LinearityInputMass";
import LinearityInputAnalyticalData from "./LinearityInputAnalyticalData";
import LinearityResultBlock from "./LinearityResutBlock";

const components = [
  <LinearityInputVolume />,
  <LinearityInputExperimentSize />,
  <LinearityInputMass />,
  <LinearityInputAnalyticalData />,
  <LinearityResultBlock />,
];

class LinearityBlock extends React.Component {
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
          container
          spacing={3}
          direction="column"
          justify="center"
          alignItems="center"
          style={{position:'relative', minHeight: '80vh'}}
        >
          <div style={{margin: '40px'}}>{components[this.state.count]}</div>
          <div style={{position: 'absolute', bottom: '5%', right: '35%'}}>
            {this.state.count < components.length - 2 ? (
              <Button color="primary" onClick={() => this.handleClick()}>
                Next
              </Button>
            ) : this.state.count < components.length - 1 ? (
              <Button
                color="primary"
                onClick={() => this.handleDispatch(this.handleClick)}
              >
                Calculate Linearity
              </Button>
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
