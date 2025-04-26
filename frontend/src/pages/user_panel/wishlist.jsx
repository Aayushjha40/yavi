import React, { useEffect, useState } from 'react';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Add fallback dateAdded if missing
    const updatedWishlist = savedWishlist.map((trip) => ({
      ...trip,
      dateAdded: trip.dateAdded || new Date().toISOString(),
    }));

    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  }, []);

  const filteredAndSorted = wishlist
    .filter((trip) =>
      trip.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.dateAdded || 0);
      const dateB = new Date(b.dateAdded || 0);
      return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        My Wishlist
      </h1>

      {/* Search and Sort Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search trips..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded-lg px-4 py-2"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="latest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* Wishlist Grid Section */}
      {filteredAndSorted.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSorted.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{trip.title}</h2>
                <p className="text-gray-600 mt-2">
                  {trip.days} &bull; {trip.cities} &bull; {trip.friends}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Added: {new Date(trip.dateAdded).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">
          Your wishlist is empty. Start adding your favorite trips!
        </p>
      )}
    </div>
  );
}

export default Wishlist;