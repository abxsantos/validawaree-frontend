// action types
export const INC_NUMBER = 'INC_NUMBER'
export const DEC_NUMBER = 'DEC_NUMBER'
export const ADD_COLUMN = 'ADD_COLUMN'
export const DEL_COLUMN = 'DEL_COLUMN'

export let row = 6 
export let column = 4
export let rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function addData(name, calories, fat, carbs, protein) {
  rows.push(createData(name, calories, fat, carbs, protein));
  return [...rows];
}

// action creators

// To create a column you need to add 0 based on the numbers of rows
// The column should be added in the [-2]
export const incNumber = () => ({
  type: 'INC_NUMBER',
  number: ++row,
  row_data: addData('Gingerdserfretertbread', 1, 2.0, 3, 4.5),
  // table_data: buildNewRows()
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
