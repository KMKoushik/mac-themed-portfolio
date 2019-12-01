import React from 'react';
import './App.css';
import LockScreen from './screens/LockScreen';
import logo from './images/hi1.png';
import { isMobile } from './util';

function App() {
  const lockScreen = (
    <div>
      <img src={logo} class="logo" alt="Hello" />
      <h1 className="h1">Koushik Mohan's Portfolio</h1>
      <span>{`${isMobile() ? '>>>> Swipe right' : 'Click'}`} to unlock</span>
    </div>);

  return (
    <div className="App">
      <LockScreen lockedscreen={lockScreen} />
    </div>
  );
}

export default App;
