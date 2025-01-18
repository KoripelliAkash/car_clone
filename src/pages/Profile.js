import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile({ user }) {
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {/* Add more user information here */}
      </div>
      {/* You can add options to edit profile, view booking history, etc. here */}
    </div>
  );
}

export default Profile;

