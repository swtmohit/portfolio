'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

const Services = () => {
  const { theme } = useTheme();

  const bgClass = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900';
  const cardBgClass = theme === 'dark' ? 'bg-gray-700' : 'bg-white';
  const cardTextClass = theme === 'dark' ? 'text-white' : 'text-gray-900';

  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive web applications with React, TypeScript, and modern frameworks',
      iconColor: 'text-blue-500',
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'UI/UX Design',
      description: 'Creating clean, intuitive user interfaces with focus on user experience',
      iconColor: 'text-purple-500',
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
    },
    {
      title: 'Full-Stack Development',
      description: 'Developing end-to-end solutions with React, Node.js, and cloud technologies',
      iconColor: 'text-green-500',
      icon: (
        <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className={`${bgClass} py-12`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">What I Do</h2>
        <p className="text-lg mb-12">I combine technical expertise with creative problem-solving to deliver exceptional digital solutions.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className={`${cardBgClass} ${cardTextClass} p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform`}>
              <div className={service.iconColor}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-lg mb-8">I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.</p>
        <Link href="/contact">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl">
            <span>Get in touch</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Services;