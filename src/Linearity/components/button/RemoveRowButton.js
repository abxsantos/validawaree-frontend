import React from 'react';
import { connect } from 'react-redux'

import { Button, Tooltip } from '@material-ui/core';

import { removeRow } from '../../actions'

const RemoveRowButton = ({ removeRow }) => {
    return (
        <Tooltip
            title='Remove last row'
            placement='bottom'
            arrow
            disableFocusListener
            disableTouchListener
        >
            <Button style={{ color: '#EB5757', borderColor: '#EB5757' }} variant="outlined" onClick={removeRow} >Remove Row</Button>
        </Tooltip>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        removeRow: () => { dispatch(removeRow()) }
    }
}

export default connect(null, mapDispatchToProps)(RemoveRowButton);
