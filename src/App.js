import React from 'react';
import WcTimer from './Components/WcTimer';
import FountainTimer from './Components/FountainTimer';
import './App.css'

function App() {
  return (
    <div className="chores">
      <WcTimer />
      <FountainTimer />
    </div>
  );
}

export default App;
