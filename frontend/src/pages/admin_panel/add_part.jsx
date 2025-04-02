import { useState } from "react";

export default function AdsSection() {
  const [ads, setAds] = useState([
    { id: 1, name: "Homepage Banner", type: "Image", status: "Active", impressions: 4500, file: null },
    { id: 2, name: "Sidebar Ad", type: "Video", status: "Paused", impressions: 3200, file: null },
  ]);
  const [agencyAds, setAgencyAds] = useState([
    { id: 1, name: "Travel Promo", type: "Image", file: "https://via.placeholder.com/150", status: "Pending" },
    { id: 2, name: "Holiday Deals", type: "Video", file: "https://via.placeholder.com/150", status: "Pending" },
  ]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [newAd, setNewAd] = useState({ name: "", type: "Image", status: "Active", file: null });
  const [editAd, setEditAd] = useState(null);

  const filteredAds = ads.filter(
    (ad) =>
      ad.name.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter === "all" || ad.status.toLowerCase() === statusFilter)
  );

  const handleFileUpload = (e) => {
    setNewAd({ ...newAd, file: URL.createObjectURL(e.target.files[0]) });
  };

  const handleAddAd = () => {
    if (newAd.name && newAd.file) {
      setAds([...ads, { id: ads.length + 1, ...newAd, impressions: 0 }]);
      setNewAd({ name: "", type: "Image", status: "Active", file: null });
    }
  };

  const handleDeleteAd = (id) => {
    setAds(ads.filter((ad) => ad.id !== id));
  };

  const handleEditAd = (ad) => {
    setEditAd(ad);
  };

  const handleUpdateAd = () => {
    setAds(ads.map((ad) => (ad.id === editAd.id ? editAd : ad)));
    setEditAd(null);
  };

  const handleAcceptAgencyAd = (id) => {
    setAgencyAds(
      agencyAds.map((ad) => (ad.id === id ? { ...ad, status: "Accepted" } : ad))
    );
  };

  const handleDeclineAgencyAd = (id) => {
    setAgencyAds(
      agencyAds.map((ad) => (ad.id === id ? { ...ad, status: "Declined" } : ad))
    );
  };

  return (
    <div className="p-6 space-y-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">Ads Management</h2>
      <div className="flex justify-between space-x-4">
        <input
          className="border p-2"
          placeholder="Search ads..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="archived">Archived</option>
        </select>
      </div>
      <div className="space-y-2 border p-4 rounded">
        <div className="flex space-x-2">
          <input
            className="border p-2"
            placeholder="Ad Name"
            value={newAd.name}
            onChange={(e) => setNewAd({ ...newAd, name: e.target.value })}
          />
          <select
            className="border p-2"
            value={newAd.type}
            onChange={(e) => setNewAd({ ...newAd, type: e.target.value })}
          >
            <option value="Image">Image</option>
            <option value="Video">Video</option>
          </select>
          <input className="border p-2" type="file" onChange={handleFileUpload} />
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddAd}>
            Upload Ad
          </button>
        </div>
      </div>
      {editAd && (
        <div className="space-y-2 border p-4 rounded">
          <input
            className="border p-2"
            value={editAd.name}
            onChange={(e) => setEditAd({ ...editAd, name: e.target.value })}
          />
          <select
            className="border p-2"
            value={editAd.type}
            onChange={(e) => setEditAd({ ...editAd, type: e.target.value })}
          >
            <option value="Image">Image</option>
            <option value="Video">Video</option>
          </select>
          <select
            className="border p-2"
            value={editAd.status}
            onChange={(e) => setEditAd({ ...editAd, status: e.target.value })}
          >
            <option value="Active">Active</option>
            <option value="Paused">Paused</option>
            <option value="Archived">Archived</option>
          </select>
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleUpdateAd}>
            Update Ad
          </button>
        </div>
      )}
      <table className="w-full border-collapse border mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Impressions</th>
            <th className="border p-2">Preview</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAds.map((ad) => (
            <tr key={ad.id} className="text-center">
              <td className="border p-2">{ad.name}</td>
              <td className="border p-2">{ad.type}</td>
              <td className="border p-2">{ad.status}</td>
              <td className="border p-2">{ad.impressions}</td>
              <td className="border p-2">
                {ad.file && ad.type === "Image" ? (
                  <img src={ad.file} alt={ad.name} className="w-12 mx-auto" />
                ) : null}
                {ad.file && ad.type === "Video" ? (
                  <video src={ad.file} controls className="w-12 mx-auto" />
                ) : null}
              </td>
              <td className="border p-2 space-x-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                  onClick={() => handleEditAd(ad)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDeleteAd(ad.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* New Section for Agency Ads Requests */}
      <h2 className="text-xl font-bold mt-8">Agency Ads Requests</h2>
      <table className="w-full border-collapse border mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Preview</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {agencyAds.map((ad) => (
            <tr key={ad.id} className="text-center">
              <td className="border p-2">{ad.name}</td>
              <td className="border p-2">{ad.type}</td>
              <td className="border p-2">
                {ad.type === "Image" ? (
                  <img src={ad.file} alt={ad.name} className="w-12 mx-auto" />
                ) : (
                  <video src={ad.file} controls className="w-12 mx-auto" />
                )}
              </td>
              <td className="border p-2">{ad.status}</td>
              <td className="border p-2 space-x-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() => handleAcceptAgencyAd(ad.id)}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDeclineAgencyAd(ad.id)}
                >
                  Decline
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}