import React from 'react';
import { connect } from 'react-redux'

import { Button, Tooltip } from '@material-ui/core';

import { removeColumn } from '../../actions'

const RemoveColumnButton = ({ removeColumn }) => {
    return (
        <Tooltip
            title='Remove last column'
            placement='right'
            arrow
            disableFocusListener
            disableTouchListener
        >
            <Button style={{ color: '#EB5757', borderColor: '#EB5757' }} variant="outlined" onClick={removeColumn} >Remove Column</Button>
        </Tooltip>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        removeColumn: () => { dispatch(removeColumn()) }
    }
}

export default connect(null, mapDispatchToProps)(RemoveColumnButton);
