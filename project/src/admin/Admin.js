import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  // Hardcoded admin credentials
  const adminCredentials = {
    email: 'admin@example.com',
    password: 'admin123',
  };

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    // Validate form data against hardcoded credentials
    if (formData.email === adminCredentials.email && formData.password === adminCredentials.password) {
      // Navigate to Admin Appointments page upon successful login
      navigate('/adminappoint');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Login</h2>
        {error && <div className="text-red-600 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
