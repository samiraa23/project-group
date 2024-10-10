import React from 'react';
import FeaturesSection from './Feature';
import AboutSection from './AboutSection';
import Forms from './Forms';
import StatsSection from './Section';
import ImageLayout from './Carousel';
import MainServices from './MainServices';
const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <Forms />
      <MainServices />
      <FeaturesSection />
      <StatsSection />
      <AboutSection />
      <ImageLayout />

    </div>
  );
};

export default HomePage;
