import React from 'react';
import './App.css';

import LinearitySampleInputTable from './Linearity/components/tables/LinearitySampleInputTable';
import LinearityRegressionAnovaTable from './Linearity/components/tables/LinearityRegressionAnovaTable';
import LinearityRegressionChart from './Linearity/components/charts/LinearityRegressionGraph';
import LinearityResiduesChart from './Linearity/components/charts/LinearityResiduesGraph';

function App() {
  return (
    <div className="App">
      <LinearitySampleInputTable />
      <LinearityRegressionAnovaTable />
      <LinearityRegressionChart />
      <LinearityResiduesChart />
    </div>
  );
}

export default App;
