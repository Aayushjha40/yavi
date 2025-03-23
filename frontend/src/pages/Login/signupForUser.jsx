import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../../context/UserContext';

const SignupForUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const newUser = { 
      name: username, // ✅ Changed "username" to "name"
      email, 
      password 
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/users/register`,
        newUser,
        { withCredentials: true }
      );

      if (response && response.status === 201) {
        setUser(response.data.user);
        localStorage.setItem('token', response.data.token);
        navigate('/LoginForUser');
      }
    } catch (error) {
      console.error('Error response:', error.response?.data || error.message); // Improved error logging
    }

    // ✅ Clear input fields after successful submission
    setUsername('');
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
        <form onSubmit={submitHandler} className="bg-gray-50 bg-opacity-50 p-8 rounded-lg w-[27%]  shadow-[4px_4px_20px_rgba(0,0,0,0.5)] flex flex-col items-center">
          <h2 className="text-gray-950 mb-4 text-4xl font-semibold">SignUp</h2>
          <label htmlFor="create-username" className="text-black text-lg opacity-90 mt-6 self-start">Create Username</label>
          <input
            type="text"
            id="create-username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-1 p-2 w-full rounded-md  bg-gray-100"
          />

          <label htmlFor="email" className="text-black text-lg opacity-90 mt-2 self-start">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 w-full rounded-md  bg-gray-100"
          />

          <label htmlFor="password" className="text-black text-lg opacity-90 mt-2 self-start">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6" // ✅ Added minLength to ensure correct password length
            className="mt-1 p-2 w-full rounded-md  bg-gray-100"
          />
          <button type="submit" className="mt-4 bg-[#38cfe7] font-semibold w-full text-black px-6 py-2 rounded-md hover:bg-[#2fb2c6]">Register</button>
          <hr className="w-full pt-1 opacity-20" />
          <h3 className="text-black self-start text-sm opacity-90 cursor-pointer pt-1" onClick={() => navigate("/LoginForUser")}>Already have an account? <span className='text-blue-500 underline hover:text-blue-800'>Login</span></h3> 

          <div className="flex flex-col items-center mt-4">
            <div className="relative w-full flex items-center justify-center">
              <div className="w-1/4 border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">or Sign up with</span>
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

export default SignupForUser;
