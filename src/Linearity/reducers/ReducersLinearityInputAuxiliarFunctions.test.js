import 'core-js';

import {
    addRow,
    addColumn,
    removeRow,
    removeColumn,
    checkValidTableInput,
    updateVolumeValue,
    updateMassValue,
    updateValues,
    updateDilutionFactorValue,
    calculateAnalyticalAverage,
    calculateStandardDeviation,
} from './ReducersLinearityInputAuxiliarFunctions';

describe('Add and Remove Rows', () => {
    describe('Create a new row', () => {
        it('When the Add Row button is pressed, a new row filled with blank field is expected to created, and corresponding undefined values added to the store.', () => {
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
        })
    })
    describe('Remove the last row', () => {
        it('When the Remove Row button is pressed, the last rows should be removed, deleting its equivalent values from the store.', () => {
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
                removedAnalyticalData: [
                    [1, 2, 3]
                ],
                removedConcentrationData: [
                    [1, 2, 3]
                ],
                removedDilutionFactorValue: [1],
                removedAverages: [1],
                removedStdDeviations: [1],
            });
        })

    })
});

describe('Add and Remove Columns', () => {
    describe('Create a new column', () => {
        it('When the create a new column button is pressed, is expected to append a new column filled with blank values, and corresponding undefined values inside the data in the store.', () => {
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
        })
    })
    describe('Renove last column', () => {
        it('When the remove a column button is pressed, is expected to remove the last column, and the corresponding values inside the data in the store.', () => {
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
        })
    })
});

describe('Check valid table user inputs', () => {
    describe('Given non number values, is expected to return undefined values.', () => {
        it.each`
        input       |  expectedResult
        ${"5.2"}    |  ${"5.2"}
        ${"STRING"} |  ${undefined}
        ${"1."}     |  ${"1."}
        ${null}     |  ${undefined}
        ${"-"}      |  ${undefined}
        ${1}        |  ${1}
        ${"3,2"}    |  ${"3.2"}
        `('When the user input is $input the expected result is $expectedResult', ({input, expectedResult}) => {
            expect(checkValidTableInput(input)).toEqual(expectedResult);
        })
        });
    });


describe('Altering the store with table values', () => {
    describe('When changing the volume', () => {
        it('The values of each sample concentration and initial concentration in the store should change', () => {
            const action = {
                updatedVolumeValue: 1.0
            };
            const state = {
                volume: undefined,
                initialConcentrations: [undefined, undefined, undefined],
                mass: [1, 2, 4],
                dilutionFactor: [2],
                concentrations: [
                    [undefined, undefined, undefined]
                ],
            };
            expect(updateVolumeValue(action, state)).toEqual({
                volume: 1.0,
                initialConcentrations: [1, 2, 4],
                concentrations: [
                    [0.5, 1, 2]
                ],
            });
        })
        it('The samples concentration and initial concentration values, must be mantained when a "." is inserted', () => {
            const action = {
                updatedVolumeValue: "1."
            };
            const state = {
                volume: '1',
                initialConcentrations: [1, 2, 4],
                mass: [1, 2, 4],
                dilutionFactor: [2],
                concentrations: [
                    [0.5, 1, 2]
                ],
            };
            expect(updateVolumeValue(action, state)).toEqual({
                volume: '1.',
                initialConcentrations: [1, 2, 4],
                concentrations: [
                    [0.5, 1, 2]
                ],
            });
        })
        it('The volume must return undefined when not number values are inputed on the textfield and also return undefined for concentrations and initial concentrations values', () => {
            const action = {
                updatedVolumeValue: "ABC"
            };
            const state = {
                volume: 1.0,
                initialConcentrations: [1, 2, 4],
                mass: [1, 2, 4],
                dilutionFactor: [2],
                concentrations: [
                    [0.5, 1, 2]
                ],
            };
            expect(updateVolumeValue(action, state)).toEqual({
                volume: undefined,
                initialConcentrations: [undefined, undefined, undefined],
                concentrations: [
                    [undefined, undefined, undefined]
                ],
            });
        })
    })
    describe('When changing the mass', () => {
        it('The mass value, initial concentrations and concentrations values, should be changed when there is a volume value.', () => {
            const action = {
                updatedMassValue: 1.0,
                column: 2
            };
            const state = {
                mass: [0, 0, 0],
                volume: 1.0,
                initialConcentrations: [0, 0, 0],
                concentrations: [
                    [0, 0, 0]
                ],
                dilutionFactor: [2],
            };
            expect(updateMassValue(action, state)).toEqual({
                mass: [0, 0, 1],
                initialConcentrations: [0, 0, 1],
                concentrations: [
                    [0, 0, 0.5]
                ],
            });
        })
        it('The initial concentration and sample concentration values for the corresponding mass should be undefined when there is no volume.', () => {
            const action = {
                updatedMassValue: "2.0",
                column: 2
            };
            const state = {
                mass: [undefined, undefined, 0],
                volume: undefined,
                initialConcentrations: [undefined, undefined, undefined],
                concentrations: [
                    [undefined, undefined, undefined]
                ],
                dilutionFactor: [2],
            };
            expect(updateMassValue(action, state)).toEqual({
                mass: [undefined, undefined, '2.0'],
                initialConcentrations: [undefined, undefined, undefined],
                concentrations: [
                    [undefined, undefined, undefined]
                ],
            });
        })
        it('The sample concentration values for the corresponding mass, should be undefined when there is no dilution factor.', () => {
            const action = {
                updatedMassValue: '1.0',
                column: 1
            };
            const state = {
                mass: [undefined, undefined, undefined],
                volume: '1',
                initialConcentrations: [undefined, undefined, undefined],
                concentrations: [
                    [undefined, undefined, undefined],
                    [undefined, undefined, undefined]
                ],
                dilutionFactor: ['2', undefined],
            };
            expect(updateMassValue(action, state)).toEqual({
                mass: [undefined, '1.0', undefined],
                initialConcentrations: [undefined, 1, undefined],
                concentrations: [
                    [undefined, 0.5, undefined],
                    [undefined, undefined, undefined],
                ],
            });
        })
    })
    describe('When the analytical value is updated by the user', () => {
        describe('A dict is created containing new analytical data its updated averages and standard deviations', () => {
            describe('When there is 3 or more number in the data set', () => {
                it('The standard deviation should be calculated.', () => {
                    const filteredAnalyticalData = [1, 2, 3];
                    const average = 2;
                    expect(calculateStandardDeviation(filteredAnalyticalData, average)).toEqual(1);
                })
            })
            describe('When there is 2 or more numbers in data set', () => {
                it('The average should be calculated.', () => {
                    const filteredAnalyticalData = [1, 2, 3];
                    expect(calculateAnalyticalAverage(filteredAnalyticalData)).toEqual(2);
                })
            })
            it('When the number of points allow such operations is expected to be created.', () => {
                const action = {
                    updatedValue: 0.1,
                    row: 0,
                    column: 2
                };
                const state = {
                    analyticalData: [
                        [0.1, 0.1, 0.1]
                    ],
                    averages: [0.1],
                    stdDeviations: [0],
                };
                expect(updateValues(action, state)).toEqual({
                    analyticalData: [
                        [0.1, 0.1, 0.1]
                    ],
                    averages: [0.10000000000000002],
                    stdDeviations: [1.6996749443881478e-17],
                });
            })
        })
    })
    describe('When changing the dilution factor', () => {
        describe('When there is mass and volume', () => {
            it('The concentration of each sample of corresponding row should change.', () => {
                const action = {
                    updatedValue: 2.0,
                    row: 0
                };
                const state = {
                    dilutionFactor: [undefined],
                    initialConcentrations: [1.0, 2.0, undefined],
                    concentrations: [
                        [undefined, undefined, undefined]
                    ],
                };
                expect(updateDilutionFactorValue(action, state)).toEqual({
                    dilutionFactor: [2.0],
                    concentrations: [
                        [0.5, 1, undefined]
                    ],
                });
            })
            describe('When there are no initial concentrations (no volume)', () => {
                it('The concentration of each sample should be undefined.', () => {
                    const action = {
                        updatedValue: 2.0,
                        row: 0
                    };
                    const state = {
                        dilutionFactor: [undefined],
                        initialConcentrations: [undefined, undefined, undefined],
                        concentrations: [
                            [undefined, undefined, undefined]
                        ],
                    };
                    expect(updateDilutionFactorValue(action, state)).toEqual({
                        dilutionFactor: [2.0],
                        concentrations: [
                            [undefined, undefined, undefined]
                        ],
                    });
                })
            })
            describe('When there is no mass in a column', () => {
                it('The concentration value should be undefined for the sample without mass.', () =>{
                    const action = {
                        updatedValue: 2.0,
                        row: 0
                    };
                    const state = {
                        dilutionFactor: [undefined],
                        initialConcentrations: [undefined, 10, 10],
                        concentrations: [
                            [undefined, undefined, undefined]
                        ],
                    };
                    expect(updateDilutionFactorValue(action, state)).toEqual({
                        dilutionFactor: [2.0],
                        concentrations: [
                            [undefined, 5, 5]
                        ],
                    });
                })
            })

        })
    })
})
