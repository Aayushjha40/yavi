import React, { useState } from "react";
import EcoFriendlyZone from "./SubNavbar/EcoFriendlyZone";
import Reward from "./admin_panel/reward";
import CoinsHistory from "./Coins";

const ParentComponent = () => {
  const [uploads, setUploads] = useState([]); // Stores uploaded files
  const [coins, setCoins] = useState(0); // Stores total coins for the user

  // Handle file uploads from EcoFriendlyZone
  const handleUpload = (file) => {
    setUploads((prev) => [...prev, file]);
  };

  // Handle rewarding coins from Reward page
  const handleReward = (uploadId, rewardCoins) => {
    setUploads((prev) =>
      prev.map((upload) =>
        upload.id === uploadId ? { ...upload, coins: rewardCoins, status: "approved" } : upload
      )
    );
    setCoins((prev) => prev + rewardCoins);
  };

  return (
    <div>
      <EcoFriendlyZone onUpload={handleUpload} />
      <Reward uploads={uploads.filter((upload) => upload.status === "pending")} onReward={handleReward} />
      <CoinsHistory coins={coins} uploads={uploads.filter((upload) => upload.status === "approved")} />
    </div>
  );
};

export default ParentComponent;
