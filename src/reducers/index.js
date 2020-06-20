import { combineReducers } from "redux";
import { INC_ROW, INC_COLUMN } from "../actions";

const initialState = {
  numRows: 1,
  numColumns: 3,
  data: [[0, 0, 0, 0, 0, 0]],
};

const addRow = (columns, data) => {
  data.push(new Array(columns + 3).fill(0));
  return data;
}

const addColumn = (rows, columns, data) => {
  debugger
  for (let i = 0; i < rows; ++i) {
    data[i].splice(columns, 0, 0);
  }
  return data;
}

const samples = (state = initialState, action) => {
  switch (action.type) {
    case INC_ROW:  
      return {
        ...state,
        numRows: state.numRows + 1,
        data: addRow(state.numColumns, [...state.data]),
      }
    case INC_COLUMN:
      return { 
        ...state,
        numColumns: state.numColumns + 1,
        data: addColumn(state.numRows, state.numColumns + 1, [...state.data]),
      };
    default:
      return state;
  }
};

export default combineReducers({
  samples,
});
