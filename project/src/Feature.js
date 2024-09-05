import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: '🚑', // You can replace this with an actual icon or image
      title: 'Emergency Help',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi quam vulputate.',
    },
    {
      id: 2,
      icon: '💊', // You can replace this with an actual icon or image
      title: 'Enriched Pharmacy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi quam vulputate.',
    },
    {
      id: 3,
      icon: '🏥', // You can replace this with an actual icon or image
      title: 'Medical Treatment',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi quam vulputate.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          We Are Always Ready To Help You <br/>& Your Family
        </h2>
        <p className="text-gray-600 mb-12">
          Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet pretiums
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center p-6 bg-white shadow-lg rounded-lg">
              <div className="text-blue-600 text-5xl mb-4">{feature.icon}</div> {/* Replace with an actual image or SVG */}
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
