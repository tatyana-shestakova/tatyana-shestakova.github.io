import React from 'react';
import { Header } from '../../src/components/Header/Header';
import '../styles/styles.sass';
import { MainCardList } from '../../src/components/Pages/MainCardList';

function MainPage() {
  return (
    <div className="App">
      <Header />
      <MainCardList />
    </div>
  );
}

export default MainPage;
