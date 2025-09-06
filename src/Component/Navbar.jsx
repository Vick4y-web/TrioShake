import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-[#6F4E37]/90 via-[#A47551]/90 to-[#CBB994]/90 shadow-xl w-full backdrop-blur-md fixed top-0 z-50">
<div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>Menu</a>
          {/* <ul className="p-2">
            <li><a>Coffee</a></li>
            <li><a>Shakes</a></li>
          </ul> */}
        </li>
        <li><a>About</a></li>
      </ul>
    </div>
    <img src="/logo.jpg" alt="Logo" className="h-8 w-8 mr-2" />
    <a className="text-xl text-white font-bold hover:text-purple-200 transition-colors" href="/">Trio Shakes & Co</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-10">
      <li><a className="text-white hover:text-purple-200 hover:bg-white/10 transition-all duration-300 rounded-lg">Home</a></li>
      <li>
      <a className="text-white hover:text-purple-200 hover:bg-white/10 transition-all duration-300 rounded-lg">Menu</a>
      </li>
      <li><a className="text-white hover:text-purple-200 hover:bg-white/10 transition-all duration-300 rounded-lg">About</a></li>
      
      <li><a className="text-white hover:text-purple-200 hover:bg-white/10 transition-all duration-300 rounded-lg">Contact Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-white text-purple-600 hover:bg-purple-50 hover:text-purple-700 border-0 font-semibold shadow-lg hover:shadow-xl transition-all duration-300" href='#menu'>Explore</a>
  </div>
</div>
  )
}

export default Navbar