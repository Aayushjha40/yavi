import React, { useState } from 'react';
import {
  Home, Compass, ClipboardList, Gift, BarChart, LifeBuoy, Settings as SettingsIcon, LogOut
} from 'lucide-react';

import MyProfile from '../user_panel/my_profile.jsx';
import MyBookings from '../user_panel/my_bookings.jsx';
import Wishlist from '../user_panel/wishlist.jsx';
import Rewards from '../user_panel/rewards.jsx';
import EcoZone from '../user_panel/eco_zone.jsx';
import Support from '../user_panel/support.jsx';
import Settings from '../user_panel/settings.jsx';
import Logout from '../user_panel/logout.jsx';

function App() {
  const [activeSection, setActiveSection] = useState('myprofile');

  const menuItems = [
    { id: 'myprofile', label: 'My Profile', icon: <Home className="h-5 w-5" />, component: <MyProfile /> },
    { id: 'mybookings', label: 'My Bookings', icon: <Compass className="h-5 w-5" />, component: <MyBookings /> },
    { id: 'wishlist', label: 'Wishlist', icon: <ClipboardList className="h-5 w-5" />, component: <Wishlist /> },
    { id: 'rewards', label: 'Rewards', icon: <Gift className="h-5 w-5" />, component: <Rewards /> },
    { id: 'ecozone', label: 'Eco Zone', icon: <BarChart className="h-5 w-5" />, component: <EcoZone /> },
    { id: 'support', label: 'Support', icon: <LifeBuoy className="h-5 w-5" />, component: <Support /> },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon className="h-5 w-5" />, component: <Settings /> },
    { id: 'logout', label: 'Log out', icon: <LogOut className="h-5 w-5" />, component: <Logout /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">User Panel</h2>
        <nav className="space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center w-full p-3 rounded-lg text-left transition-colors ${
                activeSection === item.id ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {menuItems.find(item => item.id === activeSection)?.component}
      </main>
    </div>
  );
}

export default App;