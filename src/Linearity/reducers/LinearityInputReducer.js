import {
  INC_ROW,
  INC_COLUMN,
  UPD_SAMPLE_VALUE,
  UPD_VOLUME_VALUE,
  UPD_MASS_VALUE,
  UPD_DILUTION_FACTOR_VALUE,
  REMOVE_ROW,
} from '../actions';

const initialState = {
  numRows: 1,
  numColumns: 3,
  volume: undefined,
  mass: [],
  analyticalData: [[undefined, undefined, undefined]],
  dilutionFactor: [],
  concentrations: [[undefined, undefined, undefined]],
  initialConcentrations: [undefined, undefined, undefined], // ci = mass/volume
  averages: [undefined],
  stdDeviations: [undefined],
};

const addRow = (columns, analyticalData, concentrations) => {
  concentrations.push(new Array(columns).fill(undefined));
  analyticalData.push(new Array(columns).fill(undefined));
  console.log(analyticalData);
  console.log(concentrations);
  return { analyticalData, concentrations };
};

const addColumn = (rows, columns, analyticalData) => {
  for (let i = 0; i < rows; ++i) {
    analyticalData[i].splice(columns, undefined, undefined);
  }
  return analyticalData;
};

const removeRow = (
  removedAnalyticalData,
  removedConcentrationData,
  removeDilutionFactorValue,
  removedAverages,
  removedStdDeviations
) => {
  removedAnalyticalData.splice(-1);
  removedConcentrationData.splice(-1);
  removeDilutionFactorValue.splice(-1);
  removedAverages.splice(-1);
  removedStdDeviations.splice(-1);
  console.log(removedAnalyticalData);
  console.log(removedConcentrationData);
  return {
    removedAnalyticalData,
    removedConcentrationData,
    removeDilutionFactorValue,
    removedAverages,
    removedStdDeviations,
  };
};

const updateVolumeValue = (action, state) => {
  let volume = state.volume;
  volume = action.updatedVolumeValue.replace(',', '.');

  let initialConcentrations = [...state.mass].map(function (value) {
    return value / volume;
  });

  let concentrations = [...state.concentrations];

  for (let i = 0; i < state.dilutionFactor.length; ++i) {
    for (let j = 0; j < state.initialConcentrations.length; ++j) {
      concentrations[i][j] =
        state.initialConcentrations[j] / state.dilutionFactor[i];
    }
  }

  return {
    volume: volume,
    initialConcentrations: initialConcentrations,
    concentrations: concentrations,
  };
};

const updateMassValue = (action, state) => {
  let mass = [...state.mass];
  mass[action.column] = action.updatedMassValue.replace(',', '.');

  let initialConcentrations = [...state.initialConcentrations];
  initialConcentrations[action.column] = mass[action.column] / state.volume;

  let concentrations = [...state.concentrations];

  for (let i = 0; i < state.dilutionFactor.length; ++i) {
    concentrations[i][action.column] =
      state.initialConcentrations[action.column] / state.dilutionFactor[i];
  }
  return {
    mass: mass,
    initialConcentrations: initialConcentrations,
    concentrations: concentrations,
  };
};

// https://dev.to/sagar/three-dots---in-javascript-26ci
const updateValues = (action, state) => {
  let analyticalData = [...state.analyticalData];
  analyticalData[action.row][action.column] = action.updatedValue.replace(
    ',',
    '.'
  );

  let averages = [...state.averages];
  averages[action.row] = analyticalData[action.row].reduce(
    (a, b) => parseFloat(a) + parseFloat(b)
  );
  averages[action.row] /= analyticalData[action.row].length;

  let stdDeviations = [...state.stdDeviations];
  stdDeviations[action.row] = Math.sqrt(
    analyticalData[action.row]
      .map((value) => Math.pow(parseFloat(value) - averages[action.row], 2))
      .reduce((a, b) => a + b) /
      (analyticalData[action.row].length - 1)
  );

  return {
    analyticalData: analyticalData,
    averages: averages,
    stdDeviations: stdDeviations,
  };
};

const updateDilutionFactorValue = (action, state) => {
  let dilutionFactor = [...state.dilutionFactor];
  dilutionFactor[action.row] = action.updatedValue.replace(',', '.');

  let concentrations = [...state.concentrations];
  concentrations[action.row] = [...state.initialConcentrations].map(function (
    value
  ) {
    return value / dilutionFactor[action.row];
  });
  return { dilutionFactor: dilutionFactor, concentrations: concentrations };
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
