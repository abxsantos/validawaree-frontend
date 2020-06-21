// action types
export const INC_ROW = 'INC_ROW';
export const INC_COLUMN = 'INC_COLUMN';
export const UPD_SAMPLE_VALUE = 'UPD_SAMPLE_VALUE';

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