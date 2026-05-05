import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Business Setup",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inquiry sent successfully! We'll contact you soon.");
    setFormData({ name: "", phone: "", service: "Business Setup", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "0547486000",
      href: "tel:+971547486000",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@bizlinkdc.com",
      href: "mailto:info@bizlinkdc.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Office 11/202, Shaikha Mhara Bldg, Near Altwar Center, Al Qusais 2, Dubai",
      href: "https://maps.app.goo.gl/rK5sK19VWfNqTdBQ9",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Ready to Start Your Business?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our experts are waiting to help you navigate the UAE business landscape.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScrollReveal animation="fade-right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 000 0000"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>Business Setup</option>
                    <option>PRO Services</option>
                    <option>Visa Services</option>
                    <option>Accounting & Tax</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business goals..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 rounded-lg font-semibold text-base"
                >
                  Send Inquiry
                </Button>
              </form>
            </ScrollReveal>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <ScrollReveal animation="fade-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Contact Information
              </h3>
            </ScrollReveal>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <ScrollReveal key={info.label} animation="fade-left" delay={0.1 + index * 0.1}>
                  <a
                    href={info.href}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-600">{info.label}</p>
                      <p className="text-slate-900 font-semibold">{info.value}</p>
                    </div>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
