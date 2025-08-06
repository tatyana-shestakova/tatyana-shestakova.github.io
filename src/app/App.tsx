import React, { createContext, useContext, useRef, useState } from 'react';
import './App.css';
import { Header } from '../../src/components/Header/Header';
import { CardList } from '../../src/components/CardList/CardList';
import { useOnScreen } from '../../src/components/LazyLoad/lazyload';
import { addRandomCards } from '../../src/composable/addRandomCards';
import { mockList } from '../../src/dto/mockCardsData';
import { Toggle } from '../../src/components/Toggle/Toggle';
import { I18nContext } from '../../src/providers/LanguageProvider';

export const ThemeContext = createContext('orange');

function App() {
  const elementRef = useRef<HTMLDivElement>(null);
  const { language, i18n } = useContext(I18nContext);

  const [mockArray, setMockArray] = useState(mockList);

  const [automaticLoad, setLoad] = useState(false);

  const isElementOnScreen = useOnScreen(elementRef, !automaticLoad);

  if (isElementOnScreen) {
    mockArray.push(...addRandomCards(3));
  }

  return (
    <div className="App">
      <Header>
        <Toggle label={i18n[language].changeLoad} onClick={() => setLoad(!automaticLoad)} />
      </Header>
      <CardList
        buttonRef={elementRef}
        list={mockArray}
        onClick={() => setMockArray((prev) => [...prev, ...addRandomCards(6)])}
      />
    </div>
  );
}

export default App;
