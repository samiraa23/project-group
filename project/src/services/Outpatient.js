import React from 'react';

const Outpatients = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Pediatrics</h1>
      <p className="text-lg mb-6">
        Our Pediatrics department focuses on the health and wellness of children, from newborns to adolescents. 
        We provide routine check-ups, vaccinations, and treatments for various conditions with a child-friendly approach.
      </p>
      <div className="flex justify-around">
        <img src="https://via.placeholder.com/300x200" alt="Pediatrics 1" className="w-80 h-80 object-cover" />
        <img src="https://via.placeholder.com/300x200" alt="Pediatrics 2" className="w-80 h-80 object-cover" />
      </div>
    </div>
  );
};

export default Outpatients;
