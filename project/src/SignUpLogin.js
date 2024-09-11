import { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

const SignUpLogin = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Open and close SignUp modal
  const openSignUpModal = () => setShowSignUpModal(true);
  const closeSignUpModal = () => setShowSignUpModal(false);

  // Open and close Login modal
  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center space-x-4">
      <button
        onClick={openLoginModal}
        className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
      >
        Open Login
      </button>

      <button
        onClick={openSignUpModal}
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
      >
        Open Sign Up
      </button>

      {/* Render Login modal if showLoginModal is true */}
      {showLoginModal && <Login closeModal={closeLoginModal} />}

      {/* Render Sign Up modal if showSignUpModal is true */}
      {showSignUpModal && <SignUp closeModal={closeSignUpModal} />}
    </div>
  );
};

export default SignUpLogin;
