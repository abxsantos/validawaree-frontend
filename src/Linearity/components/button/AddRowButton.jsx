import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { incRow } from '../../actions';

const AddRowButton = ({ incRow }) => {
  return (
    <Button style={{background: '#01b6f5', color: 'white'}} variant='neutral' onClick={incRow}>
      <FontAwesomeIcon icon={faPlus} className='rainbow-m-right_small' />
      Add Rows
    </Button>
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
