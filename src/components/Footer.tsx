'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const { theme } = useTheme();

  const footerBg = theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100';
  const linkHover = theme === 'dark' ? 'hover:text-blue-400 transition-colors duration-300' : 'hover:text-blue-600 transition-colors duration-300';
  const iconHover = theme === 'dark' ? 'hover:text-blue-400 hover:scale-110 transition-all duration-300' : 'hover:text-blue-600 hover:scale-110 transition-all duration-300';

  return (
    <footer className={`${footerBg} py-12 relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="w-4/5 mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Developer Info */}
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} bg-gradient-to-r ${theme === 'dark' ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
              Mohit Singh
            </h3>
            <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Full-Stack Developer passionate about creating beautiful and functional web experiences. Always learning and building something new.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className={`text-sm ${linkHover} block`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={`text-sm ${linkHover} block`}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className={`text-sm ${linkHover} block`}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`text-sm ${linkHover} block`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Let's Connect</h4>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 pt-2">
              <a href="#" className="text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:scale-125 transition-all duration-300 hover:rotate-12 hover:shadow-lg">
                <FaGithub />
              </a>
              <a href="#" className="text-2xl text-blue-600 hover:text-blue-700 hover:scale-125 transition-all duration-300 hover:rotate-12 hover:shadow-lg">
                <FaLinkedin />
              </a>
              <a href="#" className="text-2xl text-pink-500 hover:text-pink-600 hover:scale-125 transition-all duration-300 hover:rotate-12 hover:shadow-lg">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-12 pt-8 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} text-center`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              &copy; 2025 Mohit Singh. All rights reserved.
            </p>
            <p className={`text-sm flex items-center justify-center space-x-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>using Next.js & Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;