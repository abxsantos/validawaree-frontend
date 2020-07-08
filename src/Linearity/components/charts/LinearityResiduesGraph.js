import React from 'react';
import { connect } from 'react-redux';

import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Scatter,
  Line,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const LinearityResiduesChart = (props) => {
  return (
    <div>
      <ResponsiveContainer width={300} height={300}>
        <ComposedChart
          data={props.regressionChartData}
          style={{ padding: 10 }}
          margin={{
            left: 10,
          }}
        >
          <CartesianGrid stroke='#f5f5f5' />
          <Tooltip
            labelStyle={{ fontWeight: 600 }}
            itemStyle={{ fontWeight: 600 }}
            formatter={function (value) {
              return `${value}`;
            }}
            labelFormatter={function (value) {
              return `Concentration: ${value}`;
            }}
          />

          <XAxis
            dataKey='fittedValues'
            type='number'
            axisLine={false}
            allowDecimals={true}
            label={{
              value: 'Fitted Values',
              position: 'insideBottomRight',
              offset: 0,
            }}
            style={{
              fontFamily: 'Roboto',
              color: 'gray',
            }}
          />
          <YAxis
            unit=''
            allowDecimals={true}
            type='number'
            axisLine={false}
            label={{
              value: 'Residuals',
              angle: -90,
              position: 'insideLeft',
            }}
            style={{
              fontFamily: 'Roboto',
              color: 'gray',
            }}
          />
          <Scatter
            name='Regression Residue'
            dataKey='regressionResidue'
            fill='#01b6f5'
          />
          <Line
            type='monotone'
            dataKey='ResiduesLine'
            stroke='#01b6f5'
            dot={false}
            activeDot={false}
            legendType='none'
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    regressionChartData: state.linearity.regressionChartData,
  };
};

export default connect(mapStateToProps)(LinearityResiduesChart);
