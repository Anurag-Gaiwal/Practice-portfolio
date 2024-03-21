import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Your Portfolio</div>
        <ul className="flex">
          <li className="mx-2">
            <a href="#home" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li className="mx-2">
            <a href="#about" className="text-white hover:text-gray-300">About</a>
          </li>
          <li className="mx-2">
            <a href="#portfolio" className="text-white hover:text-gray-300">Portfolio</a>
          </li>
          <li className="mx-2">
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
