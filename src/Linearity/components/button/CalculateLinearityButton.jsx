import React from 'react';
import { connect } from 'react-redux';

import { faFlask } from '@fortawesome/free-solid-svg-icons';

import { getLinearityResults } from '../../actions';
import { BaseButton } from './BaseButton';

const CalculateLinearityButton = (props) => {
  return (
    <BaseButton
      tooltipText='Calculate the linearity of the given data'
      textColor=''
      onClickAction={props.handleLinearityCalculation}
      buttonText='Calculate Linearity'
      icon={faFlask}
    />
  );
};

const mapStateToProps = function (state) {
  return {
    regressionCoefficients: state.linearity.regressionCoefficients,
    outliers: state.linearity.outliers,
    cleanedAnalyticalData: state.linearity.cleanedAnalyticalData,
    cleanedConcentrationData: state.linearity.cleanedConcentrationData,
    isNormalDistribution: state.linearity.isNormalDistribution,
    isHomokedastic: state.linearity.isHomokedastic,
    durbinWatsonValue: state.linearity.durbinWatsonValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLinearityCalculation: () => {
      dispatch(getLinearityResults());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculateLinearityButton);
