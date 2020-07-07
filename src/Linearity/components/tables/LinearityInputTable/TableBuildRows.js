import React from 'react';
import '../../../style.css';


import {
    TableCell,
    TableRow,
} from '@material-ui/core';
import { BaseInputTableCell } from './BaseInputTableCell'

export const buildRows = (props) => {
    
    let rowItems = [];
    for (let i = 0; i < props.rows; ++i) {
        let items = [];
        items.push(
            <BaseInputTableCell
            id='starter-column'
            tooltipText='Initial volume divided by Final Volume'
            label='Dilution factor'
            value={props.dilutionFactor[i]}
            onChangeAction={(e) => handleChangeDilutionFactor(e, i, props)}
            />
        );
        for (let j = 0; j < props.columns; ++j) {
            items.push(
                <BaseInputTableCell
                tooltipText={`Concentration: ${props.concentrations[i][j]}`}
                label='Analytical signal'
                value={props.analyticalData[i][j]}
                onChangeAction={(e) => handleChange(e, i, j, props)}
                />
            );
        }
        items.push(
            <TableCell align='center' padding='dense' size="normal">
                {props.averages[i]}
            </TableCell>
        );
        items.push(
            <TableCell align='center' padding='dense' size="normal">
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