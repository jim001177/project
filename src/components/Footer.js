import React from 'react';
import { motion } from 'framer-motion';
import romanticConfig from '../config/romanticConfig';

const Footer = () => {
  const { footer } = romanticConfig;
  
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="bg-gradient-to-r from-romantic-pink to-warm-pink text-white py-8 mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-lg font-romantic font-semibold"
          >
            {footer.message}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-sm mt-2 opacity-80"
          >
            {footer.subMessage}
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

