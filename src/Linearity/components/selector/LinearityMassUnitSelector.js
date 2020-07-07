import React from 'react';
import { connect } from 'react-redux'

import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core/';

import { changeMassUnit } from '../../actions';


const LinearityMassUnitSelector = (props) => {
    return (
        <FormControl style={{ margin: "10px", width: "100px" }} variant="outlined">
            <InputLabel shrink={true} id="demo-simple-select-outlined-label">Mass</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={props.massUnit}
                label="Mass"
                onChange={(e) => handleUnitChange(e, props)}
            >
                <MenuItem value={1}>g</MenuItem>
                <MenuItem value={1e-3}>mg</MenuItem>
                <MenuItem value={1e-6}>&mu;g</MenuItem>
                <MenuItem value={1e-9}>ng</MenuItem>
            </Select>
        </FormControl>
    );
};

const handleUnitChange = (event, props) => { props.updateUnitChange(event.target.value) }


const mapStateToProps = (state) => {
    return {
        massUnit: state.samples.massUnit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUnitChange: (changedMassUnit) => {
            dispatch(changeMassUnit(changedMassUnit));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinearityMassUnitSelector)