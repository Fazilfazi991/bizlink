import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight, Building2, ShieldCheck, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const navGroups = [
    {
      label: "Business Setup",
      id: "business",
      links: [
        { label: "Business Setup in Dubai", href: "/business-setup-dubai" },
        { label: "Mainland Company Formation", href: "/mainland-company-formation" },
        { label: "Free Zone Company Setup", href: "/free-zone-company-setup" },
        { label: "Trade License Dubai", href: "/trade-license-dubai" },
      ]
    },
    {
      label: "PRO Services",
      id: "pro",
      links: [
        { label: "PRO Services Dubai", href: "/pro-services-dubai" },
        { label: "Visa Services Dubai", href: "/visa-services-dubai" },
        { label: "Emirates ID Services", href: "/emirates-id-services-dubai" },
        { label: "Labour & Immigration", href: "/labour-immigration-services-dubai" },
      ]
    },
    {
      label: "Corporate Support",
      id: "corporate",
      links: [
        { label: "Document Clearing", href: "/document-clearing-dubai" },
        { label: "Accounting & Tax", href: "/accounting-services-dubai" },
        { label: "License Renewal", href: "/license-renewal-dubai" },
        { label: "Bank Account Assistance", href: "/bank-account-assistance-dubai" },
        { label: "VAT & Corporate Tax", href: "/vat-corporate-tax-dubai" },
      ]
    }
  ];

  const mainLinks = [
    { label: "About", href: "/about" },
    { label: "Cost Estimator", href: "/cost-estimator" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled || location !== "/"
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-100 py-2 md:py-3"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className={`font-black text-2xl tracking-tighter transition-colors ${
              isScrolled || location !== "/" ? "text-slate-900" : "text-white"
            }`}>
              BIZLINK<span className="text-blue-600">.</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 items-center">
            {navGroups.map((group) => (
              <li 
                key={group.id}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(group.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 font-bold text-[13px] uppercase tracking-wider transition-colors ${
                    isScrolled || location !== "/" 
                      ? (openDropdown === group.id ? "text-blue-600" : "text-slate-600 hover:text-blue-600") 
                      : (openDropdown === group.id ? "text-blue-400" : "text-white/90 hover:text-white")
                  }`}
                >
                  {group.label}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === group.id ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {openDropdown === group.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-4 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-3"
                    >
                      {group.links.map((link) => (
                        <Link key={link.label} href={link.href}>
                          <div className="px-5 py-3 hover:bg-slate-50 transition-colors group/item cursor-pointer">
                            <p className="text-sm font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors">
                              {link.label}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}

            {mainLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`font-bold text-[13px] uppercase tracking-wider transition-colors ${
                    isScrolled || location !== "/" 
                      ? (location === link.href ? "text-blue-600" : "text-slate-600 hover:text-blue-600") 
                      : (location === link.href ? "text-blue-400" : "text-white/90 hover:text-white")
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-6 shadow-lg shadow-blue-100/50">
                  Free Consultation
                </Button>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled || location !== "/" ? "text-slate-900 bg-slate-100" : "text-white bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[60px] lg:hidden bg-white z-[90] overflow-y-auto pb-24"
          >
            <div className="px-6 py-8 space-y-8">
              {navGroups.map((group) => (
                <div key={group.id} className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 px-2">{group.label}</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {group.links.map((link) => (
                      <Link key={link.label} href={link.href}>
                        <div className={`px-4 py-3 rounded-xl font-bold text-[15px] ${
                          location === link.href ? "bg-blue-50 text-blue-600" : "text-slate-700 bg-slate-50"
                        }`}>
                          {link.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 px-2">Quick Links</h3>
                <div className="grid grid-cols-1 gap-2">
                  {mainLinks.map((link) => (
                    <Link key={link.label} href={link.href}>
                      <div className={`px-4 py-3 rounded-xl font-bold text-[15px] ${
                        location === link.href ? "bg-blue-50 text-blue-600" : "text-slate-700 bg-slate-50"
                      }`}>
                        {link.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link href="/contact">
                  <Button className="w-full bg-blue-600 text-white h-14 rounded-2xl font-bold text-lg shadow-xl shadow-blue-100">
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
