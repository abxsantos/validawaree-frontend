import React from 'react';
import { connect } from 'react-redux';

import { Button, Tooltip } from '@material-ui/core';

import { incColumn } from '../../actions';

const AddColumnButton = ({ incColumn }) => {
    return (
        <Tooltip
            title='Add column'
            placement='right'
            arrow
            disableFocusListener
            disableTouchListener
        >
            <Button style={{ color: '#219653', borderColor: '#219653'}} variant="outlined" onClick={incColumn} >Add Column</Button>
        </Tooltip>
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
