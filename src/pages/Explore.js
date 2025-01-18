import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Explore.css';

const carData = [
  { id: 1, name: 'Sedan', color: 'Red', fuelType: 'Petrol', price: 50 },
  { id: 2, name: 'SUV', color: 'Blue', fuelType: 'Diesel', price: 70 },
  { id: 3, name: 'Hatchback', color: 'White', fuelType: 'Electric', price: 40 },
  { id: 4, name: 'Convertible', color: 'Black', fuelType: 'Petrol', price: 80 },
];

function Explore() {
  const [filters, setFilters] = useState({
    colors: [],
    fuelTypes: [],
  });
  const [selectedCars, setSelectedCars] = useState([]);
  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: checked
        ? [...prevFilters[name], value]
        : prevFilters[name].filter(item => item !== value)
    }));
  };

  const filteredCars = carData.filter(car => 
    (filters.colors.length === 0 || filters.colors.includes(car.color)) &&
    (filters.fuelTypes.length === 0 || filters.fuelTypes.includes(car.fuelType))
  );

  const handleCarSelection = (car) => {
    setSelectedCars(prevSelected => 
      prevSelected.includes(car)
        ? prevSelected.filter(c => c !== car)
        : [...prevSelected, car]
    );
  };

  const totalBill = selectedCars.reduce((sum, car) => sum + car.price, 0);

  const handleProceed = () => {
    if (selectedCars.length > 0) {
      navigate('/details', { state: { selectedCars, totalBill } });
    } else {
      alert('Please select at least one car before proceeding.');
    }
  };

  return (
    <div className="explore">
      <div className="filters">
        <h2>Filters</h2>
        <div>
          <h3>Colors</h3>
          {['Red', 'Blue', 'White', 'Black'].map(color => (
            <label key={color}>
              <input
                type="checkbox"
                name="colors"
                value={color}
                onChange={handleFilterChange}
              />
              {color}
            </label>
          ))}
        </div>
        <div>
          <h3>Fuel Type</h3>
          {['Petrol', 'Diesel', 'Electric'].map(fuel => (
            <label key={fuel}>
              <input
                type="checkbox"
                name="fuelTypes"
                value={fuel}
                onChange={handleFilterChange}
              />
              {fuel}
            </label>
          ))}
        </div>
      </div>
      <div className="car-list">
        {filteredCars.map(car => (
          <div
            key={car.id}
            className={`car-card ${selectedCars.includes(car) ? 'selected' : ''}`}
            onClick={() => handleCarSelection(car)}
          >
            <h3>{car.name}</h3>
            <p>Color: {car.color}</p>
            <p>Fuel Type: {car.fuelType}</p>
            <p>Price: ${car.price}/day</p>
          </div>
        ))}
      </div>
      <div className="total-bill">
        <h3>Total Bill: ${totalBill}/day</h3>
        <button onClick={handleProceed}>Proceed</button>
      </div>
    </div>
  );
}

export default Explore;

