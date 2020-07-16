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
  removedDilutionFactorValue,
  removedAverages,
  removedStdDeviations
) => {
  removedAnalyticalData.splice(-1);
  removedConcentrationData.splice(-1);
  removedDilutionFactorValue.splice(-1);
  removedAverages.splice(-1);
  removedStdDeviations.splice(-1);
  console.log(removedAnalyticalData);
  console.log(removedConcentrationData);
  return {
    removedAnalyticalData,
    removedConcentrationData,
    removedDilutionFactorValue,
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

export const checkValidTableInput = (newValue) => {
  if (typeof newValue === "string") {
    newValue = newValue.replace(",", ".");
    if (newValue.includes(".")) {
      return newValue;
    } else if (isNaN(newValue) || newValue === "") {
      return undefined;
    } else {
      return newValue;
    }
  } else if (typeof newValue === "number" && newValue > 0) {
    return newValue;
  } else {
    return undefined;
  }
};

export const changeVolumeUnit = (action, state) => {
  let volumeUnit = state.volumeUnit;
  let changedInitialConcentrations = [...state.initialConcentrations].map(
    (initialConcentrationValue) => {
      let changedInitialConcentrationValue =
        initialConcentrationValue * (volumeUnit / action.changedVolumeUnit);
      return changedInitialConcentrationValue;
    }
  );
  let changedConcentrations = [...state.concentrations];
  for (let row = 0; row < state.numRows; ++row) {
    for (let column = 0; column < state.numColumns; ++column) {
      changedConcentrations[row][column] =
        state.concentrations[row][column] *
        (volumeUnit / action.changedVolumeUnit);
    }
  }
  volumeUnit = action.changedVolumeUnit;
  return {
    volumeUnit: volumeUnit,
    initialConcentrations: changedInitialConcentrations,
    concentrations: changedConcentrations,
  };
};

export const changeMassUnit = (action, state) => {
  let massUnit = state.massUnit;
  let changedInitialConcentrations = [...state.initialConcentrations].map(
    (initialConcentrationValue) => {
      let changedInitialConcentrationValue =
        initialConcentrationValue / (massUnit / action.changedMassUnit);
      return changedInitialConcentrationValue;
    }
  );
  let changedConcentrations = [...state.concentrations];
  for (let row = 0; row < state.numRows; ++row) {
    for (let column = 0; column < state.numColumns; ++column) {
      changedConcentrations[row][column] =
        state.concentrations[row][column] / (massUnit / action.changedMassUnit);
    }
  }
  massUnit = action.changedMassUnit;
  return {
    massUnit: massUnit,
    initialConcentrations: changedInitialConcentrations,
    concentrations: changedConcentrations,
  };
};

export const updateVolumeValue = (action, state) => {
  let volume = state.volume;
  volume = checkValidTableInput(action.updatedVolumeValue);
  let initialConcentrations = [...state.mass].map(function (mass) {
    let updatedInitialConcentrationsValue = parseFloat(mass) / volume;
    return checkValidTableInput(updatedInitialConcentrationsValue);
  });
  let concentrations = [...state.concentrations];
  for (let i = 0; i < state.dilutionFactor.length; ++i) {
    for (let j = 0; j < initialConcentrations.length; ++j) {
      let updatedConcentrations =
        parseFloat(initialConcentrations[j]) /
        parseFloat(state.dilutionFactor[i]);
      concentrations[i][j] = checkValidTableInput(updatedConcentrations);
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
  mass[action.column] = checkValidTableInput(action.updatedMassValue);

  let initialConcentrations = [...state.initialConcentrations];
  initialConcentrations[action.column] = checkValidTableInput(
    mass[action.column] / parseFloat(state.volume)
  );

  let concentrations = [...state.concentrations];
  for (let i = 0; i < state.dilutionFactor.length; ++i) {
    concentrations[i][action.column] = checkValidTableInput(
      mass[action.column] /
        parseFloat(state.volume) /
        parseFloat(state.dilutionFactor[i])
    );
  }
  return {
    mass: mass,
    initialConcentrations: initialConcentrations,
    concentrations: concentrations,
  };
};

export const calculateAnalyticalAverage = (filteredAnalyticalData) => {
  let average =
    filteredAnalyticalData.reduce(
      (cumulative, currentValue) => cumulative + parseFloat(currentValue),
      0
    ) / filteredAnalyticalData.length;
  return average;
};

export const calculateStandardDeviation = (filteredAnalyticalData, average) => {
  let stdDeviation = Math.sqrt(
    filteredAnalyticalData
      .map((value) => Math.pow(value - average, 2))
      .reduce(
        (acumulatedValue, currentValue) =>
          acumulatedValue + parseFloat(currentValue)
      ) /
      (filteredAnalyticalData.length - 1)
  );
  return stdDeviation;
};

export const updateStandardDeviationAndAverages = (analyticalData) => {
  let filteredAnalyticalData = analyticalData.filter(Number);
  if (filteredAnalyticalData.length > 2) {
    let average = calculateAnalyticalAverage(filteredAnalyticalData);
    let stdDeviation = calculateStandardDeviation(
      filteredAnalyticalData,
      average
    );
    return { updatedAverage: average, updatedStdDeviation: stdDeviation };
  } else if (filteredAnalyticalData.length === 2) {
    let average = calculateAnalyticalAverage(filteredAnalyticalData);
    return { updatedAverage: average, updatedStdDeviation: undefined };
  } else {
    return { updatedAverage: undefined, updatedStdDeviation: undefined };
  }
};

// https://dev.to/sagar/three-dots---in-javascript-26ci
export const updateValues = (action, state) => {
  let analyticalData = [...state.analyticalData];
  analyticalData[action.row][action.column] = checkValidTableInput(
    action.updatedValue
  );

  let averages = [...state.averages];
  let stdDeviations = [...state.stdDeviations];
  let newValues = updateStandardDeviationAndAverages(
    analyticalData[action.row]
  );
  averages[action.row] = newValues.updatedAverage;
  stdDeviations[action.row] = newValues.updatedStdDeviation;
  return {
    analyticalData: analyticalData,
    averages: averages,
    stdDeviations: stdDeviations,
  };
};

export const updateDilutionFactorValue = (action, state) => {
  let dilutionFactor = [...state.dilutionFactor];
  dilutionFactor[action.row] = checkValidTableInput(action.updatedValue);

  let concentrations = [...state.concentrations];
  concentrations[action.row] = [...state.initialConcentrations].map(function (
    value
  ) {
    return checkValidTableInput(parseFloat(value) / dilutionFactor[action.row]);
  });
  return { dilutionFactor: dilutionFactor, concentrations: concentrations };
};
