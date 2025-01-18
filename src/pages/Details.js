import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Details.css';

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedCars, totalBill } = location.state || {};

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    age: '',
    licenseNumber: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically validate the input and maybe send it to a server
    navigate('/payment', { state: { ...location.state, customerInfo } });
  };

  if (!selectedCars || !totalBill) {
    return <div>No cars selected. Please go back to the explore page.</div>;
  }

  return (
    <div className="details">
      <h2>Customer Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={customerInfo.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={customerInfo.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="licenseNumber">License Number:</label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={customerInfo.licenseNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={customerInfo.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
}

export default Details;

