import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../context/UserContext';

const UserLogout = () => {
  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/users/logout', {
          method: 'POST',
          credentials: 'include', // Include cookies in the request
        });

        if (response.ok) {
          // Clear user data and token from context/local storage
          setUser(null);
          localStorage.removeItem('token');
          navigate('/LoginForUser'); // Redirect to login page
        } else {
          const errorData = await response.json();
          console.error('Failed to log out:', errorData);
          alert('Failed to log out. Please try again.');
        }
      } catch (error) {
        console.error('Error logging out:', error);
        alert('An error occurred while logging out. Please try again.');
      }
    };

    logout();
  }, [navigate, setUser]);

  return <div>Logging out...</div>;
};



export default UserLogout;