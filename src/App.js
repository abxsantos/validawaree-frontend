import React from 'react';
import './App.css';

import IncRow from './components/buttons/IncRowNumber';
import DecRow from './components/buttons/DecRowNumber';
import AddColumnNumber from './components/buttons/AddColumnNumber';
import DelColumnNumber from './components/buttons/DelColumnNumber';
import SimpleTable from './components/table/LinearityTable';
// import FocusableCell from './components/table/EditableTable';



function App() {
  return (
    <div className="App">
      <IncRow />
      <DecRow />
      <AddColumnNumber />
      <DelColumnNumber />
      <SimpleTable />
      {/* <FocusableCell /> */}
    </div>
  );
}

export default App;
