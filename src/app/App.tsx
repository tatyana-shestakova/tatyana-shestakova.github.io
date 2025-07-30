import React, { createContext, useState } from 'react';
import './App.css';
import { Header } from '../../src/components/Header/Header';
import { addManualCards, lazyLoad, manualLoad, mockList } from '../../src/composable/lazyLoad';
import { CardList } from '../../src/components/CardList/CardList';

export const ThemeContext = createContext('orange');

function App() {
  const [automaticLoad, setLoad] = useState(false);

  const changeLoad = () => {
    setLoad(!automaticLoad);
    if (automaticLoad) {
      manualLoad();
    } else {
      lazyLoad();
    }
  };

  return (
    <div className="App">
      <Header />
      <CardList list={mockList} onClick={() => addManualCards(6)} />
    </div>
  );
}

export default App;
