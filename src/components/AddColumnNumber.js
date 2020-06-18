import React from 'react';
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';

import { addColumn } from '../actions'

const AddColumn = ({column_number, addColumn}) => {
  return (
    <div>
      <Button variant="contained" onClick={addColumn}>Add Column</Button>
      Columns: {column_number}
    </div>
  );
}


const mapStateToProps = state => ({
  column_number: state.change_column_number.column_number
})

const mapDispatchToProps = dispatch => {
  return {
    addColumn: () => {dispatch(addColumn())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddColumn);
