import React from 'react';
import './App.css';

import IncRowButton from './components/button/IncRowButton';
import IncColumnButton from './components/button/IncColumnButton';
import SamplesTable from './components/table/SamplesTable';

function App() {
  return (
    <div className="App">
      <IncRowButton />
      <IncColumnButton />
      <SamplesTable />
    </div>
  );
}

export default App;
