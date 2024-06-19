import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Services from '../components/Services';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
