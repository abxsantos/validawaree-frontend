import {
  INC_ROW,
  INC_COLUMN,
  UPD_SAMPLE_VALUE,
  UPD_VOLUME_VALUE,
  UPD_MASS_VALUE,
  UPD_DILUTION_FACTOR_VALUE,
  REMOVE_ROW,
  REMOVE_COLUMN,
  CHANGE_VOLUME_UNIT,
  CHANGE_MASS_UNIT,
} from '../actions';

import {
  addRow,
  addColumn,
  removeRow,
  removeColumn,
  updateVolumeValue,
  updateMassValue,
  updateValues,
  updateDilutionFactorValue,
  changeVolumeUnit,
  changeMassUnit,
} from './ReducersLinearityInputAuxiliarFunctions';

const initialState = {
  numRows: 5,
  numColumns: 3,
  volume: undefined,
  volumeUnit: 1e-3,
  massUnit: 1e-3,
  mass: [undefined, undefined, undefined],
  analyticalData: [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ],
  dilutionFactor: [],
  concentrations: [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ],
  initialConcentrations: [undefined, undefined, undefined],
  averages: [undefined, undefined, undefined, undefined, undefined],
  stdDeviations: [undefined, undefined, undefined, undefined, undefined],
};

const samples = (state = initialState, action) => {
  switch (action.type) {
    case INC_ROW:
      return {
        ...state,
        numRows: state.numRows + 1,
        ...addRow(state.numColumns, state.analyticalData, state.concentrations),
        dilutionFactor: state.dilutionFactor.concat(undefined),
        averages: state.averages.concat(undefined),
        stdDeviations: state.stdDeviations.concat(undefined),
      };
    case INC_COLUMN:
      return {
        ...state,
        numColumns: state.numColumns + 1,
        analyticalData: addColumn(
          state.numRows,
          state.numColumns + 1,
          state.analyticalData
        ),
      };

    case REMOVE_ROW:
      if (state.numRows > 1) {
        return {
          ...state,
          numRows: state.numRows - 1,
          ...removeRow(
            state.analyticalData,
            state.concentrations,
            state.dilutionFactor,
            state.averages,
            state.stdDeviations
          ),
        };
      } else {
        return state;
      }

    case REMOVE_COLUMN:
      if (state.numColumns > 3) {
        return {
          ...state,
          numColumns: state.numColumns - 1,
          ...removeColumn(
            state.numRows,
            state.analyticalData,
            state.concentrations,
            state.mass,
            state.initialConcentrations
          ),
        };
      } else {
        return state;
      }
    case CHANGE_VOLUME_UNIT:
      return {
        ...state,
        ...changeVolumeUnit(action, state),
      };
    case CHANGE_MASS_UNIT:
      return {
        ...state,
        ...changeMassUnit(action, state),
      };

    case UPD_VOLUME_VALUE:
      return {
        ...state,
        ...updateVolumeValue(action, state),
      };
    case UPD_MASS_VALUE:
      return {
        ...state,
        ...updateMassValue(action, state),
      };
    case UPD_SAMPLE_VALUE:
      return {
        ...state,
        ...updateValues(action, state),
      };
    case UPD_DILUTION_FACTOR_VALUE:
      return {
        ...state,
        ...updateDilutionFactorValue(action, state),
      };
    default:
      return state;
  }
};

export default samples;
