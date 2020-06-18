// action types
export const INC_NUMBER = 'INC_NUMBER'
export const DEC_NUMBER = 'DEC_NUMBER'
export const ADD_COLUMN = 'ADD_COLUMN'
export const DEL_COLUMN = 'DEL_COLUMN'

export let row = 6 
export let column = 4


// action creators
export const incNumber = () => ({
  type: 'INC_NUMBER',
  number: ++row,
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
