import React from "react";

const HospitalInfo = () => {
  return (
    <div className="hospital-info bg-gray-50 py-12 px-12 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* About Us */}
        <section className="about-us mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">About Us</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            At <span className="font-semibold">Mediplus</span>, we are dedicated to providing comprehensive and
            compassionate healthcare services to our community. Established with
            a vision to enhance the well-being of those we serve, we combine
            state-of-the-art medical technology with a personalized approach to
            care.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Our team of skilled healthcare professionals is committed to
            delivering exceptional patient experiences through a multidisciplinary
            approach. We offer a wide range of services, including emergency care,
            specialized treatments, and preventive health services, all aimed at
            meeting the diverse needs of our patients.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            At <span className="font-semibold">Mediplus</span>, we are more than just a healthcare provider; we
            are a trusted partner in your journey towards better health. We strive
            to build lasting relationships with our patients and their families,
            guided by our core values of compassion, integrity, and excellence.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mission mb-12 bg-blue-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Our mission is to deliver exceptional healthcare services that meet
            the needs of our diverse community. We aim to provide patient-centered
            care through compassion, innovation, and a commitment to quality. By
            fostering a culture of trust, safety, and respect, we ensure that
            every individual receives the highest standard of care, regardless of
            their background or circumstances.
          </p>
        </section>

        {/* Vision Statement */}
        <section className="vision bg-blue-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Our vision is to be a world-class healthcare institution that sets the
            standard for excellence in clinical care, medical research, and
            education. We aspire to be the hospital of choice for patients,
            physicians, and healthcare professionals, driving advancements in
            medicine and improving the health and well-being of the communities we
            serve.
          </p>
        </section>
      {/* Vision Statement */}
        <section className="value mt-12 bg-blue-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">Our core value</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
          Our hospital is dedicated to delivering compassionate, patient-centered care, ensuring 
          that every individual feels valued, respected, and understood. We strive to provide a 
          comforting environment, where patients and their families receive not only high-quality
          medical treatment but also empathy, dignity, and support throughout their healthcare journey.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HospitalInfo;
