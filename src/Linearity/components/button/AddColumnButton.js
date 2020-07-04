import React from 'react';
import { connect } from 'react-redux';

import { IconButton, Tooltip } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

import { incColumn } from '../../actions';

const AddColumnButton = ({ incColumn }) => {
  return (
    <Tooltip
      title='Add column'
      placement='right'
      arrow
      disableFocusListener
      disableTouchListener
    >
      <IconButton size='medium' onClick={incColumn}>
        <AddBoxIcon style={{color: '#bce784', fontSize: 40}}></AddBoxIcon>
      </IconButton>
    </Tooltip>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    incColumn: () => {
      dispatch(incColumn());
    },
  };
};

export default connect(null, mapDispatchToProps)(AddColumnButton);
