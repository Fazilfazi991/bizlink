import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function WhatsAppButton() {
  const [location] = useLocation();
  const phoneNumber = "971547486000";
  
  let message = "Hi Bizlink, I need help with business setup in UAE. Please guide me.";

  if (location === "/trade-license-dubai") {
    message = "Hi Bizlink, I need help with trade license services in Dubai.";
  } else if (location === "/visa-services-dubai") {
    message = "Hi Bizlink, I need help with visa and Emirates ID services in UAE.";
  } else if (location === "/document-clearing-dubai") {
    message = "Hi Bizlink, I need help with document clearing services in Dubai.";
  } else if (location === "/pro-services-dubai") {
    message = "Hi Bizlink, I need help with PRO services in Dubai.";
  } else if (location === "/contact") {
    message = "Hi Bizlink, I would like to book a free consultation.";
  }

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-green-600 transition-colors group"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-medium">
        Chat with Expert
      </span>
      <MessageCircle size={28} />
    </motion.a>
  );
}
