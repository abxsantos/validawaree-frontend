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
  lineChartData: [],
  composedChartData: [],
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

        linearityChartData: action.linearityChartData,
    
        composedChartData: action.linearityChartData,
        // [{concentration: 0.008, analyticalSignal: 0.188},
        //   {concentration: 0.008, analyticalSignal: 0.192}, 
        //   {concentration: 0.008, analyticalSignal: 0.203},
        //   {concentration: 0.016, analyticalSignal: 0.349},
        //   {concentration: 0.016, analyticalSignal: 0.346},
        //   {concentration: 0.016, analyticalSignal: 0.348},
        //   {concentration: 0.02, analyticalSignal: 0.489}, 
        //   {concentration: 0.02, analyticalSignal: 0.482},
        //   {concentration: 0.02, analyticalSignal: 0.492},
        //   {concentration: 0.028, analyticalSignal: 0.637},
        //   {concentration: 0.028, analyticalSignal: 0.641},
        //   {concentration: 0.028, analyticalSignal: 0.641},
        //   {concentration: 0.032, analyticalSignal: 0.762},
        //   {concentration: 0.032, analyticalSignal: 0.768},
        //   {concentration: 0.032, analyticalSignal: 0.786},
        //   {concentration: 0.04, analyticalSignal: 0.931},
        //   {concentration: 0.04, analyticalSignal: 0.924},
        //   {concentration: 0.04, analyticalSignal: 0.925},
        //   // Calculation of line of best fit is not included in this demo
        //   { concentration: 0.008, redLine: 0.1859791023858423 },
        //   { concentration: 0.04, redLine: 0.9299914790871854 },
        // ],
      };
    default:
      return state;
  }
};

export default linearity;