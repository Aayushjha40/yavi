import React, { useRef, useState } from "react";
import recycle from "../../assets/recycle.png";
import footprint from "../../assets/footprint.png";
import engage from "../../assets/groups.png";
import naturebg from "../../assets/naturewb.jpg";

const EcoFriendlyZone = () => {
  const [uploadedImages, setUploadedImages] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRefs = useRef({});

  const handleImageUpload = async (event, categoryName) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("category", categoryName);
  
      setIsLoading(true);
  
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem("token");
  
        const response = await fetch("http://localhost:4000/api/upload", {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        });
  
        const data = await response.json();
        if (response.ok) {
          const fileType = file.type.startsWith("video") ? "video" : "image";
  
          setUploadedImages((prev) => ({
            ...prev,
            [categoryName]: {
              url: data.url,
              type: fileType,
            },
          }));
        } else {
          console.error("Upload failed:", data.message);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setIsLoading(false);
      }
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
    window.location.reload();
  };

  const isSubmitEnabled = Object.keys(uploadedImages).length > 0;

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center relative"
      style={{ backgroundImage: `url(${naturebg})` }}
    >
      {/* Full-screen Loader */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="w-16 h-16 border-4 border-t-4 border-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>

        </div>
      )}

      {showThankYou ? (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center z-10">
          <h2 className="text-2xl font-bold text-green-600">Thank You!</h2>
          <p className="text-gray-600 mt-2">
            Your files have been submitted successfully. 🎉
          </p>
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
              Welcome to the eco-friendly zone! Upload your pics and videos
              related to the options given and earn points. You can use those
              points for your next trips.
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
                {/* Uploaded Media as Background */}
                {uploadedImages[category.name] && (
                  <div className="absolute inset-0 z-0">
                    {uploadedImages[category.name].type === "video" ? (
                      <video
                        src={uploadedImages[category.name].url}
                        className="w-full h-full object-cover"
                        muted
                        autoPlay
                        loop
                      />
                    ) : (
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${uploadedImages[category.name].url})`,
                          filter: "brightness(50%)",
                        }}
                      />
                    )}
                  </div>
                )}

                <div className="relative z-10 flex flex-col flex-grow w-full">
                  {!uploadedImages[category.name] && (
                    <div className="flex flex-col items-center">
                      <h3 className="text-white text-lg mb-2">
                        {category.name}
                      </h3>
                      <img
                        src={category.img}
                        alt={category.name}
                        className="w-36 mb-4"
                      />
                    </div>
                  )}

                  <div className="flex-grow"></div>

                  <input
                    type="file"
                    className="hidden"
                    accept="image/*,video/*"
                    ref={(el) => (fileInputRefs.current[category.name] = el)}
                    onChange={(event) =>
                      handleImageUpload(event, category.name)
                    }
                  />

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

          <div className="flex justify-center mt-6">
            <button
              className={`p-3 text-white font-bold rounded-lg w-40 transition-all ${
                isSubmitEnabled
                  ? "bg-green-600 hover:bg-green-700 cursor-pointer"
                  : "bg-gray-400 cursor-not-allowed"
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