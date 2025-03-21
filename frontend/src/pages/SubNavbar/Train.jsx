import React, { useState } from "react";

const TrainBooking = () => {
  const [searchParams, setSearchParams] = useState({ source: "", destination: "", date: "" });
  const [trains, setTrains] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [passengerDetails, setPassengerDetails] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatPrice = 500;

  const availableTrains = [
    { id: 1, name: "Express 101", departure: "10:00 AM", arrival: "2:00 PM" },
    { id: 2, name: "Superfast 202", departure: "11:30 AM", arrival: "3:30 PM" },
  ];

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
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-6">Train Ticket Booking</h1>

      {/* Search Section */}
      <div className="flex gap-4 mb-6">
        <input type="text" placeholder="From" className="border p-2 w-full" onChange={(e) => setSearchParams({ ...searchParams, source: e.target.value })} />
        <input type="text" placeholder="To" className="border p-2 w-full" onChange={(e) => setSearchParams({ ...searchParams, destination: e.target.value })} />
        <input type="date" className="border p-2" onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })} />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={searchTrains}>Search</button>
      </div>

      {/* Train Listing */}
      {trains.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Available Trains</h2>
          {trains.map((train) => (
            <div key={train.id} className="border p-4 mb-2 flex justify-between items-center">
              <div>
                <p className="font-bold">{train.name}</p>
                <p>{train.departure} - {train.arrival}</p>
              </div>
              <input type="checkbox" checked={cancellation} onChange={() => setCancellation(!cancellation)} className="cursor-pointer" />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-full flex items-center shadow-md">
              <Search className="mr-2" size={20} /> Search Trains
            </button>
          </div>
        </div>
      </main>
      
      {/* Features Section */}
      <section className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[ 
            { icon: <CheckCircle size={40} className="text-blue-700" />, text: "Check PNR Status" },
            { icon: <MapPinned size={40} className="text-blue-700" />, text: "Live Train Status" },
            { icon: <Coffee size={40} className="text-blue-700" />, text: "Order Food" },
            { icon: <Headphones size={40} className="text-blue-700" />, text: "Rail Madad" }
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

export default TrainBooking;