'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { FaTimes } from 'react-icons/fa';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  icon?: React.ReactNode;
}

export default function CustomModal({ isOpen, onClose, title, message, icon }: CustomModalProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 15, stiffness: 200 }}
            className={`relative z-10 max-w-md w-full rounded-xl shadow-2xl overflow-hidden
              ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with icon */}
            <div className={`p-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center gap-3">
                {icon && <div className="text-2xl">{icon}</div>}
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className={`text-gray-600 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {message}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 p-2 rounded-full hover:bg-opacity-80 transition-colors
                ${isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'}`}
              aria-label="Close modal"
            >
              <FaTimes className="text-lg" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}