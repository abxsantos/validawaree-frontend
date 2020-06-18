import React from 'react';
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';

import { delColumn } from '../actions'

const DelColumn = ({column_number, delColumn}) => {
  return (
    <div>
      <Button variant="contained" onClick={delColumn}>Remove Row</Button>
      Column: {column_number}
    </div>
  );
}


const mapStateToProps = state => ({
  column_number: state.change_column_number.column_number
})

const mapDispatchToProps = dispatch => {
  return {
    delColumn: () => {dispatch(delColumn())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DelColumn);
