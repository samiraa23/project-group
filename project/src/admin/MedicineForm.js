import React, { useState } from 'react';
import axios from 'axios';

const MedicineForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
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
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', formData.name);
    form.append('description', formData.description);
    form.append('price', formData.price);
    form.append('image', formData.image);

    try {
      await axios.post('http://127.0.0.1:5500/medicine', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Medicine added successfully');
    } catch (error) {
      console.error('Error uploading medicine:', error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Medicine</h2>
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
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 p-2 w-full border"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium">
            Medicine Image
          </label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="mt-1 p-2 w-full border"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md w-full mt-4"
        >
          Add Medicine
        </button>
      </form>
    </div>
  );
};

export default MedicineForm;
