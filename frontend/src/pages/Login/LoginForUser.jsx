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

    if (email === 'admin@gmail.com' && password === 'admin123') {
      navigate('/admin');
      return;
    }

    const userData = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/login`, userData, { withCredentials: true });

      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token); // Save token to localStorage
        navigate('/');
      }
    } catch (error) {
      console.error('Error response:', error.response?.data || error.message);
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className="m-0 p-0 bg-cover bg-center">
      <div className="flex flex-wrap justify-between px-24 py-16">
        <div className="moto bg-opacity-50 text-gray-100 p-12 rounded-lg w-150">
          <h3 className="text-lg text-black">Today's Quotes</h3>
          <br />
          <h1 className="text-2xl font-bold text-black text-5xl">" Earth Loves You,<br /> Love it Back."</h1>
        </div>
        <form onSubmit={submitHandler} className="bg-gray-50 bg-opacity-50 p-8 rounded-lg w-[25%]  shadow-[4px_4px_20px_rgba(0,0,0,0.5)] flex flex-col items-center">
          <h2 className="text-gray-950 mb-4 text-4xl font-semibold">Login</h2>
          <label htmlFor="email" className="text-black text-lg opacity-90 mt-4 self-start">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 w-full rounded-md  bg-gray-100"
          />

          <label htmlFor="password" className="text-black text-lg opacity-90 mt-4 self-start">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 p-2 w-full rounded-md bg-gray-100 "
          />

          <a href="#" className="text-black text-sm opacity-80 mt-2 self-end hover:text-blue-500">Forget password?</a>
          <button
            type="submit"
            className="mt-4 bg-[#38cfe7] font-semibold w-full text-black px-6 py-2 rounded-md hover:bg-[#2fb2c6]"
          >
            Login
          </button>
          <hr className="w-full opacity-20" />
          <h3 className="text-black self-start text-sm opacity-90 cursor-pointer pt-1 " onClick={() => navigate("/SignupForUser")}>Not on Yavi?  <span className='text-blue-500 underline hover:text-blue-800'>Register now!</span></h3>

          <div className="flex flex-col items-center mt-4">
            <div className="relative w-full flex items-center justify-center">
              <div className="w-1/4 border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">or login with</span>
              <div className="w-1/4 border-t border-gray-300"></div>
            </div>

            <div className="flex justify-center mt-4 gap-4">
              {/* Google Button */}
              <button
                type="button"
                className="flex items-center gap-2 border border-red-500 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition"
                onClick={() => console.log('Login with Google')}
              >
                <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" 
        alt="Google" 
        className="w-5 h-5"
      />
                Google
              </button>

              {/* Facebook Button */}
              <button
                type="button"
                className="flex items-center gap-2 border border-blue-500 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
                onClick={() => console.log('Login with Facebook')}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="Facebook" className="w-5 h-5" />
                Facebook
              </button>
            </div>
          </div>


        </form>
      </div>
    </div>
  );
};

export default LoginForUser;