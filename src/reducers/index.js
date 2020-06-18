import { combineReducers } from 'redux'
import { row, column, ADD_COLUMN, DEL_COLUMN, INC_NUMBER , DEC_NUMBER } from "../actions";

// This is the initial value
const initialState = {
  number: row,
  column_number: column,
}
// this will go into the action/index.js and change the 
// initial value for the 'number' value in the correspondant type
const change_row_number = (state = initialState, action) => {
  switch (action.type) {
    case INC_NUMBER:
      return {...state, number: action.number};
    case DEC_NUMBER:
      return {...state, number: action.number};
    
    default:
      return state;
  }
}

const change_column_number = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return {...state, column_number: action.column_number};
    case DEL_COLUMN:
      return {...state, column_number: action.column_number};
    
    default:
      return state;
  }
}

export default combineReducers({
  change_row_number, change_column_number
})