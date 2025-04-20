import React from 'react';
import { Leaf, TreePine, Cloud } from 'lucide-react';
import Navbar from './navbar'; // Import Navbar

export default function EcoZone() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar /> {/* Add Navbar */}

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-8">Eco Zone</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="ml-3 font-semibold">Carbon Offset</h3>
              </div>
              <p className="text-3xl font-bold text-green-600">245 kg</p>
              <p className="text-gray-600">CO₂ saved this year</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <TreePine className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="ml-3 font-semibold">Trees Planted</h3>
              </div>
              <p className="text-3xl font-bold text-green-600">12</p>
              <p className="text-gray-600">Through eco-bookings</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <Cloud className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="ml-3 font-semibold">Eco Score</h3>
              </div>
              <p className="text-3xl font-bold text-green-600">85</p>
              <p className="text-gray-600">Travel sustainability rating</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Eco-Friendly Achievements</h2>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-green-50 rounded-lg">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Green Explorer</h3>
                  <p className="text-gray-600">Completed 5 eco-friendly stays</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}