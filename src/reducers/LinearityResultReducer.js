import { UPD_LINEARITY_RESULT } from "../actions";

const initialState = {
  linearityResult: '',
  regressionCoefficients: '',
  regressionAnova: '',
  outliers: '',
  cleaned_analytical_data: '',
  cleaned_concentration_data: '',
  isNormalDistribution: '',
  isHomokedastic: '',
  durbinWatsonValue: '',
  linearityChartData: [],

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

        // linearityChartData: action.linearityChartData,
    
        linearityChartData: action.linearityChartData,
      };
    default:
      return state;
  }
};

export default linearity;