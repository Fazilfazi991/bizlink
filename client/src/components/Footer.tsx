import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Business Setup": [
      { label: "Business Setup in Dubai", href: "/business-setup-dubai" },
      { label: "Mainland Company Formation", href: "/mainland-company-formation" },
      { label: "Free Zone Company Setup", href: "/free-zone-company-setup" },
      { label: "Trade License Dubai", href: "/trade-license-dubai" },
    ],
    "PRO Services": [
      { label: "PRO Services Dubai", href: "/pro-services-dubai" },
      { label: "Visa Services Dubai", href: "/visa-services-dubai" },
      { label: "Emirates ID Services", href: "/emirates-id-services-dubai" },
      { label: "Labour & Immigration", href: "/labour-immigration-services-dubai" },
      { label: "Document Clearing Dubai", href: "/document-clearing-dubai" },
      { label: "License Renewal Dubai", href: "/license-renewal-dubai" },
    ],
    "Business Support": [
      { label: "Bank Account Assistance", href: "/bank-account-assistance-dubai" },
      { label: "VAT & Corporate Tax Support", href: "/vat-corporate-tax-dubai" },
      { label: "Accounting Services Dubai", href: "/accounting-services-dubai" },
      { label: "Cost Estimator", href: "/cost-estimator" },
    ],
    "Company": [
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Contact Us", href: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">BIZLINK</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your premier partner for document clearing and business services in Dubai. We simplify the path to your corporate success with expert guidance and efficient processing.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-6 text-white uppercase tracking-wider text-xs">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-slate-800 mb-8">
          <div>
            <p className="text-slate-400 text-sm mb-2">Location</p>
            <a
              href="https://maps.app.goo.gl/rK5sK19VWfNqTdBQ9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-blue-400 transition-colors"
            >
              Office 11/202, Shaikha Mhara Bldg,<br />
              Near Altwar Center, Al Qusais 2, Dubai
            </a>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-2">Contact</p>
            <p className="text-white font-semibold">
              T: <a href="tel:+971547486000" className="hover:text-blue-400">+971 54 748 6000</a>
            </p>
            <p className="text-white font-semibold">
              E: <a href="mailto:info@bizlinkdubai.info" className="hover:text-blue-400">info@bizlinkdubai.info</a>
            </p>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-2">Hours</p>
            <p className="text-white font-semibold">Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center md:text-left">
          <p className="text-slate-400 text-sm">
            © {currentYear} BIZLINK Documents Clearing LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
