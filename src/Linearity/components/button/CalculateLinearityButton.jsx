import React from 'react';
import { connect } from 'react-redux';

import { Tooltip } from '@material-ui/core';
import { Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';

import { getLinearityResults } from '../../actions';

const CalculateLinearityButton = (props) => {
  return (
    <Tooltip
      title='Calculate the linearity of the given data'
      placement='bottom'
      arrow
      disableFocusListener
      disableTouchListener
    >
      <Button variant='neutral' style={{ color: '#3f4954'}} onClick={props.handleLinearityCalculation}>
        <FontAwesomeIcon icon={faFlask} className='rainbow-m-right_small' />
        Calculate Linearity
      </Button>
    </Tooltip>
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
    // This connects with the action getLinearityResult
    handleLinearityCalculation: () => {
      dispatch(getLinearityResults());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculateLinearityButton);
