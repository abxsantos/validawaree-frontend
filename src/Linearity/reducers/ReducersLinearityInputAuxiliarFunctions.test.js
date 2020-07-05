import 'core-js';

import {
  addRow,
  addColumn,
  removeRow,
  removeColumn,
  updateVolumeValue,
  updateMassValue,
  updateValues,
  updateDilutionFactorValue,
  calculateAnalyticalAverage,
  calculateStandardDeviation,
} from './ReducersLinearityInputAuxiliarFunctions';

test('addRow must return concentrations and analyticalData list of lists containing a new set filled with undefined that will be the same sumber of columns.', () => {
  const columns = 3;
  const analyticalData = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  const concentrations = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  expect(addRow(columns, analyticalData, concentrations)).toEqual({
    analyticalData: [
      [1, 2, 3],
      [4, 5, 6],
      [undefined, undefined, undefined],
    ],
    concentrations: [
      [1, 2, 3],
      [4, 5, 6],
      [undefined, undefined, undefined],
    ],
  });
});

test('addColumn must return a list of lists containing the data set updated with undefined elements in the last position of each data set.', () => {
  const rows = 2;
  const columns = 3;
  const analyticalData = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  expect(addColumn(rows, columns, analyticalData)).toEqual([
    [1, 2, 3, undefined],
    [4, 5, 6, undefined],
  ]);
});

test('removeRow must remove the last data set of analytical data, concentrations and last values of dilution factor averages and standard deviations.', () => {
  const removedAnalyticalData = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  const removedConcentrationData = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  const removedDilutionFactorValue = [1, 2];
  const removedAverages = [1, 2];
  const removedStdDeviations = [1, 2];
  expect(
    removeRow(
      removedAnalyticalData,
      removedConcentrationData,
      removedDilutionFactorValue,
      removedAverages,
      removedStdDeviations
    )
  ).toEqual({
    removedAnalyticalData: [[1, 2, 3]],
    removedConcentrationData: [[1, 2, 3]],
    removedDilutionFactorValue: [1],
    removedAverages: [1],
    removedStdDeviations: [1],
  });
});

test('removeColumn must remove the last data set of removed analytical data, concentration data and the last element of mass and initial concentration.', () => {
  const rows = 2;
  const removedAnalyticalData = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  const removedConcentrationData = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  const removedMass = [1, 2, 3];
  const removedInitialConcentration = [1, 2, 3];
  expect(
    removeColumn(
      rows,
      removedAnalyticalData,
      removedConcentrationData,
      removedMass,
      removedInitialConcentration
    )
  ).toEqual({
    removedAnalyticalData: [
      [1, 2],
      [4, 5],
    ],
    removedConcentration: [
      [1, 2],
      [4, 5],
    ],

    removedInitialConcentration: [1, 2],
    removedMass: [1, 2],
  });
});

test('updateVolumeValue must alter the initial concentration, and the concentration values.', () => {
  const action = { updatedVolumeValue: 1.0 };
  const state = {
    volume: undefined,
    initialConcentrations: [undefined, undefined, undefined],
    mass: [1, 2, 4],
    dilutionFactor: [2],
    concentrations: [[undefined, undefined, undefined]],
  };
  expect(updateVolumeValue(action, state)).toEqual({
    volume: 1.0,
    initialConcentrations: [1, 2, 4],
    concentrations: [[0.5, 1, 2]],
  });
});

test('updateVolumeValue must return undefined when not number values are inputed on the textfield and also return undefined for concentrations and initial concentrations values', () => {
  const action = { updatedVolumeValue: "ABC"};
  const state = {
    volume: 1.0,
    initialConcentrations: [1, 2, 4],
    mass: [1, 2, 4],
    dilutionFactor: [2],
    concentrations: [[0.5, 1, 2]],
  };
  expect(updateVolumeValue(action, state)).toEqual({
    volume: undefined,
    initialConcentrations: [undefined, undefined, undefined],
    concentrations: [[undefined, undefined, undefined]],
  });
});

test('updateMassValue must return a dict containing new mass value and alter the initial concentrations and concentrations values.', () => {
  const action = { updatedMassValue: 1.0, column: 2 };
  const state = {
    mass: [0, 0, 0],
    volume: 1.0,
    initialConcentrations: [0, 0, 0],
    concentrations: [[0, 0, 0]],
    dilutionFactor: [2],
  };
  expect(updateMassValue(action, state)).toEqual({
    mass: [0, 0, 1],
    initialConcentrations: [0, 0, 1],
    concentrations: [[0, 0, 0.5]],
  });
});

test('calculateAnalyticalAverage must calculate the average if there is 2 or more numbers in data set.', () => {
  const filteredAnalyticalData = [1, 2, 3];
  expect(calculateAnalyticalAverage(filteredAnalyticalData)).toEqual(2);
});

test('calculateStandardDeviation must calculate the standard deviation if there is 3 or more numbers in data set.', () => {
  const filteredAnalyticalData = [1, 2, 3];
  const average = 2;
  expect(calculateStandardDeviation(filteredAnalyticalData, average)).toEqual(1
  );
});

test('updateValues must return a dict containing new analytical data its updated averages and standard deviations, when the number of points allow such operations.', () => {
  const action = { updatedValue: 0.1, row: 0, column: 2 };
  const state = {
    analyticalData: [[0.1, 0.1, 0.1]],
    averages: [0.1],
    stdDeviations: [0],
  };
  expect(updateValues(action, state)).toEqual({
    analyticalData: [[0.1, 0.1, 0.1]],
    averages: [0.10000000000000002],
    stdDeviations: [1.6996749443881478e-17],
  });
});

test('updateDilutionFactorValue must update the dilution factor and concentrations when changed.', () => {
  const action = { updatedValue: 2.0, row: 0 };
  const state = {
    dilutionFactor: [undefined],
    initialConcentrations: [1.0, 2.0, undefined],
    concentrations: [[undefined, undefined, undefined]],
  };
  expect(updateDilutionFactorValue(action, state)).toEqual({
    dilutionFactor: [2.0],
    concentrations: [[0.5, 1, undefined]],
  });
});
