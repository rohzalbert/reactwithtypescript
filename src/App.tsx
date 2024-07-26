import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Henry Tim" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
