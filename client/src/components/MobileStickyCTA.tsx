import { MessageCircle, Phone } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function MobileStickyCTA() {
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
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 z-[60] safe-bottom shadow-[0_-8px_30px_rgb(0,0,0,0.08)]">
      <div className="flex gap-3">
        <a href="tel:+971547486000" className="flex-1">
          <Button variant="outline" className="w-full h-12 rounded-xl font-bold border-slate-200 text-slate-700 flex items-center justify-center gap-2">
            <Phone size={18} />
            Call
          </Button>
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-[2]">
          <Button className="w-full h-12 rounded-xl font-bold bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 shadow-lg shadow-green-100">
            <MessageCircle size={20} />
            Chat on WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
}
