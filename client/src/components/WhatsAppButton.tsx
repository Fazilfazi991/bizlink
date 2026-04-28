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
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full text-white font-semibold text-sm shadow-2xl hover:opacity-90 transition-opacity"
      style={{ backgroundColor: "#25D366", boxShadow: "0 8px 32px rgba(37,211,102,0.4)" }}
    >
      {/* Simple clean WhatsApp icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="22"
        height="22"
        fill="white"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.418-2.004A15.932 15.932 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.766-1.849l-.485-.288-5.001 1.19 1.234-4.852-.317-.499A13.27 13.27 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.863c-.398-.199-2.354-1.162-2.719-1.294-.364-.132-.629-.199-.894.199-.265.397-1.027 1.294-1.259 1.559-.231.265-.463.298-.861.1-.398-.2-1.681-.619-3.203-1.975-1.184-1.054-1.983-2.356-2.214-2.754-.231-.398-.025-.614.174-.812.178-.178.398-.464.597-.696.199-.232.265-.398.398-.663.132-.265.066-.497-.033-.696-.1-.199-.894-2.154-1.225-2.95-.322-.773-.65-.668-.894-.68l-.762-.013c-.265 0-.696.1-.1060.497-.364.398-1.39 1.358-1.39 3.313 0 1.955 1.423 3.843 1.622 4.108.199.265 2.8 4.274 6.784 5.992.948.409 1.688.653 2.265.836.952.302 1.818.259 2.503.157.763-.114 2.354-.963 2.686-1.893.332-.93.332-1.727.232-1.893-.099-.166-.364-.265-.762-.464z"/>
      </svg>
      WhatsApp Us
    </motion.a>
  );
}
