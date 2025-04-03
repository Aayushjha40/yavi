import { useState } from 'react';
import { Zap, CheckCircle, XCircle } from 'lucide-react';

const initialCampaigns = [
  {
    id: 1,
    name: 'Summer Special',
    status: 'Accepted',
    budget: '$500',
    impressions: '12.5K',
    clicks: '850',
    images: [
    ]
  },
  {
    id: 2,
    name: 'Winter Holidays',
    status: 'Rejected',
    budget: '$1000',
    impressions: '0',
    clicks: '0',
    images: [
    ]
  }
];

export default function Ads() {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newCampaign, setNewCampaign] = useState({ name: '', status: 'Accepted', budget: '', impressions: '0', clicks: '0', images: [] });

  const handleCreateCampaign = () => {
    setIsDialogOpen(true);
  };

  const handleChange = (e) => {
    setNewCampaign({ ...newCampaign, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setNewCampaign({ ...newCampaign, images: files.map(file => URL.createObjectURL(file)) });
  };

  const handleSubmit = () => {
    setCampaigns([...campaigns, { id: campaigns.length + 1, ...newCampaign }]);
    setIsDialogOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Advertising Campaigns</h1>
        <button
          onClick={handleCreateCampaign}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          <Zap className="h-4 w-4 mr-2" />
          Create Campaign
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white shadow rounded-lg p-6">
            <div className="grid grid-cols-3 gap-2 mb-4">
              {campaign.images.map((image, index) => (
                <img key={index} src={image} alt="Campaign" className="w-full h-24 object-cover rounded" />
              ))}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
            <div className="flex items-center mt-2">
              {campaign.status === 'Accepted' ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
              <span className="ml-2 text-gray-700 font-medium">{campaign.status}</span>
            </div>
            <p className="text-gray-600 mt-2"><strong>Budget:</strong> {campaign.budget}</p>
            <p className="text-gray-600"><strong>Impressions:</strong> {campaign.impressions}</p>
            <p className="text-gray-600"><strong>Clicks:</strong> {campaign.clicks}</p>
          </div>
        ))}
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold text-gray-900">Create New Campaign</h2>
            <input type="text" name="name" placeholder="Campaign Name" className="w-full p-2 mt-2 border rounded" onChange={handleChange} />
            <input type="text" name="budget" placeholder="Budget" className="w-full p-2 mt-2 border rounded" onChange={handleChange} />
            <input type="file" multiple className="w-full p-2 mt-2 border rounded" onChange={handleImageUpload} />
            <div className="flex justify-end mt-4">
              <button onClick={() => setIsDialogOpen(false)} className="bg-gray-400 text-white px-4 py-2 rounded mr-2">Cancel</button>
              <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
