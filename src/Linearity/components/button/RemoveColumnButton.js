import React from 'react';
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';

import { removeColumn } from '../../actions'

const RemoveColumnButton = ({removeColumn}) => {
  return (
    <Button variant="contained" onClick={removeColumn}>Remove Column</Button>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    removeColumn: () => {dispatch(removeColumn())}
  }
}

export default connect(null, mapDispatchToProps)(RemoveColumnButton);
