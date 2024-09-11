import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import Footer from './Footer';
import Services from './Services';
import DoctorGrid from './Doctors';
import Contact from './Contact';
import FAQ from './FAQ';
import AppointmentBooking from './Appointment';
import TrustInMedical from './Trust';
import Admin from './Admin';
import AdminAppointments from './AdminApointment';
import Header from './Header';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import HospitalInfo from './About';

function App() {
  return (
    <Router>
      <div>
        <Header />
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
          <Route path='signup' element={<SignUpForm />} />
          <Route path='login' element={<LoginForm />} />
          <Route path='about' element={<HospitalInfo />} />


      </Routes>
      </div>
      <Footer />
    </Router>


// <div className="relative group">
// <NavLink to="/pages" activeClassName="text-blue-500" className="text-gray-700 hover:text-blue-500">
//   Pages
// </NavLink>
// {/* Dropdown */}
// <ul className="absolute hidden group-hover:block bg-white shadow-md py-4 px-4 text-">
//   <li>
//     <NavLink to="/signup" className="block px-4 py-2 hover:bg-gray-200">
//       Sign up
//     </NavLink>
//   </li>
//   <li>
//     <NavLink to="/login" className="block px-4 py-2 hover:bg-gray-200">
//       login
//     </NavLink>
//   </li>
// </ul>
// </div>
  );
}

export default App;

