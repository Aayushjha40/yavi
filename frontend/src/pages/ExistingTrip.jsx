import React from 'react';
import place1 from '../assets/place1.jpg';
import place2 from '../assets/place2.jpg';
import place3 from '../assets/place3.jpg';
import place4 from '../assets/place4.jpg';
import place5 from '../assets/place5.jpg';

const ExistingTrip = () => {
  const cards = [
    { id: 1, title: 'Himachal Retreat', image: place1, days: '5 Days', cities: '3 Cities', friends: '2 Friends' },
    { id: 2, title: 'Venice - Italy', image: place2, days: '7 Days', cities: '5 Cities', friends: '4 Friends' },
    { id: 3, title: 'Eiffel tower - Paris', image: place3, days: '3 Days', cities: '2 Cities', friends: '1 Friend' },
    { id: 4, title: 'Buckingham Palace', image: place4, days: '10 Days', cities: '8 Cities', friends: '6 Friends' },
    { id: 5, title: 'Taj Mahal', image: place5, days: '6 Days', cities: '4 Cities', friends: '3 Friends' },
    { id: 6, title: 'Place 6', image: place1, days: '4 Days', cities: '2 Cities', friends: '1 Friend' },
    { id: 7, title: 'Place 7', image: place2, days: '8 Days', cities: '6 Cities', friends: '5 Friends' },
    { id: 8, title: 'Place 8', image: place3, days: '2 Days', cities: '1 City', friends: '1 Friend' },
    { id: 9, title: 'Place 9', image: place4, days: '9 Days', cities: '7 Cities', friends: '4 Friends' },
    { id: 10, title: 'Place 10', image: place5, days: '3 Days', cities: '2 Cities', friends: '2 Friends' },
    { id: 11, title: 'Place 11', image: place1, days: '6 Days', cities: '4 Cities', friends: '3 Friends' },
    { id: 12, title: 'Place 12', image: place2, days: '5 Days', cities: '3 Cities', friends: '2 Friends' },
  ];

  return (
    <div >
      <h1 className='text-6xl font-medium font-serif text-center mt-3 mb-3'>Existing Trip</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 m-1 p-4">
        {cards.map(card => (
          <div key={card.id} className="p-4">
            <div className="w-[260px] h-[280px] bg-white m-3 rounded-2xl shadow-lg flex flex-col hover:bg-gray-200 transition-colors duration-300">
              <div className="flex-1">
                <img src={card.image} alt={card.title} className="w-[250px] h-[180px] m-1 object-cover rounded-2xl" />
              </div>
              <div className="flex-1 flex flex-col justify-center items-start m-1 ml-2">
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p className="text-sm">By Travel with Nizar</p>
              </div>
              <hr className="w-[260px] border-gray-300 mt-1" />
              <div className="flex-1 flex flex-col justify-center items-start m-2">
                <p className="text-sm">{card.days} | {card.cities} | {card.friends}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExistingTrip;