import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Moon, User } from 'lucide-react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const logout = () => {
    console.log('User logged out');
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        YAVI
      </Link>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer" />
        <Moon className="cursor-pointer" />
        <User className="cursor-pointer" onClick={toggleSidebar} />
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-4 z-50">
          <button className="text-gray-600 mb-4" onClick={toggleSidebar}>
            Close
          </button>
          <nav className="space-y-2">
            <Link
              to="/userd/myprofile"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg"
              onClick={toggleSidebar}
            >
              My Profile
            </Link>
            <Link
              to="/userd/mybookings"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg"
              onClick={toggleSidebar}
            >
              My Bookings
            </Link>
            <Link
              to="/userd/wishlist"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg"
              onClick={toggleSidebar}
            >
              Wishlist
            </Link>
            <Link
              to="/userd/rewards"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg"
              onClick={toggleSidebar}
            >
              Rewards
            </Link>
            <Link
              to="/userd/ecozone"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg"
              onClick={toggleSidebar}
            >
              Eco Zone
            </Link>
            <Link
              to="/userd/support"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg"
              onClick={toggleSidebar}
            >
              Support
            </Link>
            <Link
              to="/userd/settings"
              className="block px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-lg"
              onClick={toggleSidebar}
            >
              Settings
            </Link>
            <button
              onClick={logout}
              className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 rounded-lg"
            >
              Logout
            </button>
          </nav>
        </div>
      )}

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
