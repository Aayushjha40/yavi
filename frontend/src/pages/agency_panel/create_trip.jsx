import React, { useState, useRef } from 'react';
import { PlusCircle, X, Upload } from 'lucide-react';

function add_trips() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [trips, setTrips] = useState([
    {
      id: 1,
      title: "Paradise Beach Getaway",
      description: "Experience the ultimate beach vacation with crystal clear waters and white sandy beaches.",
      place: "Maldives",
      startDate: "2024-04-01",
      endDate: "2024-04-07",
      price: 2499,
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=500&auto=format"
    },
    {
      id: 2,
      title: "Mountain Adventure",
      description: "Trek through breathtaking mountain trails and experience nature at its finest.",
      place: "Swiss Alps",
      startDate: "2024-05-15",
      endDate: "2024-05-22",
      price: 1899,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format"
    }
  ]);

  const [newTrip, setNewTrip] = useState({
    title: '',
    description: '',
    place: '',
    startDate: '',
    endDate: '',
    price: '',
    image: '',
    daySchedule: ['', '', '']
  });

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setNewTrip(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDayScheduleChange = (index, value) => {
    const newSchedule = [...newTrip.daySchedule];
    newSchedule[index] = value;
    setNewTrip(prev => ({ ...prev, daySchedule: newSchedule }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tripData = {
      id: trips.length + 1,
      ...newTrip,
      price: Number(newTrip.price)
    };
    setTrips([...trips, tripData]);
    setIsModalOpen(false);
    setSelectedImage(null);
    setNewTrip({
      title: '',
      description: '',
      place: '',
      startDate: '',
      endDate: '',
      price: '',
      image: '',
      daySchedule: ['', '', '']
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Trip Management</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center gap-2"
          >
            <PlusCircle size={20} />
            Add New Trip
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {trips.map((trip) => (
            <div key={trip.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
              <img src={trip.image} alt={trip.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 line-clamp-1">{trip.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{trip.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{trip.place}</span>
                  <span className="text-blue-600 font-semibold">${trip.price}</span>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Add New Trip</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="flex gap-6">
              {/* Left column */}
              <div className="w-1/3 space-y-4">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                />
                <div 
                  onClick={() => fileInputRef.current?.click()} 
                  className="cursor-pointer"
                >
                  {selectedImage ? (
                    <div className="relative">
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-full h-48 object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-xl opacity-0 hover:opacity-100 transition-opacity">
                        <p className="text-white flex items-center gap-2">
                          <Upload size={20} />
                          Change Image
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-48 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-blue-500 transition-colors">
                      <Upload size={24} className="text-gray-400" />
                      <p className="text-gray-500">Click to upload image</p>
                    </div>
                  )}
                </div>

                <input
                  type="text"
                  required
                  placeholder="Enter trip title"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  value={newTrip.title}
                  onChange={(e) => setNewTrip({ ...newTrip, title: e.target.value })}
                />

                <textarea
                  required
                  placeholder="Enter trip description"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                  rows={3}
                  value={newTrip.description}
                  onChange={(e) => setNewTrip({ ...newTrip, description: e.target.value })}
                />
              </div>

               {/* middle column - Day Schedule */}
              <div className="w-1/3 space-y-4 bg-gray-100 p-5 rounded-2xl ">
                <h4 className="font-medium text-gray-700">Day Schedule</h4>
                {[1, 2, 3].map((day, index) => (
                  <input
                    key={day}
                    type="text"
                    placeholder={`Day ${day}`}
                    className="w-full h-30 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    value={newTrip.daySchedule[index]}
                    onChange={(e) => handleDayScheduleChange(index, e.target.value)}
                  />
                ))}
              </div>

              {/* right column */}
              <div className="w-1/4 space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Enter destination"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  value={newTrip.place}
                  onChange={(e) => setNewTrip({ ...newTrip, place: e.target.value })}
                />

                <div className="flex gap-3">
                  <input
                    type="date"
                    required
                    className="w-1/2 flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    value={newTrip.startDate}
                    onChange={(e) => setNewTrip({ ...newTrip, startDate: e.target.value })}
                  />
                  <input
                    type="date"
                    required
                    className="w-1/2 flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    value={newTrip.endDate}
                    onChange={(e) => setNewTrip({ ...newTrip, endDate: e.target.value })}
                  />
                </div>

                <input
                  type="number"
                  required
                  placeholder="Enter price"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  value={newTrip.price}
                  onChange={(e) => setNewTrip({ ...newTrip, price: e.target.value })}
                />

                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 font-medium"
                >
                  Submit Trip
                </button>
              </div>

             
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default add_trips;