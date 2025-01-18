import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Details from './pages/Details';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/details" element={<Details />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/profile" element={<Profile user={user} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

