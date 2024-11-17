import React from 'react';

const Maternity = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Maternity</h1>
      <p className="text-lg mb-6">
        Our Maternity services ensure a comfortable and safe environment for expectant mothers. From prenatal care to childbirth and postnatal support, our experienced staff is here to guide mothers through every stage of pregnancy.
      </p>
      <div className="flex justify-around">
        <img src="https://via.placeholder.com/300x200" alt="Maternity 1" className="w-80 h-80 object-cover" />
        <img src="https://via.placeholder.com/300x200" alt="Maternity 2" className="w-80 h-80 object-cover" />
      </div>
    </div>
  );
};

export default Maternity;
