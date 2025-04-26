import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import place1 from '../assets/place1.jpg';
import place2 from '../assets/place2.jpg';
import place3 from '../assets/place3.jpg';
import place4 from '../assets/place4.jpg';
import place5 from '../assets/place5.jpg';

function Trending() {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const handleBookmarkClick = (card) => {
    const isAlreadyInWishlist = wishlist.some((item) => item.id === card.id);

    const updatedWishlist = isAlreadyInWishlist
      ? wishlist.filter((item) => item.id !== card.id) // Remove if already in wishlist
      : [...wishlist, card]; // Add card to wishlist if not already present

    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Save to localStorage
  };

  const settings = {
    speed: 300,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '4%',
  };

  const cards = [
    { id: 1, title: 'Himachal Retreat', image: place1, days: '5 Days', cities: '3 Cities', friends: '2 Friends' },
    { id: 2, title: 'Venice - Italy', image: place2, days: '7 Days', cities: '5 Cities', friends: '4 Friends' },
    { id: 3, title: 'Eiffel tower - Paris', image: place3, days: '3 Days', cities: '2 Cities', friends: '1 Friend' },
    { id: 4, title: 'Buckingham Palace', image: place4, days: '10 Days', cities: '8 Cities', friends: '6 Friends' },
    { id: 5, title: 'Taj Mahal', image: place5, days: '6 Days', cities: '4 Cities', friends: '3 Friends' },
  ];

  return (
    <div>
      <h1 className='text-6xl font-medium font-serif text-center mt-5 mb-6'>Trending now</h1>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="p-4">
            <div className="w-[280px] h-[280px] bg-white m-3 rounded-2xl shadow-lg flex flex-col hover:bg-gray-200 transition-colors duration-300 relative">
              <div className="flex-1">
                <img src={card.image} alt={card.title} className="w-[270px] h-[180px] m-1 object-cover rounded-2xl" />
              </div>
              <div className="flex-1 flex flex-col justify-center items-start m-1 ml-2">
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p className="text-sm">By Travel with Nizar</p>
              </div>
              <hr className="w-[260px] border-gray-300 mt-1" />
              <div className="flex-1 flex flex-col justify-center items-start m-2">
                <p className="text-sm">{card.days} &bull; {card.cities} &bull; {card.friends}</p>
              </div>
              <FontAwesomeIcon
                icon={wishlist.some((item) => item.id === card.id) ? faBookmarkSolid : faBookmark}
                className={`absolute top-2 right-2 cursor-pointer text-xl ${
                  wishlist.some((item) => item.id === card.id) ? 'text-blue-500' : 'text-gray-400 hover:text-gray-600'
                }`}
                onClick={() => handleBookmarkClick(card)}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Trending;