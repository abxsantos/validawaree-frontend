// Auxiliar Linearity Input Functions
export const addRow = (columns, analyticalData, concentrations) => {
  concentrations.push(new Array(columns).fill(undefined));
  analyticalData.push(new Array(columns).fill(undefined));
  return { analyticalData, concentrations };
};

export const addColumn = (rows, columns, analyticalData) => {
  for (let i = 0; i < rows; ++i) {
    analyticalData[i].splice(columns, undefined, undefined);
  }
  return analyticalData;
};

export const removeRow = (
  removedAnalyticalData,
  removedConcentrationData,
  removeDilutionFactorValue,
  removedAverages,
  removedStdDeviations
) => {
  removedAnalyticalData.splice(-1);
  removedConcentrationData.splice(-1);
  removeDilutionFactorValue.splice(-1);
  removedAverages.splice(-1);
  removedStdDeviations.splice(-1);
  console.log(removedAnalyticalData);
  console.log(removedConcentrationData);
  return {
    removedAnalyticalData,
    removedConcentrationData,
    removeDilutionFactorValue,
    removedAverages,
    removedStdDeviations,
  };
};

export const removeColumn = (
  rows,
  removedAnalyticalData,
  removedConcentration,
  removedMass,
  removedInitialConcentration
) => {
  for (let i = 0; i < rows; ++i) {
    removedAnalyticalData[i].splice(-1);
    removedConcentration[i].splice(-1);
  }
  removedMass.splice(-1);
  removedInitialConcentration.splice(-1);
  return {
    removedAnalyticalData,
    removedConcentration,
    removedMass,
    removedInitialConcentration,
  };
};

export const updateVolumeValue = (action, state) => {
  let volume = state.volume;
  volume = action.updatedVolumeValue.replace(',', '.');

  let initialConcentrations = [...state.mass].map(function (value) {
    return value / volume;
  });

  let concentrations = [...state.concentrations];

  for (let i = 0; i < state.dilutionFactor.length; ++i) {
    for (let j = 0; j < state.initialConcentrations.length; ++j) {
      concentrations[i][j] =
        state.initialConcentrations[j] / state.dilutionFactor[i];
    }
  }

  return {
    volume: volume,
    initialConcentrations: initialConcentrations,
    concentrations: concentrations,
  };
};

export const updateMassValue = (action, state) => {
  let mass = [...state.mass];
  mass[action.column] = action.updatedMassValue.replace(',', '.');

  let initialConcentrations = [...state.initialConcentrations];
  initialConcentrations[action.column] = mass[action.column] / state.volume;

  let concentrations = [...state.concentrations];

  for (let i = 0; i < state.dilutionFactor.length; ++i) {
    concentrations[i][action.column] =
      state.initialConcentrations[action.column] / state.dilutionFactor[i];
  }
  return {
    mass: mass,
    initialConcentrations: initialConcentrations,
    concentrations: concentrations,
  };
};

// https://dev.to/sagar/three-dots---in-javascript-26ci
export const updateValues = (action, state) => {
  let analyticalData = [...state.analyticalData];
  analyticalData[action.row][action.column] = action.updatedValue.replace(
    ',',
    '.'
  );

  let averages = [...state.averages];
  averages[action.row] = analyticalData[action.row].reduce(
    (a, b) => parseFloat(a) + parseFloat(b)
  );
  averages[action.row] /= analyticalData[action.row].length;

  let stdDeviations = [...state.stdDeviations];
  stdDeviations[action.row] = Math.sqrt(
    analyticalData[action.row]
      .map((value) => Math.pow(parseFloat(value) - averages[action.row], 2))
      .reduce((a, b) => a + b) /
      (analyticalData[action.row].length - 1)
  );

  return {
    analyticalData: analyticalData,
    averages: averages,
    stdDeviations: stdDeviations,
  };
};

export const updateDilutionFactorValue = (action, state) => {
  let dilutionFactor = [...state.dilutionFactor];
  dilutionFactor[action.row] = action.updatedValue.replace(',', '.');

  let concentrations = [...state.concentrations];
  concentrations[action.row] = [...state.initialConcentrations].map(function (
    value
  ) {
    return value / dilutionFactor[action.row];
  });
  return { dilutionFactor: dilutionFactor, concentrations: concentrations };
};