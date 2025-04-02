import React, { useState } from 'react';
import { Clock, Coins, X, Footprints, RecycleIcon, Users, MapPin, Calendar } from 'lucide-react';

// Mock data for demonstration
const notifications = [
  {
    id: 1,
    username: "Sarah Chen",
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    uploadTime: "2024-03-15T10:30:00",
    category: "Carbon Footprint",
    coins: 150,
    place: "Central Park, New York",
    tripDetails: "Morning jog using eco-friendly route"
  },
  {
    id: 2,
    username: "Alex Rodriguez",
    profilePic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
    uploadTime: "2024-03-15T09:15:00",
    category: "Recycle",
    coins: 200,
    place: "Downtown Recycling Center",
    tripDetails: "Weekly recycling drop-off"
  }
];

const categories = [
  {
    name: "Carbon Footprint",
    icon: Footprints,
    description: "Track and reduce carbon emissions",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800"
  },
  {
    name: "Recycle",
    icon: RecycleIcon,
    description: "Promote recycling initiatives",
    image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800"
  },
  {
    name: "Engage",
    icon: Users,
    description: "Community engagement activities",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800"
  }
];

function RewardModal({ isOpen, onClose, notification }) {
  const [coins, setCoins] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(notification.category);

  if (!isOpen) return null;

  const handleReward = () => {
    // Handle reward logic here
    console.log(`Rewarding ${coins} coins to ${notification.username} for ${selectedCategory}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-4xl w-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Give Reward</h2>
            <p className="text-gray-500">Select a category and assign coins</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        <div className="grid grid-cols-[1.2fr,1.8fr] gap-6">
          <div className="space-y-6">
            <div className="bg-gray-50 p-5 rounded-xl">
              <div className="flex items-center gap-4 mb-5">
                <img 
                  src={notification.profilePic} 
                  alt={notification.username}
                  className="w-14 h-14 rounded-full object-cover ring-3 ring-white"
                />
                <div>
                  <h3 className="text-lg font-semibold">{notification.username}</h3>
                  <p className="text-gray-500">{selectedCategory}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-5">
                <div className="flex items-start gap-3">
                  <MapPin className="text-gray-400 mt-1" size={18} />
                  <div>
                    <p className="font-medium text-gray-700">Location</p>
                    <p className="text-gray-600">{notification.place}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="text-gray-400 mt-1" size={18} />
                  <div>
                    <p className="font-medium text-gray-700">Trip Details</p>
                    <p className="text-gray-600">{notification.tripDetails}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block font-medium text-gray-700">
                  Reward Amount (Coins)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={coins}
                    onChange={(e) => setCoins(e.target.value)}
                    className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                    placeholder="Enter amount"
                  />
                  <Coins className="absolute right-3 top-3.5 text-gray-400" size={20} />
                </div>
              </div>
            </div>

            <button
              onClick={handleReward}
              className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-colors font-semibold text-lg shadow-lg shadow-green-100"
            >
              Give Reward
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 max-h-[500px] overflow-y-auto pr-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`relative overflow-hidden rounded-xl transition-all ${
                    isSelected 
                      ? 'ring-3 ring-green-500' 
                      : 'hover:ring-2 hover:ring-green-200'
                  }`}
                >
                  <div className="relative">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-36 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-4">
                      <div className="text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon size={20} className="text-white" />
                          <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                        </div>
                        <p className="text-gray-200">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationCard({ notification, onReward }) {
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 mb-4 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src={notification.profilePic} 
            alt={notification.username}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
          />
          <div>
            <h3 className="font-semibold text-lg">{notification.username}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <Clock size={14} className="mr-1" />
              {formatTime(notification.uploadTime)}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1.5 rounded-full">
            <Coins size={18} className="text-yellow-500" />
            <span className="font-semibold text-yellow-700">{notification.coins}</span>
          </div>
          <button
            onClick={() => onReward(notification)}
            className="px-6 py-2.5 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors flex items-center gap-2 font-medium shadow-lg shadow-green-100"
          >
            <Coins size={18} />
            Reward
          </button>
        </div>
      </div>
    </div>
  );
}

function reward() {
  const [selectedNotification, setSelectedNotification] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Reward Notifications</h1>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              onReward={setSelectedNotification}
            />
          ))}
        </div>
      </div>
      
      {selectedNotification && (
        <RewardModal
          isOpen={!!selectedNotification}
          onClose={() => setSelectedNotification(null)}
          notification={selectedNotification}
        />
      )}
    </div>
  );
}

export default reward;