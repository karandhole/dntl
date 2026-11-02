import React from 'react'
import MainSlider from '../components/Slider/MainSlider';
import AboutSection from '../components/AboutSection/AboutSection';
import CompanyHistory from '../components/History/CompanyHistory';
import ProductSection from '../components/Prducts/ProductSection';
import PlantServices from '../components/PlantService/PlantServices';
import CompanyStats from '../components/Counter/CompanyStats';

const Home = () => {
  
  return (
   <main>
      <MainSlider />
      <AboutSection/>
      <CompanyHistory/>
      <ProductSection/>
      <PlantServices/>
      <CompanyStats/>
      {/* Add your remaining Home page sections below */}
    </main>
  );
};




export default Home;
