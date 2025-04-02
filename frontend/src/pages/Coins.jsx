import React, { useState } from "react";
import { FaInfoCircle, FaYenSign } from "react-icons/fa"; // Import the info and yen icons
import { MdOutlineAttachMoney } from "react-icons/md";
import footprintImage from "../assets/footprint.png"; // Import footprint image
import groupsImage from "../assets/groups.png"; // Import groups image
import recycleImage from "../assets/recycle.png"; // Import recycle image

const CoinsHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Updated history with more examples and random images
  const history = [
    { id: 1, fileName: "Manali trip", status: "Paid Today", time: "10:46 AM", amount: "+167", image: footprintImage },
    { id: 2, fileName: "Himalaya trip", status: "Sent on 17 May", time: "08:37 AM", amount: "+93", image: groupsImage },
    { id: 3, fileName: "Goa trip", status: "Paid on 15 May", time: "02:22 PM", amount: "+120", image: recycleImage },
    { id: 4, fileName: "Kerala vacation", status: "Paid on 10 Apr", time: "11:15 AM", amount: "+200", image: footprintImage },
    { id: 5, fileName: "Leh-Ladakh adventure", status: "Sent on 5 Mar", time: "09:30 AM", amount: "+300", image: groupsImage },
  ];

  const filteredHistory = history.filter((item) =>
    item.fileName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center text-black"
      style={{
        backgroundImage: "url('/src/assets/naturewb.jpg')", // Set the background image
      }}
    >
      <div className="w-full max-w-lg mx-auto p-6 bg-black bg-opacity-70 rounded-lg shadow-md">
        {/* Balance Coins Section */}
        <div className="flex flex-col items-center p-6 rounded-lg shadow-sm relative">
          <FaYenSign className="text-5xl text-gray-700" /> {/* Replaced with yen icon */}
          <div className="text-4xl font-extrabold text-green-800 mt-2">500</div>
          <div className="bg-gray-200 text-gray-800 px-4 py-1 mt-3 rounded-full text-sm font-semibold uppercase">
            Balance Coins
          </div>
          {/* Info Icon */}
          <FaInfoCircle
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            title="This is your current balance in coins."
          />
          {/* Conversion Rate */}
          <div className="mt-3 text-sm text-yellow-600 font-medium">
            250 eco coins = 1₹ rupee
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search history..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Transaction History */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-green-800 border-b-2 border-gray-300 pb-2">
            Transaction History
          </h2>
          <ul className="mt-4 space-y-4">
            {filteredHistory.length > 0 ? (
              filteredHistory.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-gray-100 p-5 rounded-lg shadow-sm hover:bg-gray-200 hover:shadow-md hover:scale-105 transition-transform duration-200"
                >
                  <div className="flex items-center gap-4">
                    {/* Display the image with black background */}
                    <div className="w-10 h-10 bg-black flex items-center justify-center rounded-full">
                      <img src={item.image} alt="Icon" className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.fileName}</div>
                      <div className="text-sm text-gray-600">{item.status} • {item.time}</div>
                    </div>
                  </div>
                  <div className="text-red-500 font-bold text-xl">{item.amount} 🪙</div>
                </li>
              ))
            ) : (
              <div className="text-center text-gray-500 mt-4">No results found</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoinsHistory;