import React, { useState } from "react";
import { PiEyeClosed } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleGoogleLogin = () => {
        console.log("Google login clicked");
    };

    const handleLogin = () => {
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Login to Your Account
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

                    {/* Login Button */}
                    <button
                        onClick={handleLogin}
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Login
                    </button>

                    {/* Google Login Button */}
                    <button
                        onClick={handleGoogleLogin}
                        className="flex items-center justify-center w-full px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                    >
                        <span className="mr-2">🔴</span> Login with Google
                    </button>

                    {/* Register Link */}
                    <p className="text-center text-gray-600 mt-4">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-blue-600 hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;