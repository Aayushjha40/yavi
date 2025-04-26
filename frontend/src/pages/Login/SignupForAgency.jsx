import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../../context/UserContext';
import { auth, provider } from './Config'; // your Firebase config file
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';

const SignupForAgency = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    agencyName: '',
    aadharCard: '',
    contactNumber: '',
    address: '',
    registrationNumber: '',
    yearsOfOperation: '',
  });

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Google SignUp/Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userEmail = result.user.email;

      setUser({ email: userEmail });
      localStorage.setItem('email', userEmail);

      navigate('/'); // redirect after Google login
    } catch (error) {
      if (error.code === 'auth/popup-blocked') {
        alert('Popup blocked. Please allow popups for this website.');
      } else {
        console.error('Google sign-in error:', error.message);
      }
    }
  };

  // Facebook SignUp/Login
  const handleFacebookLogin = async () => {
    const facebookProvider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const userEmail = result.user.email;

      setUser({ email: userEmail });
      localStorage.setItem('email', userEmail);

      navigate('/'); // redirect after Facebook login
    } catch (error) {
      if (error.code === 'auth/popup-blocked') {
        alert('Popup blocked. Please allow popups for this website.');
      } else {
        console.error('Facebook sign-in error:', error.message);
      }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const newAgency = {
      name: formData.username,
      email: formData.email,
      password: formData.password,
      role: 'agency',
      agencyName: formData.agencyName,
      aadharCard: formData.aadharCard,
      contactNumber: formData.contactNumber,
      address: formData.address,
      registrationNumber: formData.registrationNumber,
      yearsOfOperation: formData.yearsOfOperation,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/users/register`,
        newAgency,
        { withCredentials: true }
      );

      if (response && response.status === 201) {
        setUser(response.data.user);
        localStorage.setItem('token', response.data.token);
        navigate('/LoginForAgency');
      }
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
    }

    setFormData({
      username: '',
      email: '',
      password: '',
      agencyName: '',
      aadharCard: '',
      contactNumber: '',
      address: '',
      registrationNumber: '',
      yearsOfOperation: '',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={submitHandler} className="bg-white p-10 rounded-xl shadow-md w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Register Your Agency</h2>

        <div className="grid grid-cols-2 gap-6">
          {[
            { label: 'Username', name: 'username', type: 'text', placeholder: 'Enter Username' },
            { label: 'Agency Name', name: 'agencyName', type: 'text', placeholder: 'Enter Agency Name' },
            { label: 'Agency Registration Number', name: 'registrationNumber', type: 'text', placeholder: 'Enter Registration Number' },
            { label: 'Years of Operation', name: 'yearsOfOperation', type: 'number', placeholder: 'e.g., 5' },
            { label: 'Aadhar Card Number', name: 'aadharCard', type: 'text', placeholder: 'Enter Aadhar Number' },
            { label: 'Contact Number', name: 'contactNumber', type: 'tel', placeholder: 'Enter Contact Number' },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter Email' },
            { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter Password', minLength: 6 },
          ].map((input) => (
            <div key={input.name}>
              <label className="block text-sm font-medium text-gray-700">{input.label}</label>
              <input
                {...input}
                value={formData[input.name]}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Agency Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Full Address"
            />
          </div>
        </div>

        <button type="submit" className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
          Register as Agency
        </button>

        <div className="flex justify-center mt-6 gap-4">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center gap-2 border border-red-500 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
              alt="Google"
              className="w-5 h-5"
            />
            Google
          </button>

          <button
            type="button"
            onClick={handleFacebookLogin}
            className="flex items-center gap-2 border border-blue-500 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
              alt="Facebook"
              className="w-5 h-5"
            />
            Facebook
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account?{' '}
          <span className="text-blue-500 hover:underline cursor-pointer" onClick={() => navigate('/LoginForAgency')}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignupForAgency;
