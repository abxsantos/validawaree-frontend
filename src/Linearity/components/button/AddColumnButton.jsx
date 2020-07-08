import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { incColumn } from '../../actions';

const AddColumnButton = ({ incColumn }) => {
    return (
        <Button variant='neutral' style={{background: '#01b6f5', color: 'white'}} onClick={incColumn}>
        <FontAwesomeIcon icon={faPlus} className='rainbow-m-right_small' />
        Add Column
      </Button>
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
