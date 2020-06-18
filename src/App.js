import React from 'react';
import './App.css';

import IncRow from './components/IncRowNumber';
import DecRow from './components/DecRowNumber';
import AddColumnNumber from './components/AddColumnNumber';
import DelColumnNumber from './components/DelColumnNumber';



function App() {
  return (
    <div className="App">
      <IncRow />
      <DecRow />
      <AddColumnNumber />
      <DelColumnNumber />
    </div>
  );
}

export default App;
