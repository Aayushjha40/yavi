import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import logo from '../assets/logo.png';
import login from '../assets/login.png';
import coin from '../assets/coin.png';
import flighth from '../assets/flighth.png';
import hotalh from '../assets/hotalh.png';
import trainh from '../assets/trainh.png';
import bush from '../assets/bush.png';
import ecozone from '../assets/ecozone.png';

const Header = () => {
  const { user, setUser } = useContext(UserDataContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const logout = () => {
    navigate('/logout');
  };

  const navItems = [
    { name: 'Flight', path: '/flight', icon: flighth },
    { name: 'Hotel', path: '/hotel', icon: hotalh },
    { name: 'Train', path: '/train', icon: trainh },
    { name: 'Bus', path: '/bus', icon: bush },
    { name: 'Eco-Friendly Zone', path: '/ecoFriendlyZone', icon: ecozone },
  ];

  return (
    <div className="bg-white w-full fixed top-0 z-50 rounded-b-3xl border-2 border-gray-200">
      <div className="h-[12vh] flex items-center justify-between px-4 md:px-10">
        <Link to="/">
          <img src={logo} alt="Company Logo" className="w-20" />
        </Link>

        {/* Centered Navigation (Appears Only After Scroll) */}
        {isScrolled && (
          <div className="hidden md:flex space-x-16">
            {navItems.map((item, index) => (
              <Link key={index} to={item.path} className="flex flex-col items-center space-y-1">
                <img src={item.icon} alt={item.name} className="w-8 h-8" />
                <span className="text-sm font-semibold">{item.name}</span>
              </Link>
            ))}
          </div>
        )}

        {/* Right-Side Content */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative w-48">
            <input
              type="text"
              placeholder="Search destination"
              className="w-full h-10 bg-[#0293a9] text-white rounded-full pl-4 pr-12 outline-none placeholder-white"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#00798C] text-white h-6 w-6 rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Icons */}
          <span className="bg-gray-300 p-2 w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center">
            <Link to="/coins">
              <img src={coin} alt="Coin" width={22} />
            </Link>
          </span>

          <span className="bg-[#00798C] p-2 w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
              />
            </svg>
          </span>

          {/* Login Icon */}
          <div className="relative">
            <div
              className="bg-[#00798C] p-2 w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center cursor-pointer"
              onClick={user ? toggleSidebar : () => setDropdownOpen(!dropdownOpen)}
            >
              <img src={login} alt="Login Icon" width={22} />
            </div>
            {!user && dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#38cfe7] border border-gray-200 rounded-lg shadow-lg">
                <Link to="/LoginForUser" className="block px-4 py-2 text-gray-900 hover:bg-[#0293a9]" onClick={closeDropdown}>User Login</Link>
                <Link to="/LoginForAgency" className="block px-4 py-2 text-gray-900 hover:bg-[#0293a9]" onClick={closeDropdown}>Agency Login</Link>
              </div>
            )}
            {user && sidebarOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 p-4">
                  <button className="absolute top-4 right-4 text-gray-600" onClick={toggleSidebar}>Close</button>
                  <h2 className="text-xl font-bold">Welcome, {user.name}!</h2>
                  <button onClick={logout} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Logout</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sub Navbar (Hidden After Scroll) */}
      {!isScrolled && (
        <div className="flex justify-center bg-gray-50 rounded-lg py-3">
          <div className="flex justify-around space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex flex-col items-center py-3 px-6 rounded hover:bg-gray-100 hover:text-blue-500 hover:underline"
              >
                <img src={item.icon} alt={item.name} className="w-12 h-12" />
                <p className="text-base font-bold">{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;