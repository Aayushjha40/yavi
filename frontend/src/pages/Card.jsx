import React from "react";
import image1 from "../assets/place1.jpg";
import image2 from "../assets/place2.jpg";
import image3 from "../assets/place3.jpg";
import image4 from "../assets/place4.jpg";

const Card = () => {
  const dates = [
    "15 Oct, Tue",
    "16 Oct, Wed",
    "17 Oct, Thu",
    "18 Oct, Fri",
    "19 Oct, Sat",
    "20 Oct, Sun",
  ];

  const itinerary = [
    {
      title: "Shimla - 2 Nights Stay",
      days: [
        {
          day: "Day 1",
          activities: [
            "Depart from Mumbai to Shimla",
            "Check-in to Hotel",
            "Evening free for leisure",
          ],
        },
        {
          day: "Day 2",
          activities: [
            "Breakfast at Hotel",
            "Visit Kufri & local sightseeing",
            "Return to Hotel & Dinner",
          ],
        },
        {
          day: "Day 3",
          activities: ["Breakfast at Hotel", "Checkout & Travel to Manali"],
        },
      ],
    },
    {
      title: "Manali - 3 Nights Stay",
      days: [
        {
          day: "Day 3",
          activities: [
            "Travel to Manali from Shimla",
            "Check-in to Hotel & Rest",
          ],
        },
        {
          day: "Day 4",
          activities: [
            "Breakfast at Hotel",
            "Visit Solang Valley & local spots",
            "Dinner at Hotel",
          ],
        },
        {
          day: "Day 5",
          activities: [
            "Breakfast at Hotel",
            "Explore Manali Market & Leisure",
            "Dinner at Hotel",
          ],
        },
        {
          day: "Day 6",
          activities: ["Breakfast at Hotel", "Checkout & Travel back to Mumbai"],
        },
      ],
    },
  ];

  return (
    <div>
      <div className="m-6">
        <h1 className="text-3xl font-[600]">Himachal Retreat</h1>
        <div className="flex flex-col justify-center items-start mt-1 text-gray-500">
          <p className="text-base font-inter">
            6 Days &bull; 2N Shimala &bull; 3N Manali
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 m-6">
        <div className="col-span-1">
          <img src={image1} alt="Image 1" className="w-full h-64 object-cover rounded-lg" />
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <img src={image2} alt="Image 2" className="w-full h-32 object-cover rounded-lg" />
          <img src={image3} alt="Image 3" className="w-full h-32 object-cover rounded-lg" />
        </div>
        <div className="col-span-1">
          <img src={image4} alt="Image 4" className="w-full h-64 object-cover rounded-lg" />
        </div>
      </div>
      <hr className="bg-black text-2xl"></hr>
      <div className="bg-gray-100 p-6 w-full">
        <h1 className="text-4xl font-[700] pb-5">Day Plan</h1>
        <div className="flex flex-row gap-2">
          <div className="w-3/4 h-full shadow-lg bg-white rounded-xl">
            <h1 className="text-4xl flex justify-center items-center w-full h-20 rounded-t-xl font-[600] text-blue-600 bg-blue-200">
              Summary
            </h1>
            <div className="flex items-start h-full">
              <div className="w-1/4 h-full p-4 bg-white flex flex-col items-start">
                <h2 className="text-2xl font-semibold text-gray-700 self-start mb-4">
                  Day
                </h2>
                <div className="relative w-full">
                  <div className="absolute left-6 top-4 bottom-0 w-[2px] bg-gray-300"></div>
                  {dates.map((date, index) => (
                    <div key={index} className="relative flex items-center mb-6 last:mb-0">
                      <div className="absolute left-4 w-4 h-4 bg-gray-300 rounded-full"></div>
                      <span className="ml-8 text-gray-600">{date}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[2px] h-full bg-gray-600"></div>
              <div className="w-3/4 h-full bg-white">
                <div className="p-4 max-w-2xl mx-auto">
                  {itinerary.map((section, index) => (
                    <div key={index} className="mb-6 bg-white shadow-lg rounded-lg">
                      <div className="bg-orange-300 text-gray-800 font-semibold p-3 rounded-t-lg">
                        {section.title}
                      </div>
                      <div className="p-4">
                        {section.days.map((day, i) => (
                          <div key={i} className="relative flex items-start space-x-4 mb-6">
                            <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-gray-300"></div>
                            <div className="w-4 h-4 bg-gray-400 rounded-full relative z-10"></div>
                            <div>
                              <h3 className="font-semibold text-gray-700">{day.day}</h3>
                              <ul className="mt-2 space-y-2">
                                {day.activities.map((activity, j) => (
                                  <li key={j} className="text-gray-600">
                                    {activity}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 rounded-xl shadow-lg bg-white p-4">
            <div className="bg-white shadow-lg rounded-lg p-4 w-64">
              <div className="text-gray-500 text-sm line-through">₹20,999</div>
              <div className="text-red-500 text-xs font-semibold">11% OFF</div>
              <div className="text-black text-2xl font-bold mt-1">₹18,599</div>
              <button className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition">
                PROCEED TO PAYMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;