import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import TrustSection from "@/components/TrustSection";
import { CheckCircle2, Shield, HeartPulse, Car, Building, Briefcase, FileWarning, Calculator, Activity } from "lucide-react";

export default function InsuranceServices() {
  const faqs = [
    {
      question: "Is health insurance mandatory in the UAE?",
      answer: "Yes, health insurance is mandatory for all residents in Dubai and Abu Dhabi. Employers are legally obligated to provide basic health insurance coverage for their employees."
    },
    {
      question: "What types of business insurance do you recommend?",
      answer: "For most businesses, we recommend a combination of Commercial General Liability, Workmen's Compensation, Property Insurance, and Professional Indemnity (depending on the industry)."
    },
    {
      question: "Can you help me compare insurance policies from different providers?",
      answer: "Absolutely. We work with leading insurance providers across the UAE to offer you comparative quotes, ensuring you get the best coverage at the most competitive rates."
    },
    {
      question: "What is Workmen's Compensation Insurance?",
      answer: "Workmen's Compensation provides wage replacement and medical benefits to employees injured in the course of employment. It is highly recommended and often mandatory for construction and industrial sectors in the UAE."
    }
  ];

  return (
    <>
      <SEO 
        title="Insurance Services UAE | Corporate, Health & Vehicle | Bizlink"
        description="Comprehensive insurance solutions across the UAE. We provide tailored coverage for corporate liability, health, vehicle, property, and workmen's compensation."
      />
      <PageHero 
        title="Insurance Services" 
        subtitle="Protecting your business, your employees, and your assets with tailored insurance policies across the UAE."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6">
              <Shield size={16} />
              Comprehensive Coverage
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tailored Protection for Every Need</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">From mandatory health insurance to specialized corporate liability coverage, we help you navigate the UAE insurance market to find the perfect fit.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: HeartPulse, title: "Health Insurance", desc: "Mandatory DHA/HAAD compliant medical insurance for individuals, families, and corporate groups." },
              { icon: Briefcase, title: "Corporate & Liability", desc: "Commercial General Liability, Professional Indemnity, and Directors & Officers insurance." },
              { icon: Activity, title: "Workmen's Compensation", desc: "Essential coverage for workplace injuries, medical expenses, and employer liability." },
              { icon: Car, title: "Vehicle & Fleet", desc: "Comprehensive and third-party motor insurance for personal vehicles and corporate fleets." },
              { icon: Building, title: "Property Insurance", desc: "Protection for commercial real estate, office contents, warehouses, and industrial assets." },
              { icon: FileWarning, title: "Specialty Insurance", desc: "Cyber liability, marine cargo, engineering, and construction all-risk policies." }
            ].map((service, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-1">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Why Broker with Bizlink?</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Finding the right insurance policy in the UAE involves comparing complex terms, exclusions, and premiums. We simplify this process for you.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Market-Wide Access", text: "We work with top-tier local and international insurance providers." },
                  { title: "Cost Optimization", text: "Competitive premiums negotiated on your behalf." },
                  { title: "Unbiased Advice", text: "We recommend policies based purely on your specific risk profile." },
                  { title: "Claims Assistance", text: "Dedicated support when you need to file and process a claim." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                      <CheckCircle2 className="text-blue-500 group-hover:text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800 p-12 rounded-[3rem] border border-slate-700 shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Calculator className="text-blue-500" /> Optimal Coverage
                </h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-3 text-sm font-bold uppercase tracking-widest text-slate-400">
                      <span>Tailored Solutions</span>
                      <span className="text-blue-500">100%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-3 text-sm font-bold uppercase tracking-widest text-slate-400">
                      <span>Claim Support</span>
                      <span className="text-blue-500">24/7</span>
                    </div>
                    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="w-[100%] h-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="p-6 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                      <p className="text-sm text-slate-300 italic">"Bizlink restructured our entire corporate insurance portfolio. We received better health coverage for our employees and comprehensive liability protection at a lower overall cost."</p>
                      <div className="mt-4 font-bold text-white text-xs">— Finance Director, Manufacturing Group</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />
      <FAQAccordion items={faqs} />
      <ReusableCTA 
        title="Looking for the Best Insurance Rates?" 
        description="Let our experts evaluate your requirements and provide you with customized quotes from leading UAE providers."
      />
    </>
  );
}
