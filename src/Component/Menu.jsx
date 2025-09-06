import React from 'react'
import Pic1 from '../assets/pic1.jpg'
import Pic2 from '../assets/pic2.jpg'
import Pic3 from '../assets/pic3.jpg'
import Pic4 from '../assets/pic4.jpg'
import Pic5 from '../assets/pic5.jpg'
import Pic6 from '../assets/pic6.jpg'
import Pic7 from '../assets/pic7.jpg'
import Pic8 from '../assets/pic8.jpg'

const MenuData = [
  { id: 1, img: Pic1 },
  { id: 2, img: Pic2 },
  { id: 3, img: Pic3 },
  { id: 4, img: Pic4 },
  { id: 5, img: Pic5 },
  { id: 6, img: Pic6 },
  { id: 7, img: Pic7 },
  { id: 8, img: Pic8 },
]

const Menu = () => {
  return (
    <>
    {/* Decorative Line Section */}
    <div className="relative py-8 bg-white">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-400 rotate-45"></div>
    </div>
    
    <div className="py-16 bg-gray-50" id="menu">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-wide">MENU</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 italic">Discover our complete collection of culinary delights</p>
        </div>

        {/* Grid Section - All 8 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {MenuData.map(({ id, img }) => (
            <div data-aos="zoom-in"
            data-aos-duration="300" 
              key={id}
              className="w-full bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105"
            >
              <div className="relative overflow-hidden h-[350px] ">
                <img
                  src={img}
                  alt={`menu-${id}`}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                {/* Subtle overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                  <div className="text-white text-sm font-medium">Menu Item {id}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Decorative Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-gray-300"></div>
            <div className="w-2 h-2 bg-gray-400 rotate-45"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Menu
