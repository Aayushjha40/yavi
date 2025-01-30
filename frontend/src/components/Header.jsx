import React from 'react';
import logo from '../assets/logo.png';
import login from '../assets/login.png';
import coin from '../assets/coin.png';
import flighth from '../assets/flighth.png';
import hotalh from '../assets/hotalh.png';
import trainh from '../assets/trainh.png';
import bush from '../assets/bush.png';
import ecozone from '../assets/ecozone.png';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-white">
      
      <div className="h-20 flex items-center justify-between px-4 md:px-10">
        
        <Link to = {'/'}><div className="logo">
          <img width={100} src={logo} alt='Company Logo' />
        </div></Link>

        
        <div className="flex items-center space-x-4">
          
          <div className="search w-60 h-12 bg-[#0293a9] text-white rounded-full flex justify-between items-center px-3">
            <span>Search destination</span>
            <span className="bg-[#00798C] text-black h-10 w-10 rounded-full flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </span>
          </div>

          
          <span className="bg-slate-300 p-2 w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">
            <img src={coin} alt='Coin' width={30} />
          </span>

          
          <span className="bg-[#00798C] p-2 w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </span>

          
          <Link to ={'/login'}><div className="bg-[#00798C] p-2 w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">
            <img src={login} alt='Login Icon' width={30} />
          </div></Link>
        </div>
      </div>

      
      <div className="flex justify-center rounded-lg">
        <div className="flex justify-around space-x-6 bg-slate-50 md:w-[40vw]">
          
          <div className="flex flex-col items-center hover:bg-slate-100 hover:text-blue-500 hover:underline hover:decoration-blue-500 py-2.5 px-6 rounded">
            <img src={flighth} alt='Flight' className="w-12 h-12" />
            <p className="font-semibold text-xl">Flight</p>
          </div>

          
          <div className="flex flex-col items-center py-2.5 px-6  hover:bg-slate-100 hover:text-blue-500 hover:underline hover:decoration-blue-500">
            <img src={hotalh} alt='Hotel' className="w-12 h-12" />
            <p className="font-semibold text-xl">Hotel</p>
          </div>

         
          <div className="flex flex-col items-center py-2.5 px-6 hover:bg-slate-100 hover:text-blue-500 hover:underline hover:decoration-blue-500">
            <img src={trainh} alt='Train' className="w-12 h-12" />
            <p className="font-semibold text-xl">Train</p>
          </div>

          
          <div className="flex flex-col items-center p-2.5  hover:bg-slate-100 hover:text-blue-500 hover:underline hover:decoration-blue-500">
            <img src={bush} alt='Bus' className="w-12 h-12" />
            <p className="font-semibold text-xl">Bus</p>
          </div>

          
          <div className="flex flex-col items-center py-2.5 px-6 hover:bg-slate-100 hover:text-blue-500 hover:underline hover:decoration-blue-500">
            <img src={ecozone} alt='Eco-Friendly Zone' className="w-12 h-12" />
            <p className="font-semibold text-sm text-center">Eco-Friendly Zone</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
