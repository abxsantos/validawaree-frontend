import React from 'react';
import { connect } from 'react-redux'

import {BaseButton} from './BaseButton'

import { removeRow } from '../../actions'

const RemoveRowButton = ({ removeRow }) => {
    return (
        <BaseButton
        id='button-remove-row'
        tooltipText='Remove last row'
        color='#EB5757'
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
