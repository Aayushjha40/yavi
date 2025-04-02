import React, { useState } from "react";

const usersData = [
  { username: "admin", fullName: "Admin", email: "admin@gmail.com", verified: true, lastActivity: "2025-03-29 14:00", lastUpdate: "2025-03-29 15:00", isAdmin: true },
  { username: "amy", fullName: "Amy Travolta", email: "amy@gmail.com", verified: true, lastActivity: "2025-03-29 13:30", lastUpdate: "2025-03-29 14:15", isAdmin: false },
  { username: "brian", fullName: "Brian Aldipout", email: "brian@gmail.com", verified: true, lastActivity: "2025-03-29 12:45", lastUpdate: "2025-03-29 13:10", isAdmin: false },
  { username: "arjun", fullName: "Arjun Sharma", email: "arjun.sharma@gmail.com", verified: true, lastActivity: "2025-03-29 10:30", lastUpdate: "2025-03-29 11:00", isAdmin: false },
  { username: "priya", fullName: "Priya Singh", email: "priya.singh@gmail.com", verified: true, lastActivity: "2025-03-29 09:45", lastUpdate: "2025-03-29 10:15", isAdmin: false },
  { username: "rahul", fullName: "Rahul Verma", email: "rahul.verma@gmail.com", verified: false, lastActivity: "2025-03-28 18:00", lastUpdate: "2025-03-28 18:30", isAdmin: false },
  { username: "ananya", fullName: "Ananya Iyer", email: "ananya.iyer@gmail.com", verified: true, lastActivity: "2025-03-28 17:15", lastUpdate: "2025-03-28 17:45", isAdmin: false },
  { username: "vikram", fullName: "Vikram Reddy", email: "vikram.reddy@gmail.com", verified: true, lastActivity: "2025-03-28 16:30", lastUpdate: "2025-03-28 17:00", isAdmin: false },
  { username: "kavya", fullName: "Kavya Nair", email: "kavya.nair@gmail.com", verified: false, lastActivity: "2025-03-28 15:45", lastUpdate: "2025-03-28 16:15", isAdmin: false },
  { username: "manish", fullName: "Manish Gupta", email: "manish.gupta@gmail.com", verified: true, lastActivity: "2025-03-28 14:30", lastUpdate: "2025-03-28 15:00", isAdmin: false },
];

const UserTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = usersData.filter((user) =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Dashboard</h1>
        <input
          type="text"
          placeholder="Search for a member"
          className="mb-4 p-2 border rounded w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-300">
                <th className="border px-4 py-2">Username</th>
                <th className="border px-4 py-2">Full Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Email Verified</th>
                <th className="border px-4 py-2">Last Activity</th>
                <th className="border px-4 py-2">Last Profile Update</th>
                <th className="border px-4 py-2">Admin</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.username} className="text-center">
                  <td className="border px-4 py-2">{user.username}</td>
                  <td className="border px-4 py-2">{user.fullName}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.verified ? "✔" : "✖"}</td>
                  <td className="border px-4 py-2">{user.lastActivity}</td>
                  <td className="border px-4 py-2">{user.lastUpdate}</td>
                  <td className="border px-4 py-2">{user.isAdmin ? "✔" : "✖"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
