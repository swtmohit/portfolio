'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const { theme } = useTheme();

  const footerBg =
    theme === 'dark'
      ? 'border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900'
      : 'border-t border-slate-200 bg-gradient-to-b from-white to-slate-50';
  const textMuted = theme === 'dark' ? 'text-slate-300' : 'text-slate-600';
  const sectionCard =
    theme === 'dark'
      ? 'glass-surface shadow-[0_10px_35px_rgba(2,6,23,0.35)]'
      : 'glass-surface shadow-[0_10px_35px_rgba(148,163,184,0.2)]';

  const quickLinkClass = theme === 'dark'
    ? 'text-sm text-slate-300 hover:text-cyan-300 transition-colors'
    : 'text-sm text-slate-600 hover:text-blue-700 transition-colors';

  return (
    <footer className={`${footerBg} relative overflow-hidden py-12`}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[length:22px_22px]" />
      </div>

      <div className="relative z-10 mx-auto w-11/12 max-w-6xl px-4">
        <div className={`rounded-2xl p-8 ${sectionCard}`}>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
            <div className="space-y-4">
              <h3 className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
                Mohit Singh
              </h3>
              <p className={`text-sm leading-relaxed ${textMuted}`}>
                Full-Stack Developer passionate about crafting polished, performant,
                and user-friendly products with modern web technologies.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li><Link href="/" className={quickLinkClass}>Home</Link></li>
                <li><Link href="/about" className={quickLinkClass}>About</Link></li>
                <li><Link href="/projects" className={quickLinkClass}>Projects</Link></li>
                <li><Link href="/contact" className={quickLinkClass}>Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Let&apos;s Connect
              </h4>
              <p className={`text-sm leading-relaxed ${textMuted}`}>
                Have a project in mind? Let&apos;s build something meaningful together.
              </p>
              <div className="flex justify-center gap-4 pt-2 md:justify-start">
                <a
                  href="https://github.com/swtmohit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full p-2.5 transition-transform hover:-translate-y-1 ${
                    theme === 'dark'
                      ? 'bg-white/10 text-slate-200 hover:text-white'
                      : 'bg-slate-100 text-slate-700 hover:text-slate-900'
                  }`}
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohit-singh-917609349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-blue-600 p-2.5 text-white transition-transform hover:-translate-y-1 hover:bg-blue-700"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/swtmohit31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-r from-pink-500 to-violet-500 p-2.5 text-white transition-transform hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className={`mt-10 border-t pt-6 text-center ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
            <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
              <p className={`text-sm ${textMuted}`}>
                &copy; 2023 Mohit Singh. All rights reserved.
              </p>
              <p className={`flex items-center gap-2 text-sm ${textMuted}`}>
                <span>Made with</span>
                <FaHeart className="animate-pulse text-red-500" />
                <span>using Next.js & Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
