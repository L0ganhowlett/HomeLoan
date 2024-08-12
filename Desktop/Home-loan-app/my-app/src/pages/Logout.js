import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the import path

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const performLogout = async () => {
      await logout(); // Call logout function from context
      // No need to navigate here, as logout should handle navigation
    };
    performLogout();
  }, [logout]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold mb-6 text-sky-600">Logging out...</h1>
        <p className="text-gray-700">You are being redirected to the login page.</p>
      </div>
    </div>
  );
};

export default Logout;
