import React, { useState, useEffect } from "react";
import { FaInfoCircle, FaYenSign } from "react-icons/fa";
import footprintImage from "../assets/footprint.png";
import groupsImage from "../assets/groups.png";
import recycleImage from "../assets/recycle.png";

const CoinsHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [balance, setBalance] = useState(0);

  const dummyTransactions = [
    { id: 1, title: "Manali trip", status: "Paid Today", time: "10:46 AM", amount: "+167", image: footprintImage },
    { id: 2, title: "Himalaya trip", status: "Sent on 17 Apr", time: "08:37 AM", amount: "+93", image: groupsImage },
    { id: 3, title: "Goa trip", status: "Paid on 15 Apr", time: "02:22 PM", amount: "+120", image: recycleImage },
    { id: 4, title: "Kerala vacation", status: "Paid on 10 Apr", time: "11:15 AM", amount: "+200", image: footprintImage },
    { id: 5, title: "Leh-Ladakh adventure", status: "Sent on 5 Mar", time: "09:30 AM", amount: "+300", image: groupsImage },
  ];

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/users/coin", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await response.json();
        setBalance(data.coin || 0);
      } catch (error) {
        console.error("Error fetching coin balance:", error);
      }
    };

    fetchBalance();
  }, []);

  const filteredHistory = dummyTransactions.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center text-black"
      style={{
        backgroundImage: "url('/src/assets/naturewb.jpg')",
      }}
    >
      <div className="w-full max-w-lg mx-auto p-6 bg-black bg-opacity-70 rounded-lg shadow-md">
        {/* Balance */}
        <div className="flex flex-col items-center p-6 rounded-lg shadow-sm relative">
          <FaYenSign className="text-5xl text-gray-700" />
          <div className="text-4xl font-extrabold text-green-800 mt-2">{balance}</div>
          <div className="bg-gray-200 text-gray-800 px-4 py-1 mt-3 rounded-full text-sm font-semibold uppercase">
            Balance Coins
          </div>
          <FaInfoCircle
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            title="This is your current balance in coins."
          />
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
                    <div className="w-10 h-10 bg-black flex items-center justify-center rounded-full">
                      <img src={item.image} alt="Icon" className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
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
