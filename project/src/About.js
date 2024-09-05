import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
            We Offer Different Services To Improve<br/> Your Health
          </h2>
          <p className="text-gray-600">
            At our center, we are dedicated to enhancing your well-being through personalized care and innovative solutions.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h3>
            <p className="text-gray-600 mb-4">
              Our mission is to provide comprehensive health services tailored to meet your unique needs. We combine cutting-edge medical practices with compassionate care to ensure the best outcomes for our patients.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of dedicated professionals is committed to supporting you every step of the way, from initial consultation to ongoing care. We strive to make a positive impact on your health and quality of life.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Personalized care plans designed for your specific health needs.</li>
              <li>State-of-the-art facilities and advanced medical technology.</li>
              <li>A team of experienced and compassionate healthcare professionals.</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="path/to/your/image.jpg" // Update with the actual image source
                alt="Healthcare Services"
                className="w-full rounded-lg shadow-lg"
              />
              <a href="#" className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-600 p-4 rounded-full">
                  <svg
                    className="text-white w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11.25V13a.75.75 0 001.207.607l3.25-2.25a.75.75 0 000-1.214l-3.25-2.25A.75.75 0 009 6.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
