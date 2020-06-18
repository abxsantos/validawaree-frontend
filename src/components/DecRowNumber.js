import React from 'react';
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';

import { decNumber } from '../actions'

const DecRow = ({number, decNumber}) => {
  return (
    <div>
      <Button variant="contained" onClick={decNumber}>Remove Row</Button>
      Rows: {number}
    </div>
  );
}


const mapStateToProps = state => ({
  number: state.change_row_number.number
})

const mapDispatchToProps = dispatch => {
  return {
    decNumber: () => {dispatch(decNumber())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecRow);
