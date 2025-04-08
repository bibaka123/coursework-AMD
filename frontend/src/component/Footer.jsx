import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Logo and Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-white text-xl font-bold">KCN SHORTEN LINK</h1>
          <p className="text-sm mt-2">DEP ZAI NHUNG CODE NGU</p>
        </div>

        {/* Right Section - Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;