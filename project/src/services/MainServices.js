import React from 'react';
import { Link } from 'react-router-dom'


const services = [
  {
    title: 'Emergency Care',
    path: '/emergency',
    description: 'Providing life-saving medical attention in critical situations, our emergency department is equipped with state-of-the-art technology and a dedicated team of professionals ready to respond 24/7 to severe injuries, sudden illnesses, and trauma cases. With a focus on rapid diagnosis and treatment, we ensure patients receive immediate and expert care when every second counts.',
    image: 'https://img.freepik.com/premium-photo/doctor-nurse-assessing-patient-emergency-room_1271419-26605.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid', // Replace with actual image URLs
  },
  {
    title: 'Surgery',
    path: '/surgery',
    description: 'Offering a broad spectrum of surgical procedures, our experienced surgical team delivers precise and effective treatment across various specialties. From minimally invasive surgeries to complex operations, we prioritize patient safety and comfort, supported by advanced surgical equipment and post-operative care that ensures a smooth recovery.',
    image: 'https://img.freepik.com/free-photo/different-doctors-doing-surgical-procedure-patient_23-2148962491.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid', // Replace with actual image URLs
  },
  {
    title: 'Maternity Care',
    path: '/maternity',
    description: 'Our maternity care services provide comprehensive support for mothers throughout their pregnancy journey, ensuring the health and well-being of both mother and baby. From prenatal checkups and education to labor, delivery, and postpartum care, our experienced staff offers personalized care plans, birthing options, and a nurturing environment for a safe and positive childbirth experience.',
    image: 'https://img.freepik.com/premium-photo/prenatal-checkup-healthy-pregnancy_99233-118550.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid', // Replace with actual image URLs
  },
  {
    title: 'Pediatric Care',
    path: '/pediatric',
    description: 'Specialized in the healthcare of infants, children, and adolescents, our pediatric services ensure the growth and development of young patients are closely monitored. With a team of pediatricians and child health experts, we focus on preventative care, vaccinations, and treatments for a wide range of childhood illnesses, all in a child-friendly and compassionate environment.',
    image: 'https://img.freepik.com/premium-photo/baby-s-visit-doctor_53876-85655.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid', // Replace with actual image URLs
  },
  {
    title: 'Diagnostic Imaging',
    path: '/diagnostic',
    description: 'Our diagnostic imaging department is equipped with cutting-edge technologies such as X-rays, MRIs, CT scans, and ultrasound to provide accurate and detailed visualizations of the body internal structures. These imaging services play a critical role in diagnosing various conditions, from fractures to complex diseases, ensuring that our patients receive timely and precise diagnoses.',
    image: 'https://img.freepik.com/premium-photo/clear-mri-photos-medical-research-education_1199394-182895.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid', // Replace with actual image URLs
  },
  {
    title: 'Outpatient Services',
    path: '/outpatient',
    description: 'For patients who require medical consultations, treatments, and follow-up care without hospitalization, our outpatient services offer convenient and expert care. With a focus on preventive medicine, diagnostics, and management of chronic conditions, we provide personalized care plans that allow patients to receive quality care while maintaining their normal routine.',
    image: 'https://img.freepik.com/premium-photo/nurse-showing-x-ray-scan-patient-waiting-area-lobby-explaining-diagnosis-after-analyzing-bones-radiography-results-hospital-reception-lobby-doing-checkup-consultation-waiting-room_482257-52122.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid', // Replace with actual image URLs
  },
  {
    title: 'Pharmacy',
    path: '/pharmacy',
    description: 'Our on-site pharmacy provides easy access to prescription medications, over-the-counter drugs, and expert consultations. We work closely with healthcare providers to ensure patients receive the correct medications and guidance on proper usage, all while offering friendly service and support for medication management.',
    image: 'https://img.freepik.com/free-photo/portrait-woman-working-pharmaceutical-industry_23-2151684863.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid', // Replace with actual image URLs
  },
  {
    title: 'Physical Therapy',
    path: '/physical',
    description: 'Our physical therapy services are designed to help patients regain strength, mobility, and function after surgery or injury. Whether recovering from orthopedic procedures, neurological conditions, or sports injuries, our therapists develop customized rehabilitation programs that focus on pain management, functional recovery, and long-term physical health.',
    image: 'https://img.freepik.com/premium-photo/medical-assistant-helping-patient-with-physiotherapy-exercises_23-2149071485.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid', // Replace with actual image URLs
  },
];

const MainServices = () => {
  return (
    <>
      <div className="py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Hospital Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out mx-auto"
              >
                <Link to={service.path}>
                <img className="w-full h-40 object-cover rounded-t-lg" alt="Card " src={service.image} />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-blue-600">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="flex justify-between items-center mt-4">
                  
                    
                  
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainServices;
