import React from 'react';
import { connect } from 'react-redux'

import {BaseButton} from './BaseButton'

import { removeColumn } from '../../actions'

const RemoveColumnButton = ({ removeColumn }) => {
    return (
        <BaseButton
        id='button-remove-column'
        tooltipText='Remove last column'
        color='#EB5757'
        onClickAction={removeColumn}
        buttonText='Remove Column'
        />
    );
}

const mapDispatchToProps = dispatch => {
    return {
        removeColumn: () => { dispatch(removeColumn()) }
    }
}

export default connect(null, mapDispatchToProps)(RemoveColumnButton);
