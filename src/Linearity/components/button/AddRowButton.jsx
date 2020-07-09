import React from 'react';
import { connect } from 'react-redux';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import {BaseButton} from './BaseButton';
import { incRow } from '../../actions';

const AddRowButton = ({ incRow }) => {
  return (
    <BaseButton 
    tooltipText='Add Row'
    value='border-filled'
    icon={faPlus}
    onClickAction={incRow}
    buttonText='Add Row'
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    incRow: () => {
      dispatch(incRow());
    },
  };
};

export default connect(null, mapDispatchToProps)(AddRowButton);
