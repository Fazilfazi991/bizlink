import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ReusableCTAProps {
  title?: string;
  description?: string;
  whatsappMessage?: string;
}

export default function ReusableCTA({ 
  title = "Ready to Launch Your UAE Business?", 
  description = "Get expert guidance and end-to-end support for your company formation in Dubai.",
  whatsappMessage = "Hi Bizlink, I need help with business setup in UAE. Please guide me."
}: ReusableCTAProps) {
  const phoneNumber = "971547486000";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2 w-full h-14 px-8 text-lg rounded-xl transition-all">
              <MessageCircle size={24} />
              Chat on WhatsApp
            </Button>
          </a>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 gap-2 w-full h-14 px-8 text-lg rounded-xl transition-all">
              Free Consultation
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
