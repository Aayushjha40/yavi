import React from 'react'
import Header from '../../components/Header'
import recycle from '../../assets/recycle.png'
import footprint from '../../assets/footprint.png'
import engage from '../../assets/groups.png'
import naturebg from '../../assets/naturewb.jpg'
const EcoFriendlyZone = () => {
  return (
    <div className="min-h-screen bg-cover bg-center " style={{ backgroundImage: `url(${naturebg})` }}>
    
    <Header/>

    <div className="px-28 text-white mt-20">
        <h1 className="text-4xl font-bold">Eco-friendly zone!</h1>
        <p className="opacity-50 mt-2">
            Welcome to the eco-friendly zone, upload your pics and videos related to the options given and earn points.
            You can use those points for your next trips.
        </p>
      
    </div>
    <div className="flex justify-between items-center mt-8 p-10 bg-black bg-opacity-50 rounded-lg w-[47rem] justify-self-center">
            {[
                { name: 'Carbon Footprint', img: footprint },
                { name: 'Recycle', img: recycle },
                { name: 'Engage', img: engage }
            ].map((category, index) => (
                <div key={index} className="h-80 w-52 border-4 border-green-400 bg-black bg-opacity-50 rounded-lg flex flex-col items-center p-4">
                    <h3 className="text-white text-lg mb-4">{category.name}</h3>
                    <img src={category.img} alt={category.name} className="w-36 mb-4" />
                    <input type="file" className="mb-4" />
                    <button className="p-2 bg-green-600 text-white rounded-full">Upload</button>
                </div>
            ))}
        </div>
   </div>
  )
}

export default EcoFriendlyZone