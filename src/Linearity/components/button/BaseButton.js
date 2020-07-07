import React from 'react';

import { Button, Tooltip } from '@material-ui/core';


export const BaseButton = ({tooltipText, color, onClickAction, buttonText}) => {
        return (
        <Tooltip
            title={tooltipText}
            placement='bottom'
            arrow
            disableFocusListener
            disableTouchListener
        >
            <Button
                id='base-button-edit-table'
                style={{ color: color, borderColor: color , width: '102px'}}
                variant="outlined" 
                onClick={onClickAction} >
                {buttonText}
            </Button>
        </Tooltip>
        );
}
