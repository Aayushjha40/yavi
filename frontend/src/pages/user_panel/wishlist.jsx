import React, { useState } from 'react';
import { Heart, MapPin, Star, Calendar, Search, Filter, Share2, Trash2 } from 'lucide-react';

export default function Wishlist() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [view, setView] = useState('grid');

  const wishlistItems = [
    {
      id: 1,
      name: "Maldives Beach Resort",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80",
      price: "$299",
      perNight: true,
      location: "Maldives",
      rating: 4.8,
      reviews: 245,
      availability: "Available from June 2024",
      amenities: ["Private Beach", "Spa", "Pool", "Restaurant"],
      description: "Luxury overwater villas with stunning ocean views"
    },
    {
      id: 2,
      name: "Swiss Alps Chalet",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
      price: "$399",
      perNight: true,
      location: "Switzerland",
      rating: 4.9,
      reviews: 189,
      availability: "Available year-round",
      amenities: ["Ski-in/Ski-out", "Fireplace", "Hot Tub", "Mountain View"],
      description: "Cozy mountain retreat with breathtaking Alpine views"
    },
    {
      id: 3,
      name: "Santorini Villa",
      image: "https://images.unsplash.com/photo-1570957174114-ce6a2da4d537?w=600&q=80",
      price: "$459",
      perNight: true,
      location: "Greece",
      rating: 4.7,
      reviews: 312,
      availability: "Best during Summer",
      amenities: ["Private Pool", "Sea View", "Terrace", "Butler Service"],
      description: "Traditional Cycladic villa with stunning caldera views"
    }
  ];

  const filteredItems = wishlistItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'budget' && parseInt(item.price.slice(1)) < 300) ||
                        (priceRange === 'luxury' && parseInt(item.price.slice(1)) >= 300);
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Wishlist</h1>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search wishlist..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Prices</option>
            <option value="budget">Budget (Under $300)</option>
            <option value="luxury">Luxury ($300+)</option>
          </select>
          <div className="flex rounded-lg border">
            <button
              onClick={() => setView('grid')}
              className={`px-4 py-2 ${view === 'grid' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
            >
              Grid
            </button>
            <button
              onClick={() => setView('list')}
              className={`px-4 py-2 ${view === 'list' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}>
        {filteredItems.map(item => (
          <div key={item.id} className={`bg-white rounded-lg shadow-md overflow-hidden ${view === 'list' ? 'flex' : ''}`}>
            <div className={view === 'list' ? 'w-1/3' : ''}>
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-red-50">
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                </button>
              </div>
            </div>
            
            <div className={`p-6 ${view === 'list' ? 'w-2/3' : ''}`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <div className="flex items-center text-gray-600 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-blue-600">{item.price}</p>
                  <p className="text-sm text-gray-500">{item.perNight ? 'per night' : ''}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 font-medium">{item.rating}</span>
                <span className="mx-1 text-gray-400">•</span>
                <span className="text-gray-600">{item.reviews} reviews</span>
              </div>

              <p className="text-gray-600 mb-4">{item.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.amenities.map((amenity, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Trash2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}