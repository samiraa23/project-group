import React, { useState, useEffect } from 'react';

const AppointmentBooking = () => {
  const [hasProfile, setHasProfile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Select Department',
    doctor: '',
    date: '',
    message: '',
  });

  useEffect(() => {
    // Fetch profile details from localStorage or an API to check completeness
    const profile = JSON.parse(localStorage.getItem('profile')); // Assume profile is stored in localStorage
    if (profile && profile.name && profile.email && profile.phone) {
      setHasProfile(true);
    } else {
      setHasProfile(false);
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!hasProfile) {
      alert('Please complete your profile to book an appointment.');
      return;
    }
    try {
      await fetch('http://127.0.0.1:5500/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      alert('Appointment booked successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: 'Select Department',
        doctor: '',
        date: '',
        message: '',
      });
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('There was an error booking your appointment. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center py-12 px-6 bg-gray-100">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between">
          {hasProfile ? (
            <div className="w-full md:w-2/3 bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Book Your Appointment</h2>
              <p className="mb-6 text-gray-600">
                We will confirm your appointment within 2 hours.
              </p>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                {/* Form fields here */}
              </form>
            </div>
          ) : (
            <div className="w-full text-center bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Complete Your Profile</h2>
              <p className="mb-4 text-gray-600">
                Please complete your profile to access the appointment booking.
              </p>
              <button
                onClick={() => window.location.href = '/profile'}
                className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
              >
                Go to Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
