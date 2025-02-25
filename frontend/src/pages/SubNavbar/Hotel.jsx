import React, { useState } from 'react';
import { Calendar, Users, Bed, Search, Star, Coffee, Wifi, Car } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Ocean View Suite',
    price: 299,
    description: 'Luxurious suite with panoramic ocean views and private balcony',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800',
    amenities: ['King Bed', 'Ocean View', 'Free Wifi', 'Breakfast Included']
  },
  {
    id: 2,
    name: 'Garden Villa',
    price: 399,
    description: 'Spacious villa surrounded by tropical gardens with private pool',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800',
    amenities: ['2 Bedrooms', 'Private Pool', 'Garden View', 'Parking']
  }
];

const Hotel = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Find Your Perfect Stay</h1>
              <p className="text-xl opacity-90">Discover luxury accommodations with breathtaking views</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Check-in</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Check-out</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <button className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 self-end">
              <Search className="h-5 w-5" />
              Search Rooms
            </button>
          </div>
        </div>
      </div>

      {/* Room Listings */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Available Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-blue-600">${room.price}</span>
                    <p className="text-sm text-gray-500">per night</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {room.amenities.map((amenity, index) => (
                    <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {amenity.includes('Wifi') && <Wifi className="h-4 w-4" />}
                      {amenity.includes('Breakfast') && <Coffee className="h-4 w-4" />}
                      {amenity.includes('Parking') && <Car className="h-4 w-4" />}
                      {amenity.includes('Bed') && <Bed className="h-4 w-4" />}
                      {amenity}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotel;