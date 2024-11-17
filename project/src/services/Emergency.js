import React from 'react';

const EmergencyCare = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Emergency Care</h1>
      <p className="text-lg mb-6">
        Our Emergency Care department is open 24/7, providing immediate attention to critical injuries and illnesses. 
        Our highly trained team ensures that patients receive the best care in a time-sensitive environment, 
        utilizing advanced technology and life-saving techniques.
      </p>
      <div className="flex justify-around">
        <img src="https://via.placeholder.com/300x200" alt="Emergency Care 1" className="w-80 h-80 object-cover" />
        <img src="https://via.placeholder.com/300x200" alt="Emergency Care 2" className="w-80 h-80 object-cover" />
      </div>
    </div>
  );
};

export default EmergencyCare;
