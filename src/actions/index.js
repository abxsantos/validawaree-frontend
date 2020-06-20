// action types
export const INC_ROW = 'INC_ROW';
export const INC_COLUMN = 'INC_COLUMN';

// action creators
export const incRow = () => ({
  type: INC_ROW
});

export const incColumn = () => ({
  type: INC_COLUMN
});