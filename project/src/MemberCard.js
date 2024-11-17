import React from 'react';

const MemberCard = ({ name, title, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 text-center bg-blue-600">
      <img
        className="w-full h-30 bg-blue-600 mb-4"
        src={imageUrl}
        alt={`${name}`}
      />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mt-2">{title}</p>
    </div>
  );
};

export default MemberCard;
