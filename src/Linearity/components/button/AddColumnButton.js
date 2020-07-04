import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Tooltip from '@material-ui/core/Tooltip';

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
      <IconButton onClick={incColumn}>
        <AddBoxIcon></AddBoxIcon>
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
