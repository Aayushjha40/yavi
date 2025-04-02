import React from 'react';
import { Bell, Lock, Globe, CreditCard } from 'lucide-react';

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Settings</h1>
      
      <div className="bg-white rounded-lg shadow divide-y">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Bell className="w-5 h-5 text-gray-600" />
              <h2 className="ml-2 font-semibold">Notifications</h2>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="ml-7 space-y-2">
            <div className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600" defaultChecked />
              <span className="ml-2">Email notifications</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600" defaultChecked />
              <span className="ml-2">Push notifications</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Lock className="w-5 h-5 text-gray-600" />
            <h2 className="ml-2 font-semibold">Security</h2>
          </div>
          <div className="space-y-4 ml-7">
            <button className="text-blue-600 hover:underline">Change Password</button>
            <button className="text-blue-600 hover:underline">Two-Factor Authentication</button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Globe className="w-5 h-5 text-gray-600" />
            <h2 className="ml-2 font-semibold">Language & Region</h2>
          </div>
          <div className="ml-7">
            <select className="w-full max-w-xs rounded-lg border-gray-300">
              <option>English (US)</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-4">
            <CreditCard className="w-5 h-5 text-gray-600" />
            <h2 className="ml-2 font-semibold">Payment Methods</h2>
          </div>
          <div className="ml-7">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Add Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}