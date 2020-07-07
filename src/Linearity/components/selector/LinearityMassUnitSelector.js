import React from 'react';
import { connect } from 'react-redux';

import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  makeStyles,
} from '@material-ui/core/';

import { changeMassUnit } from '../../actions';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
const LinearityMassUnitSelector = (props) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} variant='outlined'>
      <InputLabel id='form-input-text-mass'>Mass</InputLabel>
      <Select
        style={{width: 75}}
        className={classes.inputLabel}
        labelId="select-outlined-label-text-mass"
        id="simple-select-text-mass"
        value={props.massUnit}
        label='Mass'
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

const handleUnitChange = (event, props) => {
  props.updateUnitChange(event.target.value);
};

const mapStateToProps = (state) => {
  return {
    massUnit: state.samples.massUnit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUnitChange: (changedMassUnit) => {
      dispatch(changeMassUnit(changedMassUnit));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinearityMassUnitSelector);
