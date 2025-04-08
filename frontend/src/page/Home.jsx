import React from "react";
import Image from "../assets/Home.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-100 flex flex-col items-center px-6">
      <main className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl py-12">
        {/* Left Side - Text and Input */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">URL Shortener</h1>
          <p className="text-gray-600 max-w-md mb-6">
            Shorten your links, track their performance with accurate analytics, and enjoy the service for free and with ease!
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 max-w-md">
            <input
              type="text"
              placeholder="Paste URL to shorten"
              className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition flex items-center">
              Shorten Link
              <span className="ml-2">🔗</span>
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src={Image}
            alt="URL Shortener"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </main>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Benefits of Using a Shortened Link
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Benefit 1 */}
          <div className="bg-gradient-to-b from-white to-blue-50 p-6 rounded-2xl shadow text-center">
            <div className="text-3xl mb-4 text-blue-600">🔗</div>
            <h3 className="font-semibold text-lg mb-2">Professional appearance</h3>
            <p className="text-gray-600 text-sm">
              Short links offer a more professional and attractive look, making them easy to share.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-gradient-to-b from-white to-blue-50 p-6 rounded-2xl shadow text-center">
            <div className="text-3xl mb-4 text-blue-600">📊</div>
            <h3 className="font-semibold text-lg mb-2">Performance tracking</h3>
            <p className="text-gray-600 text-sm">
              Short links simplify analyzing click counts and users' geographic locations accurately.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-gradient-to-b from-white to-blue-50 p-6 rounded-2xl shadow text-center">
            <div className="text-3xl mb-4 text-blue-600">⚡</div>
            <h3 className="font-semibold text-lg mb-2">Improved access</h3>
            <p className="text-gray-600 text-sm">
              Short links provide a better user experience for quickly reaching the desired content.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-gradient-to-b from-white to-blue-50 p-6 rounded-2xl shadow text-center">
            <div className="text-3xl mb-4 text-blue-600">🔗</div>
            <h3 className="font-semibold text-lg mb-2">Ease of sharing</h3>
            <p className="text-gray-600 text-sm">
              Short links make sharing content online faster and easier for everyone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
