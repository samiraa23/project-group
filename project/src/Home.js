import React from 'react';
import FeaturesSection from './Feature';
import AboutSection from './About';
import Forms from './Forms';
const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <Forms />
      <FeaturesSection />
      <AboutSection />
    </div>
  );
};

export default HomePage;
