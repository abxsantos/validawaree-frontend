import { combineReducers } from 'redux';
import samples from './LinearityInputReducer';
import linearity from './LinearityResultReducer';

export default combineReducers({
  samples,
  linearity,
});


