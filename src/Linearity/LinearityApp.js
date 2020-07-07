import React from 'react';

import LinearitySampleInputTable from './components/tables/LinearityInputTable/LinearitySampleInputTable';
import LinearityRegressionAnovaTable from './components/tables/LinearityRegressionAnovaTable';

import LinearityRegressionChart from './components/charts/LinearityRegressionGraph';
import LinearityResiduesChart from './components/charts/LinearityResiduesGraph';

import LinearityDataStatisticsTable from './components/tables/LinearityDataStatisticsTable';
import LinearityVolumeUnitSelector from './components/selector/LinearityVolumeUnitSelector';
import LinearityMassUnitSelector from './components/selector/LinearityMassUnitSelector';

import AddColumnButton from './components/button/AddColumnButton';
import RemoveColumnButton from './components/button/RemoveColumnButton';
import AddRowButton from './components/button/AddRowButton';
import RemoveRowButton from './components/button/RemoveRowButton';
import CalculateLinearityButton from './components/button/CalculateLinearityButton';

function LinearityApp() {
    return (
        <div className="LinearityApp">
            <LinearityMassUnitSelector />
            <LinearityVolumeUnitSelector />
            <AddRowButton />
            <RemoveRowButton />
            <AddColumnButton />
            <RemoveColumnButton />
            <CalculateLinearityButton />
            <LinearitySampleInputTable />
            <LinearityRegressionAnovaTable />
            <LinearityRegressionChart />
            <LinearityResiduesChart />
            <LinearityDataStatisticsTable />
        </div>
    );
}

export default LinearityApp;
