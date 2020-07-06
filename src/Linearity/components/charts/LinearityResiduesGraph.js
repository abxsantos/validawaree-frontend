import React from 'react';
import { connect } from 'react-redux';

import {
    ComposedChart,
    XAxis,
    YAxis,
    Scatter,
    Line,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const LinearityResiduesChart = (props) => {
    return (
        <div>
            <ComposedChart
                width={500}
                height={400}
                data={props.regressionChartData}
                margin={{
                    top: 20,
                    right: 80,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke='#f5f5f5' />
                <Tooltip />
                <Legend />

                <XAxis
                    dataKey='fittedValues'
                    type='number'
                    label={{ value: 'Fitted Values', position: 'insideBottomRight', offset: 0 }}
                />
                <YAxis
                    unit=''
                    type='number'
                    label={{ value: 'Residuals', angle: -90, position: 'insideLeft' }}
                />
                <Scatter name='Regression Residue' dataKey='regressionResidue' fill='black' />
                <Line
                    dataKey='ResiduesLine'
                    stroke='black'
                    dot={false}
                    activeDot={false}
                    legendType='none'
                />
            </ComposedChart>
        </div>
    );
};

const mapStateToProps = function (state) {
    return {
        regressionChartData: state.linearity.regressionChartData,
    };
};

export default connect(mapStateToProps)(LinearityResiduesChart);
