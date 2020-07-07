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

const LinearityRegressionChart = (props) => {
    return (
        <div>
            <ComposedChart
                width={550}
                height={300}
                data={props.linearityChartData}
                margin={{
                    top:-20,
                    left:15,
                    right:15
                }}
            >
                <CartesianGrid stroke='#f5f5f5' />
                <Tooltip />
                <Legend />

                <XAxis
                    dataKey='concentration'
                    type='number'
                    label={{ value: 'Concentration', position: 'insideBottomRight', offset: 0 }}
                />
                <YAxis
                    unit=''
                    type='number'
                    label={{ value: 'Analytical Signal', angle: -90, position: 'insideLeft' }}
                />
                <Scatter name='Analytical Signal' dataKey='analyticalSignal' fill='red' />
                <Line
                    dataKey='RegressionLine'
                    stroke='red'
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
        linearityChartData: state.linearity.linearityChartData,
    };
};

export default connect(mapStateToProps)(LinearityRegressionChart);
