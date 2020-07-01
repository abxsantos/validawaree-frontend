import React from 'react';
import './App.css';

import IncRowButton from './components/button/IncRowButton';
import IncColumnButton from './components/button/IncColumnButton';
import SamplesTable from './components/table/SamplesTable';
import CalculateLinearityButton from './components/regressionAnovaResults/CalculateLinearityButton';
import LinearityAnovaTable from './components/regressionAnovaResults/RegressionAnovaTable';


function App() {
  return (
    <div className="App">
      <IncRowButton />
      <IncColumnButton />
      <SamplesTable />
      <CalculateLinearityButton />
      <LinearityAnovaTable />
    </div>
  );
}

export default App;
