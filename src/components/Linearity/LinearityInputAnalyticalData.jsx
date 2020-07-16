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
import CalculateLinearityButton from "./components/button/CalculateLinearityButton";

import {
  changeDilutionFactor,
  changeAnalyticalValue,
} from "./actions";

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
  },
});

function LinearityInputAnalyticalData(props, handleClickFunction) {
  const classes = useStyles();

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
            <Typography>Fill the table with the analytical signal of each sample and the dilution factor used.</Typography>
            <Grid
              container
              alignItems="center"
              justify="center"
              alignContents="row"
            >
              <TableContainer className={classes.table} component={Paper}>
                <Table aria-label="simple table">
                  {buildAnalticalDataRows(
                    props.numRows,
                    props.numColumns,
                    props
                  )}
                </Table>
              </TableContainer>
            </Grid>
          </>
        </Grid>
      </Fade>
    </>
  );
}

function buildAnalticalDataRows(rows, columns, props) {
  let tableRows = [];
  for (let row = 0; row < rows; ++row) {
    tableRows.push(
      <TableRow>
        <TableCell align="left">
          <TextField
            style={{ width: "100px" }}
            InputProps={{
              style: { fontSize: "16px" },
            }}
            InputLabelProps={{
              variant: "filled",
              style: { fontSize: "12px" },
            }}
            size="normal"
            label="Dilution Factor"
            onChange={(e) => handleDilutionFactorChange(e, row, props)}
          />
        </TableCell>
        {buildAnalticalDataColumns(columns, row, props)}
      </TableRow>
    );
  }
  return tableRows;
}

function buildAnalticalDataColumns(columns, row, props) {
  let tableCells = [];
  for (let column = 0; column < columns; ++column) {
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
          size="normal"
          label="Signal"
          value={props.analyticalData[row][column]}
          onChange={(e) => handleAnalyticalDataChange(e, row, column, props)}
        />
      </TableCell>
    );
  }
  return tableCells;
}

const mapStateToProps = (state) => ({
  numColumns: state.samples.numColumns,
  numRows: state.samples.numRows,
  analyticalData: state.samples.analyticalData,
  dilutionFactor: state.samples.dilutionFactor,
});

function handleAnalyticalDataChange(event, row, column, props) {
  props.updateAnalyticalValue(event.target.value, row, column);
}
function handleDilutionFactorChange(event, row, props) {
  props.updateDilutionFactorValue(event.target.value, row);
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAnalyticalValue: (updatedValue, row, column) => {
      dispatch(changeAnalyticalValue(updatedValue, row, column));
    },
    updateDilutionFactorValue: (updatedValue, row) => {
      dispatch(changeDilutionFactor(updatedValue, row));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinearityInputAnalyticalData);
