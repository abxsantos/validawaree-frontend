// action types
export const INC_ROW = 'INC_ROW';
export const INC_COLUMN = 'INC_COLUMN';
export const UPD_SAMPLE_VALUE = 'UPD_SAMPLE_VALUE';
export const UPD_LINEARITY_RESULT = 'UPD_LINEARITY_RESULT';
export const UPD_CONCENTRATION_VALUE = 'UPD_CONCENTRATION_VALUE';
export const UPD_MASS_VALUE = 'UPD_MASS_VALUE';
export const UPD_VOLUME_VALUE = 'UPD_VOLUME_VALUE';

// action creators
export const incRow = () => ({
  type: INC_ROW,
});

export const incColumn = () => ({
  type: INC_COLUMN,
});

export function updateMassValue(updatedMassValue, column) {
  return {
    type: UPD_MASS_VALUE,
    updatedMassValue: updatedMassValue,
    column: column,
  };
}

export function updateVolumeValue(updatedVolumeValue) {
  return {
    type: UPD_VOLUME_VALUE,
    updatedVolumeValue: updatedVolumeValue,
  };
}

export function updateSampleValue(updatedValue, row, column) {
  return {
    type: UPD_SAMPLE_VALUE,
    updatedValue: updatedValue,
    row: row,
    column: column,
  };
}

export function updateConcentrationValue(updatedValue, row) {
  return {
    type: UPD_CONCENTRATION_VALUE,
    updatedValue: updatedValue,
    row: row,
  };
}

function flattenListOfLists(data) {
  let flattenedData = [].concat(...data);
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

function predictValuesWithModel(data, intercept, slope) {
  let predictedModelValues = [];

  data.forEach((element) => {
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

  var residuesChartData = [];
  for (let i in flattenedConcentrationData) {
    var dataDict = {};
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

  var chartData = [];

  for (let i in flattenedConcentrationData) {
    var dataDict = {};
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

    regressionChartData: residuesChartData,
    linearityChartData: linearityChartData,
  };
}

// This is possible beacuse we are using Redux-Thunk
export function getLinearityResults() {
  return (dispatch, getState) => {
    const { samples } = getState();

    let analytical_data = [];
    for (let i = 0; i < samples.numRows; ++i) {
      let row = [];
      for (let j = 0; j < samples.numColumns; ++j) {
        row.push(parseFloat(samples.data[i][j]));
      }
      analytical_data.push(row);
    }

    let concentration_data = [];
    for (let i = 0; i < samples.numRows; ++i) {
      concentration_data.push(
        new Array(samples.numColumns).fill(
          parseFloat(samples.concentrations[i])
        )
      );
    }

    // There's a big difference between using the real concentration for each sample
    // (based on mass of each sample) and using an average of concentration!
    // TODO: Implement a concentration calculation
    //     analytical_data = [[0.188, 0.192, 0.203], [0.349, 0.346, 0.348], [0.489, 0.482, 0.492], [0.637, 0.641, 0.641], [0.762,
    // 0.768, 0.786], [0.931, 0.924, 0.925]]
    //     concentration_data = [[0.008, 0.008016, 0.008128], [0.016, 0.016032, 0.016256], [0.02, 0.02004, 0.02032],
    //          [0.027999996640000406, 0.028055996633280407, 0.02844799658624041], [0.032, 0.032064,
    //          0.032512], [0.04, 0.04008, 0.04064]]
    analytical_data = [
      [0.188, 0.192, 0.203],
      [0.349, 0.346, 0.348],
      [0.489, 0.482, 0.492],
      [0.637, 0.641, 0.641],
      [0.762, 0.768, 0.786],
      [0.931, 0.924, 0.925],
    ];
    concentration_data = [
      [0.008, 0.008, 0.008],
      [0.016, 0.016, 0.016],
      [0.02, 0.02, 0.02],
      [0.028, 0.028, 0.028],
      [0.032, 0.032, 0.032],
      [0.04, 0.04, 0.04],
    ];

    const jsonLinearityInputData = {
      analytical_data: JSON.stringify(analytical_data),
      concentration_data: JSON.stringify(concentration_data),
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
