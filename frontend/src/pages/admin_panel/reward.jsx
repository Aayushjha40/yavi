import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Clock,
  Coins,
  X,
  Footprints,
  RecycleIcon,
  Users,
} from "lucide-react";

// Mock data for demonstration
const notifications = [
  {
    id: 1,
    username: "Sarah Chen",
    email: "sarah.chen@example.com",
    profilePic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    uploadTime: "2024-03-15T10:30:00",
    category: "Carbon Footprint",
    coins: 150,
  },
  {
    id: 2,
    username: "Alex Rodriguez",
    email: "alex.rodriguez@example.com",
    profilePic:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150",
    uploadTime: "2024-03-15T09:15:00",
    category: "Recycle",
    coins: 200,
  },
];

const categories = [
  {
    name: "Carbon Footprint",
    icon: Footprints,
    description: "Track and reduce carbon emissions",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800",
    media: {
      type: "video",
      src: "https://www.w3schools.com/html/mov_bbb.mp4", // Sample video
    },
  },
  {
    name: "Recycle",
    icon: RecycleIcon,
    description: "Promote recycling initiatives",
    image:
      "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800",
    },
  },
  {
    name: "Engage",
    icon: Users,
    description: "Community engagement activities",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800",
    media: {
      type: "video",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  },
];


function RewardModal({ isOpen, onClose, notification }) {
  const [coins, setCoins] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(notification.category);
  const [mediaPopup, setMediaPopup] = useState({ isOpen: false, media: null }); // State for media popup

  const category = categories.find((cat) => cat.name === selectedCategory);

  if (!isOpen) return null;

  const handleReward = () => {
    console.log(
      `Rewarding ${coins} coins to ${notification.username} for ${selectedCategory}`
    );
    onClose();
  };

  const openMediaPopup = (media) => {
    setMediaPopup({ isOpen: true, media });
  };

  const closeMediaPopup = () => {
    setMediaPopup({ isOpen: false, media: null });
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose} // Close modal when clicking outside the modal content
    >
      <div
        className="bg-white rounded-xl shadow-2xl p-6 max-w-4xl w-full overflow-y-auto max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Give Reward</h2>
            <p className="text-gray-500">
              Select a category and assign coins
            </p>
          </div>
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
                  <h3 className="text-lg font-semibold">
                    {notification.username}
                  </h3>
                  <p className="text-gray-500">{notification.email}</p>
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

          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                const isSelected = selectedCategory === category.name;
                return (
                  <button
                    key={category.name}
                    onClick={() => openMediaPopup(category.media)} // Open media popup on click
                    className={`relative overflow-hidden rounded-xl transition-all ${
                      isSelected
                        ? "ring-3 ring-green-500"
                        : "hover:ring-2 hover:ring-green-200"
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
                            <h3 className="text-lg font-semibold text-white">
                              {category.name}
                            </h3>
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

      {/* Media Popup */}
      {mediaPopup.isOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 max-w-3xl w-full relative">
      {/* Close Button */}
      <button
        onClick={() => {
          closeMediaPopup(); // Close the media popup
        }}
        className="absolute top-4 right-4 text-black hover:text-gray-700 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
      >
        <X size={24} />
      </button>

      {/* Media Content */}
      {mediaPopup.media.type === "video" ? (
        <video
          src={mediaPopup.media.src}
          controls
          className="w-full rounded-lg"
        />
      ) : (
        <img
          src={mediaPopup.media.src}
          alt="Media"
          className="w-full rounded-lg"
        />
      )}
    </div>
  </div>
)}
    </div>
  );
}
function NotificationCard({ notification, onReward }) {
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
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
            <span className="font-semibold text-yellow-700">
              {notification.coins}
            </span>
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

function RewardPage() {
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

export default RewardPage;