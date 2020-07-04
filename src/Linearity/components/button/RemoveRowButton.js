import React from 'react';
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';

import { removeRow } from '../../actions'

const RemoveRowButton = ({removeRow}) => {
  return (
    <Button variant="contained" onClick={removeRow}>Remove Row</Button>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    removeRow: () => {dispatch(removeRow())}
  }
}

export default connect(null, mapDispatchToProps)(RemoveRowButton);
