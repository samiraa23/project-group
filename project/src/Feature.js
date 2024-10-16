import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: '🚑',
      title: 'Emergency Help',
      description:
        'Our dedicated emergency services are available 24/7, providing immediate assistance for critical situations. We ensure rapid response and effective care when you need it most.',
    },
    {
      id: 2,
      icon: '💊',
      title: 'Enriched Pharmacy',
      description:
        'Our pharmacy offers a comprehensive range of medications and health products. With a focus on quality and accessibility, we provide expert advice and personalized care to meet your pharmaceutical needs.',
    },
    {
      id: 3,
      icon: '🏥',
      title: 'Medical Treatment',
      description:
        'We provide a wide array of medical treatments and services, from routine check-ups to advanced procedures. Our team of skilled professionals is committed to delivering high-quality healthcare tailored to your needs.',
    },
    {
      id: 4,
      icon: '🏥',
      title: ' Treatment',
      description:
        'We provide a wide array of medical treatments and services, from routine check-ups to advanced procedures. Our team of skilled professionals is committed to delivering high-quality healthcare tailored to your needs.',
    }, {
      id: 5,
      icon: '🏥',
      title: ' Treatment',
      description:
        'We provide a wide array of medical treatments and services, from routine check-ups to advanced procedures. Our team of skilled professionals is committed to delivering high-quality healthcare tailored to your needs.',
    }, {
      id: 6,
      icon: '🏥',
      title: 'Medical care',
      description:
        'We provide a wide array of medical treatments and services, from routine check-ups to advanced procedures. Our team of skilled professionals is committed to delivering high-quality healthcare tailored to your needs.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          We Are Always Ready To Help You <br />& Your Family
        </h2>
        <p className="text-gray-600 mb-12">
          Experience top-notch healthcare services with our comprehensive support system designed to meet all your medical needs.
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
