import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, userData, setToken, setUserData } = useContext(AppContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUserData(null);
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/" className="hover:text-blue-800 cursor-pointer">
          KCN SHORTEN URL
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-6 items-center">
        <Link
          to="/"
          className={`pb-1 hover:text-blue-600 cursor-pointer ${location.pathname === "/" ? "border-b-2 border-blue-600" : ""}`}
        >
          Home
        </Link>

        {!token ? (
          <>
            <Link
              to="/login"
              className={`pb-1 hover:text-blue-600 cursor-pointer ${location.pathname === "/login" ? "border-b-2 border-blue-600" : ""}`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`pb-1 hover:text-blue-600 cursor-pointer ${location.pathname === "/register" ? "border-b-2 border-blue-600" : ""}`}
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link className={`pb-1 hover:text-blue-600 cursor-pointer ${location.pathname === "/profile" ? "border-b-2 border-blue-600" : ""}`} to="/profile">
              👋 {userData?.email || "User"}
            </Link>
            <button
              onClick={handleLogout}
              className="text-red-500 hover:underline cursor-pointer"
            >
              Logout
            </button>
          </>
        )}

        <Link
          to="/contact"
          className={`pb-1 hover:text-blue-600 cursor-pointer ${location.pathname === "/contact" ? "border-b-2 border-blue-600" : ""}`}
        >
          Contact us
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
