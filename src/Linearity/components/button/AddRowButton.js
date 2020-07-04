import React from 'react';
import { connect } from 'react-redux'

import { IconButton, Tooltip } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

import { incRow } from '../../actions'

const AddRowButton = ({incRow}) => {
  return (
    <Tooltip
    title='Add row'
    placement='bottom'
    arrow
    disableFocusListener
    disableTouchListener
  >
    <IconButton onClick={incRow}>
      <AddBoxIcon></AddBoxIcon>
    </IconButton>
  </Tooltip>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    incRow: () => {dispatch(incRow())}
  }
}

export default connect(null, mapDispatchToProps)(AddRowButton);
