import React from 'react';
import { connect } from 'react-redux';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import {BaseButton} from './BaseButton';
import { incColumn } from '../../actions';

const AddColumnButton = ({ incColumn }) => {
    return (
        <BaseButton
        tooltipText='Add column'
        value='border-filled'
        icon={faPlus}
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
