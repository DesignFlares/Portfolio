import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';

  return (
    <div className={`${theme}theme px-4 h-[13vh] sticky top-0 z-30 backdrop-blur-md shadow-lg 
      flex justify-between items-center text-white font-bold text-[2rem]`}>

      <div className='text-outline'>Sritama's Portfolio</div>

      <div className="flex gap-6 text-outline items-center">
        <a href="#home" className="hover:text-purple-700 transition">Home</a>
        <a href="#skills" className="hover:text-purple-700 transition">Skills</a>
        <a href="#projects" className="hover:text-purple-700 transition">Projects</a>
        <a href="#contact" className="hover:text-purple-700 transition">Contact</a>

        {/* Stylish Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`ml-4 w-12 h-12 rounded-full flex items-center justify-center
            transition duration-300 shadow-lg hover:scale-110
            ${isDark ? 'bg-yellow-300 text-black' : 'bg-indigo-800 text-white'}`}
          title="Toggle Theme"
        >
          {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
