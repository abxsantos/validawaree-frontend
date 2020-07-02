import React from 'react';
import './App.css';

import IncRowButton from './components/button/IncRowButton';
import IncColumnButton from './components/button/IncColumnButton';
import SamplesTable from './components/table/SamplesTable';
import CalculateLinearityButton from './components/RegressionAnovaResults/CalculateLinearityButton';
import LinearityAnovaTable from './components/RegressionAnovaResults/RegressionAnovaTable';
import LinearityRegressionChart from './components/RegressionGraph/LinearityRegressionGraph';
import LinearityResiduesChart from './components/RegressionGraph/LinearityResiduesGraph';

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
