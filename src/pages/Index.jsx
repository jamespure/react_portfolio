import React from 'react'
import About from '../components/About/About';
import Cursor from '../components/Cursor/Cursor';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HeaderBanner from '../components/Header/HeaderBanner/HeaderBanner'
import MyPortfolio from '../components/Projects/Projects';

const homePage = () => {
  return (
    <>
      <Header />
      <HeaderBanner />
      <About />
      <MyPortfolio />
      <Cursor />
      <Footer />
    </>
  );
}

export default homePage