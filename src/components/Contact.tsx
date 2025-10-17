'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();

  const sectionBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  const formBg = theme === 'dark' ? 'bg-gray-700' : 'bg-white';
  const labelText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const inputBg = theme === 'dark' ? 'bg-gray-600' : 'bg-white';
  const inputText = theme === 'dark' ? 'text-white' : 'text-gray-900';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="contact"
      className={`py-16 ${sectionBg}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className={`text-3xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          variants={itemVariants}
        >
          Get In Touch
        </motion.h2>
        <div className="max-w-md mx-auto">
          <motion.form
            className={`${formBg} p-8 rounded-lg shadow-md`}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="mb-4"
              variants={itemVariants}
            >
              <label htmlFor="name" className={`block ${labelText} mb-2`}>
                Name
              </label>
              <motion.input
                type="text"
                id="name"
                className={`w-full px-3 py-2 border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputBg} ${inputText}`}
                placeholder="Your Name"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
            <motion.div
              className="mb-4"
              variants={itemVariants}
            >
              <label htmlFor="email" className={`block ${labelText} mb-2`}>
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                className={`w-full px-3 py-2 border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputBg} ${inputText}`}
                placeholder="your@email.com"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
            <motion.div
              className="mb-6"
              variants={itemVariants}
            >
              <label htmlFor="message" className={`block ${labelText} mb-2`}>
                Message
              </label>
              <motion.textarea
                id="message"
                rows={4}
                className={`w-full px-3 py-2 border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputBg} ${inputText}`}
                placeholder="Your message..."
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              ></motion.textarea>
            </motion.div>
            <motion.button
              type="submit"
              className={`w-full ${theme === 'dark' ? 'bg-blue-700 hover:bg-blue-800' : 'bg-blue-600 hover:bg-blue-700'} text-white py-2 px-4 rounded-md transition duration-300`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;