// Action types
export const UPD_LINEARITY_RESULT = 'UPD_LINEARITY_RESULT';

// Auxiliar functions
function flattenListOfLists(analyticalData) {
  let flattenedData = [].concat(...analyticalData);
  return flattenedData;
}

function makeChartLinePoint(xPoint, yPoint, xKey, yKey) {
  let linePoint = {
    [xKey]: xPoint,
    [yKey]: yPoint,
  };
  return linePoint;
}

function calculateRegressionLine(
  flattenedConcentrationData,
  intercept,
  slope,
  chartData
) {

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
}

function predictValuesWithModel(analyticalData, intercept, slope) {
  let predictedModelValues = [];

  analyticalData.forEach((element) => {
    predictedModelValues.push(slope * element + intercept);
  });
  return predictedModelValues;
}

function organizeResiduesChartData(
  concentrationData,
  regressionResidues,
  intercept,
  slope
) {
  let flattenedConcentrationData = flattenListOfLists(concentrationData);
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
}

function organizeLinearityGraphData(
  analyticalData,
  concentrationData,
  intercept,
  slope
) {
  let flattenedAnalyticalData = flattenListOfLists(analyticalData);
  let flattenedConcentrationData = flattenListOfLists(concentrationData);

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
}

export function updateLinearityResults(jsonLinearityResultData) {
  let linearityChartData = organizeLinearityGraphData(
    jsonLinearityResultData.cleaned_data.cleaned_analytical_data,
    jsonLinearityResultData.cleaned_data.cleaned_concentration_data,
    jsonLinearityResultData.regression_coefficients.intercept,
    jsonLinearityResultData.regression_coefficients.slope
  );

  let residuesChartData = organizeResiduesChartData(
    jsonLinearityResultData.cleaned_data.cleaned_concentration_data,
    jsonLinearityResultData.regression_residues,
    jsonLinearityResultData.regression_coefficients.intercept,
    jsonLinearityResultData.regression_coefficients.slope
  );

  return {
    type: UPD_LINEARITY_RESULT,

    regressionCoefficients: jsonLinearityResultData.regression_coefficients,
    regressionAnova: jsonLinearityResultData.regression_anova,
    outliers: jsonLinearityResultData.cleaned_dataoutliers,

    cleanedAnalyticalData:
      jsonLinearityResultData.cleaned_data.cleaned_analytical_data,

    cleanedConcentrationData:
      jsonLinearityResultData.cleaned_data.cleaned_concentration_data,

    isNormalDistribution: jsonLinearityResultData.is_normal_distribution,
    isHomokedastic: jsonLinearityResultData.is_homokedastic,
    durbinWatsonValue: jsonLinearityResultData.durbin_watson_value,
    shapiropValue: jsonLinearityResultData.shapiro_pvalue,
    breuschPaganpValue: jsonLinearityResultData.breusch_pagan_pvalue,

    regressionChartData: residuesChartData,
    linearityChartData: linearityChartData,
  };
}

// This is possible beacuse we are using Redux-Thunk
export function getLinearityResults() {
  return (dispatch, getState) => {
    const { samples } = getState();

    const jsonLinearityInputData = {
      analytical_data: JSON.stringify(samples.analyticalData),
      concentration_data: JSON.stringify(samples.concentrations),
    };

    fetch('/linearity_result', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        content_type: 'application/json',
      },
      body: JSON.stringify(jsonLinearityInputData),
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonLinearityResultData) => {
        dispatch(updateLinearityResults(jsonLinearityResultData));
      });
  };
}
