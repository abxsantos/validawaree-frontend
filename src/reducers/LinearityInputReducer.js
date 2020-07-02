import { INC_ROW, INC_COLUMN, UPD_SAMPLE_VALUE, UPD_CONCENTRATION_VALUE } from "../actions";

const initialState = {
  numRows: 1,
  numColumns: 3,
  volume: undefined,
  massData: [undefined, undefined, undefined],
  data: [[undefined, undefined, undefined]],
  concentrations: [undefined],
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

const updateVolumeValues = (action, state) => {
  let volume = [...state.volume];
  volume = (action.updatedVolumeValue).replace(',', '.');
  return { volume: volume };
}



// https://dev.to/sagar/three-dots---in-javascript-26ci
const updateValues = (action, state) => {
  let data = [...state.data];
  data[action.row][action.column] = (action.updatedValue).replace(",", ".");

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

const updateConcentrationValues = (action, state) => {
  let concentrations = [...state.concentrations];
  concentrations[action.row] = (action.updatedValue).replace(",", ".");
  return { concentrations: concentrations };
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
    case UPD_SAMPLE_VALUE:
      return {
        ...state,
        ...updateValues(action, state),
      };
    case UPD_CONCENTRATION_VALUE: 
      return {
        ...state,
        ...updateConcentrationValues(action, state),
      };
    default:
      return state;
  }
};

export default samples;