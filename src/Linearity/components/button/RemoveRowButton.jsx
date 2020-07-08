import React from 'react';
import { connect } from 'react-redux'

import { faTrash } from '@fortawesome/free-solid-svg-icons';

import {BaseButton} from './BaseButton';
import { removeRow } from '../../actions'

const RemoveRowButton = ({ removeRow }) => {
    return (
        <BaseButton 
        tooltipText='Remove the last row'
        icon={faTrash}
        onClickAction={removeRow}
        buttonText='Remove Row'
        />
    );
}

const mapDispatchToProps = dispatch => {
    return {
        removeRow: () => { dispatch(removeRow()) }
    }
}

export default connect(null, mapDispatchToProps)(RemoveRowButton);
