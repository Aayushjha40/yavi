import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import place1 from '../assets/place1.jpg';
import place2 from '../assets/place2.jpg';
import place3 from '../assets/place3.jpg';
import place4 from '../assets/place4.jpg';
import place5 from '../assets/place5.jpg';

function Trending() {
  const navigate = useNavigate();

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
    { id: 1, title: 'Himachal Retreat', image: place1, days: '5 Days', cities: '3 Cities', friends: '2 Friends' },
    { id: 2, title: 'Venice - Italy', image: place2, days: '7 Days', cities: '5 Cities', friends: '4 Friends' },
    { id: 3, title: 'Eiffel tower - Paris', image: place3, days: '3 Days', cities: '2 Cities', friends: '1 Friend' },
    { id: 4, title: 'Buckingham Palace', image: place4, days: '10 Days', cities: '8 Cities', friends: '6 Friends' },
    { id: 5, title: 'Taj Mahal', image: place5, days: '6 Days', cities: '4 Cities', friends: '3 Friends' },
  ];

  const handleCardClick = (id) => {
    navigate(`/card/${id}`);
  };

  return (
    <div>
      <h1 className='text-6xl font-medium font-serif text-center mt-5 mb-6'>Trending now</h1>
      <Slider {...settings}>
        {cards.map(card => (
          <div key={card.id} className="p-4" >
            <div className="w-[280px] h-[280px] bg-white m-3 rounded-2xl shadow-lg flex flex-col hover:bg-gray-200 transition-colors duration-300 cursor-pointer" onClick={() => handleCardClick(card.id)}>
              <div className="flex-1">
                <img src={card.image} alt={card.title} className="w-[270px] h-[180px] m-1 object-cover rounded-2xl" />
              </div>
              <div className="flex-1 flex flex-col justify-center items-start m-1 ml-2">
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p className="text-sm">By Travel with Nizar</p>
              </div>
              <hr className="w-[260px] border-gray-300 mt-1" />
              <div className="flex-1 flex flex-col justify-center items-start m-2 ">
                <p className="text-sm">{card.days} &bull; {card.cities} &bull; {card.friends}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Trending;