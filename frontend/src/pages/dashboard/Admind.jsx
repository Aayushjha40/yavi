import React, { useState } from 'react';
import {
  Users as UsersIcon,
  CarTaxiFront,
  Award,
  MessageSquare,
  CreditCard,
  Headphones,
  BarChart3,
  Settings as SettingsIcon,
  LogOut,
  Menu,
  Bell,
  Moon,
  Sun,
  Home,
  User,
} from 'lucide-react';

import Users from '../admin_panel/users';
import AddTrips from '../admin_panel/add_trips';
import Rewards from '../admin_panel/reward';
import Ads from '../admin_panel/add_part';
import Payments from '../admin_panel/payment';
import Support from '../admin_panel/support';
import Analytics from '../admin_panel/analystics';
import AdminSettings from '../admin_panel/settings';

const menuItems = [
  { name: 'Dashboard', icon: Home },
  { name: 'Users', icon: UsersIcon, component: Users },
  { name: 'Add Trip', icon: CarTaxiFront, component: AddTrips },
  { name: 'Rewards', icon: Award, component: Rewards },
  { name: 'Ads', icon: MessageSquare, component: Ads },
  { name: 'Payments', icon: CreditCard, component: Payments },
  { name: 'Support', icon: Headphones, component: Support },
  { name: 'Analytics', icon: BarChart3, component: Analytics },
  { name: 'Settings', icon: SettingsIcon, component: AdminSettings },
];

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4">
      <h1 className="text-lg font-semibold dark:text-white">Admin Panel</h1>
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

function Sidebar({ isOpen, toggleSidebar, setActiveItem, activeItem }) {
  return (
    <div className={`h-screen bg-white dark:bg-gray-800 shadow-lg flex flex-col transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="flex items-center justify-between px-4 py-3">
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" onClick={toggleSidebar}>
          <Menu className="w-6 h-6 text-gray-700 dark:text-white" />
        </button>
      </div>
      <ul className="flex-1 overflow-y-auto space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center gap-x-4 p-2 cursor-pointer rounded-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ${activeItem === item.name ? 'bg-gray-200 dark:bg-gray-700 text-blue-600' : ''}`}
            onClick={() => setActiveItem(item.name)}
          >
            <item.icon size={22} />
            {isOpen && <span>{item.name}</span>}
          </li>
        ))}
      </ul>
      <div className="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-white flex items-center gap-x-4">
        <LogOut size={22} />
        {isOpen && <span>Logout</span>}
      </div>
    </div>
  );
}

function Content({ activeItem }) {
  const ActiveComponent =
    menuItems.find((item) => item.name === activeItem)?.component ||
    (() => <p>Select a section</p>);
  return (
    <div className="flex-1 p-7">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{activeItem}</h2>
        <ActiveComponent />
      </div>
    </div>
  );
}

function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Users');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="h-screen flex bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex pt-16 w-full">
        <Sidebar
          isOpen={isOpen}
          toggleSidebar={() => setIsOpen(!isOpen)}
          setActiveItem={setActiveItem}
          activeItem={activeItem}
        />
        <Content activeItem={activeItem} />
      </div>
    </div>
  );
}

export default Dashboard;
