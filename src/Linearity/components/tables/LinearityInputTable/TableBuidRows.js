import React from 'react';

import {
    Tooltip,
    TableCell,
    TableRow,
    TextField,
} from '@material-ui/core';

export const buildRows = (props) => {
    
    let rowItems = [];
    for (let i = 0; i < props.rows; ++i) {
        let items = [];
        items.push(
            <TableCell key={`dilutionFactor-${i}`} align='center' padding='none' size="small">
                <Tooltip
                    title='Initial volume divided by Final Volume'
                    placement='bottom'
                    arrow
                    disableFocusListener
                    disableTouchListener
                >
                    <TextField
                        InputProps={{ classes }}
                        label='Dilution factor'
                        size='small'
                        id='dilution-factor-text-field'
                        defaultValue={undefined}
                        helperText=' '
                        value={props.dilutionFactor[i]}
                        onChange={(e) => handleChangeDilutionFactor(e, i, props)}
                    />
                </Tooltip>
            </TableCell>
        );
        for (let j = 0; j < props.columns; ++j) {
            items.push(
                <TableCell key={`sample-${i}${j}`} align='center' padding='none' size="small">
                    <TextField
                        label={`Analytical signal`}
                        id='sample-text-field'
                        size='small'
                        defaultValue={undefined}
                        helperText={`Concentration: ${props.concentrations[i][j]}`}
                        value={props.analyticalData[i][j]}
                        onChange={(e) => handleChange(e, i, j, props)}
                    />
                </TableCell>
            );
        }
        items.push(
            <TableCell key={`avg-${i}`} align='center' padding='none' size="small">
                {props.averages[i]}
            </TableCell>
        );
        items.push(
            <TableCell key={`stddev-${i}`} align='center' padding='none' size="small">
                {props.stdDeviations[i]}
            </TableCell>
        );
        rowItems.push(<TableRow key={`row-${i}`}>{items}</TableRow>);
    }
    return rowItems;
}

function handleChange(event, row, column, props) {
    props.updateSampleValue(event.target.value, row, column);
}

function handleChangeDilutionFactor(event, row, props) {
    props.updateDilutionFactorValue(event.target.value, row);
}