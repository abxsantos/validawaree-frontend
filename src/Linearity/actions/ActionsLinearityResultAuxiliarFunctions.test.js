import 'core-js';

import {
    makeChartLinePoint,
    calculateRegressionLine,
    predictValuesWithModel,
    organizeResiduesChartData,
    organizeLinearityGraphData,
} from './ActionsLinearityResultAuxiliarFunctions';

describe('Chart data', () => {
    describe('Create chart line point', () => {
        it('Predicts the analytical values based on the regression line', () => {
            const flattenedConcentrationData = [1, 2, 3];
            const intercept = 2;
            const slope = 0;
            expect(
                predictValuesWithModel(flattenedConcentrationData, intercept, slope)
            ).toEqual([2, 2, 2]);
        });
        it('Calculates the max and min point values for the regression line appending to a list of dict for plotting with recharts.', () => {
            const flattenedConcentrationData = [1, 2, 3];
            const intercept = 10;
            const slope = 0;
            const chartData = [];
            expect(
                calculateRegressionLine(
                    flattenedConcentrationData,
                    intercept,
                    slope,
                    chartData
                )
            ).toEqual([{
                concentration: 3,
                RegressionLine: 10,
            },
            {
                concentration: 1,
                RegressionLine: 10
            },
            ]);
        });
        it('Creates a dict with x and y values for plotting a regression line.', () => {
            expect(makeChartLinePoint(1, 2, 'xPoint', 'yPoint')).toEqual({
                xPoint: 1,
                yPoint: 2,
            });
        });
        it.each`
        pointValue    |  pointKey
        ${undefined}  |  ${undefined}
        ${1}          |  ${undefined}
        ${undefined}  |  ${'xPoint'}
        ${1}          |  ${1}
        ${'1'}        |  ${'xPoint'}
        ${'xPoint'}   |  ${'xPoint'}
        `('When the user point value is $pointValue and $pointKey throws an Error', ({
            pointValue,
            pointKey
        }) => {
            expect(() => makeChartLinePoint(pointValue, 2, pointKey, 'yPoint')).toThrow(Error);
        })
    });
    describe('Organize chart data', () => {
        describe('Residues scatter plot', () => {
            it('Creates a list of  dicts containing data for Recharts Residues scatter plot', () => {
                const concentrationData = [
                    [1, 2]
                ];
                const regressionResidues = [1, 2];
                const intercept = 2;
                const slope = 0;
                expect(
                    organizeResiduesChartData(
                        concentrationData,
                        regressionResidues,
                        intercept,
                        slope
                    )
                ).toEqual([{
                    fittedValues: 2,
                    regressionResidue: 1,
                },
                {
                    fittedValues: 2,
                    regressionResidue: 2,
                },
                {
                    fittedValues: 0,
                    ResiduesLine: 0,
                },
                {
                    fittedValues: 1,
                    ResiduesLine: 0,
                },
                ]);
            })
        })
        describe('Linearity scatter plot', () => {
            it('Creates a list of dict containing data for the Recharts Linear Regression Scatter Plot.', () => {
                const analyticalData = [
                    [1, 2, 3]
                ];
                const concentrationData = [
                    [1, 2, 3]
                ];
                const intercept = 2;
                const slope = 0;
                const expectedRegressionChartData = [{
                    concentration: 1,
                    analyticalSignal: 1
                },
                {
                    concentration: 2,
                    analyticalSignal: 2
                },
                {
                    concentration: 3,
                    analyticalSignal: 3
                },
                {
                    concentration: 3,
                    RegressionLine: 2,
                },
                {
                    concentration: 1,
                    RegressionLine: 2,
                },
                ];
                expect(
                    organizeLinearityGraphData(
                        analyticalData,
                        concentrationData,
                        intercept,
                        slope
                    )
                ).toEqual(expectedRegressionChartData);
            })
        })
    })
});
