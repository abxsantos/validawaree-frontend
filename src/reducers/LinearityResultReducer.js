import { UPD_LINEARITY_RESULT } from "../actions";

const initialState = {
  linearityResult: '',
};

const linearity = (state = initialState, action) => {
  switch (action.type) {
    case UPD_LINEARITY_RESULT:
      return {
        ...state,
        // TODO: split this result
        linearityResult: action.linearityResults
      };
    default:
      return state;
  }
};

export default linearity;