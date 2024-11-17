import React from 'react';

const Physical = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Pharmacy</h1>
      <p className="text-lg mb-6">
        Our hospital pharmacy is equipped to provide prescription medications as well as over-the-counter remedies. 
        Our pharmacists work closely with doctors to ensure that patients receive the correct medications and understand their usage.
      </p>
      <div className="flex justify-around">
        <img src="https://via.placeholder.com/300x200" alt="Pharmacy 1" className="w-80 h-80 object-cover" />
        <img src="https://via.placeholder.com/300x200" alt="Pharmacy 2" className="w-80 h-80 object-cover" />
      </div>
    </div>
  );
};

export default Physical;
