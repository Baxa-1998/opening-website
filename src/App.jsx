import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Ribon from './components/Ribbon/Ribon';
import Heroes from './components/Heroes/Heroes';
import Fireworks from './components/Fireworks/Fireworks';

function App() {
  return (
    <div className="App">
      <img
        className="fixed w-[80%] top-36 ml-[50%] translate-x-[-50%] opacity-10"
        src="./Drawer-logo.png"
        alt="drawer"
      />
      <Header />
      <Main />
      {/* <Heroes /> */}
      <Fireworks />
      <div className="h-[1200px]"></div>
    </div>
  );
}

export default App;
