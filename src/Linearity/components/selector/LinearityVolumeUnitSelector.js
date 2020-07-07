import React from 'react';
import { connect } from 'react-redux'

import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core/';

import { changeVolumeUnit } from '../../actions';


const LinearityUnitSelector = (props) => {
    return (
        <FormControl  variant="outlined">
            <InputLabel id="form-input-text-volume">Volume</InputLabel>
            <Select
                style={{width: 75}}
                labelId="select-outlined-label-text-volume"
                id="simple-select-text-volume"
                value={props.volumeUnit}
                label="Volume"
                onChange={(e) => handleUnitChange(e, props)}
            >
                <MenuItem value={1}>L</MenuItem>
                <MenuItem value={1e-3}>mL</MenuItem>
                <MenuItem value={1e-6}>&mu;L</MenuItem>
                <MenuItem value={1e-9}>nL</MenuItem>
            </Select>
        </FormControl>
    );
};

const handleUnitChange = (event, props) => { props.updateUnitChange(event.target.value) }


const mapStateToProps = (state) => {
    return {
        volumeUnit: state.samples.volumeUnit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUnitChange: (changedVolumeUnit) => {
            dispatch(changeVolumeUnit(changedVolumeUnit));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinearityUnitSelector)