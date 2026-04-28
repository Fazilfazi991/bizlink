import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, MessageCircle, Search, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  const quickLinks = [
    { label: "Business Setup", href: "/business-setup-dubai" },
    { label: "PRO Services", href: "/pro-services-dubai" },
    { label: "Visa Services", href: "/visa-services-dubai" },
    { label: "Cost Estimator", href: "/cost-estimator" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 pt-20 pb-16 relative overflow-hidden">
      <SEO title="Page Not Found | Bizlink" />

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated 404 number */}
          <div className="relative inline-block mb-8">
            <span className="text-[160px] md:text-[200px] font-black text-slate-100 leading-none select-none tracking-tighter block">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-blue-200 animate-bounce">
                <Search size={36} />
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-slate-500 mb-10 leading-relaxed text-lg max-w-md mx-auto">
            The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/">
              <Button className="h-14 px-8 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white gap-3 font-bold shadow-xl shadow-slate-200 text-base">
                <Home size={20} />
                Back to Home
              </Button>
            </Link>
            <a 
              href="https://wa.me/971547486000?text=Hi%20Bizlink%2C%20I%20need%20help%20navigating%20your%20website." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 text-slate-700 gap-3 font-bold hover:bg-slate-50 text-base w-full sm:w-auto">
                <MessageCircle size={20} />
                Chat Support
              </Button>
            </a>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-lg shadow-slate-100/50">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Popular Pages</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  <div className="flex items-center justify-between px-5 py-4 bg-slate-50 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all group cursor-pointer border border-transparent hover:border-blue-200">
                    <span className="font-bold text-sm text-slate-700 group-hover:text-blue-600 transition-colors">{link.label}</span>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
