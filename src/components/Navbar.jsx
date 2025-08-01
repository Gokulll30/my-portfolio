import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Gokul P</h1>
        <ul className="flex space-x-4">
          <li><a href="#about" className="text-gray-700 hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a></li>
          <li><a href="#experience" className="text-gray-700 hover:text-blue-600">Experience</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
