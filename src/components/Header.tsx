"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  // Theme-aware classes: use darker gradient for dark mode, light background for light mode
  const headerBase = 'shadow-lg sticky top-0 z-60 transition-colors duration-300';
  const headerThemeClass = theme === 'dark'
    ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white'
    : 'bg-white/80 text-gray-800 backdrop-blur-sm';

  return (
    <header className={`${headerBase} ${headerThemeClass}`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className={`text-2xl font-bold hover:text-blue-500 transition-colors duration-300 ml-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          <Link href="/">MS</Link>
        </div>

        {/* Desktop Menu */}
        <div className="flex-1 flex justify-center hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:text-blue-500 transition-all duration-300 hover:scale-105 font-medium border-b-2 ${pathname === '/' ? 'border-blue-500' : 'border-transparent hover:border-blue-500'}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:text-blue-500 transition-all duration-300 hover:scale-105 font-medium border-b-2 ${pathname === '/about' ? 'border-blue-500' : 'border-transparent hover:border-blue-500'}`}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:text-blue-500 transition-all duration-300 hover:scale-105 font-medium border-b-2 ${pathname === '/projects' ? 'border-blue-500' : 'border-transparent hover:border-blue-500'}`}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:text-blue-500 transition-all duration-300 hover:scale-105 font-medium border-b-2 ${pathname === '/contact' ? 'border-blue-500' : 'border-transparent hover:border-blue-500'}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Theme Toggle Button */}
        <div className="hidden md:flex">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 focus:outline-none ${theme === 'dark' ? 'bg-white/20 hover:bg-white/30' : 'bg-gray-200/60 hover:bg-gray-200/80'}`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>



        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme Toggle Button for Mobile */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 focus:outline-none ${theme === 'dark' ? 'bg-white/20 hover:bg-white/30' : 'bg-gray-200/60 hover:bg-gray-200/80'}`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          <button
            className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} focus:outline-none`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden border-t overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 max-h-96 translate-y-0' : 'opacity-0 max-h-0 -translate-y-4'} ${theme === 'dark' ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-white/20' : 'bg-white/90 border-gray-200'}`}>
        <ul className="px-4 py-4 space-y-4">
          <li>
            <Link href="/" className={`${theme === 'dark' ? 'block text-white' : 'block text-gray-800'} hover:text-blue-500 transition-all duration-300 font-medium border-b-2 ${pathname === '/' ? 'border-blue-500' : 'border-transparent hover:border-blue-500'}`} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`${theme === 'dark' ? 'block text-white' : 'block text-gray-800'} hover:text-blue-500 transition-all duration-300 font-medium border-b-2 ${pathname === '/about' ? 'border-blue-500' : 'border-transparent hover:border-blue-500'}`} onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className={`${theme === 'dark' ? 'block text-white' : 'block text-gray-800'} hover:text-blue-500 transition-all duration-300 font-medium border-b-2 ${pathname === '/projects' ? 'border-blue-500' : 'border-transparent hover:border-blue-500'}`} onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${theme === 'dark' ? 'block text-white' : 'block text-gray-800'} hover:text-blue-500 transition-all duration-300 font-medium border-b-2 ${pathname === '/contact' ? 'border-blue-500' : 'border-transparent hover:border-blue-500'}`} onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;