import React from 'react';
import Header from '../components/Header/Header';
import GlobalClimateSummit from '../components/Featured_Section/Featured_Section';
import PhotoBlock from '../components/Hero Section/Hero_Section';
import CardList from '../components/Card_List/Card_List';
const HomePage = () => {
  return (
    <div style={{ overflowY: 'auto', minHeight: '150vh' }}>
      <Header />
      <GlobalClimateSummit />
      <PhotoBlock />
      <CardList/>
    </div>
  );
};

export default HomePage;