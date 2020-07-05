import 'core-js';

import {
  makeChartLinePoint,
  calculateRegressionLine,
  predictValuesWithModel,
  organizeResiduesChartData,
  organizeLinearityGraphData,
} from './ActionsLinearityResultAuxiliarFunctions';

test('makeChartLinePoint Creates a dict with x and y values for plotting a regression line', () => {
  expect(makeChartLinePoint(1, 2, 'xPoint', 'yPoint')).toEqual({
    xPoint: 1,
    yPoint: 2,
  });
});

test('makeChartLinePoint Throw an exception when given undefined point values', () => {
  expect(() => makeChartLinePoint(undefined, 2, 'xPoint', 'yPoint')).toThrow(
    Error
  );
});

test('makeChartLinePoint Throw an exception when not given strings for key', () => {
  expect(() => makeChartLinePoint(1, 2, undefined, 'yPoint')).toThrow(Error);
});

test('calculateRegressionLine appends the regression line points to a list of dicts containg chart data for plotting in Recharts', () => {
  const flattenedConcentrationData = [1, 2, 3];
  const intercept = 10;
  const slope = 0;
  const chartData = [];
  expect(
    calculateRegressionLine(
      flattenedConcentrationData,
      intercept,
      slope,
      chartData
    )
  ).toEqual([
    {
      concentration: 3,
      RegressionLine: 10,
    },
    { concentration: 1, RegressionLine: 10 },
  ]);
});

test('predictValuesWithModel must return predicted values calculated by the regression line', () => {
  const flattenedConcentrationData = [1, 2, 3];
  const intercept = 2;
  const slope = 0;
  expect(
    predictValuesWithModel(flattenedConcentrationData, intercept, slope)
  ).toEqual([2, 2, 2]);
});

test('organizeResiduesChartData must return a list of  dicts containing data for Recharts Residues scatter plot', () => {
  const concentrationData = [[1, 2]];
  const regressionResidues = [1, 2];
  const intercept = 2;
  const slope = 0;
  expect(
    organizeResiduesChartData(
      concentrationData,
      regressionResidues,
      intercept,
      slope
    )
  ).toEqual([
    {
      fittedValues: 2,
      regressionResidue: 1,
    },
    {
      fittedValues: 2,
      regressionResidue: 2,
    },
    {
      fittedValues: 0,
      ResiduesLine: 0,
    },
    {
      fittedValues: 1,
      ResiduesLine: 0,
    },
  ]);
});

test('organizeLinearityGraphData must return a list of dict containing data for Recharts Linear regession scatter plot', () => {
  const analyticalData = [[1, 2, 3]];
  const concentrationData = [[1, 2, 3]];
  const intercept = 2;
  const slope = 0;
  const expectedRegressionChartData = [
    { concentration: 1, analyticalSignal: 1 },
    { concentration: 2, analyticalSignal: 2 },
    { concentration: 3, analyticalSignal: 3 },
    {
      concentration: 3,
      RegressionLine: 2,
    },
    {
      concentration: 1,
      RegressionLine: 2,
    },
  ];
  expect(
    organizeLinearityGraphData(
      analyticalData,
      concentrationData,
      intercept,
      slope
    )
  ).toEqual(expectedRegressionChartData);
});
