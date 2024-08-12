// pages/LoginSelection.js
import React from 'react';
import { Link } from 'react-router-dom';

const LoginSelection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-semibold mb-6 text-sky-600">Select Login Type</h1>
        <div className="space-y-4">
          <Link
            to="/customer-login"
            className="block text-center bg-sky-500 text-white p-3 rounded-lg shadow-md hover:bg-sky-600 transition duration-300"
          >
            Customer Login
          </Link>
          <Link
            to="/admin-login"
            className="block text-center bg-sky-500 text-white p-3 rounded-lg shadow-md hover:bg-sky-600 transition duration-300"
          >
            Admin Login
          </Link>
          <Link
            to="/register"
            className="block text-center bg-sky-500 text-white p-3 rounded-lg shadow-md hover:bg-sky-600 transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginSelection;
