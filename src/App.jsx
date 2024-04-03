import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Ribon from './components/Ribbon/Ribon';

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
      <div className="h-[700px] border">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequatur corrupti ut.
          Maxime possimus culpa itaque officia fugit cupiditate doloremque consectetur aperiam.
          Culpa adipisci dolor blanditiis temporibus accusamus, consequuntur nostrum.
        </h2>
      </div>
      <Ribon />
    </div>
  );
}

export default App;
