import React from 'react';

import { Tooltip } from '@material-ui/core';


import { Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BaseButton = ({tooltipText, baseColor='', textColor='', onClickAction, buttonText, icon, variant="neutral"}) => {
        return (
        <Tooltip
            title={tooltipText}
            placement='bottom'
            arrow
            disableFocusListener
            disableTouchListener
        >
            <Button 
                variant={variant}
                id='base-button-edit-table'
                style={{ color: textColor, background: baseColor }} 
                onClick={onClickAction} >
                <FontAwesomeIcon icon={icon} className='rainbow-m-right_small' />
                {buttonText}
            </Button>
        </Tooltip>
        );
}