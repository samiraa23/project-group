// AdminAppointments.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/questions');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleEdit = (appointment) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/questions/${id}`);
      setAppointments(appointments.filter(app => app.id !== id));
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAppointment(null);
  };

  return (
    <div className="flex flex-col items-center py-12 px-6 bg-gray-100">
      <div className="w-full max-w-6xl">
        {/* Appointments Table */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Manage Appointments</h2>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border-b border-gray-300 text-left">Name</th>
                <th className="py-3 px-4 border-b border-gray-300 text-left">Email</th>
                <th className="py-3 px-4 border-b border-gray-300 text-left">Phone</th>
                <th className="py-3 px-4 border-b border-gray-300 text-left">Department</th>
                <th className="py-3 px-4 border-b border-gray-300 text-left">Doctor</th>
                <th className="py-3 px-4 border-b border-gray-300 text-left">Date</th>
                <th className="py-3 px-4 border-b border-gray-300 text-left">Message</th>
                <th className="py-3 px-4 border-b border-gray-300 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((app) => (
                <tr key={app.id}>
                  <td className="py-2 px-4 border-b border-gray-300">{app.name}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{app.email}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{app.phone}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{app.department}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{app.doctor}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{app.date}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{app.message}</td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <button
                      onClick={() => handleEdit(app)}
                      className="bg-yellow-500 text-white py-1 px-3 rounded-md mr-2 hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(app.id)}
                      className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

     
      </div>
    </div>
  );
};

export default AdminAppointments;
