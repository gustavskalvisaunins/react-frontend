import React from "react";
import './App.css';
import background from './assets/background-image.png';
import Overlay from "./components/overlay";


function App() {
 
  return (
    <div className="app">
      <Overlay />
      <div>
        <img src={background} alt="a pineapple wearing sunglasses" className="background"/>
      </div>
    </div>
  );
}

export default App;