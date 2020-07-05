// Auxiliar functions

export const makeChartLinePoint = (xPoint, yPoint, xKey, yKey) => {
  if (
    typeof xPoint === 'number' &&
    typeof yPoint === 'number' &&
    typeof xKey === 'string' &&
    typeof yKey === 'string'
  ) {
    let linePoint = {
      [xKey]: xPoint,
      [yKey]: yPoint,
    };
    return linePoint;
  } else {
    throw new Error(
      "There's something wrong with the given value for plotting the regression line."
    );
  }
};

export const calculateRegressionLine = (
  flattenedConcentrationData,
  intercept,
  slope,
  chartData
) => {
  let maxConcentrationPoint = Math.max(...flattenedConcentrationData);
  let minConcentrationPoint = Math.min(...flattenedConcentrationData);

  let maxLinePoint = slope * maxConcentrationPoint + intercept;
  let minLinePoint = slope * minConcentrationPoint + intercept;

  chartData.push(
    makeChartLinePoint(
      maxConcentrationPoint,
      maxLinePoint,
      'concentration',
      'RegressionLine'
    )
  );
  chartData.push(
    makeChartLinePoint(
      minConcentrationPoint,
      minLinePoint,
      'concentration',
      'RegressionLine'
    )
  );

  return chartData;
};

export const predictValuesWithModel = (flattenedConcentrationData, intercept, slope) => {
  let predictedModelValues = [];

  flattenedConcentrationData.forEach((element) => {
    predictedModelValues.push(slope * element + intercept);
  });
  return predictedModelValues;
};

export const organizeResiduesChartData = (
  concentrationData,
  regressionResidues,
  intercept,
  slope
) => {
  let flattenedConcentrationData = concentrationData.flat(1);
  let predictedModelValues = predictValuesWithModel(
    flattenedConcentrationData,
    intercept,
    slope
  );

  let residuesChartData = [];
  for (let i in flattenedConcentrationData) {
    let dataDict = {};
    dataDict['fittedValues'] = predictedModelValues[i];
    dataDict['regressionResidue'] = regressionResidues[i];
    residuesChartData.push(dataDict);
  }

  residuesChartData.push(
    makeChartLinePoint(0, 0, 'fittedValues', 'ResiduesLine')
  );
  residuesChartData.push(
    makeChartLinePoint(1, 0, 'fittedValues', 'ResiduesLine')
  );

  return residuesChartData;
};

export const organizeLinearityGraphData = (
  analyticalData,
  concentrationData,
  intercept,
  slope
) => {
  let flattenedAnalyticalData = analyticalData.flat(1);
  let flattenedConcentrationData = concentrationData.flat(1);

  let chartData = [];

  for (let i in flattenedConcentrationData) {
    let dataDict = {};
    dataDict['concentration'] = flattenedConcentrationData[i];
    dataDict['analyticalSignal'] = flattenedAnalyticalData[i];
    chartData.push(dataDict);
  }
  let regressionChartData = calculateRegressionLine(
    flattenedConcentrationData,
    intercept,
    slope,
    chartData
  );

  return regressionChartData;
};
