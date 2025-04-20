import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token'); // Adjust based on where you store token

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileRes = await axios.get('/api/auth/get-profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(profileRes.data.data);

        const urlsRes = await axios.get('/api/shorten/user-url', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUrls(urlsRes.data.data.urls || []); // adjust based on actual response shape
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.error || 'Something went wrong');
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [token]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h1>
      <h2 className="text-xl font-semibold mb-2">Your URL Shorten History:</h2>
      {urls.length === 0 ? (
        <p>No shortened URLs found.</p>
      ) : (
        <ul className="space-y-2">
          {urls.map((urlItem) => (
            <li key={urlItem._id} className="p-3 border rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50">
              <div>
                <p className="text-sm text-gray-600">Original: <a href={urlItem.originalUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{urlItem.originalUrl}</a></p>
                <p className="text-sm text-gray-800">Short: <a href={urlItem.shortUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 underline">{urlItem.shortUrl}</a></p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Profile;
