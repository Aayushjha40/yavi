import React, { useState } from 'react';
import { Search, Bus, MapPin, Calendar, Shield, CheckCircle, MapPinned, Coffee, Headphones } from 'lucide-react';
import busBg from '../../assets/bus.jpg'; // Adjust the path as necessary

function BusBooking() {
  const [date, setDate] = useState('2025-02-28');
  const [cancellation, setCancellation] = useState(true);

  const setTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split('T')[0]);
  };

  const setDayAfter = () => {
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);
    setDate(dayAfter.toISOString().split('T')[0]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 font-sans">
      {/* Hero Section with Background Image */}
      <header
        className="relative h-80 bg-cover bg-center flex flex-col justify-center items-center text-white text-center shadow-lg"
        style={{ backgroundImage: `url(${busBg})` }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Bus Ticket Booking</h1>
          <p className="text-lg mt-2">Your Trusted Travel Partner</p>
        </div>
      </header>
      
      {/* Search Form */}
      <main className="container mx-auto px-4 relative -mt-20 z-20"> {/* Adjusted margin-top value and added relative positioning */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['From', 'To'].map((placeholder, index) => (
              <div key={index} className="border rounded-lg p-4 flex items-center bg-gray-50">
                {index === 0 ? <Bus className="text-gray-700 mr-3" size={20} /> : <MapPin className="text-gray-700 mr-3" size={20} />}
                <input type="text" placeholder={placeholder} className="w-full focus:outline-none text-lg bg-transparent" />
              </div>
            ))}
            <div className="border rounded-lg p-4 bg-gray-50 flex flex-col">
              <div className="flex items-center">
                <Calendar className="text-gray-700 mr-3" size={20} />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 bg-white" />
              </div>
              <div className="flex mt-2 space-x-2">
                <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full" onClick={setTomorrow}>Tomorrow</button>
                <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full" onClick={setDayAfter}>Day After</button>
              </div>
            </div>
            <div className="border rounded-lg p-4 flex items-center bg-gray-50 justify-between">
              <div className="flex items-center">
                <Shield className="text-gray-700 mr-3" size={20} />
                <span className="font-medium">Free Cancellation</span>
              </div>
              <input type="checkbox" checked={cancellation} onChange={() => setCancellation(!cancellation)} className="cursor-pointer" />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-full flex items-center shadow-md">
              <Search className="mr-2" size={20} /> Search Buses
            </button>
          </div>
        </div>
      </main>
      
      {/* Features Section */}
      <section className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[ 
            { icon: <CheckCircle size={40} className="text-blue-700" />, text: "Check Booking Status" },
            { icon: <MapPinned size={40} className="text-blue-700" />, text: "Live Bus Tracking" },
            { icon: <Coffee size={40} className="text-blue-700" />, text: "Order Snacks" },
            { icon: <Headphones size={40} className="text-blue-700" />, text: "24/7 Customer Support" }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
              <div className="mb-3">{feature.icon}</div>
              <h3 className="text-lg font-medium text-center">{feature.text}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BusBooking;
