import React, { useState } from 'react';
import { User, MapPin, Phone, Mail, Calendar, Briefcase, Globe, Camera, Edit } from 'lucide-react';
import Navbar from './navbar';

export default function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dob: '1990-05-15',
    address: '123 Travel Street, Adventure City, 12345',
    occupation: 'Software Engineer',
    nationality: 'United States',
    memberSince: '2022',
    interests: ['Beach Resorts', 'Mountain Hiking', 'Cultural Tours'],
    preferredLanguage: 'English',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=300&h=300'
  });

  return ( <>
    <Navbar/>
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Edit className="w-4 h-4 mr-2" />
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Header Section with Profile Picture */}
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-blue-600">
          <div className="absolute -bottom-16 left-8">
            <div className="relative">
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              {isEditing && (
                <button className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700">
                  <Camera className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="pt-20 px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2">Personal Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                      />
                    ) : (
                      <p className="font-medium">{profileData.name}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                      />
                    ) : (
                      <p className="font-medium">{profileData.email}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Phone Number</p>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                      />
                    ) : (
                      <p className="font-medium">{profileData.phone}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    {isEditing ? (
                      <input
                        type="date"
                        value={profileData.dob}
                        onChange={(e) => setProfileData({...profileData, dob: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                      />
                    ) : (
                      <p className="font-medium">{new Date(profileData.dob).toLocaleDateString()}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2">Additional Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    {isEditing ? (
                      <textarea
                        value={profileData.address}
                        onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                        rows={2}
                      />
                    ) : (
                      <p className="font-medium">{profileData.address}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Occupation</p>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.occupation}
                        onChange={(e) => setProfileData({...profileData, occupation: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                      />
                    ) : (
                      <p className="font-medium">{profileData.occupation}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Nationality</p>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.nationality}
                        onChange={(e) => setProfileData({...profileData, nationality: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                      />
                    ) : (
                      <p className="font-medium">{profileData.nationality}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Travel Preferences */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">Travel Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Travel Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Member Since</h3>
                <p className="text-gray-600">{profileData.memberSince}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>);
}