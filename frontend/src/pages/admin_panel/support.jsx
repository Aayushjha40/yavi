import { useState } from "react";

export default function AdminPanel() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  const [faqs, setFaqs] = useState([
    { id: 1, question: "How do I cancel my booking?", answer: "Go to your bookings and click cancel." },
    { id: 2, question: "How do I redeem rewards points?", answer: "Use them at checkout." },
  ]);

  const [supportNumbers, setSupportNumbers] = useState([
    { id: 1, number: "+1 (800) 123-4567", available: "24/7" },
  ]);

  const [liveChats, setLiveChats] = useState([
    { id: 1, user: "Alice", message: "I need help with my booking", assigned: "Unassigned" },
  ]);

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 px-6 py-8">
      <div className="max-w-6xl w-full space-y-6">
        
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
          <p>Welcome, Admin! Manage users, support tickets, and FAQs from here.</p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Query Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Question</th>
                  <th className="border p-2">Answer</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {faqs.map(faq => (
                  <tr key={faq.id} className="border">
                    <td className="border p-2">{faq.question}</td>
                    <td className="border p-2">{faq.answer}</td>
                    <td className="border p-2">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                      <button className="bg-red-500 text-white px-4 py-2 ml-2 rounded">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Call Us Section</h2>
          <ul>
            {supportNumbers.map(num => (
              <li key={num.id} className="p-2 border-b flex justify-between">
                <span>{num.number} - {num.available}</span>
                <div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                  <button className="bg-red-500 text-white px-4 py-2 ml-2 rounded">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Live Chat</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">User</th>
                  <th className="border p-2">Message</th>
                  <th className="border p-2">Assigned To</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {liveChats.map(chat => (
                  <tr key={chat.id} className="border">
                    <td className="border p-2">{chat.user}</td>
                    <td className="border p-2">{chat.message}</td>
                    <td className="border p-2">{chat.assigned}</td>
                    <td className="border p-2">
                      <button className="bg-green-500 text-white px-4 py-2 rounded">Respond</button>
                      <button className="bg-blue-500 text-white px-4 py-2 ml-2 rounded">Assign</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
