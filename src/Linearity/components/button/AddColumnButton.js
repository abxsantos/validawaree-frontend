import React from 'react';
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';

import { incColumn } from '../../actions'

const AddColumnButton = ({incColumn}) => {
  return (
    <Button variant="contained" onClick={incColumn}>Add Column</Button>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    incColumn: () => {dispatch(incColumn())}
  }
}

export default connect(null, mapDispatchToProps)(AddColumnButton);
