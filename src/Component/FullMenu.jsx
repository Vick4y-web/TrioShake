import React from 'react'
import Pic1 from '../assets/pic1.jpg'
import Pic2 from '../assets/pic2.jpg'
import Pic3 from '../assets/pic3.jpg'
import Pic4 from '../assets/pic4.jpg'
import Pic5 from '../assets/pic5.jpg'
import Pic6 from '../assets/pic6.jpg'
import Pic7 from '../assets/pic7.jpg'
import Pic8 from '../assets/pic8.jpg'

const FullMenuData = [
  { id: 1, img: Pic1 },
  { id: 2, img: Pic2 },
  { id: 3, img: Pic3 },
  { id: 4, img: Pic4 },
  { id: 5, img: Pic5 },
  { id: 6, img: Pic6 },
  { id: 7, img: Pic7 },
  { id: 8, img: Pic8 },
]

const FullMenu = () => {
  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <h1 className="text-4xl font-bold text-black mb-4">Complete Menu</h1>
          <p className="text-gray-600">Explore our full range of delicious offerings</p>
        </div>

        {/* Grid Section - All items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FullMenuData.map(({ id, img }) => (
            <div
              key={id}
              className="w-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-2xl group hover:scale-105"
            >
              <div className="relative overflow-hidden h-[250px]">
                <img
                  src={img}
                  alt={`menu-${id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default FullMenu
