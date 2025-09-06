import React from 'react'

const Footer = () => {
  return (
    <>
    {/* Decorative Line Section */}
    <div className="relative py-8 bg-white">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-400 rotate-45"></div>
    </div>
    
    <footer className="bg-gray-900 text-white py-16">
      <div className="container">
        {/* Main Footer Content */}
        <div className="mb-12">
          {/* Small devices layout */}
          <div className="md:hidden space-y-8">
            {/* Company Info - Centered */}
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Trio Shakes & Co
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Bringing you the perfect blend of delicious food, refreshing drinks, and cozy café vibes.
              </p>
              {/* <div className="flex justify-center space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors cursor-pointer">
                  <span className="text-black font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors cursor-pointer">
                  <span className="text-black font-bold">i</span>
                </div>
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors cursor-pointer">
                  <span className="text-black font-bold">t</span>
                </div>
              </div> */}
            </div>

            {/* Links and Contact - Side by side */}
            <div className="grid grid-cols-2 gap-6">
              {/* Quick Links */}
              <div className="space-y-3 ml-4">
                <h4 className="text-lg font-semibold text-yellow-400">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Home</a></li>
                  <li><a href="#menu" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm" >Menu</a></li>
                  <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">About</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Contact</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mr-9">
                <h4 className="text-lg font-semibold text-yellow-400">Contact Info</h4>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>📍 RK Puram Sita Sadan Market </p>
                  <p>📍 New TaraChak , Omega Mission School</p>
                  <p>📞 +91 6202588683</p>
                  <p>✉️ 777viratyadav@gmail.com</p>
                  <p>🕒 Mon-Sun: 10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Newsletter - Full width */}
            {/* <div className="space-y-4">
              <h4 className="text-lg font-semibold text-yellow-400 text-center">Stay Updated</h4>
              <p className="text-gray-300 text-sm text-center">Subscribe to our newsletter for latest offers and updates.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-yellow-400"
                />
                <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>

          {/* Medium and larger devices layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent ml-51rem">
              Trio Shakes & Co
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Bringing you the perfect blend of delicious food, refreshing drinks, and cozy café vibes.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors cursor-pointer">
                <span className="text-black font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors cursor-pointer">
                <span className="text-black font-bold">i</span>
              </div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors cursor-pointer">
                <span className="text-black font-bold">t</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-yellow-400 transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
            <p>📍 RK Puram Sita Sadan Market </p>
                  <p>📍 New TaraChak , Omega Mission School</p>
                  <p>📞 +91 6202588683</p>
                  <p>✉️ 777viratyadav@gmail.com</p>
                  <p>🕒 Mon-Sun: 10:00 AM - 11:00 PM</p>
            </div>
          </div>

          {/* Newsletter */}
          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Stay Updated</h4>
            <p className="text-gray-300">Subscribe to our newsletter for latest offers and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-yellow-400"
              />
              <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Trio Shakes & Co. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
