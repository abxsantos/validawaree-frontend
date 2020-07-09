import React from 'react';
import { connect } from 'react-redux';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { BaseButton } from './BaseButton';
import { removeColumn } from '../../actions';

const RemoveColumnButton = ({ removeColumn }) => {
  return (
    <BaseButton
      tooltipText='Remove the last column'
      icon={faTrash}
      onClickAction={removeColumn}
      buttonText='Remove Column'
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeColumn: () => {
      dispatch(removeColumn());
    },
  };
};

export default connect(null, mapDispatchToProps)(RemoveColumnButton);
