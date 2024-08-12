// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ApplyForLoan from './pages/ApplyForLoan';
import CheckStatus from './pages/CheckStatus';
import CheckApplications from './pages/CheckApplications';
import Logout from './pages/Logout';
import LoginSelection from './pages/LoginSelection';
import Register from './pages/Register';
import CustomerLogin from './pages/CustomerLogin';
import AdminLogin from './pages/AdminLogin';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer'; // Import the Footer component
import './index.css'; // or './tailwind.css'

const App = () => {
  const [userType, setUserType] = React.useState(null);

  return (
    <Router>
      <Navbar userType={userType} />
      <Routes>
        <Route path="/" element={<LoginSelection setUserType={setUserType} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/customer-login" element={<CustomerLogin setUserType={setUserType} />} />
        <Route path="/admin-login" element={<AdminLogin setUserType={setUserType} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/apply-loan" element={<ApplyForLoan />} />
        <Route path="/check-status" element={<CheckStatus />} />
        <Route path="/check-applications" element={<CheckApplications />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer /> {/* Add Footer here */}
    </Router>
  );
};

export default App;
