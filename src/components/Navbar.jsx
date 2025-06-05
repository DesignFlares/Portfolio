import React, { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className={`${theme}theme px-4 h-[13vh] sticky top-0 z-30 backdrop-blur-md shadow-lg 
      flex justify-between items-center text-white font-bold text-[1.5rem] md:text-[2rem] `}>

      <div className='text-outline '>Sritama's Portfolio</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-outline items-center">
        <a href="#home" className="hover:text-purple-700 transition">Home</a>
        <a href="#skills" className="hover:text-purple-700 transition">Skills</a>
        <a href="#projects" className="hover:text-purple-700 transition">Projects</a>
        <a href="#contact" className="hover:text-purple-700 transition">Contact</a>

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

      {/* Mobile Hamburger + Toggle */}
      <div className="flex items-center md:hidden gap-4">
        <button
          onClick={toggleTheme}
          className={`w-10 h-10 rounded-full flex items-center justify-center
            transition duration-300 shadow-lg hover:scale-110
            ${isDark ? 'bg-yellow-300 text-black' : 'bg-indigo-800 text-white'}`}
          title="Toggle Theme"
        >
          {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>

        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[13vh] left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-4 space-y-4 text-xl text-outline z-20 md:hidden">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-700 transition">Home</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-700 transition">Skills</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-700 transition">Projects</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-700 transition">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
