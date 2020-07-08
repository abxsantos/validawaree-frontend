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

const LinearityRegressionChart = (props) => {
  return (
    <div>
      <ResponsiveContainer
        height={300}
      >
        <ComposedChart data={props.linearityChartData}>
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
            height={100}
            dataKey='concentration'
            type='number'
            axisLine={false}
            style={{
              fontFamily: 'Roboto',
              color: 'gray',
            }}
            label={{
              position: 'insideBottomRight',
              offset: 0,
            }}
          />
          <YAxis
            height={200}
            allowDecimals={true}
            unit=''
            type='number'
            axisLine={false}
            label={{
              angle: -90,
              position: 'insideLeft',
            }}
            style={{
              fontFamily: 'Roboto',
              color: 'gray',
            }}
          />
          <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
          <Scatter
            dataKey='analyticalSignal'
            fill='#01b6f5'
            legendType='line'
          />
          <Line
            type='monotone'
            dataKey='RegressionLine'
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
    linearityChartData: state.linearity.linearityChartData,
  };
};

export default connect(mapStateToProps)(LinearityRegressionChart);
