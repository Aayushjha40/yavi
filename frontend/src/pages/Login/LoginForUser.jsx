import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from "../../context/UserContext";
import axios from 'axios';

const LoginForUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/login`, userData, { withCredentials: true });

      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        navigate('/');
      }
    } catch (error) {
      console.error('Error response:', error.response?.data || error.message);
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className="m-0 p-0 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nature,green')" }}>
      <div className="flex flex-wrap justify-between px-24 py-16">
        <div className="moto bg-opacity-50 text-white p-12 rounded-lg w-150">
          <h3 className="text-lg text-black">Today's Quotes</h3>
          <br />
          <h1 className="text-2xl font-bold text-black text-5xl">" Earth Loves You,<br /> Love it Back."</h1>
        </div>
        <form onSubmit={submitHandler} className="bg-green-600 bg-opacity-50 p-8 rounded-lg w-80 flex flex-col items-center">
          <h2 className="text-white text-xl opacity-90">Login</h2>
          <label htmlFor="email" className="text-white opacity-90 mt-4">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 w-full rounded-full bg-white bg-opacity-70 focus:outline-none" 
          />
          
          <label htmlFor="password" className="text-white opacity-90 mt-4">Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 p-2 w-full rounded-full bg-white bg-opacity-70 focus:outline-none" 
          />
          
          <a href="#" className="text-white text-sm opacity-80 mt-2">Forget password?</a>
          <button 
            type="submit"
            className="mt-4 bg-green-700 text-white px-6 py-2 rounded-full"
          >
            Login
          </button>
          <hr className="w-full my-4 opacity-20" />
          <h3 className="text-white opacity-90">Not on Yavi? Register now!</h3>
          
          <button 
            type="button"
            className="mt-2 bg-white text-green-700 px-6 py-2 rounded-full"  
            onClick={() => navigate("/SignupForUser")}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForUser;