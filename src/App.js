import React from 'react';
import Logo from "./new_flag.png";
import over from "./new_download_2.png";
import './App.css';

function App() {
  function hide1(){
    var element=document.querySelector('.App-over');
    element.style.visibility='hidden';
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="download" /> 
        <img src={over} className="App-over" onClick={hide1}/>
      </header>
    </div>
  );
}

export default App;