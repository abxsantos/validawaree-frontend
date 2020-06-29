import { UPD_LINEARITY_RESULT } from "../actions";

const initialState = {
  linearityResult: {},
};

const linearity = (state = initialState, action) => {
  
  switch (action.type) {
    case UPD_LINEARITY_RESULT:
      debugger
      return {
        ...state,
        linearityResult: Object.assign(state.linearityResult, action.linearityResult)// action.linearityResult,
      };
    default:
      return state;
  }
};

export default linearity;