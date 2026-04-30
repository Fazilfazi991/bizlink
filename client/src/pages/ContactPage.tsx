import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import LeadForm from "@/components/LeadForm";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+971 54 748 6000",
      href: "tel:+971547486000",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+971 54 748 6000",
      href: "https://wa.me/971547486000",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@bizlinkdc.com",
      href: "mailto:info@bizlinkdc.com",
    },
    {
      icon: MapPin,
      title: "Visit Office",
      details: "Dubai, United Arab Emirates",
      href: "#",
    },
  ];

  return (
    <>
      <SEO 
        title="Contact Us | Bizlink Business Setup Dubai"
        description="Get a free consultation for your business setup in Dubai. Contact Bizlink for mainland and free zone company formation services."
      />
      <PageHero 
        title="Get in Touch" 
        subtitle="Let's discuss your business vision. Our experts are ready to assist you."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.href}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">{item.title}</p>
                      <p className="text-lg font-bold text-slate-900">{item.details}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-xl font-bold mb-2 relative z-10">Working Hours</h3>
                <p className="text-blue-100 mb-4 relative z-10 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-sm opacity-80 italic">Note: Appointments recommended for in-person consultations.</p>
              </div>
            </div>

            {/* Lead Form */}
            <div className="lg:col-span-2">
              <LeadForm title="Consult with an Expert" />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-slate-100 relative grayscale">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-slate-400 mx-auto mb-4" />
            <p className="text-slate-500 font-medium text-lg">Interactive Map Coming Soon</p>
            <p className="text-slate-400 text-sm">Dubai, UAE</p>
          </div>
        </div>
      </section>
    </>
  );
}
