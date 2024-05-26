
import './App.css';
import React, { useState } from 'react';
import Home from './pages/Home';
import Bulb from './pages/Bulb';
import Colors from './pages/Colors';
import Forms from './pages/Forms';

// state management

function App() {


  return (
    <>
      <Home/>
      <Bulb/>
      <Colors/>
      <Forms/>
    </>
  );
}

export default App;
