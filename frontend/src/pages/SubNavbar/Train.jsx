<<<<<<< HEAD
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

  const searchTrains = () => {
    setTrains(availableTrains);
  };

  const handleSeatSelection = (seatNumber) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seatNumber) ? prevSeats.filter((s) => s !== seatNumber) : [...prevSeats, seatNumber]
    );
  };

  const addPassenger = () => {
    setPassengerDetails([...passengerDetails, { name: "", age: "", gender: "" }]);
  };

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...passengerDetails];
    updatedPassengers[index][field] = value;
    setPassengerDetails(updatedPassengers);
  };

  const bookTicket = () => {
    if (!selectedTrain || selectedSeats.length === 0 || passengerDetails.length === 0) {
      alert("Please select train, seats, and enter passenger details.");
      return;
    }
    alert(`Booking confirmed for ${passengerDetails.length} passenger(s) on ${selectedTrain.name}. Total Cost: ₹${selectedSeats.length * seatPrice}`);
  };
=======
import React from 'react'
import Header from '../../components/Header'
>>>>>>> origin/yogesh

  return (
<<<<<<< HEAD
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-6">Train Ticket Booking</h1>
=======
    <>
    <Header/>
    <div>Bus</div>
    </>
  )
}
>>>>>>> origin/yogesh

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
              <button className="bg-green-500 text-white px-4 py-2" onClick={() => setSelectedTrain(train)}>Select</button>
            </div>
          ))}
        </div>
      )}

      {/* Seat Selection */}
      {selectedTrain && (
        <div className="mt-6 border p-4">
          <h2 className="text-xl font-semibold mb-2">Select Seats (₹{seatPrice} each)</h2>
          <div className="grid grid-cols-6 gap-2">
            {[...Array(30).keys()].map((seat) => (
              <button
                key={seat + 1}
                className={`p-2 w-12 border ${selectedSeats.includes(seat + 1) ? "bg-green-500 text-white" : "bg-gray-200"}`}
                onClick={() => handleSeatSelection(seat + 1)}
              >
                {seat + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Passenger Details */}
      {selectedSeats.length > 0 && (
        <div className="mt-6 border p-4">
          <h2 className="text-xl font-semibold mb-2">Passenger Details</h2>
          {passengerDetails.map((passenger, index) => (
            <div key={index} className="mb-3">
              <input type="text" placeholder="Name" className="border p-2 w-full mb-2" onChange={(e) => handlePassengerChange(index, "name", e.target.value)} />
              <input type="number" placeholder="Age" className="border p-2 w-full mb-2" onChange={(e) => handlePassengerChange(index, "age", e.target.value)} />
              <select className="border p-2 w-full mb-2" onChange={(e) => handlePassengerChange(index, "gender", e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          ))}
          <button className="bg-yellow-500 text-white px-4 py-2" onClick={addPassenger}>Add Passenger</button>
        </div>
      )}

      {/* Booking Confirmation */}
      {passengerDetails.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Total Cost: ₹{selectedSeats.length * seatPrice}</h2>
          <button className="bg-red-500 text-white px-4 py-2 mt-4" onClick={bookTicket}>Confirm Booking</button>
        </div>
      )}
    </div>
  );
};

export default TrainBooking;
