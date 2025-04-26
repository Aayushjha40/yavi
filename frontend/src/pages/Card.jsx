import React from "react";

const CoinsHistory = ({ coins, uploads }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Coins</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-600">{coins}</h2>
          <p className="text-gray-500">Total Coins Earned</p>
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-4">Approved Uploads</h2>
        <ul className="space-y-4">
          {uploads.map((upload) => (
            <li key={upload.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-4">
                <img src={upload.fileUrl} alt={upload.fileName} className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="font-semibold">{upload.fileName}</h3>
                  <p className="text-sm text-gray-500">{upload.category}</p>
                </div>
              </div>
              <p className="text-green-600 font-bold mt-2">+{upload.coins} Coins</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoinsHistory;