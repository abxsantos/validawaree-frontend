// action types
export const INC_NUMBER = 'INC_NUMBER'
export const DEC_NUMBER = 'DEC_NUMBER'
export const ADD_COLUMN = 'ADD_COLUMN'
export const DEL_COLUMN = 'DEL_COLUMN'

export let row = 6 
export let column = 4
export let rows = [['Frozen yoghurt', 159, 6.0, 24, 4.0],['Ice cream sandwich', 237, 9.0, 37, 4.3], ['Eclair', 262, 16.0, 24, 6.0]]


function addRowData(row_values) {
  rows.push(row_values);
  return [...rows];
}

// action creators

// To create a column you need to add 0 based on the numbers of rows
// The column should be added in the [-2]exit
export const incNumber = () => ({
  type: 'INC_NUMBER',
  number: ++row,
  row_data: addRowData(['Gingerdserfretertbread', 1, 2.0, 3, 4.5]),
})

export const decNumber = () => ({
  type: 'DEC_NUMBER',
  number: row === 0 ? 0 : --row,
})

// action creators
export const addColumn = () => ({
  type: 'ADD_COLUMN',
  column_number: ++column,
})

export const delColumn = () => ({
  type: 'DEL_COLUMN',
  column_number: column === 0 ? 0 : --column,
})
