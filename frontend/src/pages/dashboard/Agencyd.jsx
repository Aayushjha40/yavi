import React, { useState } from 'react';
import {
  Users as UsersIcon,
  CarTaxiFront,
  MessageSquare,
  Headphones,
  BarChart3,
  Settings as SettingsIcon,
  LogOut,
  Menu,
  Home,
  Bell,
  Sun,
  Moon,
  User,
} from 'lucide-react';

import Profile from '../agency_panel/profile';
import CreateTrips from '../agency_panel/create_trip';
import Ads from '../agency_panel/Ads';
import Support from '../agency_panel/support';
import Analytics from '../agency_panel/analystics';
import AdminSettings from '../agency_panel/setting';

const menuItems = [
  { name: 'Dashboard', icon: Home },
  { name: 'Profile', icon: UsersIcon, component: Profile },
  { name: 'Create Trips', icon: CarTaxiFront, component: CreateTrips },
  { name: 'Ads', icon: MessageSquare, component: Ads },
  { name: 'Support', icon: Headphones, component: Support },
  { name: 'Analytics', icon: BarChart3, component: Analytics },
  { name: 'Settings', icon: SettingsIcon, component: AdminSettings },
];

function Sidebar({ isOpen, toggleSidebar, setActiveItem, activeItem }) {
  return (
    <div
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-white dark:bg-gray-800 h-screen p-5 pt-8 relative duration-300 shadow-lg`}
    >
      {/* <div
        className="absolute cursor-pointer -right-3 top-9 w-8 h-8 bg-white dark:bg-gray-800 border-2 rounded-full flex items-center justify-center shadow-md hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={toggleSidebar}
      >
        <Menu size={22} className="text-gray-700 dark:text-gray-300" />
      </div> */}
      <h1
        className={`text-xl font-medium text-gray-800 dark:text-gray-300 origin-left duration-300 ${
          !isOpen && 'scale-0'
        }`}
      >
        Agency Panel
      </h1>
      <ul className="pt-6">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm items-center gap-x-4 mt-2 ${
              activeItem === item.name
                ? 'bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400'
                : ''
            }`}
            onClick={() => setActiveItem(item.name)}
          >
            <item.icon size={20} />
            <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>
              {item.name}
            </span>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-4 flex rounded-md p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm items-center gap-x-4">
        <LogOut size={20} />
        <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>
          Logout
        </span>
      </div>
    </div>
  );
}

function Header({ toggleDarkMode, darkMode, toggleSidebar }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
      <div onClick={toggleSidebar}>
        <Menu className="cursor-pointer text-gray-700 dark:text-gray-300" size={24} />
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="cursor-pointer text-gray-700 dark:text-gray-300" size={24} />
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <Sun className="text-yellow-500" size={24} />
          ) : (
            <Moon className="text-gray-700 dark:text-gray-300" size={24} />
          )}
        </button>
        <User className="cursor-pointer text-gray-700 dark:text-gray-300" size={24} />
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
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
          {activeItem}
        </h2>
        <ActiveComponent />
      </div>
    </div>
  );
}

function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`${
        darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100'
      } flex h-screen`}
    >
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={() => setIsOpen(!isOpen)}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
      />
      <div className="flex flex-col flex-1">
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Content activeItem={activeItem} />
      </div>
    </div>
  );
}

export default Dashboard;