import React from 'react';
import { connect } from 'react-redux'

import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core/';

import { changeVolumeUnit } from '../../actions';


const LinearityUnitSelector = () => {
    return (
        <FormControl style={{ margin: "10px", width: "100px" }} variant="outlined">
            <InputLabel shrink={true} id="demo-simple-select-outlined-label">Volume</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value="{Mass}"
                label="Mass"
            >
                <MenuItem value={1}>L</MenuItem>
                <MenuItem value={1e-3}>mL</MenuItem>
                <MenuItem value={1e-6}>&mu;L</MenuItem>
                <MenuItem value={1e-9}>nL</MenuItem>
            </Select>
        </FormControl>
    );
};

const mapStateToProps = (state) =>{
    return{
        volumeUnit: state.samples.volumeUnit
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleUnitChange: () =>{
            dispatch(changeVolumeUnit());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinearityUnitSelector)