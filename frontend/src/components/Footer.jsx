import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';
import yaviLogo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className='bg-gray-200 text-black mx-auto p-4 h-[50vh]'>
      <div className='container mx-auto h-full flex flex-col justify-between'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex flex-col items-center md:items-start w-full md:w-auto mb-4 md:mb-0 mt-8'>
            <img src={yaviLogo} alt="YAVI Logo" width={100} className='mx-auto md:mx-0' />
            <p className='text-center md:text-left text-black mt-2'>Take nothing but memories, leave nothing but footprints</p>
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center w-full'>
            <div className='mb-4 md:mb-0 md:mr-16 md:ml-8'>
              <h3 className='text-lg font-bold'>Company</h3>
              <ul className='list-none'>
                <li><Link to='/about' className='text-black hover:underline'>About Us</Link></li>
                <li><Link to='/careers' className='text-black hover:underline'>Careers</Link></li>
                <li><Link to='/blog' className='text-black hover:underline'>Blog</Link></li>
                <li><Link to='/Privacy' className='text-black hover:underline'>Privacy Policy</Link></li>
                <li><Link to='/Companies hiring' className='text-black hover:underline'>Companies hiring</Link></li>
                <li><Link to='/Our Team' className='text-black hover:underline'>Our Team</Link></li>
              </ul>
            </div>
            <div className='mb-4 md:mb-0 md:mr-8'>
              <h3 className='text-lg font-bold'>Get Help</h3>
              <ul className='list-none'>
                <li><Link to='/contact' className='text-black hover:underline'>Contact Us</Link></li>
                <li><Link to='/support' className='text-black hover:underline'>Support</Link></li>
                <li><Link to='/faq' className='text-black hover:underline'>FAQ</Link></li>
                <li><Link to='/Order Status' className='text-black hover:underline'>Order Status</Link></li>
                <li><Link to='/Payment Options' className='text-black hover:underline'>Payment Options</Link></li>
                <li><Link to='/Shipping Information' className='text-black hover:underline'>Shipping Information</Link></li>
                <li><Link to='/Returns & Exchanges' className='text-black hover:underline'>Returns & Exchanges</Link></li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-bold'>Follow Us</h3>
              <div className='flex space-x-4'>
                <a href='#' className='text-black transform hover:scale-125'>
                  <FaFacebook size={30} />
                </a>
                <a href='#' className='text-black transform hover:scale-125'>
                  <FaTwitter size={30} />
                </a>
                <a href='#' className='text-black transform hover:scale-125'>
                  <FaInstagram size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-4 text-center'>
          <p className='text-sm text-gray-400'>&copy; 2025 TravelWithUs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;