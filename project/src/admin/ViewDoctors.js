import { useEffect, useState } from "react";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    description: "",
    contact: "",
    experience: "",
    education: "",
    hospital: "",
    workingHours: "",
    location: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5100/doctors");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setDoctors(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleEdit = (doctor) => {
    setSelectedDoctor(doctor);
    setFormData({ ...doctor });
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5100/doctors/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      setDoctors(doctors.filter((doctor) => doctor.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5100/doctors/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const updatedDoctor = await response.json();
      setDoctors(doctors.map((doctor) => (doctor.id === id ? updatedDoctor : doctor)));
      setSelectedDoctor(null); // Close the modal after updating
    } catch (err) {
      setError(err.message);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <p className="text-center text-blue-500 font-semibold mt-8">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 font-semibold mt-8">Error: {error}</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Our Doctors</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={`http://127.0.0.1:5100/${doctor.imageUrl}`}
              alt={doctor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{doctor.specialty}</p>
              <p className="text-gray-700 text-sm mb-4">{doctor.description}</p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleEdit(doctor)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(doctor.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying doctor details and editing */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 relative">
            <button
              className="text-red-500 font-bold text-lg absolute top-4 right-4"
              onClick={() => setSelectedDoctor(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Doctor</h2>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleInputChange}
                  placeholder="Specialty"
                  className="w-full p-2 border rounded"
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Description"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder="Contact"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Experience"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  placeholder="Education"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleInputChange}
                  placeholder="Hospital"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="workingHours"
                  value={formData.workingHours}
                  onChange={handleInputChange}
                  placeholder="Working Hours"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Location"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="Image URL"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedDoctor(null)}
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleUpdate(selectedDoctor.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Update Doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorsList;
