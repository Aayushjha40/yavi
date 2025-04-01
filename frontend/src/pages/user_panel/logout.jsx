import React from 'react';
import { LogOut } from 'lucide-react';

export default function Logout() {
  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Log Out</h1>
      
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <LogOut className="w-8 h-8 text-red-600" />
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-2">Are you sure you want to log out?</h2>
        <p className="text-gray-600 mb-6">You will need to log in again to access your account.</p>
        
        <div className="space-x-4">
          <button 
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Log Out
          </button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}