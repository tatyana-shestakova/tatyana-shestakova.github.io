import React, { createContext } from 'react';
import './App.css';
import { Header } from '../../src/stories/Header/Header';

export const ThemeContext = createContext('orange');

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
