import React from 'react';
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';

import { incRow } from '../../../actions'

const IncRowButton = ({incRow}) => {
  return (
    <Button variant="contained" onClick={incRow}>Add Row</Button>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    incRow: () => {dispatch(incRow())}
  }
}

export default connect(null, mapDispatchToProps)(IncRowButton);
