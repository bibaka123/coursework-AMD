import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">
                <Link
                    to="/"
                    className="hover:text-blue-800 cursor-pointer"
                >
                    KCN SHORTEN URL
                </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex space-x-6">
                <Link
                    to="/"
                    className={`pb-1 hover:text-blue-600 cursor-pointer ${location.pathname === "/" ? "border-b-2 border-blue-600" : ""
                        }`}
                >
                    Home
                </Link>
                <Link
                    to="/login"
                    className={`pb-1 hover:text-blue-600 cursor-pointer ${location.pathname === "/login" ? "border-b-2 border-blue-600" : ""
                        }`}
                >
                    Login
                </Link>
                <Link
                    to="/profile"
                    className={`pb-1 hover:text-blue-600 cursor-pointer ${location.pathname === "/profile" ? "border-b-2 border-blue-600" : ""
                        }`}
                >
                    Profile
                </Link>
                <Link
                    to="/register"
                    className={`pb-1 hover:text-blue-600 cursor-pointer ${location.pathname === "/register" ? "border-b-2 border-blue-600" : ""
                        }`}
                >
                    Register
                </Link>
                <Link
                    to="/contact"
                    className={`pb-1 hover:text-blue-600 cursor-pointer ${location.pathname === "/contact" ? "border-b-2 border-blue-600" : ""
                        }`}
                >
                    Contact us
                </Link>

            </nav>
        </header>
    );
};

export default Navbar;