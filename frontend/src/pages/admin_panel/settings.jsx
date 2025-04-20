import React, { useState } from "react";
import { FaSearch, FaCog, FaUser, FaPlane, FaHotel, FaBell, FaShieldAlt, FaPalette, FaChartBar, FaGift, FaCode, FaFileAlt, FaHandshake } from "react-icons/fa";

const TravelAdminSettings = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const settingsOptions = [
    { name: "General Settings", icon: <FaCog /> },
    { name: "User Management", icon: <FaUser /> },
    { name: "Booking & Reservations", icon: <FaPlane /> },
    { name: "Payments & Transactions", icon: <FaHotel /> },
    { name: "Destinations & Packages", icon: <FaPlane /> },
    { name: "Flight & Hotel Integrations", icon: <FaHotel /> },
    { name: "Notifications & Alerts", icon: <FaBell /> },
    { name: "Privacy & Security", icon: <FaShieldAlt /> },
    { name: "Appearance & Theme", icon: <FaPalette /> },
    { name: "Travel Policies", icon: <FaFileAlt /> },
    { name: "Analytics & Reports", icon: <FaChartBar /> },
    { name: "Loyalty & Rewards", icon: <FaGift /> },
    { name: "API & Developer Access", icon: <FaCode /> },
    { name: "Legal & Compliance", icon: <FaHandshake /> },
  ];

  const filteredOptions = settingsOptions.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p--20 bg-gray-200 max-h-screen">
      <div className="w-full bg-white shadow-md rounded-lg p-6 border-l-2 border-r-4 border-gray-300">
        <h1 className="text-2xl font-bold mb-4">Admin Settings</h1>
        <div className="relative mb-4">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search for a setting..."
            className="p-2 pl-10 border rounded w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ul className="bg-gray-50 shadow-inner rounded-lg p-4 overflow-y-auto max-h-[calc(100vh-200px)]">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-3 border-b hover:bg-gray-100 cursor-pointer"
            >
              {option.icon}
              <span>{option.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TravelAdminSettings;