import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Confirmation.css';

function Confirmation() {
  const location = useLocation();
  const { selectedCars, totalBill, customerInfo, paymentMethod } = location.state || {};

  if (!selectedCars || !totalBill || !customerInfo || !paymentMethod) {
    return <div>Invalid confirmation. Please start over from the explore page.</div>;
  }

  return (
    <div className="confirmation">
      <h2>Booking Confirmation</h2>
      <p>Thank you for your booking, {customerInfo.name}!</p>
      <h3>Booking Details:</h3>
      <ul>
        {selectedCars.map(car => (
          <li key={car.id}>{car.name} - ${car.price}/day</li>
        ))}
      </ul>
      <p>Total Amount: ${totalBill}/day</p>
      <p>Payment Method: {paymentMethod}</p>
      <Link to="/" className="home-link">Return to Home</Link>
    </div>
  );
}

export default Confirmation;

