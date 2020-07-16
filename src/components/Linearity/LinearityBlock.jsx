import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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

  handleDispatch = () => {
    this.props.handleLinearityCalculation()
  }

  render() {
    return (
      <>
        <Grid
          container
          spacing={3}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            {components[this.state.count]}
          </Grid>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            {this.state.count < components.length - 2 ? (
              <Button color="primary" onClick={() => this.handleClick()}>
                Next
              </Button>
            ) : this.state.count < components.length - 1 ? (
              <Button color="primary" onClick={() => {this.handleDispatch(); this.handleClick();}}>
                Calculate Linearity
              </Button>
            ) : (
              ``
            )}
          </Grid>
        </Grid>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLinearityCalculation: () => {
      dispatch(getLinearityResults());
    },
  };
};

export default connect(null, mapDispatchToProps)(LinearityBlock);
