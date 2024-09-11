import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Forms() {

  const [activeSection, setActiveSection] = useState(null);

  const handleLearnMoreClick = (section) => {
    setActiveSection(activeSection === section ? null : section); // Toggle open/close
  };
  return (
    <div>
       <div
      className="bg-cover bg-center h-100"
   style={{ backgroundImage: `url('https://img.freepik.com/free-photo/blurred-abstract-background-interior-view-looking-out-toward-empty-office-lobby-entrance-doors-glass-curtain-wall-with-frame_1339-6363.jpg?ga=GA1.1.421194447.1722059295&semt=ais_hybrid')` }} 
    >
      <section className="container mx-auto my-16 p-4 ">
        <h1 className="text-5xl font-bold text-gray-900">
          We Provide <span className="text-blue-600">Medical</span> Services <br />That You Can <span className="text-blue-600">Trust!</span>
        </h1>
        <h1 className=" mx-auto my-6 p-1 ">
        Hospitals can build patient trust by providing skilled, compassionate healthcare professionals, <br/>ensuring clear communication about diagnoses and treatments, <br/>and maintaining high standards for safety and hygiene        </h1>
        <div className="mt-8 space-x-4">
          <NavLink
            to="/appointment">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Get Appointment</button>

            </NavLink>
            <NavLink
            to="/trust">
          <button className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800">Learn More</button>

            </NavLink>
        </div>
      </section>
      </div>

      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
      <div className="bg-blue-600 text-white p-8 rounded shadow">
        <h3 className="text-lg font-semibold">Emergency Cases</h3>
        <p className="mt-4">In case of an emergency, our hospital provides immediate medical attention for critical situations, including accidents, severe injuries, and sudden illnesses.</p>
        <button 
          onClick={() => handleLearnMoreClick('emergency')}
          className="block mt-4 text-white hover:underline"
        >
          Learn More
        </button>
        {activeSection === 'emergency' && (
          <div className="mt-4 text-white">
            <p>Our emergency department is open 24/7 and is equipped with state-of-the-art facilities and a team of highly trained emergency professionals.</p>
          </div>
        )}
      </div>
      <div className="bg-blue-600 text-white p-8 rounded shadow">
        <h3 className="text-lg font-semibold">Doctors Timetable</h3>
        <p className="mt-4">Check the timetable to find out when your preferred doctors are available for appointments and consultations throughout the week.</p>
        <button 
          onClick={() => handleLearnMoreClick('timetable')}
          className="block mt-4 text-white hover:underline"
        >
          Learn More
        </button>
        {activeSection === 'timetable' && (
          <div className="mt-4 text-white">
            <p>Our doctors have specific hours for consultations. You can view the complete timetable to plan your visit and ensure you get timely medical attention from our specialists.</p>
          </div>
        )}
      </div>
      <div className="bg-blue-600 text-white p-8 rounded shadow">
        <h3 className="text-lg font-semibold">Opening Hours</h3>
        <p className="mt-4">
          Monday - Friday: 8:00 AM - 8:00 PM<br />
          Saturday: 9:00 AM - 6:30 PM<br />
          Sunday: Closed
        </p>
        <button 
          onClick={() => handleLearnMoreClick('hours')}
          className="block mt-4 text-white hover:underline"
        >
          Learn More
        </button>
        {activeSection === 'hours' && (
          <div className="mt-4 text-white">
            <p>We are open to serve you throughout the week with extended hours on weekdays and adjusted hours on weekends. Please note that specific departments may have different hours.</p>
          </div>
        )}
      </div>
    </section>
    </div>
  )
}

export default Forms
