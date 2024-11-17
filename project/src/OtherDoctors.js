import React from 'react';

// Example data for doctors
const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    image: 'https://img.freepik.com/free-photo/portrait-nurse-putting-protective-latex-gloves_482257-94408.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid',
  },
  {
    name: 'Dr. Emily Carter',
    image: 'https://img.freepik.com/free-photo/portrait-young-african-american-woman-doctor-against-blue-background_93675-132921.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid',
  },
  {
    name: 'Dr. Olivia Martin',
    image: 'https://img.freepik.com/premium-photo/portrait-young-african-female-doctor-medical-mask-blue-studio_93675-150048.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid',
  },
  {
    name: 'Dr. James Brown',
    image: 'https://img.freepik.com/free-photo/woman-nurse-wearing-face-mask-using-laptop-front-camera-medical-assistant-uniform-having-protection-against-coronavirus-while-holding-computer-work-healthcare_482257-36516.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid',

  },

  {
    name: 'Dr. David Smith',
    image: 'https://img.freepik.com/premium-photo/confident-black-doctor-posing-blue-studio-background_93675-178866.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid',
  },
  {
    name: 'Dr. Anna Thompson',
    image: 'https://img.freepik.com/free-photo/front-view-young-doctor-medical-suit-with-red-mask-blue_140725-154098.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid',
  },
 
];

const OtherDoctors = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-8">Other Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {doctors.map((doctor, index) => (
          <div key={index} className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6 text-center">
            <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover mb-4 rounded-md" />
            <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default OtherDoctors;
