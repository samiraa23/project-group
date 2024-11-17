import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ closeModal, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5300/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Invalid email or password");
        }
      })
      .then((data) => {
        // Assuming the API returns user details like { name: 'Jane Doe', email: 'jane.doe@example.com' }
        alert("Login successful!");

        // Pass the user data back to the Header component through onLoginSuccess
        onLoginSuccess(data);

        // Store the user data in localStorage
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify(data.email)); // Store the user's email for simplicity

        // Close the login modal
        closeModal();

        // Redirect to the homepage
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);  // Set error message if login fails
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            onClick={closeModal}
          >
            &times;
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
                required
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
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
