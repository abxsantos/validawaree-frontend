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
  CHANGE_VOLUME,
  CHANGE_ROWS,
  CHANGE_COLUMNS,
  CHANGE_MASS,
  CHANGE_DILUTION_FACTOR,
  CHANGE_ANALYTICAL_VALUE,
} from "../actions";

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
} from "./ReducersLinearityInputAuxiliarFunctions";

const initialState = {
  numRows: "1",
  numColumns: "3",
  volume: "",
  volumeUnit: 1e-3,
  massUnit: 1e-3,
  mass: ["", "", ""],
  analyticalData: [["", "", ""]],
  dilutionFactor: [""],
  concentrations: [["", "", ""]],
  initialConcentrations: ["", "", ""],
  averages: [""],
  stdDeviations: [""],
};

const createAndFillListWithUndefined = (list, numberOfUndefined) => {
  list = [];
  list = new Array(numberOfUndefined).fill(undefined, 0, numberOfUndefined);
  return list;
};

const changeAnalyticalStateSize = (
  rows,
  columns,
  analyticalData,
  concentrations
) => {
  concentrations = [];
  analyticalData = [];
  for (let row = 0; row < rows; ++row) {
    concentrations.push(
      createAndFillListWithUndefined(concentrations, columns)
    );
    analyticalData.push(
      createAndFillListWithUndefined(analyticalData, columns)
    );
  }
  return {
    concentrations: concentrations,
    analyticalData: analyticalData,
  };
};

const changeColumnOnlyDependantItems = (
  columns,
  mass,
  initialConcentrations
) => {
  return {
    mass: createAndFillListWithUndefined(mass, columns),
    initialConcentrations: createAndFillListWithUndefined(
      initialConcentrations,
      columns
    ),
  };
};

const changeRowOnlyDependantItems = (
  rows,
  dilutionFactor,
  averages,
  stdDeviations
) => {
  return {
    dilutionFactor: createAndFillListWithUndefined(dilutionFactor, rows),
    averages: createAndFillListWithUndefined(averages, rows),
    stdDeviations: createAndFillListWithUndefined(stdDeviations, rows),
  };
};

function changeMassStateValue(action, state) {
  let mass = [...state.mass];
  mass[action.column] = action.updatedMass;
  return { mass: mass };
}

function changeDilutionFactorStateValue(action, state) {
  let dilutionFactor = [...state.dilutionFactor];
  dilutionFactor[action.row] = action.updatedDilutionFactor;
  return { dilutionFactor: dilutionFactor };
}

function changeAnalyticalDataStateValue(action, state) {
  let analyticalData = [...state.analyticalData];
  analyticalData[action.row][action.column] = action.updatedAnalyticalValue;
  let concentrations = [...state.concentrations];
  concentrations[action.row][action.column] =
    parseFloat(state.mass[action.column]) /
    parseFloat(state.volume) /
    parseFloat(state.dilutionFactor[action.row]);
  return { analyticalData: analyticalData, concentrations: concentrations};
}

const samples = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VOLUME:
      return {
        ...state,
        volume: action.updatedVolume,
      };
    case CHANGE_ROWS:
      return {
        ...state,
        numRows: action.updatedRows,
        ...changeAnalyticalStateSize(
          parseInt(action.updatedRows),
          parseInt(state.numColumns),
          state.analyticalData,
          state.concentrations
        ),
        ...changeRowOnlyDependantItems(
          parseInt(action.updatedRows),
          state.dilutionFactor,
          state.averages,
          state.stdDeviations
        ),
      };
    case CHANGE_COLUMNS:
      return {
        ...state,
        numColumns: action.updatedColumns,
        ...changeAnalyticalStateSize(
          parseInt(state.numRows),
          parseInt(action.updatedColumns),
          state.analyticalData,
          state.concentrations
        ),
        ...changeColumnOnlyDependantItems(
          parseInt(action.updatedColumns),
          state.mass,
          state.initialConcentrations
        ),
      };
    case CHANGE_MASS:
      return {
        ...state,
        ...changeMassStateValue(action, state),
      };
    case CHANGE_DILUTION_FACTOR:
      return {
        ...state,
        ...changeDilutionFactorStateValue(action, state),
      };
    case CHANGE_ANALYTICAL_VALUE:
      return {
        ...state,
        ...changeAnalyticalDataStateValue(action, state),
      };
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
