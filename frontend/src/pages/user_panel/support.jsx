import React from 'react';
import { MessageSquare, Phone, Mail } from 'lucide-react';
import Navbar from './navbar';

export default function Support() {
  return (
    <> <Navbar/>
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Support</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            <h2 className="ml-2 text-xl font-semibold">Live Chat</h2>
          </div>
          <p className="text-gray-600 mb-4">Get instant help from our support team</p>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Start Chat
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Phone className="w-6 h-6 text-blue-600" />
            <h2 className="ml-2 text-xl font-semibold">Call Us</h2>
          </div>
          <p className="text-gray-600 mb-4">24/7 phone support available</p>
          <p className="text-lg font-semibold text-blue-600">+1 (800) 123-4567</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg">
              <span className="font-medium">How do I cancel my booking?</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-4 text-gray-600 px-4">
              You can cancel your booking through the My Bookings section. Cancellation policies vary depending on the type of booking and how far in advance you cancel.
            </p>
          </details>
          
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg">
              <span className="font-medium">How do I redeem my rewards points?</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-4 text-gray-600 px-4">
              Visit the Rewards section to view available rewards and redeem your points. Points can be used for upgrades, free nights, and other travel perks.
            </p>
          </details>
        </div>
      </div>
    </div>
  </>);
}