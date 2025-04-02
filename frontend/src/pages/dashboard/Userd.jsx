import React, { useState } from 'react';
import {
  Home, Compass, ClipboardList, Gift, BarChart, LifeBuoy, Settings as SettingsIcon, LogOut, Bell, Moon, Sun, User
} from 'lucide-react';

import MyProfile from '../user_panel/my_profile.jsx';
import MyBookings from '../user_panel/my_bookings.jsx';
import Wishlist from '../user_panel/wishlist.jsx';
import Rewards from '../user_panel/rewards.jsx';
import EcoZone from '../user_panel/eco_zone.jsx';
import Support from '../user_panel/support.jsx';
import Settings from '../user_panel/settings.jsx';
import Logout from '../user_panel/logout.jsx';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4">
      <h1 className="text-lg font-semibold dark:text-white">User Panel</h1>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
          <Bell className="w-6 h-6 text-gray-700 dark:text-white" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800" onClick={toggleDarkMode}>
          {darkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-700 dark:text-white" />}
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
          <User className="w-6 h-6 text-gray-700 dark:text-white" />
        </button>
      </div>
    </nav>
  );
}

function Sidebar({ activeSection, setActiveSection }) {
  const menuItems = [
    { id: 'myprofile', label: 'My Profile', icon: <Home className="h-5 w-5" /> },
    { id: 'mybookings', label: 'My Bookings', icon: <Compass className="h-5 w-5" /> },
    { id: 'wishlist', label: 'Wishlist', icon: <ClipboardList className="h-5 w-5" /> },
    { id: 'rewards', label: 'Rewards', icon: <Gift className="h-5 w-5" /> },
    { id: 'ecozone', label: 'Eco Zone', icon: <BarChart className="h-5 w-5" /> },
    { id: 'support', label: 'Support', icon: <LifeBuoy className="h-5 w-5" /> },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon className="h-5 w-5" /> },
    { id: 'logout', label: 'Log out', icon: <LogOut className="h-5 w-5" /> },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md p-6 mt-16 h-screen">
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex items-center w-full p-3 rounded-lg text-left transition-colors ${
              activeSection === item.id ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('myprofile');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const components = {
    myprofile: <MyProfile />, mybookings: <MyBookings />, wishlist: <Wishlist />, rewards: <Rewards />,
    ecozone: <EcoZone />, support: <Support />, settings: <Settings />, logout: <Logout />
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 p-8 mt-16">
        {components[activeSection]}
      </main>
    </div>
  );
}

export default App;
