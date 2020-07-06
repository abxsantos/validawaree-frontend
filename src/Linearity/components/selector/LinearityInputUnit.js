import React from 'react';
import { connect } from 'react-redux'

import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core/InputLabel';

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
                <MenuItem value={10}>L</MenuItem>
                <MenuItem value={10}>mL</MenuItem>
                <MenuItem value={20}>&mu;L</MenuItem>
                <MenuItem value={30}>nL</MenuItem>
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

export default connect(null, mapDispatchToProps)(LinearityUnitSelector)