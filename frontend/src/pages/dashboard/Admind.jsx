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
  Bell,
  Sun,
  Moon,
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
    <div
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-white dark:bg-gray-800 h-screen p-5 pt-8 relative duration-300 shadow-lg`}
    >
      <h1
        className={`text-xl font-medium text-gray-800 dark:text-gray-300 origin-left duration-300 ${
          !isOpen && 'scale-0'
        }`}
      >
        Admin Panel
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
    <div className="flex-1 p-6 overflow-y-auto h-[calc(100vh-64px)] bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{activeItem}</h2>
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
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`${
        darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100'} flex h-screen'
      } flex h-screen`}
    >
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={() => setIsOpen(!isOpen)}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
      />
      <div className="flex flex-col flex-1">
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={() => setIsOpen(!isOpen)} />
        <Content activeItem={activeItem} />
      </div>
    </div>
  );
}

export default Dashboard;
export default Dashboard;



// import React, { useState } from 'react';
// import {
//   Users as UsersIcon,
//   CarTaxiFront,
//   Award,
//   MessageSquare,
//   CreditCard,
//   Headphones,
//   BarChart3,
//   Settings as SettingsIcon,
//   LogOut,
//   Menu,
//   Home,
//   Bell,
//   Sun,
//   Moon,
//   User,
// } from 'lucide-react';

// import Users from '../admin_panel/users';
// import AddTrips from '../admin_panel/add_trips';
// import Rewards from '../admin_panel/reward';
// import Ads from '../admin_panel/add_part';
// import Payments from '../admin_panel/payment';
// import Support from '../admin_panel/support';
// import Analytics from '../admin_panel/analystics';
// import AdminSettings from '../admin_panel/settings';

// const menuItems = [
//   { name: 'Dashboard', icon: Home },
//   { name: 'Users', icon: UsersIcon, component: Users },
//   { name: 'Add Trip', icon: CarTaxiFront, component: AddTrips },
//   { name: 'Rewards', icon: Award, component: Rewards },
//   { name: 'Ads', icon: MessageSquare, component: Ads },
//   { name: 'Payments', icon: CreditCard, component: Payments },
//   { name: 'Support', icon: Headphones, component: Support },
//   { name: 'Analytics', icon: BarChart3, component: Analytics },
//   { name: 'Settings', icon: SettingsIcon, component: AdminSettings },
// ];

// function Sidebar({ isOpen, toggleSidebar, setActiveItem, activeItem }) {
//   return (
//     <div className={`${isOpen ? 'w-64' : 'w-20'} bg-white h-screen p-5 pt-8 relative duration-300 shadow-lg`}>

//       <h1 className={`text-xl font-medium origin-left duration-300 ${!isOpen && 'scale-0'}`}>Admin Panel</h1>
//       <ul className="pt-6">
//         {menuItems.map((item) => (
//           <li
//             key={item.name}
//             className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-100 text-gray-700 text-sm items-center gap-x-4 mt-2 ${activeItem === item.name ? 'bg-gray-100 text-blue-600' : ''}`}
//             onClick={() => setActiveItem(item.name)}
//           >
//             <item.icon size={20} />
//             <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>{item.name}</span>
//           </li>
//         ))}
//       </ul>
//       <div className="absolute bottom-4 flex rounded-md p-2 cursor-pointer hover:bg-gray-100 text-gray-700 text-sm items-center gap-x-4">
//         <LogOut size={20} />
//         <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Logout</span>
//       </div>
//     </div>
//   );
// }

// function Header({ toggleDarkMode, darkMode }) {
//   return (
//     <div className="flex justify-between items-center p-4 bg-white shadow-md">
//       <Menu className="cursor-pointer" size={24} />
//       <div className="flex items-center space-x-4">
//         <Bell className="cursor-pointer" size={24} />
//         <button onClick={toggleDarkMode}>{darkMode ? <Sun size={24} /> : <Moon size={24} />}</button>
//         <User className="cursor-pointer" size={24} />
//       </div>
//     </div>
//   );
// }

// function Content({ activeItem }) {
//   const ActiveComponent = menuItems.find((item) => item.name === activeItem)?.component || (() => <p>Select a section</p>);
//   return (
//     <div className="flex-1 p-7">
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">{activeItem}</h2>
//         <ActiveComponent />
//       </div>
//     </div>
//   );
// }

// function Dashboard() {
//   const [isOpen, setIsOpen] = useState(true);
//   const [activeItem, setActiveItem] = useState('Dashboard');
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

  // return (
  //   <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100'} flex h-screen`}>
  //     <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} setActiveItem={setActiveItem} activeItem={activeItem} />
  //     <div className="flex flex-col flex-1">
  //       <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
  //       <Content activeItem={activeItem} />
  //     </div>
  //   </div>
  // );
// }

// export default Dashboard;
