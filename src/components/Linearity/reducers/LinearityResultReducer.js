import { UPD_LINEARITY_RESULT, UPD_RESPONSE_ERROR } from "../actions";

const initialState = {
  linearityResult: "",
  regressionCoefficients: "",
  regressionAnova: "",

  outliers: "",
  cleaned_analytical_data: "",
  cleaned_concentration_data: "",

  isNormalDistribution: "",
  isHomokedastic: "",
  durbinWatsonValue: "",
  shapiropValue: "",
  breuschPaganpValue: "",

  regressionChartData: [],
  linearityChartData: [],

  responseStatus: "",
  responseMessage: ""
};

const linearity = (state = initialState, action) => {
  switch (action.type) {
    case UPD_LINEARITY_RESULT:
      return {
        ...state,
        regressionCoefficients: action.regressionCoefficients,
        regressionAnova: action.regressionAnova,
        outliers: action.Outliers,
        cleanedAnalyticalData: action.cleanedAnalyticalData,
        cleanedConcentrationData: action.cleanedConcentrationData,

        isNormalDistribution: action.isNormalDistribution,
        isHomokedastic: action.isHomokedastic,
        durbinWatsonValue: action.durbinWatsonValue,
        shapiropValue: action.shapiropValue,
        breuschPaganpValue: action.breuschPaganpValue,

        regressionChartData: action.regressionChartData,
        linearityChartData: action.linearityChartData,
      };
    case UPD_RESPONSE_ERROR:
      return {
        ...state,
        responseStatus: action.responseStatus,
        responseMessage: action.responseMessage,
      };
    default:
      return state;
  }
};

export default linearity;
