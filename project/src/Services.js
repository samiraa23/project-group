import React from 'react';

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
        <div className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Services</h2>
                    <p className="text-gray-600">Home / Services</p>
                </div>
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
    );
};

export default Services;
