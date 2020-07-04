import React from 'react';
import { connect } from 'react-redux'

import { IconButton, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { removeRow } from '../../actions'

const RemoveRowButton = ({removeRow}) => {
  return (
    <Tooltip
    title='Remove last row'
    placement='bottom'
    arrow
    disableFocusListener
    disableTouchListener
  >
    <IconButton onClick={removeRow}>
      <DeleteIcon style={{color: '#ff6b6b'}}></DeleteIcon>
    </IconButton>
  </Tooltip>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    removeRow: () => {dispatch(removeRow())}
  }
}

export default connect(null, mapDispatchToProps)(RemoveRowButton);
