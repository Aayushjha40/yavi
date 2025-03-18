import React from 'react';
import { useNavigate } from "react-router-dom";

function LoginForAdmin() {
   const navigate = useNavigate();
  return (
     <div className="m-0 p-0 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nature,green')" }}>
                
                <div className="flex flex-wrap justify-between px-24 py-16">
                    <div className="moto  bg-opacity-50 text-white p-12 rounded-lg w-96">
                        {/* <h3 className="text-lg text-black">Today's Quotes</h3>
                        <br />
                        <h1 className="text-2xl font-bold text-black">" Earth Loves You,<br /> Love it Back."</h1> */}
                        <h1 className="text-2xl font-bold text-black">Login For Admin</h1>
                    </div>
                    <form action="home" className="bg-green-600 bg-opacity-50 p-8 rounded-lg w-80 flex flex-col items-center">
                        <h2 className="text-white text-xl opacity-90">Login</h2>
                        <label htmlFor="username" className="text-white opacity-90 mt-4">Username</label>
                        <input type="text" id="username" placeholder="Enter Username" className="mt-1 p-2 w-full rounded-full bg-white bg-opacity-70 focus:outline-none" />
                        
                        <label htmlFor="pass" className="text-white opacity-90 mt-4">Password</label>
                        <input type="password" id="pass" placeholder="Enter Password" className="mt-1 p-2 w-full rounded-full bg-white bg-opacity-70 focus:outline-none" />
                        
                        <a href="#" className="text-white text-sm opacity-80 mt-2">Forget password?</a>
                        <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded-full">Login</button>
                        <hr className="w-full my-4 opacity-20" />
                        <h3 className="text-white opacity-90">Not on Yavi? Register now!</h3>
                        
                        <button className="mt-2 bg-white text-green-700 px-6 py-2 rounded-full "  onClick={() => navigate("/SignupForAdmin")}>Register</button>
                    </form>
                    
                </div>
            </div>
  )
}

export default LoginForAdmin;