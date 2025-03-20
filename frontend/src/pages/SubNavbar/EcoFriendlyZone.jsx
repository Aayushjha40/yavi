import React, { useRef, useState } from "react";
import recycle from "../../assets/recycle.png";
import footprint from "../../assets/footprint.png";
import engage from "../../assets/groups.png";
import naturebg from "../../assets/naturewb.jpg";

const EcoFriendlyZone = () => {
  const [uploadedImages, setUploadedImages] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);
  const fileInputRefs = useRef({});

  const handleImageUpload = (event, categoryName) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImages((prev) => ({ ...prev, [categoryName]: imageUrl }));
    }
  };

  const triggerFileUpload = (categoryName) => {
    if (fileInputRefs.current[categoryName]) {
      fileInputRefs.current[categoryName].click();
    }
  };

  const handleSubmit = () => {
    setShowThankYou(true);
  };

  const handleWelcomeClick = () => {
    window.location.reload(); // Refresh the page
  };

  const isSubmitEnabled = Object.keys(uploadedImages).length > 0;

  return (
    <div className="min-h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${naturebg})` }}>
      {/* Thank You Message */}
      {showThankYou ? (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-green-600">Thank You!</h2>
          <p className="text-gray-600 mt-2">Your files have been submitted successfully. 🎉</p>
          <button
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md font-bold hover:bg-green-700"
            onClick={handleWelcomeClick}
          >
            Welcome
          </button>
        </div>
      ) : (
        <div className="w-full">
          <div className="px-6 md:px-28 text-white">
            <h1 className="text-4xl pt-14 font-bold">Eco-friendly zone!</h1>
            <p className="opacity-50 mt-3">
              Welcome to the eco-friendly zone! Upload your pics and videos related to the options given and earn points.
              You can use those points for your next trips.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center mt-8 p-6 md:p-10 bg-black bg-opacity-50 rounded-lg mx-4 md:mx-auto max-w-4xl">
            {[
              { name: "Carbon Footprint", img: footprint },
              { name: "Recycle", img: recycle },
              { name: "Engage", img: engage },
            ].map((category, index) => (
              <div
                key={index}
                className="h-80 w-52 border-4 border-[#4fb5c5] bg-black bg-opacity-50 rounded-lg flex flex-col items-center p-4 m-2 relative overflow-hidden"
              >
                {/* Background Image with Dark Overlay */}
                {uploadedImages[category.name] && (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${uploadedImages[category.name]})`,
                      filter: "brightness(50%)",
                    }}
                  ></div>
                )}

                <div className="relative z-10 flex flex-col flex-grow w-full">
                  {/* Title and Icon */}
                  {!uploadedImages[category.name] && (
                    <div className="flex flex-col items-center">
                      <h3 className="text-white text-lg mb-2">{category.name}</h3>
                      <img src={category.img} alt={category.name} className="w-36 mb-4" />
                    </div>
                  )}

                  {/* Spacer to push the button to the bottom */}
                  <div className="flex-grow"></div>

                  {/* Hidden File Input */}
                  <input
                    type="file"
                    className="hidden"
                    ref={(el) => (fileInputRefs.current[category.name] = el)}
                    onChange={(event) => handleImageUpload(event, category.name)}
                  />

                  {/* Upload Button */}
                  <button
                    className="p-2 bg-[#4fb5c5] text-white font-bold rounded-md w-full mt-1"
                    onClick={() => triggerFileUpload(category.name)}
                  >
                    Upload
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              className={`p-3 text-white font-bold rounded-lg w-40 transition-all ${
                isSubmitEnabled ? "bg-green-600 hover:bg-green-700 cursor-pointer" : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={handleSubmit}
              disabled={!isSubmitEnabled}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EcoFriendlyZone;
