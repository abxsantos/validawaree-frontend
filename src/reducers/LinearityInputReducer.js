import {
  INC_ROW,
  INC_COLUMN,
  UPD_SAMPLE_VALUE,
  UPD_CONCENTRATION_VALUE,
  UPD_VOLUME_VALUE,
  UPD_MASS_VALUE,
  UPD_DILUTION_FACTOR_VALUE,
} from '../actions';

const initialState = {
  numRows: 1,
  numColumns: 3,
  volume: undefined,
  mass: [],
  data: [[undefined, undefined, undefined]],
  dilutionFactor: [],
  concentration: [[undefined, undefined, undefined]],

  concentrations: [[undefined, undefined, undefined]], // excluir
  initialConcentration: [undefined, undefined, undefined], // ci = mass/volume
  averages: [undefined],
  stdDeviations: [undefined],
};

const addRow = (columns, data) => {
  data.push(new Array(columns).fill(undefined));
  return data;
};

const addColumn = (rows, columns, data) => {
  for (let i = 0; i < rows; ++i) {
    data[i].splice(columns, undefined, undefined);
  }
  return data;
};

const updateVolumeValue = (action, state) => {
  let volume = state.volume;
  volume = action.updatedVolumeValue.replace(',', '.');

  let initialConcentration = [...state.mass].map(function (value) {
    return value / volume;
  });

  let concentration = [...state.concentration];

  for (let i = 0; i < state.dilutionFactor.length; ++i) {
    for (let j = 0; j < state.initialConcentration.length; ++j) {
      concentration[i][j] =
        state.initialConcentration[j] / state.dilutionFactor[i];
    };
  };

  return { volume: volume, initialConcentration: initialConcentration, concentration: concentration};
};

const updateMassValue = (action, state) => {
  let mass = [...state.mass];
  mass[action.column] = action.updatedMassValue.replace(',', '.');

  let initialConcentration = [...state.initialConcentration];
  initialConcentration[action.column] = mass[action.column] / state.volume;

  let concentration = [...state.concentration]

  for (let i = 0; i < state.dilutionFactor.length; ++i){
      concentration[i][action.column] = state.initialConcentration[action.column]/state.dilutionFactor[i]
  };
  return { mass: mass, initialConcentration: initialConcentration, concentration: concentration };
};

// https://dev.to/sagar/three-dots---in-javascript-26ci
const updateValues = (action, state) => {
  let data = [...state.data];
  data[action.row][action.column] = action.updatedValue.replace(',', '.');

  let averages = [...state.averages];
  averages[action.row] = data[action.row].reduce(
    (a, b) => parseFloat(a) + parseFloat(b)
  );
  averages[action.row] /= data[action.row].length;

  let stdDeviations = [...state.stdDeviations];
  stdDeviations[action.row] = Math.sqrt(
    data[action.row]
      .map((value) => Math.pow(parseFloat(value) - averages[action.row], 2))
      .reduce((a, b) => a + b) /
      (data[action.row].length - 1)
  );

  return { data: data, averages: averages, stdDeviations: stdDeviations };
};

const updateDilutionFactorValue = (action, state) => {
  let dilutionFactor = [...state.dilutionFactor];
  dilutionFactor[action.row] = action.updatedValue.replace(',', '.');

  let concentration = [...state.concentration];
  concentration[action.row] = [...state.initialConcentration].map(function (value) {
    return value / dilutionFactor[action.row];
  });
  return { dilutionFactor: dilutionFactor, concentration: concentration };
};

const samples = (state = initialState, action) => {
  switch (action.type) {
    case INC_ROW:
      return {
        ...state,
        numRows: state.numRows + 1,
        data: addRow(state.numColumns, state.data),
        concentrations: state.concentrations.concat(undefined),
        averages: state.averages.concat(undefined),
        stdDeviations: state.stdDeviations.concat(undefined),
      };
    case INC_COLUMN:
      return {
        ...state,
        numColumns: state.numColumns + 1,
        data: addColumn(state.numRows, state.numColumns + 1, state.data),
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
