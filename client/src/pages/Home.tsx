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
      <section className="py-24 relative border-b border-slate-200 bg-[#f8fafc] overflow-hidden">
        {/* Subtle Wavy Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cpath d='M0,400 Q100,300 200,400 T400,400 T600,400 T800,400' fill='none' stroke='%23000' stroke-width='4'/%3E%3Cpath d='M0,200 Q100,100 200,200 T400,200 T600,200 T800,200' fill='none' stroke='%23000' stroke-width='4'/%3E%3Cpath d='M0,600 Q100,500 200,600 T400,600 T600,600 T800,600' fill='none' stroke='%23000' stroke-width='4'/%3E%3Cpath d='M0,800 Q100,700 200,800 T400,800 T600,800 T800,800' fill='none' stroke='%23000' stroke-width='4'/%3E%3Cpath d='M0,0 Q100,-100 200,0 T400,0 T600,0 T800,0' fill='none' stroke='%23000' stroke-width='4'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px',
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Mainland, Free Zone, or Offshore?
              </h2>
              <p className="text-slate-600 text-lg">We’ll Help You Choose the Right Option for Your Business.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mainland */}
            <ScrollReveal animation="fade-up" delay={0.1}>
              <div className="flex flex-col bg-[#0b1b28] rounded-[2rem] overflow-hidden text-white shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b28] to-transparent z-10 opacity-80"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Dubai Mainland" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 pt-0 flex-1 flex flex-col relative z-20">
                  <h3 className="text-2xl font-bold mb-4">Mainland</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-1">
                    Set up a mainland company in UAE through the Department of Economic Development (DED) and gain unrestricted access to the local UAE market, prime business locations, and government contracts. Mainland companies allow 100% foreign ownership in most sectors and can trade freely with other businesses across all emirates.
                  </p>
                  <div className="mt-auto">
                    <Link href="/mainland-company-formation">
                      <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                        Learn More <ArrowRight size={16} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Freezone */}
            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="flex flex-col bg-[#0d102e] rounded-[2rem] overflow-hidden text-white shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d102e] to-transparent z-10 opacity-80"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Dubai Freezone" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 pt-0 flex-1 flex flex-col relative z-20">
                  <h3 className="text-2xl font-bold mb-4">Freezone</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-1">
                    UAE free zones offer 100% foreign ownership, 0% corporate tax on qualifying income, and the freedom to operate internationally. With 40+ free zones available — including DMCC, IFZA, and RAKEZ — foreign investors can find a jurisdiction that matches their industry, budget, and business activity.
                  </p>
                  <div className="mt-auto">
                    <Link href="/free-zone-company-setup">
                      <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                        Learn More <ArrowRight size={16} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Offshore */}
            <ScrollReveal animation="fade-up" delay={0.3}>
              <div className="flex flex-col bg-[#305c4f] rounded-[2rem] overflow-hidden text-white shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#305c4f] to-transparent z-10 opacity-80"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Dubai Offshore" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 pt-0 flex-1 flex flex-col relative z-20">
                  <h3 className="text-2xl font-bold mb-4">Offshore</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-1">
                    Register an offshore company in UAE through designated jurisdictions such as RAK ICC or JAFZA to benefit from 0% tax, full confidentiality, and no requirement for a physical office. Offshore structures are ideal for international trading, asset protection, and holding companies.
                  </p>
                  <div className="mt-auto">
                    <Link href="/offshore-company-setup-dubai">
                      <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                        Learn More <ArrowRight size={16} />
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
