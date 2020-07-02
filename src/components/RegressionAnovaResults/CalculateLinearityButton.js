import React from "react";
import { connect } from 'react-redux'

import Button from "@material-ui/core/Button";

import { getLinearityResults } from "../../actions";

// https://github.com/recharts/recharts/issues/1156
// https://recharts.org/en-US/examples/ScatterAndLineOfBestFit
const CalculateLinearityButton = (props) => {
  return (
    <div>
    <Button variant="contained" onClick={props.handleLinearityCalculation}>
    Calculate
    </Button>
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    regressionCoefficients: state.linearity.regressionCoefficients,
    // TODO: Implement outliers
    // outliers: '',
    // cleaned_analytical_data: '',
    // cleaned_concentration_data: '',
    isNormalDistribution: state.linearity.isNormalDistribution,
    isHomokedastic: state.linearity.isHomokedastic,
    durbinWatsonValue: state.linearity.durbinWatsonValue,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // This connects with the action getLinearityResult
    handleLinearityCalculation: () => {dispatch(getLinearityResults())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculateLinearityButton);
