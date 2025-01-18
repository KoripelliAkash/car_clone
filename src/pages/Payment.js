import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedCars, totalBill, customerInfo } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePaymentDetailsChange = (e) => {
    setPaymentDetails(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically process the payment
    // For this example, we'll just navigate to the confirmation page
    navigate('/confirmation', { 
      state: { 
        selectedCars, 
        totalBill, 
        customerInfo, 
        paymentMethod 
      } 
    });
  };

  if (!selectedCars || !totalBill || !customerInfo) {
    return <div>Invalid payment attempt. Please start over from the explore page.</div>;
  }

  return (
    <div className="payment">
      <h2>Payment</h2>
      <p>Total Amount: ${totalBill}/day</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={handlePaymentMethodChange}
            />
            UPI
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="credit"
              checked={paymentMethod === 'credit'}
              onChange={handlePaymentMethodChange}
            />
            Credit Card
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="debit"
              checked={paymentMethod === 'debit'}
              onChange={handlePaymentMethodChange}
            />
            Debit Card
          </label>
        </div>
        {paymentMethod && (
          <div>
            <label htmlFor="paymentDetails">
              {paymentMethod === 'upi' ? 'UPI ID' : 'Card Number'}:
            </label>
            <input
              type="text"
              id="paymentDetails"
              value={paymentDetails}
              onChange={handlePaymentDetailsChange}
              required
            />
          </div>
        )}
        <button type="submit">Complete Payment</button>
      </form>
    </div>
  );
}

export default Payment;

