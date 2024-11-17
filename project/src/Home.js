import React from 'react';
import FeaturesSection from './Feature';
import AboutSection from './AboutSection';
import Banner from './Banner';
import StatsSection from './Section';
import ImageLayout from './Carousel';
import MainServices from './services/MainServices';
import Management from './Management';
const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <Banner />
      <MainServices />
      <Management />
      <FeaturesSection />
      <StatsSection />
      <AboutSection />
      <ImageLayout />

    </div>
  );
};

export default HomePage;
