import React, { useEffect } from "react";
import { connect } from 'react-redux'

import Button from "@material-ui/core/Button";
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Scatter, Line, CartesianGrid, Tooltip, Legend, LineChart } from 'recharts';

import { getLinearityResults } from "../../actions";

// https://github.com/recharts/recharts/issues/1156
// https://recharts.org/en-US/examples/ScatterAndLineOfBestFit
const CalculateLinearityButton = (props) => {
  return (
    <div>
    <Button variant="contained" onClick={props.handleLinearityCalculation}>
    Calculate
    </Button>
    <ComposedChart
        width={500}
        height={400}
        data={props.composedChartData}
        margin={{
          top: 20, right: 80, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Legend />

        <XAxis dataKey="index" type="number" label={{ value: 'Index', position: 'insideBottomRight', offset: 0 }} />
        <YAxis unit="ms" type="number" label={{ value: 'Time', angle: -90, position: 'insideLeft' }} />
        <Scatter name="red" dataKey="red" fill="red" />
        <Scatter name="blue" dataKey="blue" fill="blue" />
        <Line dataKey="blueLine" stroke="blue" dot={false} activeDot={false} legendType="none" />
        <Line dataKey="redLine" stroke="red" dot={false} activeDot={false} legendType="none" />
      </ComposedChart>
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    linearityResults: state.linearity.linearityResult,
    lineChartData: state.linearity.lineChartData,
    composedChartData: state.linearity.composedChartData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // This connects with the action getLinearityResult
    handleLinearityCalculation: () => {dispatch(getLinearityResults())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculateLinearityButton);
