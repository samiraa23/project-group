import React, { useState } from 'react';
import MedicineForm from './MedicineForm';
import DoctorsForm from './DoctorsForm';
import AdminView from './DocotorAdmin';
import AdminContact from './AdminContact';
import DoctorsList from './ViewDoctors';
import MedicinesList from './ViewMedicine';


const AdminAppointments = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="sticky top-0 w-64 bg-blue-700 text-white h-screen">
        <ul className="space-y-4 p-4">
          <li>
            <button onClick={() => handleLinkClick('adminview')} className="w-full mt-10 text-left">
              Appointments
            </button>
          </li>
        
          <li>
            <button onClick={() => handleLinkClick('contacts')} className="w-full text-left">
              Contacts
            </button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('medicine')} className="w-full text-left">
              Add Medicine
            </button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('doctors')} className="w-full text-left">
              Add Doctor
            </button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('view medicine')} className="w-full text-left">
              view medicine
            </button>
          </li>  <li>
            <button onClick={() => handleLinkClick('view doctors')} className="w-full text-left">
              view Doctor
            </button>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        {activeSection === 'adminview' && <AdminView />}
        {activeSection === 'users'}
        {activeSection === 'contacts'   && <AdminContact />}
        {activeSection === 'medicine' && <MedicineForm />}
        {activeSection === 'doctors' && <DoctorsForm />}
        {activeSection === 'view doctors' && <DoctorsList/>}
        {activeSection === 'view medicine' && <MedicinesList/>}

      </div>
    </div>
  );
};

export default AdminAppointments;
