import React from 'react';
import './App.css';

import AddRowButton from './Linearity/components/button/AddRowButton';
import AddColumnButton from './Linearity/components/button/AddColumnButton';
import LinearitySampleInputTable from './Linearity/components/tables/LinearitySampleInputTable';
import CalculateLinearityButton from './Linearity/components/button/CalculateLinearityButton';
import LinearityRegressionAnovaTable from './Linearity/components/tables/LinearityRegressionAnovaTable';
import LinearityRegressionChart from './Linearity/components/charts/LinearityRegressionGraph';
import LinearityResiduesChart from './Linearity/components/charts/LinearityResiduesGraph';
import RemoveRowButton from './Linearity/components/button/RemoveRowButton';

function App() {
  return (
    <div className="App">
      <AddRowButton />
      <RemoveRowButton />
      <AddColumnButton />
      <LinearitySampleInputTable />
      <CalculateLinearityButton />
      <LinearityRegressionAnovaTable />
      <LinearityRegressionChart />
      <LinearityResiduesChart />
    </div>
  );
}

export default App;
