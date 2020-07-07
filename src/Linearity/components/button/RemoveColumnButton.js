import React from 'react';
import { connect } from 'react-redux'

import { Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { removeColumn } from '../../actions'

const RemoveColumnButton = ({ removeColumn }) => {
    return (
        <Button style={{}} variant='neutral' onClick={removeColumn}>
        <FontAwesomeIcon icon={faTrash} className='rainbow-m-right_small' />
        Remove Column
      </Button>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        removeColumn: () => { dispatch(removeColumn()) }
    }
}

export default connect(null, mapDispatchToProps)(RemoveColumnButton);
