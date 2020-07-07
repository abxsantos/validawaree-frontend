import { connect } from 'react-redux';
import React from 'react';

import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
} from '@material-ui/core';

import {
    updateSampleValue,
    updateDilutionFactorValue,
    updateVolumeValue,
    updateMassValue,
} from '../../../actions';

import {buildColumns} from './TableBuildColumns'
import {buildRows} from './TableBuidRows'


const useStyles = makeStyles({
    root: {},
    table: {
        minWidth: 450,
        maxWidth: 850,
    },
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    },
});

function LinearitySampleInputTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell align='center' padding='dense' size="small">Volume</TableCell>
                        {buildColumns(props.columns, 'Mass')}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={'volume'}>
                        <TableCell align='center' padding='dense' size="small">
                            <TextField
                                InputProps={{ classes }}
                                size='small'
                                helperText=' '
                                label='Volume'
                                value={props.volume}
                                onChange={(e) => handleVolumeChange(e, props)}
                            />
                        </TableCell>
                        {buildColumns(props.columns, 'Mass', false, props)}
                    </TableRow>
                </TableBody>
                <TableHead>
                    <TableRow>
                        <TableCell align='center' padding='dense' size="small">Dilution Factor</TableCell>
                        {buildColumns(props.columns, 'Sample')}
                        <TableCell align='center' padding='dense' size="small">Average</TableCell>
                        <TableCell align='center' padding='dense' size="small">Standard Deviation</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{buildRows(props)}</TableBody>
            </Table>
        </TableContainer>
    );
}

function handleVolumeChange(event, props) {
    props.updateVolumeValue(event.target.value);
}

const mapStateToProps = (state) => ({
    rows: state.samples.numRows,
    columns: state.samples.numColumns,

    analyticalData: state.samples.analyticalData,

    dilutionFactor: state.samples.dilutionFactor,

    concentrations: state.samples.concentrations,
    initialConcentrations: state.samples.initialConcentrations,

    mass: state.samples.mass,
    volume: state.samples.volume,

    averages: state.samples.averages,
    stdDeviations: state.samples.stdDeviations,
});

const mapDispatchToProps = (dispatch) => {
    return {
        updateVolumeValue: (updatedValue) => {
            dispatch(updateVolumeValue(updatedValue));
        },
        updateMassValue: (updatedValue, column) => {
            dispatch(updateMassValue(updatedValue, column));
        },
        updateSampleValue: (updatedValue, row, column) => {
            dispatch(updateSampleValue(updatedValue, row, column));
        },
        updateDilutionFactorValue: (updatedValue, row) => {
            dispatch(updateDilutionFactorValue(updatedValue, row));
        },
    };
};



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LinearitySampleInputTable);
