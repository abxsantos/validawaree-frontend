import React from 'react';
import { connect } from 'react-redux';

import {BaseButton} from './BaseButton'

import { incColumn } from '../../actions';

const AddColumnButton = ({ incColumn }) => {
    return (
        <BaseButton
        tooltipText='Add column'
        color='#219653'
        onClickAction={incColumn}
        buttonText='Add Column'
        />
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
