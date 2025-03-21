import React, { useState } from 'react';
import {
  Plane,
  Hotel,
  Car,
  Package,
  Bell,
  CreditCard,
  Gift,
  MessageSquare,
  Edit2,
  MapPin,
  Phone,
  Mail,
  Calendar,
  User
} from 'lucide-react';

function Userd() {
  const notifications = [
    { id: 1, text: "Flight BA2490 delayed by 45 minutes", type: "warning" },
    { id: 2, text: "Hotel booking confirmed for Paris trip", type: "success" },
    { id: 3, text: "New travel deal: 30% off on Asian destinations", type: "info" },
  ];

  const upcomingTrips = [
    {
      id: 1,
      destination: "Paris, France",
      dates: "Mar 15 - Mar 22, 2024",
      status: "Confirmed",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    },
    {
      id: 2,
      destination: "Tokyo, Japan",
      dates: "Apr 5 - Apr 15, 2024",
      status: "Pending",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    },
  ];

  const userProfile = {
    name: "Sam Smith",
    gender: "Male",
    birthday: "1990-05-15",
    address: "123 Travel Street",
    state: "California",
    city: "San Francisco",
    pincode: "94105",
    mobile: "+1 (555) 123-4567",
    email: "johndoe@example.com",
    membership: "Premium Member",
    lastLogin: "March 18, 2025, 10:30 AM",
    profilePic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64",
  };

  // Calculate profile completion percentage
  const profileFields = [
    userProfile.name,
    userProfile.gender,
    userProfile.birthday,
    userProfile.address,
    userProfile.state,
    userProfile.city,
    userProfile.pincode,
    userProfile.mobile,
    userProfile.email,
  ];
  
  const completedFields = profileFields.filter(field => field && field.length > 0).length;
  const completionPercentage = Math.round((completedFields / profileFields.length) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Section */}
            <section className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    className="h-20 w-20 rounded-full border-4 border-blue-50"
                    src={userProfile.profilePic}
                    alt="Profile"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{userProfile.name}</h2>
                    <p className="text-sm text-gray-500">{userProfile.membership}</p>
                    <div className="mt-2 flex items-center space-x-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Business Traveler
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-700">Profile Completion</span>
                    <span className="ml-2 text-lg font-bold text-blue-600">{completionPercentage}%</span>
                  </div>
                  <div className="w-32 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-blue-600 rounded-full" 
                      style={{ width: `${completionPercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-gray-400" />
                      <span className="text-sm font-medium text-gray-500">Gender</span>
                    </div>
                    <span className="text-sm text-gray-900">{userProfile.gender}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <span className="text-sm font-medium text-gray-500">Birthday</span>
                    </div>
                    <span className="text-sm text-gray-900">{userProfile.birthday}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <span className="text-sm font-medium text-gray-500">Address</span>
                    </div>
                    <span className="text-sm text-gray-900">{userProfile.address}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <span className="text-sm font-medium text-gray-500">State</span>
                    </div>
                    <span className="text-sm text-gray-900">{userProfile.state}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <span className="text-sm font-medium text-gray-500">City</span>
                    </div>
                    <span className="text-sm text-gray-900">{userProfile.city}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <span className="text-sm font-medium text-gray-500">Pincode</span>
                    </div>
                    <span className="text-sm text-gray-900">{userProfile.pincode}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <span className="text-sm font-medium text-gray-500">Mobile</span>
                    </div>
                    <span className="text-sm text-gray-900">{userProfile.mobile}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <span className="text-sm font-medium text-gray-500">Email</span>
                    </div>
                    <span className="text-sm text-gray-900">{userProfile.email}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
              </div>
            </section>

            {/* Quick Actions */}
            <section className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex flex-col items-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100">
                  <Plane className="h-6 w-6 text-blue-600" />
                  <span className="mt-2 text-sm text-gray-700">Book Flight</span>
                </button>
                <button className="flex flex-col items-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100">
                  <Hotel className="h-6 w-6 text-blue-600" />
                  <span className="mt-2 text-sm text-gray-700">Book Hotel</span>
                </button>
                <button className="flex flex-col items-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100">
                  <Car className="h-6 w-6 text-blue-600" />
                  <span className="mt-2 text-sm text-gray-700">Rent Car</span>
                </button>
                <button className="flex flex-col items-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100">
                  <Package className="h-6 w-6 text-blue-600" />
                  <span className="mt-2 text-sm text-gray-700">Packages</span>
                </button>
              </div>
            </section>


            {/* Upcoming Trips */}
            <section className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Trips</h3>
              <div className="space-y-4">
                {upcomingTrips.map((trip) => (
                  <div key={trip.id} className="flex space-x-4 p-4 rounded-lg border border-gray-200">
                    <img
                      src={trip.image}
                      alt={trip.destination}
                      className="h-24 w-24 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{trip.destination}</h4>
                      <p className="text-sm text-gray-500">{trip.dates}</p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        trip.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {trip.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Notifications */}
            <section className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Notifications</h3>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg ${
                      notification.type === 'warning'
                        ? 'bg-yellow-50'
                        : notification.type === 'success'
                        ? 'bg-green-50'
                        : 'bg-blue-50'
                    }`}
                  >
                    <p className="text-sm text-gray-700">{notification.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Stats */}
            <section className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Travel Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>ECO COINS</span>
                    <span>2,450</span>
                  </div>
                  <div className="mt-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Travel Budget Used</span>
                    <span>$3,200 / $5,000</span>
                  </div>
                  <div className="mt-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '64%' }} />
                  </div>
                </div>
              </div>
            </section>
            
            {/* Support */}
            <section className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Start Live Chat
                </button>
                <p className="text-sm text-gray-500 text-center">
                  24/7 support available
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Userd;