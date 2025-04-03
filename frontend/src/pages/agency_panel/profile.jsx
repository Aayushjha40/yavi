import { Mail, Phone, MapPin, Globe, Briefcase, Calendar, Users, Star, Compass, Award } from 'lucide-react';

export default function Profile() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mt-6 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-6">
            <img
              className="h-28 w-28 rounded-full border-2 border-gray-300"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">John Doe</h2>
              <p className="text-sm text-gray-600">Senior Travel Consultant</p>
              <p className="text-sm text-gray-500">10+ years experience in eco-friendly tourism</p>
              <div className="flex items-center mt-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="ml-2 text-gray-900">Rated 4.8/5 by 500+ clients</span>
              </div>
              <div className="flex items-center mt-2">
                <Award className="h-5 w-5 text-green-500" />
                <span className="ml-2 text-gray-900">Certified Sustainable Travel Expert</span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400" />
              <span className="ml-2 text-gray-900">john.doe@example.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-400" />
              <span className="ml-2 text-gray-900">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400" />
              <span className="ml-2 text-gray-900">San Francisco, CA</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400" />
              <span className="ml-2 text-gray-900">Joined: 2015</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900">Agency Details</h2>
        <p className="text-gray-700 mt-2">
          <strong>Company:</strong> EcoTravels Inc.
        </p>
        <p className="text-gray-700">
          <strong>Specialty:</strong> Sustainable travel solutions, eco-friendly tours, and ethical tourism.
        </p>
        <p className="text-gray-700">
          <strong>Founded:</strong> 2010
        </p>
        <p className="text-gray-700">
          <strong>Clients Served:</strong> Over 10,000 happy travelers worldwide
        </p>
        <p className="text-gray-700">
          <strong>Destinations Covered:</strong> 50+ eco-friendly locations globally
        </p>
        <p className="text-gray-700">
          <strong>Best Package:</strong> 7-Day Sustainable Adventure in Bali
        </p>
        <div className="flex items-center mt-3">
          <Globe className="h-5 w-5 text-gray-400" />
          <a
            href="https://ecotravels.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-600 hover:underline"
          >
            www.ecotravels.com
          </a>
        </div>
      </div>
    </div>
  );
}
