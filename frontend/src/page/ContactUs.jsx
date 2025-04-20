import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Contact Us</h2>
        <p className="text-gray-300 mb-8">
          KCN SHORTEN LINK — The fastest and easiest way to shorten your URLs, made for simplicity and efficiency!
        </p>

        <div className="mb-6">
          <p className="flex items-center justify-center gap-2">
            <FaPhone className="text-blue-400" /> <span>+84 123 456 789</span>
          </p>
          <p className="flex items-center justify-center gap-2 mt-2">
            <FaEnvelope className="text-blue-400" /> <span>support@kcnshorten.com</span>
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-6 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram />
          </a>
        </div>

        <div className="mt-10 text-gray-400 text-sm">
          &copy; 2025 KCN Shorten Link. Built with ❤️ by true code warriors.
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
