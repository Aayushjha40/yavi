import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import place1 from '../assets/place1.jpg';
import place2 from '../assets/place2.jpg';
import place3 from '../assets/place3.jpg';
import place4 from '../assets/place4.jpg';
import place5 from '../assets/place5.jpg';

function MostBooking() {
  const settings = {
    speed: 300,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '8%',
  };

  const cards = [
    { id: 1, title: 'Himachal Retreat', image: place1, days: '5 Days', cities: '3 Cities', TotalPerson: '2343' },
    { id: 2, title: 'Venice - Italy', image: place2, days: '7 Days', cities: '5 Cities', TotalPerson: '47855' },
    { id: 3, title: 'Eiffel tower - Paris', image: place3, days: '3 Days', cities: '2 Cities', TotalPerson: '58558' },
    { id: 4, title: 'Buckingham Palace', image: place4, days: '10 Days', cities: '8 Cities', TotalPerson: '64346' },
    { id: 5, title: 'Taj Mahal', image: place5, days: '6 Days', cities: '4 Cities', TotalPerson: '34346' },
  ];

  return (
    <div>
      <h1 className='text-6xl font-medium font-serif text-center mt-3 mb-6'>Most Booking Plan</h1>
      <Slider {...settings}>
        {cards.map(card => (
          <div key={card.id} className="p-4">
            <div className="w-[270px] h-[350px] bg-white m-3 rounded-sm shadow-lg flex flex-col hover:bg-gray-200 transition-colors duration-300">
              <div className="flex-1">
                <img src={card.image} alt={card.title} className="w-[260px] h-[260px] m-1 object-cover rounded-sm" />
              </div>
              <div className="flex-1 flex flex-col justify-center items-start m-1 ml-2">
                <h2 className="text-xl font-bold">{card.title}</h2>
                <hr className="w-[250px] border-gray-300 mt-3" />
              </div>
              
              <div className="flex-1 flex flex-col justify-center items-start m-1 ">
              <p className="text-sm">{card.days} | {card.cities} | {card.TotalPerson}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MostBooking;