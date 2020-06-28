import React from 'react';
import './App.css';

import IncRowButton from './components/button/IncRowButton';
import IncColumnButton from './components/button/IncColumnButton';
import SamplesTable from './components/table/SamplesTable';
import CalculateLinearityButton from './components/button/CalculateLinearityButton';

function App() {

//   var json = {value: '123', playerName: 'AAA'}

// function handleLinearityCalculation() {
//   fetch('/linearity_data', {
//     method: "POST",
//     cache: "no-cache",
//     headers: {
//       content_type: "application/json",
//     },
//     body: JSON.stringify(json),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((json) => {
//       console.log(json);
//     });
// }
  return (
    <div className="App">
      {/* <button onClick={handleLinearityCalculation}>
      Calculate Linearity
    </button> */}
      <CalculateLinearityButton />
      <IncRowButton />
      <IncColumnButton />
      <SamplesTable />
    </div>
  );
}

export default App;
