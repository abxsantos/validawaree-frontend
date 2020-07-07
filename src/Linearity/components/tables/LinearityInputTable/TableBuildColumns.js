import React from 'react';

import {
    TableCell,
    TextField,
} from '@material-ui/core';

export const buildColumns = (columns, dataType, isHeader = true, props) => {
    let items = [];
    for (let i = 1; i <= columns; ++i) {
        isHeader
            ? items.push(
                <TableCell key={`head-${dataType}-${i}`} align='center' padding='default' size="normal">
                    {dataType} #{i}
                </TableCell>
            )
            : items.push(
                <TableCell key={`mass-${i}`} align='center' padding='none' size="small">
                    <TextField
                        label='Mass'
                        size='small'
                        helperText={`Concentration: ${
                            props.initialConcentrations[i - 1]
                            }`}
                        value={props.mass[i - 1]}
                        onChange={(e) => handleMassChange(e, i - 1, props)}
                    />
                </TableCell>
            );
    }
    return items;
}

function handleMassChange(event, column, props) {
    props.updateMassValue(event.target.value, column);
}