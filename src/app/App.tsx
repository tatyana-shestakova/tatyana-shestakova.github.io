import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';

const ThemeContext = createContext(null);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Текст писать тут</p>
      </header>
      <ThemeContext.Provider value="orange" />
    </div>
  );
}

export default App;
