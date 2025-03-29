import React, { useState } from 'react';
import { Plane, Calendar, MapPin, Clock, Filter, Search, Tag, ArrowUpDown } from 'lucide-react';

export default function MyBookings() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const bookings = [
    {
      id: 1,
      destination: "Paris, France",
      hotel: "Le Grand Paris Hotel",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
      date: "March 15, 2024",
      status: "Upcoming",
      type: "Flight + Hotel",
      price: "$1,299",
      flightDetails: "AF1234 - CDG",
      checkIn: "March 15, 2024",
      checkOut: "March 20, 2024"
    },
    {
      id: 2,
      destination: "Tokyo, Japan",
      hotel: "Sakura View Hotel",
      image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=600&q=80",
      date: "April 20, 2024",
      status: "Pending",
      type: "Flight",
      price: "$899",
      flightDetails: "JL789 - NRT",
      checkIn: "April 20, 2024",
      checkOut: "April 25, 2024"
    },
    {
      id: 3,
      destination: "Bali, Indonesia",
      hotel: "Tropical Paradise Resort",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
      date: "May 5, 2024",
      status: "Confirmed",
      type: "Flight + Hotel + Activities",
      price: "$1,599",
      flightDetails: "GA456 - DPS",
      checkIn: "May 5, 2024",
      checkOut: "May 12, 2024"
    }
  ];

  const filteredBookings = bookings
    .filter(booking => 
      (filterStatus === 'all' || booking.status.toLowerCase() === filterStatus) &&
      (booking.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
       booking.type.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.destination.localeCompare(b.destination);
    });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">My Bookings</h1>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
          </select>
          <button
            onClick={() => setSortBy(sortBy === 'date' ? 'destination' : 'date')}
            className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            <ArrowUpDown className="w-4 h-4 mr-2" />
            Sort by {sortBy === 'date' ? 'Destination' : 'Date'}
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {filteredBookings.map(booking => (
          <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex">
              <div className="w-1/3">
                <img
                  src={booking.image}
                  alt={booking.destination}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-2/3 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{booking.destination}</h3>
                    <p className="text-gray-600">{booking.hotel}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    booking.status === 'Upcoming' ? 'bg-green-100 text-green-800' :
                    booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {booking.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Check-in</p>
                      <p className="font-medium">{booking.checkIn}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-500 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Check-out</p>
                      <p className="font-medium">{booking.checkOut}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Plane className="w-4 h-4 text-gray-500 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Flight</p>
                      <p className="font-medium">{booking.flightDetails}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 text-gray-500 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="font-medium">{booking.price}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Modify Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}