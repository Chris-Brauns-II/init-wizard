import React from 'react';
import StructureBuilder from './StructureBuilder/StructureBuilder';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to the Data Streaming Startup Wizard!</h1>
      </header>
      <p className="App-intro">
        To get started, specify the number of topics, producers, and consumers.
      </p>
      <StructureBuilder/>
    </div>
  )
};

export default App;
