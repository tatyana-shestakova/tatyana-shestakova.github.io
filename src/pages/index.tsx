import React, { useContext, useState } from 'react';
import { Header } from '../../src/components/Header/Header';
import { Toggle } from '../../src/components/Toggle/Toggle';
import { I18nContext } from '../../src/providers/LanguageProvider';
import '../styles/styles.sass';
import { MainCardList } from '../../src/components/Pages/MainCardList';

function MainPage() {
  const { language, i18n } = useContext(I18nContext);

  const [automaticLoad, setLoad] = useState(false);

  return (
    <div className="App">
      <Header>
        <Toggle label={i18n[language].changeLoad} onClick={() => setLoad(!automaticLoad)} />
      </Header>
      <MainCardList automaticLoad={automaticLoad} />
    </div>
  );
}

export default MainPage;
