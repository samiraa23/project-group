import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and dynamic websites using modern technologies.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    title: 'Mobile Development',
    description: 'Creating mobile applications for iOS and Android platforms.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user interfaces with a focus on user experience.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    title: 'SEO Optimization',
    description: 'Improving website visibility on search engines to drive more traffic.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    title: 'Cloud Computing',
    description: 'Providing scalable cloud solutions for businesses.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    title: 'Cybersecurity',
    description: 'Ensuring the security of digital assets through best practices.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    title: 'E-commerce Solutions',
    description: 'Creating tailored e-commerce platforms to grow your business.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    title: 'Data Analysis',
    description: 'Leveraging data to provide actionable business insights.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
];

const MainServices = () => {
  return (
    <>
      <div className="py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out mx-auto"
              >
                <img className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={service.image} />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainServices;
