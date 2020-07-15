import React from "react";
import { connect } from 'react-redux';

import { Grid, Typography, TableRow } from "@material-ui/core";
import Fade from "react-reveal";

import LinearityMassUnitSelector from "./components/selector/LinearityMassUnitSelector";
import {
  updateMassValue,
} from './actions';

import { buildColumns } from './components/tables/LinearityInputTable/TableBuildColumns';

function LinearityInputMass(props) {
  return (
    <>
      <Fade left cascade duration={1000} delay={500} distance="30px">
        <Grid
          container
          alignItems="center"
          justify="center"
          alignContents="column"
          spacing={3}
        >
          <>
            <Typography>What are the initial mass of your samples?</Typography>
            <Grid
              container
              alignItems="center"
              justify="center"
              alignContents="row"
            >
              <TableRow key={"input-mass"}>
                {buildColumns(props.columns, "Mass", false, props)}
              </TableRow>
              <LinearityMassUnitSelector />
            </Grid>
          </>
        </Grid>
      </Fade>
    </>
  );
}

const mapStateToProps = (state) => ({
  mass: state.samples.mass,
});


const mapDispatchToProps = (dispatch) => {
  return {
    updateMassValue: (updatedValue, column) => {
      dispatch(updateMassValue(updatedValue, column));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinearityInputMass);
