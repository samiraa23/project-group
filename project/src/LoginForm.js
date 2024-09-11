import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showModal, setShowModal] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const closeModal = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((users) => {
        const user = users.find(
          (user) => user.email === email && user.password === password
        );

        if (user) {
          alert("Login successful!");
          setShowModal(false);
          navigate("/"); // Redirect to home page
        } else {
          setError("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={closeModal}
            >
              <NavLink to="/">
                <div className="text-blue-600 font-bold text-xl mb-4 md:mb-0">&times;</div>
              </NavLink>
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 text-center">{error}</p>}
              <button className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
