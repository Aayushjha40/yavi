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
        await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/logout`, {}, {
          withCredentials: true
        });
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    logout();
  }, [navigate, setUser]);
};

export default UserLogout;