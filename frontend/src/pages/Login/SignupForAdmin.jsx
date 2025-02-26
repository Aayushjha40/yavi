import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from './logo.png';

function SignupForUser() {
   const navigate = useNavigate();
  return (
     <div className="m-0 p-0 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nature,green')" }}>
                <nav className="flex justify-between items-center px-20 py-3  bg-opacity-50">
                    <div className="logo">
                        <img src={logo} alt="Yavi Logo" className="h-8" />
                    </div>
                    <div className="flex space-x-4">
                        <button className="bg-white text-green-600 px-4 py-1 rounded-full">Help</button>
                        {/* <button className="bg-green-700 text-white px-4 py-1 rounded-full">User</button> */}
                    </div>
                </nav>
                
                <div className="flex flex-wrap justify-between px-24 py-16">
                    <div className="moto  bg-opacity-50 text-white p-12 rounded-lg w-96">
                        {/* <h3 className="text-lg text-black">Today's Quotes</h3>
                        <br />
                        <h1 className="text-2xl font-bold text-black">" Earth Loves You,<br /> Love it Back."</h1> */}
                        <h1 className="text-2xl font-bold text-black">Signup For Admin</h1>
                    </div>
                    <form method='get' action="register" className="bg-green-600 bg-opacity-50 p-8 rounded-lg w-80 flex flex-col items-center">
                        <h2 className="text-white text-xl opacity-90">SignUp</h2>
                        <label htmlFor="create username" className="text-white opacity-90 mt-4">create username</label>
                        <input type="text" id="create username" placeholder="Enter Username" className="mt-1 p-2 w-full rounded-full bg-white bg-opacity-70 focus:outline-none" />

                        <label htmlFor="email" className="text-white opacity-90 mt-4">email</label>
                        <input type="text" id="email" placeholder="Enter email" className="mt-1 p-2 w-full rounded-full bg-white bg-opacity-70 focus:outline-none" />

                        
                        <label htmlFor="pass" className="text-white opacity-90 mt-4">Password</label>
                        <input type="password" id="pass" placeholder="Enter Password" className="mt-1 p-2 w-full rounded-full bg-white bg-opacity-70 focus:outline-none" />
                        
                        <a href="#" className="text-white text-sm opacity-80 mt-2">Forget password?</a>
                        <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded-full">Register</button>
                        <hr className="w-full my-4 opacity-20" />
                        <h3 className="text-white opacity-90">Already Registered?</h3>
                        
                        <button className="mt-2 bg-white text-green-700 px-6 py-2 rounded-full "  onClick={() => navigate("/LoginForAdmin")}>login</button>
                    </form>
                    
                </div>
            </div>
  )
}

export default SignupForUser