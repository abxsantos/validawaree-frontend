import React from 'react';
import { connect } from 'react-redux'

import { IconButton, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { removeColumn } from '../../actions'

const RemoveColumnButton = ({removeColumn}) => {
  return (
    <Tooltip
    title='Remove last column'
    placement='right'
    arrow
    disableFocusListener
    disableTouchListener
  >
    <IconButton onClick={removeColumn}>
      <DeleteIcon style={{color: '#ff6b6b'}}></DeleteIcon>
    </IconButton>
  </Tooltip>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    removeColumn: () => {dispatch(removeColumn())}
  }
}

export default connect(null, mapDispatchToProps)(RemoveColumnButton);
