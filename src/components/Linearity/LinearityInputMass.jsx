import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Fade from "react-reveal";

import LinearityMassUnitSelector from "./components/selector/LinearityMassUnitSelector";
import { changeMass } from "./actions";

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    maxHeight: 300,
    margin: "30px"
  },
});

function LinearityInputMass(props) {
  const classes = useStyles();

  return (
    <>
      <h2>Linearity Inputs</h2>
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
              <TableContainer className={classes.table} component={Paper}>
                <Table aria-label="simple table">
                  <TableRow>
                    <TableCell>Mass </TableCell>
                    {buildMassColumns(props)}
                  </TableRow>
                </Table>
              </TableContainer>
              <LinearityMassUnitSelector />
            </Grid>
          </>
        </Grid>
      </Fade>
    </>
  );
}

function buildMassColumns(props) {
  let tableCells = [];
  for (let i = 0; i < props.numColumns; ++i) {
    tableCells.push(
      <TableCell align="right">
        <TextField
          InputProps={{
            style: { fontSize: "16px" },
          }}
          InputLabelProps={{
            variant: "filled",
            style: { fontSize: "12px" },
          }}
          type="number"
          size="normal"
          label={`Sample ${i+1}`}
          value={props.mass[i]}
          onChange={(e) => handleMassChange(e, i, props)}
        />
      </TableCell>
    );
  }
  return tableCells;
}

const mapStateToProps = (state) => ({
  mass: state.samples.mass,
  numColumns: state.samples.numColumns,
});

function handleMassChange(event, column, props) {
  props.updateMassValue(event.target.value, column);
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMassValue: (updatedValue, column) => {
      dispatch(changeMass(updatedValue, column));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LinearityInputMass);
