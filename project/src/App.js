import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import Footer from './Footer';
import Services from './Services';
import DoctorGrid from './Doctors';
import Contact from './Contact';
import FAQ from './FAQ';
import Nav from './Nav';
import AppointmentBooking from './Appointment';
import TrustInMedical from './Trust';
import Admin from './Admin';
import AdminAppointments from './AdminApointment';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* HomePage is default at "/" */}
          <Route path="/doctors" element={<DoctorGrid />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/appointment" element={<AppointmentBooking />} />
          <Route path="/trust" element={<TrustInMedical />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/adminappoint' element={<AdminAppointments />} />



        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

