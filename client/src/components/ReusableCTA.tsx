import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ReusableCTAProps {
  title?: string;
  description?: string;
}

export default function ReusableCTA({ 
  title = "Ready to Launch Your UAE Business?", 
  description = "Get expert guidance and end-to-end support for your company formation in Dubai." 
}: ReusableCTAProps) {
  const whatsappUrl = "https://wa.me/+971547486000?text=Hello%20Bizlink%2C%20I%20would%20like%20to%20get%20a%20free%20consultation.";

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
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2 w-full sm:w-auto h-14 px-8 text-lg rounded-xl">
              <MessageCircle size={24} />
              Chat on WhatsApp
            </Button>
          </a>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 gap-2 w-full sm:w-auto h-14 px-8 text-lg rounded-xl">
              Free Consultation
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
