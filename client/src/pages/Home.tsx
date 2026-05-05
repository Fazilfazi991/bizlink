import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Government from "./sections/Government";
import Visas from "./sections/Visas";
import Testimonials from "./sections/Testimonials";
import SetupSteps from "./sections/SetupSteps";
import Contact from "./sections/Contact";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const homeFAQs = [
    {
      question: "How much does it cost to start a business in Dubai?",
      answer: "Business setup costs in Dubai vary based on the jurisdiction. A Free Zone setup can start from AED 12,000, while a Mainland license typically starts from AED 18,000 to 25,000 depending on activities."
    },
    {
      question: "How long does company formation take in UAE?",
      answer: "Company formation can take anywhere from 48 hours for an Instant License to 10-14 days for standard registrations with physical office requirements."
    },
    {
      question: "What is the difference between mainland and free zone?",
      answer: "Mainland companies can trade anywhere in the UAE and internationally, while Free Zone companies are generally restricted to trading within the zone or outside the UAE, but offer 100% tax exemptions."
    },
    {
      question: "Can I get investor visa with a trade license?",
      answer: "Yes, business owners and shareholders are eligible for a 2-year renewable Investor or Partner Visa once the license is issued."
    },
    {
      question: "Do you help with bank account opening?",
      answer: "Yes, we provide complete support for corporate bank account opening by preparing the necessary documentation and introducing you to our banking partners."
    }
  ];

  return (
    <>
      <SEO 
        title="Business Setup in Dubai | Company Formation UAE | Bizlink"
        description="Start your business in Dubai with Bizlink. Mainland, free zone, trade license, visa, PRO services, and document clearing support in UAE."
      />
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <Services />
      </ScrollReveal>

      {/* Comparison Section */}
      <section className="py-24 relative border-b border-slate-200 bg-white overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f172a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2 block">Corporate Architecture</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Choose Your Launchpad
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">We provide strategic counsel to align your operational goals with the perfect UAE corporate structure.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mainland */}
            <ScrollReveal animation="fade-up" delay={0.1}>
              <div className="group flex flex-col bg-slate-50 border border-slate-200 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-500 h-full relative">
                <div className="h-56 overflow-hidden relative p-4 pb-0">
                  <div className="absolute inset-0 bg-slate-100 rounded-t-[2rem] mx-4 mt-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Dubai Mainland" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider">Unrestricted</span>
                    </div>
                  </div>
                </div>
                <div className="p-10 pt-8 flex-1 flex flex-col relative z-20 bg-white m-4 mt-0 rounded-b-[2rem] border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Mainland Setup</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 font-medium">
                    Establish a powerful local presence licensed by the DED. Ideal for businesses looking to trade directly in the local UAE market, bid on lucrative government contracts, and operate without geographical limitations across all Emirates. Enjoy 100% foreign ownership in thousands of commercial activities.
                  </p>
                  <div className="mt-auto">
                    <Link href="/mainland-company-formation">
                      <button className="w-full py-4 bg-slate-50 text-blue-600 rounded-xl font-black uppercase text-xs tracking-widest border border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all flex items-center justify-center gap-2">
                        Explore Mainland <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Freezone */}
            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="group flex flex-col bg-slate-50 border border-slate-200 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-500 h-full relative">
                <div className="h-56 overflow-hidden relative p-4 pb-0">
                  <div className="absolute inset-0 bg-slate-100 rounded-t-[2rem] mx-4 mt-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Dubai Freezone" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider">Tax-Optimized</span>
                    </div>
                  </div>
                </div>
                <div className="p-10 pt-8 flex-1 flex flex-col relative z-20 bg-white m-4 mt-0 rounded-b-[2rem] border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Free Zone Setup</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 font-medium">
                    The ultimate gateway for international trade and service providers. Benefit from 100% foreign ownership, full capital repatriation, and zero currency restrictions. With over 40 distinct zones like IFZA, DMCC, and RAKEZ, we'll place you in the perfect ecosystem for your industry niche.
                  </p>
                  <div className="mt-auto">
                    <Link href="/free-zone-company-setup">
                      <button className="w-full py-4 bg-slate-50 text-blue-600 rounded-xl font-black uppercase text-xs tracking-widest border border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all flex items-center justify-center gap-2">
                        Explore Free Zone <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Offshore */}
            <ScrollReveal animation="fade-up" delay={0.3}>
              <div className="group flex flex-col bg-slate-50 border border-slate-200 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-500 h-full relative">
                <div className="h-56 overflow-hidden relative p-4 pb-0">
                  <div className="absolute inset-0 bg-slate-100 rounded-t-[2rem] mx-4 mt-4 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Dubai Offshore" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider">Wealth Protection</span>
                    </div>
                  </div>
                </div>
                <div className="p-10 pt-8 flex-1 flex flex-col relative z-20 bg-white m-4 mt-0 rounded-b-[2rem] border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Offshore Setup</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 font-medium">
                    A highly confidential, tax-efficient vehicle designed for global asset protection, international trading, and holding structures. Establish your non-resident company in premium jurisdictions like RAK ICC or JAFZA without the need for a physical office or local residency visas.
                  </p>
                  <div className="mt-auto">
                    <Link href="/offshore-company-setup-dubai">
                      <button className="w-full py-4 bg-slate-50 text-blue-600 rounded-xl font-black uppercase text-xs tracking-widest border border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all flex items-center justify-center gap-2">
                        Explore Offshore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <SetupSteps />
      </ScrollReveal>

      <ScrollReveal animation="fade-up" delay={0.1}>
        <Government />
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up" delay={0.2}>
        <Visas />
      </ScrollReveal>
      
      <ScrollReveal>
        <FAQAccordion items={homeFAQs} />
      </ScrollReveal>
      
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
}
