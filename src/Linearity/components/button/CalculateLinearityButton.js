import React from 'react';
import { connect } from 'react-redux';

import { Tooltip, Button } from '@material-ui/core';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';

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
            <Button startIcon={<ScatterPlotIcon />} variant="outlined" onClick={props.handleLinearityCalculation}>
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
