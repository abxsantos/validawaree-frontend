import React from 'react';
import { connect } from 'react-redux';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import {BaseButton} from './BaseButton';
import { incRow } from '../../actions';

const AddRowButton = ({ incRow }) => {
  return (
    <BaseButton 
    tooltipText='Add Row'
    baseColor= '#01b6f5'
    textColor='white'
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
