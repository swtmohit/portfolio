"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  const headerBase =
    'sticky top-0 z-60 border-b backdrop-blur-xl transition-all duration-300';
  const headerThemeClass =
    theme === 'dark'
      ? 'border-white/10 bg-slate-950/70 text-white shadow-[0_10px_40px_rgba(2,6,23,0.45)]'
      : 'border-slate-200/70 bg-white/75 text-slate-800 shadow-[0_8px_30px_rgba(148,163,184,0.24)]';

  const linkBase =
    'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300';
  const linkTheme = (active: boolean) =>
    active
      ? theme === 'dark'
        ? 'bg-blue-500/20 text-cyan-300 ring-1 ring-cyan-400/40'
        : 'bg-blue-50 text-blue-700 ring-1 ring-blue-200'
      : theme === 'dark'
        ? 'text-slate-200 hover:bg-white/10 hover:text-cyan-200'
        : 'text-slate-700 hover:bg-slate-100 hover:text-blue-700';

  const toggleClass =
    theme === 'dark'
      ? 'bg-white/10 hover:bg-white/20 text-cyan-300'
      : 'bg-slate-100 hover:bg-slate-200 text-blue-700';

  return (
    <header className={`${headerBase} ${headerThemeClass}`}>
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <div
          className={`ml-2 text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
            theme === 'dark'
              ? 'text-white hover:text-cyan-300'
              : 'text-slate-800 hover:text-blue-700'
          }`}
        >
          <Link
            href="/"
            className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent"
          >
            MS
          </Link>
        </div>

        <div className="hidden flex-1 justify-center md:flex">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link href={item.href} className={`${linkBase} ${linkTheme(active)}`}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden md:flex">
          <button
            onClick={toggleTheme}
            className={`rounded-full p-2.5 transition-colors duration-300 ${toggleClass}`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={toggleTheme}
            className={`rounded-full p-2 transition-colors duration-300 ${toggleClass}`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          <button
            className={`rounded-lg p-1.5 ${
              theme === 'dark'
                ? 'text-white hover:bg-white/10'
                : 'text-slate-800 hover:bg-slate-100'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden border-t transition-all duration-300 ease-out ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } ${
          theme === 'dark'
            ? 'border-white/10 bg-slate-900/95'
            : 'border-slate-200 bg-white/95'
        }`}
      >
        <ul className="space-y-2 px-4 py-4">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${linkTheme(active)}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
