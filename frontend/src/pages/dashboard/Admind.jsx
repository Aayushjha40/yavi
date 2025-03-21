import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Plane,
  Hotel,
  CreditCard,
  MessageSquare,
  BarChart3,
  Settings,
  Sun,
  Moon,
  Search,
  Bell,
  ChevronDown,
  Menu,
  X,
  TrendingUp,
  UserCheck,
  Clock,
  MapPin,
  DollarSign,
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for the charts
const revenueData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
];

const users = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    status: 'active',
    bookings: 12,
    joined: '2024-01-15',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64',
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.c@example.com',
    status: 'active',
    bookings: 8,
    joined: '2024-02-01',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    email: 'emma.w@example.com',
    status: 'suspended',
    bookings: 5,
    joined: '2024-01-20',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64',
  },
];

const bookings = [
  {
    id: 'BK001',
    user: 'Sarah Johnson',
    destination: 'Paris, France',
    date: '2024-03-25',
    status: 'pending',
    amount: 1250,
  },
  {
    id: 'BK002',
    user: 'Michael Chen',
    destination: 'Tokyo, Japan',
    date: '2024-04-10',
    status: 'confirmed',
    amount: 2100,
  },
  {
    id: 'BK003',
    user: 'Emma Wilson',
    destination: 'New York, USA',
    date: '2024-03-30',
    status: 'cancelled',
    amount: 850,
  },
];

function AdminDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ${darkMode ? 'bg-gray-800' : 'bg-white'} border-r ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="flex items-center mb-5 justify-between">
            <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Travel Admin
            </span>
            <button
              onClick={() => setSidebarOpen(false)}
              className={`lg:hidden ${darkMode ? 'text-white' : 'text-gray-500'}`}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="space-y-2">
            {[
              { icon: <LayoutDashboard />, text: 'Dashboard' },
              { icon: <Users />, text: 'Users' },
              { icon: <Plane />, text: 'Flights' },
              { icon: <Hotel />, text: 'Hotels' },
              { icon: <CreditCard />, text: 'Payments' },
              { icon: <MessageSquare />, text: 'Support' },
              { icon: <BarChart3 />, text: 'Analytics' },
              { icon: <Settings />, text: 'Settings' },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center p-2 rounded-lg ${
                    darkMode
                      ? 'text-white hover:bg-gray-700'
                      : 'text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {React.cloneElement(item.icon, {
                    className: 'w-5 h-5 mr-2',
                  })}
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`p-4 ${sidebarOpen ? 'lg:ml-64' : ''}`}>
        {/* Top Navigation */}
        <nav
          className={`fixed top-0 right-0 left-0 z-30 ${
            sidebarOpen ? 'lg:ml-64' : ''
          } ${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}
        >
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className={`p-2 rounded-lg ${
                    darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <Menu className="h-6 w-6" />
                </button>
                <div className="ml-4">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-500" />
                    <input
                      type="text"
                      className={`pl-10 pr-4 py-2 rounded-lg w-64 ${
                        darkMode
                          ? 'bg-gray-700 text-white border-gray-600'
                          : 'bg-gray-50 text-gray-900 border-gray-300'
                      }`}
                      placeholder="Search..."
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg ${
                    darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <button
                  className={`p-2 rounded-lg ${
                    darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <Bell className="h-5 w-5" />
                </button>
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32"
                    alt="Admin"
                  />
                  <button
                    className={`flex items-center ml-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    <span className="text-sm font-medium">Admin</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="pt-16">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                title: 'Total Revenue',
                value: '$45,231',
                change: '+12.5%',
                icon: <DollarSign className="h-6 w-6" />,
                color: 'text-green-600',
              },
              {
                title: 'Active Users',
                value: '2,345',
                change: '+8.1%',
                icon: <UserCheck className="h-6 w-6" />,
                color: 'text-blue-600',
              },
              {
                title: 'Pending Bookings',
                value: '182',
                change: '-2.3%',
                icon: <Clock className="h-6 w-6" />,
                color: 'text-yellow-600',
              },
              {
                title: 'Top Destination',
                value: 'Paris',
                change: '+5 bookings',
                icon: <MapPin className="h-6 w-6" />,
                color: 'text-purple-600',
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-sm`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {stat.title}
                    </p>
                    <p
                      className={`text-2xl font-semibold mt-1 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {stat.value}
                    </p>
                  </div>
                  <div className={`${stat.color}`}>{stat.icon}</div>
                </div>
                <div className="mt-4">
                  <span
                    className={`text-sm font-medium ${
                      stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span
                    className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} ml-2`}
                  >
                    from last month
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts and Tables Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Revenue Chart */}
            <div
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
            >
              <h3
                className={`text-lg font-semibold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Revenue Overview
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke={darkMode ? '#374151' : '#e5e7eb'}
                    />
                    <XAxis
                      dataKey="name"
                      stroke={darkMode ? '#9ca3af' : '#6b7280'}
                    />
                    <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3b82f6"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Users */}
            <div
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
            >
              <h3
                className={`text-lg font-semibold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Recent Users
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr
                      className={`text-left ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      <th className="pb-3 font-medium">User</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Bookings</th>
                      <th className="pb-3 font-medium">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="py-2">
                          <div className="flex items-center">
                            <img
                              src={user.avatar}
                              alt={user.name}
                              className="w-8 h-8 rounded-full mr-3"
                            />
                            <div>
                              <p
                                className={`font-medium ${
                                  darkMode ? 'text-white' : 'text-gray-900'
                                }`}
                              >
                                {user.name}
                              </p>
                              <p
                                className={`text-sm ${
                                  darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}
                              >
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              user.status === 'active'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td
                          className={`${darkMode ? 'text-white' : 'text-gray-900'}`}
                        >
                          {user.bookings}
                        </td>
                        <td
                          className={`${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          {user.joined}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div
            className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
          >
            <h3
              className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Recent Bookings
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr
                    className={`text-left ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    <th className="pb-3 font-medium">Booking ID</th>
                    <th className="pb-3 font-medium">User</th>
                    <th className="pb-3 font-medium">Destination</th>
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td
                        className={`py-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {booking.id}
                      </td>
                      <td
                        className={`${darkMode ? 'text-white' : 'text-gray-900'}`}
                      >
                        {booking.user}
                      </td>
                      <td
                        className={`${darkMode ? 'text-white' : 'text-gray-900'}`}
                      >
                        {booking.destination}
                      </td>
                      <td
                        className={`${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        {booking.date}
                      </td>
                      <td>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            booking.status === 'confirmed'
                              ? 'bg-green-100 text-green-800'
                              : booking.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td
                        className={`${darkMode ? 'text-white' : 'text-gray-900'}`}
                      >
                        ${booking.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;