export const INC_ROW = "INC_ROW";
export const INC_COLUMN = "INC_COLUMN";
export const UPD_MASS_VALUE = "UPD_MASS_VALUE";
export const UPD_SAMPLE_VALUE = "UPD_SAMPLE_VALUE";
export const UPD_VOLUME_VALUE = "UPD_VOLUME_VALUE";
export const UPD_DILUTION_FACTOR_VALUE = "UPD_DILUTION_FACTOR_VALUE";
export const REMOVE_ROW = "REMOVE_ROW";
export const REMOVE_COLUMN = "REMOVE_COLUMN";
export const CHANGE_VOLUME_UNIT = "CHANGE_VOLUME_UNIT";
export const CHANGE_MASS_UNIT = "CHANGE_MASS_UNIT";

export const CHANGE_VOLUME = "CHANGE_VOLUME";
export const CHANGE_ROWS = "CHANGE_ROWS";
export const CHANGE_COLUMNS = "CHANGE_COLUMNS";
export const CHANGE_MASS = "CHANGE_MASS";
export const CHANGE_DILUTION_FACTOR = "CHANGE_DILUTION_FACTOR";
export const CHANGE_ANALYTICAL_VALUE = "CHANGE_ANALYTICAL_VALUE";

export const changeVolume = (updatedValue) => ({
  type: CHANGE_VOLUME,
  updatedVolume: updatedValue,
});

export const changeRows = (updatedValue) => ({
  type: CHANGE_ROWS,
  updatedRows: updatedValue,
});

export const changeColumns = (updatedValue) => ({
  type: CHANGE_COLUMNS,
  updatedColumns: updatedValue,
});

export const changeMass = (updatedValue, updatedValuePosition) => ({
  type: CHANGE_MASS,
  updatedMass: updatedValue,
  column: updatedValuePosition,
});

export const changeDilutionFactor = (
  updatedValue,
  updatedValueRowPosition
) => ({
  type: CHANGE_DILUTION_FACTOR,
  updatedDilutionFactor: updatedValue,
  row: updatedValueRowPosition,
});

export const changeAnalyticalValue = (
  updatedValue,
  updatedValueRowPosition,
  updatedValueColumnPosition
) => ({
  type: CHANGE_ANALYTICAL_VALUE,
  updatedAnalyticalValue: updatedValue,
  row: updatedValueRowPosition,
  column: updatedValueColumnPosition,
});

export const incRow = () => ({
  type: INC_ROW,
});

export const incColumn = () => ({
  type: INC_COLUMN,
});

export const removeRow = () => ({
  type: REMOVE_ROW,
});

export const removeColumn = () => ({
  type: REMOVE_COLUMN,
});

export const changeVolumeUnit = (changedVolumeUnit) => ({
  type: CHANGE_VOLUME_UNIT,
  changedVolumeUnit: changedVolumeUnit,
});

export const changeMassUnit = (changedMassUnit) => ({
  type: CHANGE_MASS_UNIT,
  changedMassUnit: changedMassUnit,
});

export function updateVolumeValue(updatedValue) {
  return {
    type: UPD_VOLUME_VALUE,
    updatedVolumeValue: updatedValue,
  };
}

export function updateMassValue(updatedValue, column) {
  return {
    type: UPD_MASS_VALUE,
    updatedMassValue: updatedValue,
    column: column,
  };
}

export function updateSampleValue(updatedValue, row, column) {
  return {
    type: UPD_SAMPLE_VALUE,
    updatedValue: updatedValue,
    row: row,
    column: column,
  };
}

export function updateDilutionFactorValue(updatedValue, row) {
  return {
    type: UPD_DILUTION_FACTOR_VALUE,
    updatedValue: updatedValue,
    row: row,
  };
}
