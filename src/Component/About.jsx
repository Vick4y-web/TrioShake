import React from 'react'

const About = () => {
  return (
    <div data-aos="zoom-in"
    data-aos-duration="300" className="py-16 bg-gradient-to-br from-gray-50 to-white" id="about">
      <div className="container">
        {/* Header Section */}
        <div data-aos="zoom-in"
                          data-aos-duration="300" className="text-center mb-16 max-w-[600px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Trio Shakes & Co</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're passionate about bringing you the perfect blend of delicious food, refreshing drinks, and cozy café vibes.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Story */}
          <div data-aos="zoom-in"
                          data-aos-duration="300" className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded with a vision to create a space where great food meets great vibes, Trio Shakes & Co has been serving 
                our community with passion and dedication. We believe in using fresh ingredients and traditional recipes 
                to bring you authentic flavors that satisfy your cravings.
              </p>
            </div>

            <div data-aos="zoom-in"
                          data-aos-duration="300" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional food and beverage experiences that bring people together. From our signature shakes 
                to our carefully crafted meals, every item on our menu is prepared with love and attention to detail.
              </p>
            </div>
          </div>

          {/* Right Side - Features */}
          <div data-aos="zoom-in"
                          data-aos-duration="300"  className="space-y-6">
            <div className="bg-[#a8a354] p-8 rounded-2xl text-white">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Fresh ingredients sourced daily
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Traditional recipes with modern twists
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Cozy atmosphere perfect for any occasion
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Friendly service with a smile
                </li>
              </ul>
            </div>

            {/* <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Visit Us</h2>
              <div className="space-y-3 text-gray-600">
                <p><strong>Address 1:</strong> RK Puram Sita Sadan Market</p>
                <p><strong>Address 2:</strong> New TaraChack Omega Mission School</p>
                <p><strong>Phone:</strong> +91 6202588683</p>
                <p><strong>Hours:</strong> Mon-Sun: 10:00 AM - 11:00 PM</p>
                <p><strong>Email:</strong> 777viratyadav@gmail.com</p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">1+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">100+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">50+</div>
            <div className="text-gray-600">Menu Items</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">Best</div>
            <div className="text-gray-600">Service</div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default About
