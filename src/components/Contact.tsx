'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const sectionBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  const formBg = theme === 'dark' ? 'bg-gray-700' : 'bg-white';
  const cardBg = theme === 'dark' ? 'bg-gray-700' : 'bg-white';
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(data?.message || 'Message sent successfully');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data?.error || 'Failed to send message. Please try again later.');
        console.error('API error response:', data);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setSubmitMessage('Network error: failed to reach the server');
    } finally {
      setIsSubmitting(false);
    }
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
        <motion.div className="max-w-3xl mx-auto text-center mb-8 px-4" variants={itemVariants}>
          <motion.h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
            Get In Touch
          </motion.h2>
          <motion.div className="w-20 h-1 mx-auto bg-blue-500 rounded mt-4 mb-4" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.5 }} />
          <motion.p className={`mx-auto text-center max-w-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
          </motion.p>
        </motion.div>
          <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
            <div className="md:col-span-5">
              <motion.div className="text-left mb-6" variants={itemVariants}>
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Let's start a conversation</h3>
              </motion.div>
              <div className="space-y-4">
                <div className={`${cardBg} p-4 md:p-6 rounded-xl border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'} shadow-sm` }>
                  <a href="mailto:swtmohit2002@gmail.com" className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Email</h4>
                      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm whitespace-nowrap`}>swtmohit2002@gmail.com</p>
                    </div>
                  </a>
                </div>

                <div className={`${cardBg} p-4 md:p-6 rounded-xl border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'} shadow-sm` }>
                  <a href="tel:+918126488025" className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <FaPhoneAlt className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Phone</h4>
                      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>+91 8126488025</p>
                    </div>
                  </a>
                </div>

                <div className={`${cardBg} p-4 md:p-6 rounded-xl border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'} shadow-sm` }>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
                    </div>
                    <div className="text-start">
                      <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Location</h4>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h5 className={`font-semibold mb-3 text-center sm:text-left ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Follow me on</h5>
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <motion.a
                    href="#"
                    className="p-2 sm:p-3 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.1, boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="p-2 sm:p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.1, boxShadow: '0 10px 25px rgba(59,130,246,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="p-2 sm:p-3 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 transition-all"
                    whileHover={{ scale: 1.1, boxShadow: '0 10px 25px rgba(236,72,153,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaInstagram />
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className={`${formBg} p-6 md:p-8 rounded-lg border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'} shadow-md` }>
                <h3 className={`text-xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Send me a message</h3>

                {submitStatus === 'success' && (
                  <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    Failed to send message. Please try again later.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={`block text-xs mb-2 ${labelText}`}>Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'} rounded-md ${inputBg} ${inputText}`}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className={`block text-xs mb-2 ${labelText}`}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'} rounded-md ${inputBg} ${inputText}`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className={`block text-xs mb-2 ${labelText}`}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'} rounded-md ${inputBg} ${inputText}`}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="mb-6">
                    <label className={`block text-xs mb-2 ${labelText}`}>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'} rounded-md ${inputBg} ${inputText}`}
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center gap-3 ${theme === 'dark' ? 'bg-blue-700 hover:bg-blue-800' : 'bg-blue-600 hover:bg-blue-700'} text-white py-3 px-4 rounded-md transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <FaPaperPlane className="w-4 h-4" />
                    <span className="font-medium">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map section (above footer) */}
          <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} mt-16 w-full pb-12 md:pb-20`}> 
            {/* Heading in centered container (no white background) */}
            <div className="max-w-6xl mx-auto px-4">
              <motion.div className={`p-6`} variants={itemVariants}>
                <motion.h3 className={`text-2xl font-semibold mb-4 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Based in Uttar Pradesh, India
                </motion.h3>
                <p className={`text-lg font-medium mb-4 text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Available for new opportunities</p>
              </motion.div>
            </div>

            {/* Centered sky-blue map block: constrained to content width (max-w-6xl) */}
            <div className="max-w-6xl mx-auto px-4">
              <div className={`relative group rounded-lg overflow-hidden border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'} bg-gradient-to-br ${theme === 'dark' ? 'from-sky-800/30 to-sky-700/30' : 'from-sky-200 to-sky-400'}`}>
                <div className="flex flex-col items-center justify-center py-12 md:py-20">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 flex items-center justify-center shadow-md">
                    <FaMapMarkerAlt className={`w-6 h-6 md:w-8 md:h-8 text-sky-600`} />
                  </div>
                  <p className={`mt-4 text-lg md:text-xl font-medium ${theme === 'dark' ? 'text-white' : 'text-sky-900'}`}>Uttar Pradesh, India</p>
                </div>

                {/* Hover overlay that matches the map div size and shows button in center */}
                <a
                  href="https://www.google.com/maps/place/Uttar+Pradesh,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Open Uttar Pradesh in Google Maps"
                >
                  <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors"></div>
                  <button
                    type="button"
                    className="pointer-events-auto opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-white dark:bg-gray-800 text-sky-700 dark:text-sky-300 px-4 py-2 rounded-md font-medium shadow-lg"
                  >
                    Open in Google Map
                  </button>
                </a>
              </div>
            </div>
          </div>

        {/* form moved into right column */}
      </div>
    </motion.section>
  );
};

export default Contact;