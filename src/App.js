import React from 'react';

import './App.css'
import Cats from './Components/Cats';
import Home from './Components/Home';
import Training from './Components/Training';

function App() {
  return (
    <>
      <Cats />
      <hr />
      <Home />
      <hr />
      <Training />
    </>
  );
}

export default App;
