import React from 'react';
import { connect } from 'react-redux'

import { Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { removeRow } from '../../actions'

const RemoveRowButton = ({ removeRow }) => {
    return (
        <Button variant='neutral' onClick={removeRow}>
        <FontAwesomeIcon icon={faTrash} className='rainbow-m-right_small' />
        Remove Column
      </Button>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        removeRow: () => { dispatch(removeRow()) }
    }
}

export default connect(null, mapDispatchToProps)(RemoveRowButton);
