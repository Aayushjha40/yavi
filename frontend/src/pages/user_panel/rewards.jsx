import React from 'react';
import { Gift, Star, Award } from 'lucide-react';
import Navbar from './navbar';

export default function Rewards() {
  return (<>
  <Navbar/>
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Rewards</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Gold Member</h2>
            <p className="text-gray-600">Valid until Dec 2024</p>
          </div>
          <div className="flex items-center">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <span className="ml-2 font-semibold">2,500 points</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-4">Available Rewards</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <Gift className="w-5 h-5 text-blue-600 mr-3" />
                <span>Free Airport Transfer</span>
              </div>
              <span className="text-blue-600 font-semibold">500 points</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <Award className="w-5 h-5 text-blue-600 mr-3" />
                <span>Room Upgrade</span>
              </div>
              <span className="text-blue-600 font-semibold">1000 points</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="border-b pb-2">
              <p className="font-medium">Hotel Booking Bonus</p>
              <p className="text-sm text-gray-600">+200 points • March 1, 2024</p>
            </div>
            <div className="border-b pb-2">
              <p className="font-medium">Flight Miles Conversion</p>
              <p className="text-sm text-gray-600">+150 points • February 25, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </> );
}