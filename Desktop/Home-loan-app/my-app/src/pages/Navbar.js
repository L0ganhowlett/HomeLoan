// pages/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the import path

const Navbar = () => {
  const { isAuthenticated, logout, userType } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/'; // Redirect after logout
  };

  if (!isAuthenticated) {
    return null; // Don't render Navbar if not authenticated
  }

  return (
    <nav className="bg-sky-500 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">Home Loan App</div>
        <div className="space-x-6">
          <Link to="/home" className="hover:bg-sky-600 px-4 py-2 rounded-lg transition duration-300" aria-label="Home">Home</Link>
          {userType === 'customer' && (
            <>
              <Link to="/apply-loan" className="hover:bg-sky-600 px-4 py-2 rounded-lg transition duration-300" aria-label="Apply for Loan">Apply for Loan</Link>
              <Link to="/check-status" className="hover:bg-sky-600 px-4 py-2 rounded-lg transition duration-300" aria-label="Check Status">Check Status</Link>
            </>
          )}
          {userType === 'admin' && (
            <>
              <Link to="/check-applications" className="hover:bg-sky-600 px-4 py-2 rounded-lg transition duration-300" aria-label="Check Applications">Check Applications</Link>
            </>
          )}
          <button
            onClick={handleLogout}
            className="bg-sky-400 hover:bg-sky-500 px-4 py-2 rounded-lg transition duration-300"
            aria-label="Logout"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
