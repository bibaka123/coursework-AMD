import React, { useState } from "react";
import axios from "axios"; // Import axios
import { PiEyeClosed } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(null); // State to handle errors
  const [success, setSuccess] = useState(null); // State to handle success messages

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/auth/register", {
        username,
        email,
        password,
      });
      console.log("Registration successful:", response.data);
      setSuccess("Registration successful! You can now log in.");
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error("Registration failed:", err.response?.data?.error || err.message);
      setError(err.response?.data?.error || "An error occurred during registration.");
      setSuccess(null); // Clear any previous success messages
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h1>
        <div className="flex flex-col space-y-4">
          {/* Username Input */}
          <h3 className="text-lg font-semibold text-gray-800">Username</h3>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email Input */}
          <h3 className="text-lg font-semibold text-gray-800">Email</h3>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password Input */}
          <h3 className="text-lg font-semibold text-gray-800">Password</h3>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <PiEyeBold className="text-gray-500 hover:text-gray-700" size={20} />
              ) : (
                <PiEyeClosed className="text-gray-500 hover:text-gray-700" size={20} />
              )}
            </div>
          </div>

          {/* Confirm Password Input */}
          <h3 className="text-lg font-semibold text-gray-800">Password again</h3>
          <div className="relative w-full">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <PiEyeBold className="text-gray-500 hover:text-gray-700" size={20} />
              ) : (
                <PiEyeClosed className="text-gray-500 hover:text-gray-700" size={20} />
              )}
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Success Message */}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          {/* Register Button */}
          <button
            onClick={handleRegister}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;