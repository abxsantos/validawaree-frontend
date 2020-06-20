import React from 'react';
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';

import { incNumber } from '../../actions'

const IncRow = ({number, incNumber}) => {
  return (
    <div>
      <Button variant="contained" onClick={incNumber}>Add Row</Button>
      Rows: {number}
    </div>
  );
}


const mapStateToProps = state => ({
  number: state.change_row_number.number,
  row_data: state.change_row_number.row_data
})

const mapDispatchToProps = dispatch => {
  return {
    incNumber: () => {dispatch(incNumber())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncRow);
