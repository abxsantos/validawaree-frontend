// action types
export const INC_ROW = 'INC_ROW';
export const INC_COLUMN = 'INC_COLUMN';
export const UPD_SAMPLE_VALUE = 'UPD_SAMPLE_VALUE';
export const UPD_LINEARITY_RESULT = 'UPD_LINEARITY_RESULT';

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

export function updateLinearityResults(jsonLinearityResultData) {
  return {
    type: UPD_LINEARITY_RESULT,
    linearityResults: jsonLinearityResultData
  }
};

// This is possible beacuse we are using Redux-Thunk
export function getLinearityResults() {
  const jsonInputLinearityData = {
    analytical_data:
      "[[0.188, 0.192, 0.203], [0.349, 0.346, 0.348], [0.489, 0.482, 0.492], [0.637, 0.641, 0.641], [0.762, 0.768, 0.786], [0.931, 0.924, 0.925]]",
    concentration_data:
      "[[0.008, 0.008016, 0.008128], [0.016, 0.016032, 0.016256], [0.02, 0.02004, 0.02032],[0.027999996640000406, 0.028055996633280407, 0.02844799658624041], [0.032, 0.032064, 0.032512], [0.04, 0.04008, 0.04064]]",
  };

  return dispatch => {
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