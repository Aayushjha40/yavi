import React, { useState } from 'react';
import Header from '../../components/Header';

const Flight = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    travelClass: 'economy',
  });

  // State for trip type
  const [tripType, setTripType] = useState('one-way');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto p-8 border border-gray-300 rounded-lg bg-white shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Flight Booking</h1>
        <div className="flex justify-around mb-8">
          <button
            className={`p-3 w-1/2 rounded-l-lg ${tripType === 'one-way' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setTripType('one-way')}
          >
            One Way
          </button>
          <button
            className={`p-3 w-1/2 rounded-r-lg ${tripType === 'round-trip' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setTripType('round-trip')}
          >
            Round Trip
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-gray-700">From:</label>
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-700">To:</label>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex mb-6">
            <div className="w-1/2 pr-2">
              <label className="block mb-2 text-gray-700">Departure Date:</label>
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {tripType === 'round-trip' && (
              <div className="w-1/2 pl-2">
                <label className="block mb-2 text-gray-700">Return Date:</label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-700">Passengers:</label>
            <input
              type="number"
              name="passengers"
              value={formData.passengers}
              onChange={handleInputChange}
              min="1"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-700">Class:</label>
            <select
              name="travelClass"
              value={formData.travelClass}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search Flights
          </button>
        </form>
      </div>
    </>
  );
};

export default Flight;
