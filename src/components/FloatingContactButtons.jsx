import { motion } from 'framer-motion';

const FloatingContactButtons = () => {
  const callNumber = () => {
    window.location.href = 'tel:+919669070816';
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/+919669070816', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {/* Call Button */}
      <motion.button
        onClick={callNumber}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-500 p-4 rounded-full shadow-lg hover:bg-blue-600 text-white flex items-center justify-center"
      >
        <img src="/call.png" alt="Call" className="w-7 h-7" />
      </motion.button>

      {/* WhatsApp Button */}
      <motion.button
        onClick={openWhatsApp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 text-white flex items-center justify-center"
      >
        <img src="/WHP.svg" alt="WhatsApp" className="w-7 h-7" />
      </motion.button>
    </div>
  );
};

export default FloatingContactButtons;
