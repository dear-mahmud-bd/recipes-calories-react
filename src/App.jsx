/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import OurRecipes from './components/OurRecipes/OurRecipes';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <div className='mb-20'>
        <Navbar></Navbar>
      </div>
      <Banner className='mt-10'></Banner>
      <OurRecipes></OurRecipes>
      <Footer></Footer>
    </>
  );
};

export default App;