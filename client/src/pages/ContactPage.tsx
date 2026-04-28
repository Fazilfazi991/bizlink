import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  MessageCircle,
  ChevronRight
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Bizlink" 
        description="Get in touch with BIZLINK Documents Clearing LLC for expert business setup and PRO services in Dubai. Contact us today for a free consultation."
      />
      <PageHero 
        title="Get in Touch with Our Experts"
        subtitle="We're here to answer your questions and help you navigate the UAE business landscape."
        breadcrumb="Contact"
      />

      {/* Contact Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Info Cards */}
            <div className="lg:col-span-1 space-y-8">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                      <p className="text-slate-900 font-semibold">+971 XX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-slate-900 font-semibold">info@bizlinkdubai.info</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Office Location</p>
                      <p className="text-slate-900 font-semibold text-sm">Dubai, United Arab Emirates</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Working Hours</p>
                      <p className="text-slate-900 font-semibold text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-slate-900 font-semibold text-sm">Saturday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-200">
                <h3 className="text-xl font-bold mb-4">Fast Response on WhatsApp</h3>
                <p className="text-white/80 text-sm mb-8 leading-relaxed">Chat with our experts right now for immediate assistance with your queries.</p>
                <Button className="w-full bg-white text-blue-600 hover:bg-slate-100 rounded-full font-bold flex items-center justify-center gap-2">
                  <MessageCircle size={20} />
                  WhatsApp Now
                </Button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-2xl shadow-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <Input placeholder="Enter your name" className="rounded-xl border-slate-200 h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                      <Input placeholder="+971 -- --- ----" className="rounded-xl border-slate-200 h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Required Service</label>
                    <select className="w-full h-12 rounded-xl border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Mainland Company Setup</option>
                      <option>Free Zone Company Setup</option>
                      <option>PRO Services</option>
                      <option>Visa Services</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                    <Textarea placeholder="How can we help you today?" className="rounded-xl border-slate-200 min-h-[150px]" />
                  </div>
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold py-7 flex items-center justify-center gap-2 group">
                    Send Message <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-slate-100 relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold italic">
          Google Map Placeholder
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to grow your business in Dubai?</h2>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full font-bold px-10 py-7">
            Get a Free Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
