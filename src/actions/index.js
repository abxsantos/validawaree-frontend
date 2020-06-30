// action types
export const INC_ROW = 'INC_ROW';
export const INC_COLUMN = 'INC_COLUMN';
export const UPD_SAMPLE_VALUE = 'UPD_SAMPLE_VALUE';
export const UPD_LINEARITY_RESULT = 'UPD_LINEARITY_RESULT';
export const UPD_CONCENTRATION_VALUE = 'UPD_CONCENTRATION_VALUE';

// action creators
export const incRow = () => ({
  type: INC_ROW,
});

export const incColumn = () => ({
  type: INC_COLUMN,
});

export function updateSampleValue(updatedValue, row, column) {
  return {
    type: UPD_SAMPLE_VALUE,
    updatedValue: updatedValue,
    row: row,
    column: column,
  }
};

export function updateConcentrationValue(updatedValue, row) {
  return {
    type: UPD_CONCENTRATION_VALUE,
    updatedValue: updatedValue,
    row: row,
  }
};

export function updateLinearityResults(jsonLinearityResultData) {
  return {
    type: UPD_LINEARITY_RESULT,
    linearityResults: jsonLinearityResultData
  }
};

// This is possible beacuse we are using Redux-Thunk
export function getLinearityResults() {
  return (dispatch, getState) => {
    const { samples } = getState();

    let analytical_data = [];
    for (let i = 0; i < samples.numRows; ++i) {
      let row = [];
      for (let j = 0; j < samples.numColumns; ++j) {
        row.push(parseFloat(samples.data[i][j]));
      }
      analytical_data.push(row);
    }

    let concentration_data = [];
    for (let i = 0; i < samples.numRows; ++i) {
      concentration_data.push(new Array(samples.numColumns).fill(parseFloat(samples.concentrations[i])))
    }

    const jsonInputLinearityData = {
      analytical_data: JSON.stringify(analytical_data),
      concentration_data: JSON.stringify(concentration_data),
    };
    debugger

    fetch("/linearity_result", {
      method: "POST",
      cache: "no-cache",
      headers: {
        content_type: "application/json",
      },
      body: JSON.stringify(jsonInputLinearityData),
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResultLinearityData) => {
        dispatch(updateLinearityResults(jsonResultLinearityData));
      });
  }
}