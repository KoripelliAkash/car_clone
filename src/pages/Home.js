import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to CarRental</h1>
      <p>Find the perfect car for your next adventure</p>
      <Link to="/explore" className="cta-button">Explore Cars</Link>
    </div>
  );
}

export default Home;

