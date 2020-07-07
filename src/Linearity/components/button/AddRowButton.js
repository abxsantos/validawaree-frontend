import React from 'react';
import { connect } from 'react-redux'

import {BaseButton} from './BaseButton'


import { incRow } from '../../actions'

const AddRowButton = ({ incRow }) => {
    return (
        <BaseButton
        id='button-add-row'
        tooltipText='Add row'
        color='#219653'
        onClickAction={incRow}
        buttonText='Add Row'
        />
    );
}

const mapDispatchToProps = dispatch => {
    return {
        incRow: () => { dispatch(incRow()) }
    }
}

export default connect(null, mapDispatchToProps)(AddRowButton);
