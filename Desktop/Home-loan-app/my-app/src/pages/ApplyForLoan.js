import React, { useState } from 'react';
import axios from 'axios';

const ApplyForLoan = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [salary, setSalary] = useState(''); 
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [eligibleLoanAmount, setEligibleLoanAmount] = useState('');

  const handleApply = (e) => {
    e.preventDefault();

    const loanApplication = {
      firstName,
      middleName,
      lastName,
      dob,
      age,
      phoneNumber,
      aadharNumber,
      panNumber,
      salary,
    };

    axios
      .post('http://localhost:8080/api/loan-applications', loanApplication)
      .then((response) => {
        console.log('Loan Application Submitted:', response.data);
        alert('Loan Application Submitted!');
      })
      .catch((error) => {
        console.error('There was an error submitting the loan application!', error);
      });
  };

  const calculateEligibility = () => {
    const loanAmount = 60 * (0.6 * monthlyIncome);
    setEligibleLoanAmount(loanAmount);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-sky-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-semibold mb-6 text-sky-600">Apply for Loan</h1>
          <form onSubmit={handleApply} className="space-y-4">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <input
              type="text"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              placeholder="Middle Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              placeholder="Date of Birth"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <input
              type="text"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              placeholder="Aadhar Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <input
              type="text"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
              placeholder="PAN Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Salary"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-sky-600 text-white p-3 rounded-lg hover:bg-sky-700 transition duration-300"
            >
              Apply Now
            </button>
          </form>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-sky-600">Eligibility Calculator</h2>
            <input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              placeholder="Enter Monthly Income"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              onClick={calculateEligibility}
              className="w-full mt-4 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Calculate Eligibility
            </button>
            {eligibleLoanAmount && (
              <p className="mt-4 text-lg text-gray-700">You are eligible for a loan amount of ₹{eligibleLoanAmount}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyForLoan;
