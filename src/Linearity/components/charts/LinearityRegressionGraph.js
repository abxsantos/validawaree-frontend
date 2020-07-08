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
      <ResponsiveContainer width={550} height={300}>
        <ComposedChart
          width={750}
          data={props.linearityChartData}
          margin={{
            left: 10,
            right: 60,
          }}
          style={{ padding: 10 }}
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
            height={50}
            dataKey='concentration'
            type='number'
            axisLine={false}
            style={{
              fontFamily: 'Roboto',
              color: 'gray',
            }}
            label={{
              value: 'Concentration',
              position: 'insideBottomRight',
              offset: 0,
            }}
          />
          <YAxis
            height={50}
            allowDecimals={true}
            unit=''
            type='number'
            axisLine={false}
            label={{
              value: 'Analytical Signal',
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
            name='Analytical Signal'
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
