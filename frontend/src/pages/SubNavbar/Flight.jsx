import React, { useState } from "react";

const Flight = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
  });

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission & fetch flights
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setFlights([]);

    try {
      const API_KEY = process.env.REACT_APP_FLIGHT_API_KEY; // Use .env file
      const response = await fetch(
        `https://api.aviationstack.com/v1/flights?access_key=${API_KEY}`
      );

      if (!response.ok) throw new Error("Failed to fetch flight data");

      const data = await response.json();

      // Filter flights based on user input
      const filteredFlights = data.data.filter(
        (flight) =>
          flight.departure.iata === formData.from.toUpperCase() &&
          flight.arrival.iata === formData.to.toUpperCase() &&
          flight.flight_date === formData.departureDate
      );

      if (filteredFlights.length === 0) {
        setError("No flights found for the selected route and date.");
      }

      setFlights(filteredFlights);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 border border-gray-300 rounded-lg bg-white shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Flight Booking
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="from"
          value={formData.from}
          onChange={handleInputChange}
          placeholder="From (IATA Code, e.g., JFK)"
          className="w-full p-3 mb-4 border rounded-lg"
          required
        />
        <input
          type="text"
          name="to"
          value={formData.to}
          onChange={handleInputChange}
          placeholder="To (IATA Code, e.g., LAX)"
          className="w-full p-3 mb-4 border rounded-lg"
          required
        />
        <input
          type="date"
          name="departureDate"
          value={formData.departureDate}
          onChange={handleInputChange}
          className="w-full p-3 mb-4 border rounded-lg"
          required
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-lg"
        >
          Search Flights
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading flights...</p>}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      <div className="mt-6">
        {flights.length > 0 && (
          <h2 className="text-xl font-semibold mb-4">Available Flights</h2>
        )}
        {flights.map((flight, index) => (
          <div key={index} className="border p-4 rounded-lg shadow mb-4">
            <p>
              <strong>Airline:</strong> {flight.airline.name} ({flight.airline.iata})
            </p>
            <p>
              <strong>Flight Number:</strong> {flight.flight.iata}
            </p>
            <p>
              <strong>Departure:</strong> {flight.departure.airport} (
              {flight.departure.iata}) at {new Date(flight.departure.scheduled).toLocaleTimeString()}
            </p>
            <p>
              <strong>Arrival:</strong> {flight.arrival.airport} (
              {flight.arrival.iata}) at {new Date(flight.arrival.scheduled).toLocaleTimeString()}
            </p>
            <p>
              <strong>Status:</strong> {flight.flight_status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flight;
