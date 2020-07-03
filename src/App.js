import React from 'react';
import './App.css';

import IncRowButton from './components/Linearity/button/IncRowButton';
import IncColumnButton from './components/Linearity/button/IncColumnButton';
import SamplesTable from './components/Linearity/tables/SamplesTable';
import CalculateLinearityButton from './components/Linearity/button/CalculateLinearityButton';
import LinearityAnovaTable from './components/Linearity/tables/RegressionAnovaTable';
import LinearityRegressionChart from './components/Linearity/charts/LinearityRegressionGraph';
import LinearityResiduesChart from './components/Linearity/charts/LinearityResiduesGraph';

function App() {
  return (
    <div className="App">
      <IncRowButton />
      <IncColumnButton />
      <SamplesTable />
      <CalculateLinearityButton />
      <LinearityAnovaTable />
      <LinearityRegressionChart />
      <LinearityResiduesChart />
    </div>
  );
}

export default App;
