import React from 'react';

import { Tooltip } from '@material-ui/core';


import { Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BaseButton = ({tooltipText, baseColor='', textColor='', onClickAction, buttonText, icon}) => {
        return (
        <Tooltip
            title={tooltipText}
            placement='bottom'
            arrow
            disableFocusListener
            disableTouchListener
        >
            <Button 
                variant='neutral'
                id='base-button-edit-table'
                style={{ color: textColor, background: baseColor }} 
                onClick={onClickAction} >
                <FontAwesomeIcon icon={icon} className='rainbow-m-right_small' />
                {buttonText}
            </Button>
        </Tooltip>
        );
}