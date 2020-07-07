import React from 'react';

import { TableCell, TextField, makeStyles, Tooltip,} from '@material-ui/core';

const useStyles = makeStyles({
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    },
});

export const BaseInputTableCell = ({ tooltipText='', helperText='', label, value, onChangeAction }) => {
    const classes = useStyles();
    return (
        <TableCell align='center' padding='dense' size="small">
            <Tooltip
                title={tooltipText}
                placement='bottom'
                arrow
                disableFocusListener
                disableTouchListener
            >
                <TextField
                    InputProps={{ classes }}
                    size='small'
                    helperText={helperText}
                    label={label}
                    value={value}
                    onChange={onChangeAction}
                />
            </Tooltip>
        </TableCell>
    );
}
