import React from "react";
import { connect } from 'react-redux'

import Button from "@material-ui/core/Button";
import { getLinearityResults } from "../../actions";


const CalculateLinearityButton = (props) => {
  return (
    <div>
    <Button variant="contained" onClick={props.handleLinearityCalculation}>
    Calculate
    </Button>
    <p>{JSON.stringify(props.linearityResults)}</p>
    </div>
  );
};

const mapStateToProps = function (state) {
  return {linearityResults: state.linearity.linearityResult};
};

const mapDispatchToProps = dispatch => {
  return {
    // This connects with the action getLinearityResult
    handleLinearityCalculation: () => {dispatch(getLinearityResults())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculateLinearityButton);
