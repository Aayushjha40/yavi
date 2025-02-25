import React, { useState } from "react";

const BusBooking = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [buses, setBuses] = useState([]);
  const [filters, setFilters] = useState({ ac: false, sleeper: false, morning: false, night: false });

  const allBuses = [
    { id: 1, name: "Express Bus", ac: true, sleeper: false, departure: "10:00 AM", price: 500, rating: 4.2 },
    { id: 2, name: "Luxury Travels", ac: true, sleeper: true, departure: "9:30 PM", price: 800, rating: 4.5 },
    { id: 3, name: "Budget Ride", ac: false, sleeper: false, departure: "6:00 AM", price: 400, rating: 3.9 },
  ];

  const searchBuses = () => {
    let results = allBuses.filter(bus =>
      (!filters.ac || bus.ac) &&
      (!filters.sleeper || bus.sleeper) &&
      (!filters.morning || (bus.departure.includes("AM"))) &&
      (!filters.night || (bus.departure.includes("PM")))
    );
    setBuses(results);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Bus Booking</h1>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <input type="text" placeholder="Source" value={source} onChange={e => setSource(e.target.value)} className="border p-2 rounded" />
        <input type="text" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} className="border p-2 rounded" />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} className="border p-2 rounded" />
      </div>
      <div className="flex gap-4 mb-4">
        <label><input type="checkbox" onChange={() => setFilters({ ...filters, ac: !filters.ac })} /> AC</label>
        <label><input type="checkbox" onChange={() => setFilters({ ...filters, sleeper: !filters.sleeper })} /> Sleeper</label>
        <label><input type="checkbox" onChange={() => setFilters({ ...filters, morning: !filters.morning })} /> Morning</label>
        <label><input type="checkbox" onChange={() => setFilters({ ...filters, night: !filters.night })} /> Night</label>
      </div>
      <button onClick={searchBuses} className="bg-blue-500 text-white px-4 py-2 rounded">Search Buses</button>
      <div className="mt-6">
        {buses.length > 0 ? buses.map(bus => (
          <div key={bus.id} className="border p-4 rounded mb-4">
            <h2 className="text-xl font-bold">{bus.name}</h2>
            <p>Departure: {bus.departure} | Price: ₹{bus.price}</p>
            <p>Rating: ⭐ {bus.rating}</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Book Now</button>
          </div>
        )) : <p className="text-gray-500 mt-4">No buses available</p>}
      </div>
    </div>
  );
};

export default BusBooking;
