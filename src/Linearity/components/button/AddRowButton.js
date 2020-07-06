import React from 'react';
import { connect } from 'react-redux'

import { Button, Tooltip } from '@material-ui/core';

import { incRow } from '../../actions'

const AddRowButton = ({ incRow }) => {
    return (
        <Tooltip
            title='Add row'
            placement='bottom'
            arrow
            disableFocusListener
            disableTouchListener
        >
             <Button style={{ color: '#219653', borderColor: '#219653'}} variant="outlined" onClick={incRow} >Add Row</Button>
        </Tooltip>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        incRow: () => { dispatch(incRow()) }
    }
}

export default connect(null, mapDispatchToProps)(AddRowButton);
