import React, { createContext, useContext, useState } from 'react';
import './App.css';
import { I18nContext } from './i18n-context';
import { Toggle } from '../../src/stories/Toggle/Toggle';
import { Header } from '../../src/stories/Header/Header';

export const ThemeContext = createContext('orange');

function App() {
  const [mode, setTheme] = useState('orange');
  const { language, i18n, setLanguage } = useContext(I18nContext);

  return (
    <div className="App">
      <div className="lang-switcher">
        <Toggle label={i18n[language].changeLang} onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')} />
        <Toggle label={i18n[language].changeTheme} onClick={() => setTheme(mode === 'orange' ? 'mint' : 'orange')} />
      </div>

      <ThemeContext.Provider value={mode}>
        <Header />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
