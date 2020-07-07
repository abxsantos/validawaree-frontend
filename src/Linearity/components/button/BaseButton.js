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
                style={{ color: color, borderColor: color }}
                variant="outlined" 
                onClick={onClickAction} >
                {buttonText}
            </Button>
        </Tooltip>
        );
}
