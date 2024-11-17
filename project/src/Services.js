import React from 'react';
import { NavLink } from 'react-router-dom';
import MainServices from './services/MainServices';

const services = [
    {
        title: 'General Treatment',
        description: 'Comprehensive medical care for common ailments and health issues. Our general treatment services address various health concerns with expert diagnosis and treatment.',
        icon: '🩺'
    },
    {
        title: 'Teeth Whitening',
        description: 'Professional teeth whitening procedures to enhance your smile. Our dental team uses advanced techniques to help you achieve a brighter and more confident smile.',
        icon: '😁'
    },
    {
        title: 'Heart Surgery',
        description: 'Advanced cardiac surgery services for heart conditions. Our experienced cardiologists perform complex procedures to improve heart health and functionality.',
        icon: '❤️‍🩹'
    },
    {
        title: 'Ear Treatment',
        description: 'Specialized care for ear-related issues, including infections and hearing problems. We provide thorough evaluations and effective treatments for better ear health.',
        icon: '👂'
    },
    {
        title: 'Vision Problems',
        description: 'Expert care for vision issues, including eye exams and corrective treatments. Our ophthalmologists offer solutions to improve and maintain your visual health.',
        icon: '👓'
    },
    {
        title: 'Blood Transfusion',
        description: 'Safe and efficient blood transfusion services for patients in need. Our medical team ensures the highest standards of care and safety during the transfusion process.',
        icon: '🩸'
    }
];

const Services = () => {
    return (
        <>
            <div
        className="bg-cover p-20 text-center text-2xl text-blue-600 bg-center h-100"
     style={{ backgroundImage: `url('https://img.freepik.com/free-photo/crop-doctors-shaking-hands_23-2147896209.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid')` }} >
     <NavLink
     to="/"
     className="text-gray-700 hover:text-blue-600"
     activeClassName="font-bold text-blue-600"
   >
     Home
   </NavLink>/
   <NavLink
     to="/services"
     className="text-gray-700 hover:text-blue-600"
     activeClassName="font-bold text-blue-600"
   >
     services
   </NavLink>
      </div>
        <div className="bg-white py-16">
            <div className="container mx-auto px-4">
        
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="text-center p-6 border rounded-lg shadow-lg">
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <MainServices />
        </>
    );
};

export default Services;
