import { motion } from "motion/react";
import whatsappIcon from "../assets/5d02656df08e7462ec5b1b0ef323e7d08169ff33.png";

export function WhatsAppButton() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5551996305040", "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      onClick={handleWhatsApp}
      className="fixed bottom-6 md:bottom-8 right-6 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-7 h-7 md:w-8 md:h-8"
      />
    </motion.button>
  );
}