import React, { useState, useEffect } from "react";
import { Clock, Coins, Check, X, Footprints, RecycleIcon, Users } from "lucide-react";

function RewardPage() {
  const [categories, setCategories] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [mediaPopup, setMediaPopup] = useState({ isOpen: false, media: null });

  const [rewardedUsers, setRewardedUsers] = useState(() => {
    // Load from localStorage on initial render
    const stored = localStorage.getItem("rewardedUsers");
    return stored ? JSON.parse(stored) : [];
  });
  

  // Fetch data from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/uploads");
        const data = await response.json();

        // Transform backend data to match the categories structure
        const transformedCategories = data.map((item) => ({
          name: item.category,
          icon:
            item.category === "Carbon Footprint"
              ? Footprints
              : item.category === "Recycle"
              ? RecycleIcon
              : Users,
          description: `Uploaded by ${item.user.name}`,
          image: item.fileUrl,
          media: {
            type: item.fileUrl.endsWith(".mp4") ? "video" : "image",
            src: item.fileUrl,
          },
          userId: item.user._id, // Include userId for the reward
        }));

        setCategories(transformedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const openMediaPopup = (media) => {
    setMediaPopup({ isOpen: true, media });
  };

  const closeMediaPopup = () => {
    setMediaPopup({ isOpen: false, media: null });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Reward Notifications</h1>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <NotificationCard
              key={index}
              notification={category}
              onReward={setSelectedNotification}
              onMediaClick={openMediaPopup}
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

      {mediaPopup.isOpen && (
        <MediaPopup media={mediaPopup.media} onClose={closeMediaPopup} />
      )}
    </div>
  );
}

function NotificationCard({ notification, onReward, onMediaClick }) {
  const [rewarded, setRewarded] = useState(() => {
    // Check localStorage for the rewarded state
    const rewardedState = localStorage.getItem(`rewarded-${notification.userId}`);
    return rewardedState === "true"; // Convert string to boolean
  });

  const Icon = notification.icon;

  const handleRewardClick = () => {
    if (!rewarded) {
      onReward(notification); // Trigger the reward action
      setRewarded(true); // Mark as rewarded
      localStorage.setItem(`rewarded-${notification.userId}`, "true"); // Persist the rewarded state
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 mb-4 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={notification.image}
            alt={notification.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 cursor-pointer"
            onClick={() => onMediaClick(notification.media)}
          />
          <div>
            <h3 className="font-semibold text-lg">{notification.name}</h3>
            <p className="text-sm text-gray-500">{notification.description}</p>
          </div>
        </div>
        <button
          onClick={handleRewardClick}
          className={`px-6 py-2.5 ${
            rewarded ? "bg-green-100 text-green-600" : "bg-green-500 text-white hover:bg-green-600"
          } rounded-full transition-colors flex items-center gap-2 font-medium shadow-lg ${
            rewarded ? "shadow-green-200 cursor-default" : "shadow-green-100"
          }`}
          disabled={rewarded} // Disable the button after reward is submitted
        >
          {rewarded ? <Check size={18} /> : <Icon size={18} />}
          {rewarded ? "Rewarded" : "Reward"}
        </button>
      </div>
    </div>
  );
}

function MediaPopup({ media, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 max-w-md w-full max-h-[80vh] overflow-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="z-10 absolute top-3 right-3 text-black hover:text-gray-700 bg-gray-100 p-1.5 rounded-full hover:bg-gray-200 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Media */}
        <div className="relative z-0">
          {media.type === "video" ? (
            <video
              src={media.src}
              controls
              className="w-full max-h-[60vh] rounded-md"
            />
          ) : (
            <img
              src={media.src}
              alt="Media"
              className="w-full max-h-[60vh] object-contain rounded-md"
            />
          )}
        </div>
      </div>
    </div>
  );
}

function RewardModal({ isOpen, onClose, notification }) {
  const [coins, setCoins] = useState("");
  const [rewarded, setRewarded] = useState(false); // Tracks if the reward has been submitted

  if (!isOpen) return null;

  const handleReward = async () => {
    if (!coins || rewarded) {
      console.error("Coin value is required or reward already submitted.");
      return;
    }

    setRewarded(true); // Disable further submissions immediately

    try {
      const response = await fetch("http://localhost:4000/api/users/coin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          userId: notification.userId, // Ensure this is valid
          coin: parseInt(coins, 10), // Ensure this is a valid number
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error rewarding coins:", errorText);
        setRewarded(false); // Re-enable submission in case of an error
        return;
      }

      const data = await response.json();
      console.log(`Rewarded ${coins} coins to ${notification.name}`);

      // Reset state and close modal after a delay
      setTimeout(() => {
        setCoins("");
        onClose();
      }, 1500);
    } catch (error) {
      console.error("Error rewarding coins:", error.message);
      setRewarded(false); // Re-enable submission in case of an error
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl p-6 max-w-4xl w-full overflow-y-auto max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Give Reward</h2>
            <p className="text-gray-500">Assign coins to {notification.name}</p>
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
              disabled={rewarded} // Disable input if reward is submitted
              className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg disabled:opacity-50"
              placeholder="Enter amount"
            />
            <Coins className="absolute right-3 top-3.5 text-gray-400" size={20} />
          </div>
        </div>

        <button
          onClick={handleReward}
          disabled={rewarded || !coins} // Disable button if reward is submitted or no coins entered
          className={`w-full py-3 rounded-xl transition-colors font-semibold text-lg shadow-lg mt-6 flex items-center justify-center gap-2 ${
            rewarded
              ? "bg-green-100 text-green-600 cursor-default"
              : "bg-green-500 text-white hover:bg-green-600 shadow-green-100"
          }`}
        >
          {rewarded ? <Check size={24} /> : "Give Reward"}
        </button>
      </div>
    </div>
  );
}

export default RewardPage;