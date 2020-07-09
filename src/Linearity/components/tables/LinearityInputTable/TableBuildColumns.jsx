import React from 'react';

import {
    TableCell,
} from '@material-ui/core';

import { BaseInputTableCell } from './BaseInputTableCell'

export const buildColumns = (columns, dataType, isHeader = true, props) => {
    let items = [];
    for (let i = 1; i <= columns; ++i) {
        isHeader
            ? items.push(
                <TableCell style={{
                    fontWeight: 600,
                    fontSize: 16,
                    background: '#1c2541',
                    color: 'white',
                    textSizeAdjust: 'auto',
                  }}
                  variant='head'
                  align='center'
                  padding='dense'
                  size='small'
                >
                    {dataType} {i}
                </TableCell>
            )
            : items.push(
                <BaseInputTableCell
                    tooltipText={props.initialConcentrations[i - 1] === undefined ? '' : `Concentration: ${props.initialConcentrations[i - 1]}`}
                    label='Mass'
                    value={props.mass[i - 1]}
                    onChangeAction={(e) => handleMassChange(e, i - 1, props)}
                />
            );
    }
    return items;
}

function handleMassChange(event, column, props) {
    props.updateMassValue(event.target.value, column);
}