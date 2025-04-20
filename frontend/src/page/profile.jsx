import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Profile = () => {
  const { userData, urls } = useContext(AppContext);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Welcome, {userData?.email}</h1>

      <h2 className="text-xl font-semibold mb-2">Your URL Shorten History:</h2>

      {Array.isArray(urls) && urls.length === 0 ? (
        <p>No shortened URLs found.</p>
      ) : (
        <ul className="space-y-2">
          {Array.isArray(urls) && urls.map((urlItem) => (
            <li key={urlItem._id} className="p-3 border rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50">
              <div>
                <p className="text-sm text-gray-600">
                  Original:{" "}
                  <a
                    href={urlItem.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {urlItem.originalUrl}
                  </a>
                </p>
                <p className="text-sm text-gray-800">
                  Short:{" "}
                  <a
                    href={urlItem.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 underline"
                  >
                    http://localhost:3002/{urlItem.shortId}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Profile;
