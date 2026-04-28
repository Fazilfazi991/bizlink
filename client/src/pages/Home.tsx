import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Government from "./sections/Government";
import Visas from "./sections/Visas";
import Contact from "./sections/Contact";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckCircle2, XCircle } from "lucide-react";

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
      <About />
      <Services />

      {/* Comparison Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Mainland or Free Zone?
            </h2>
            <p className="text-slate-600 text-lg">We’ll Help You Choose the Right Option for Your Business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:border-blue-200 transition-colors">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Mainland Company</h3>
              <div className="space-y-4">
                {[
                  { text: "Trade anywhere in UAE & internationally", pos: true },
                  { text: "No limit on number of visas", pos: true },
                  { text: "Government contracts eligible", pos: true },
                  { text: "100% foreign ownership", pos: true },
                  { text: "Physical office required", pos: false }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    {item.pos ? <CheckCircle2 className="text-green-500 flex-shrink-0" /> : <CheckCircle2 className="text-blue-500 flex-shrink-0" />}
                    <span className="text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:border-blue-200 transition-colors">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Free Zone Company</h3>
              <div className="space-y-4">
                {[
                  { text: "100% corporate & personal tax exemption", pos: true },
                  { text: "100% import & export tax exemption", pos: true },
                  { text: "No physical office required (Flexi-desk)", pos: true },
                  { text: "Quick & easy registration", pos: true },
                  { text: "Restricted trade within UAE mainland", pos: false }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="text-blue-500 flex-shrink-0" />
                    <span className="text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Government />
      <Visas />
      <FAQAccordion items={homeFAQs} />
      <Contact />
    </>
  );
}
