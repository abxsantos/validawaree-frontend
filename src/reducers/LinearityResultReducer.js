import { UPD_LINEARITY_RESULT } from "../actions";

const initialState = {
  linearityResult: '',
  lineChartData: [],
  composedChartData: [],
};

const linearity = (state = initialState, action) => {
  switch (action.type) {
    case UPD_LINEARITY_RESULT:
      return {
        ...state,
        // TODO: split this result
        linearityResult: action.linearityResults,
        composedChartData: [
          { index: 10000, red: 1643, blue: 790 },
          { index: 1666, red: 182, blue: 42 },
          { index: 625, red: 56, blue: 11 },
          // Calculation of line of best fit is not included in this demo
          { index: 300, redLine: 0 },
          { index: 10000, redLine: 1522 },
          { index: 600, blueLine: 0 },
          { index: 10000, blueLine: 678 },
        ],
      };
    default:
      return state;
  }
};

export default linearity;