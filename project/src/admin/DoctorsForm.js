import React, { useState } from 'react';
import axios from 'axios';

const DoctorsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    qualifications: '',
    experience: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      photo: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', formData.name);
    form.append('specialty', formData.specialty);
    form.append('qualifications', formData.qualifications);
    form.append('experience', formData.experience);
    form.append('photo', formData.photo);

    try {
      await axios.post('http://127.0.0.1:5500/doctors', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Doctor added successfully');
    } catch (error) {
      console.error('Error uploading doctor:', error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Doctor</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="specialty" className="block text-sm font-medium">
            Specialty
          </label>
          <input
            type="text"
            id="specialty"
            value={formData.specialty}
            onChange={handleChange}
            className="mt-1 p-2 w-full border"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="qualifications" className="block text-sm font-medium">
            Qualifications
          </label>
          <input
            type="text"
            id="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
            className="mt-1 p-2 w-full border"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="experience" className="block text-sm font-medium">
            Experience
          </label>
          <input
            type="text"
            id="experience"
            value={formData.experience}
            onChange={handleChange}
            className="mt-1 p-2 w-full border"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="photo" className="block text-sm font-medium">
            Doctor's Photo
          </label>
          <input
            type="file"
            id="photo"
            onChange={handleImageChange}
            className="mt-1 p-2 w-full border"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md w-full mt-4"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default DoctorsForm;
