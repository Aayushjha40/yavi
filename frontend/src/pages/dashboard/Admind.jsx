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
} from 'lucide-react';

// Import admin panel components
import Users from '../admin_panel/users';
import AddTrips from '../admin_panel/add_trips';
import Rewards from '../admin_panel/reward';
import Ads from '../admin_panel/add_part';
import Payments from '../admin_panel/payment';
import Support from '../admin_panel/support';
import Analytics from '../admin_panel/analystics';
import AdminSettings from '../admin_panel/settings';

const menuItems = [
  { name: 'Users', icon: UsersIcon, component: Users },
  { name: 'Add Trip', icon: CarTaxiFront, component: AddTrips },
  { name: 'Rewards', icon: Award, component: Rewards },
  { name: 'Ads', icon: MessageSquare, component: Ads },
  { name: 'Payments', icon: CreditCard, component: Payments },
  { name: 'Support', icon: Headphones, component: Support },
  { name: 'Analytics', icon: BarChart3, component: Analytics },
  { name: 'Settings', icon: SettingsIcon, component: AdminSettings },
];

function Sidebar({ isOpen, toggleSidebar, setActiveItem, activeItem }) {
  return (
    <div className={`${isOpen ? 'w-64' : 'w-20'} bg-white h-screen p-5 pt-8 relative duration-300 shadow-lg flex flex-col`}>
      <div
        className="absolute cursor-pointer -right-3 top-9 w-7 h-7 bg-white border-2 rounded-full flex items-center justify-center"
        onClick={toggleSidebar}
      >
        <Menu size={20} />
      </div>
      <h1 className={`text-xl font-medium origin-left duration-300 ${!isOpen && 'scale-0'}`}>Admin Panel</h1>
      <ul className="pt-6 flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-100 text-gray-700 text-sm items-center gap-x-4 mt-2 ${activeItem === item.name ? 'bg-gray-100 text-blue-600' : ''}`}
            onClick={() => setActiveItem(item.name)}
          >
            <item.icon size={20} />
            <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>{item.name}</span>
          </li>
        ))}
      </ul>
      <div className="p-2 cursor-pointer hover:bg-gray-100 text-gray-700 text-sm items-center gap-x-4 flex">
        <LogOut size={20} />
        <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Logout</span>
      </div>
    </div>
  );
}

function Content({ activeItem }) {
  const ActiveComponent = menuItems.find((item) => item.name === activeItem)?.component || (() => <p>Select a section</p>);
  return (
    <div className="flex-1 p-7 overflow-y-auto h-full">
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
  
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} setActiveItem={setActiveItem} activeItem={activeItem} />
      <Content activeItem={activeItem} />
    </div>
  );
}

export default Dashboard;
