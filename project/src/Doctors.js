import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Example data for doctors
const doctors = [
    {
        name: 'Collis Molate',
        specialty: 'Neurosurgeon',
        imageUrl: 'https://img.freepik.com/free-photo/medical-nurses-working-together-hospital_23-2150829871.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid',
        description: 'Dr. Collis Molate is a highly experienced neurosurgeon with over 15 years of practice in brain and spinal surgeries.',
        contact: 'collis@example.com',
        experience: '15 years',
        education: 'Harvard Medical School',
        hospital: 'Saint Joseph Hospital',
        workingHours: 'Mon-Fri, 9 AM - 5 PM',
        location: 'New York, USA'
    },
    {
        name: 'Domani Plavon',
        specialty: 'Neurosurgeon',
        imageUrl: 'https://img.freepik.com/free-photo/african-american-doctor-man-with-thumbs-up-standing-corridor-hospital_1303-21234.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid',
        description: 'Dr. Domani Plavon specializes in complex neurosurgical procedures, offering world-class patient care.',
        contact: 'domani@example.com',
        experience: '10 years',
        education: 'Stanford University School of Medicine',
        hospital: 'Mercy General Hospital',
        workingHours: 'Tue-Sat, 10 AM - 6 PM',
        location: 'Chicago, USA'
    },
    {
        name: 'John Mard',
        specialty: 'Dental Surgeon',
        imageUrl: 'https://img.freepik.com/free-photo/physician-having-conversation-with-adult-medical-cabinet-taking-notes-about-health-care-diagnosis-general-practitioner-talking-mother-about-recovery-treatment-appointment_482257-41817.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid',
        description: 'Dr. John Mard is a leading dental surgeon known for his expertise in oral surgeries and dental implants.',
        contact: 'john@example.com',
        experience: '12 years',
        education: 'UCLA School of Dentistry',
        hospital: 'Grand Dental Clinic',
        workingHours: 'Mon-Fri, 8 AM - 4 PM',
        location: 'Los Angeles, USA'
    },
    {
        name: 'Jane Doe',
        specialty: 'Pediatrician',
        imageUrl: 'https://img.freepik.com/free-photo/nurse-wearing-scrubs-while-working-clinic_23-2149844662.jpg?t=st=1725493637~exp=1725497237~hmac=fa52281c73c3773cf3c337b179c2d183dcd542cc30df1ba24ff0798a1afcdf0c&w=1380',
        description: 'Dr. Jane Doe provides exceptional pediatric care, focusing on childhood growth and development.',
        contact: 'jane@example.com',
        experience: '8 years',
        education: 'Johns Hopkins School of Medicine',
        hospital: 'Children\'s Healthcare of Atlanta',
        workingHours: 'Mon-Fri, 10 AM - 4 PM',
        location: 'Atlanta, USA'
    },
    {
        name: 'Alex Smith',
        specialty: 'Cardiologist',
        imageUrl: 'https://t4.ftcdn.net/jpg/02/45/28/99/240_F_245289970_ZmyuKoFChVys8CcwCZsrwxC353ehsHyH.jpg',
        description: 'Dr. Alex Smith is a renowned cardiologist with expertise in treating heart conditions.',
        contact: 'alex@example.com',
        experience: '18 years',
        education: 'Mayo Clinic School of Medicine',
        hospital: 'Cleveland Clinic',
        workingHours: 'Mon-Thu, 9 AM - 3 PM',
        location: 'Cleveland, USA'
    },
    {
        name: 'Emily Stone',
        specialty: 'General Surgeon',
        imageUrl: 'https://img.freepik.com/free-photo/confident-doctor-hospital-room_9975-22900.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid',
        description: 'Dr. Emily Stone is a skilled general surgeon specializing in minimally invasive surgeries.',
        contact: 'emily@example.com',
        experience: '20 years',
        education: 'Yale School of Medicine',
        hospital: 'Mount Sinai Hospital',
        workingHours: 'Wed-Sat, 11 AM - 7 PM',
        location: 'New York, USA'
    }
];

const DoctorGrid = () => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    // Function to handle doctor selection
    const handleDoctorClick = (doctor) => {
        setSelectedDoctor(doctor);
    };

    // Function to go back to the doctor grid
    const handleBack = () => {
        setSelectedDoctor(null);
    };

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
     to="/doctors"
     className="text-gray-700 hover:text-blue-600"
     activeClassName="font-bold text-blue-600"
   >
     Doctor
   </NavLink>
      </div>
        <div className="container mx-auto px-4 py-8">
          
            {selectedDoctor ? (
                // Detailed view for the selected doctor
                <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
                    <img src={selectedDoctor.imageUrl} alt={selectedDoctor.name} className="w-full h-64 object-cover mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{selectedDoctor.name}</h3>
                    <p className="text-gray-600 mb-4">{selectedDoctor.specialty}</p>
                    <p className="text-gray-700 mb-4">{selectedDoctor.description}</p>
                    <p className="text-blue-600 mb-2"><strong>Contact:</strong> {selectedDoctor.contact}</p>
                    <p className="text-gray-600 mb-2"><strong>Experience:</strong> {selectedDoctor.experience}</p>
                    <p className="text-gray-600 mb-2"><strong>Education:</strong> {selectedDoctor.education}</p>
                    <p className="text-gray-600 mb-2"><strong>Hospital:</strong> {selectedDoctor.hospital}</p>
                    <p className="text-gray-600 mb-2"><strong>Working Hours:</strong> {selectedDoctor.workingHours}</p>
                    <p className="text-gray-600 mb-4"><strong>Location:</strong> {selectedDoctor.location}</p>
                    <button
                        onClick={handleBack}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Back to Doctors List
                    </button>
                </div>
            ) : (
                // Doctor grid view
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {doctors.map((doctor, index) => (
                        <div
                            key={index}
                            onClick={() => handleDoctorClick(doctor)}
                            className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <img src={doctor.imageUrl} alt={doctor.name} className="w-full h-64 object-cover" />
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-bold mb-2">{doctor.name}</h3>
                                <p className="text-gray-600">{doctor.specialty}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    );
};

export default DoctorGrid;
