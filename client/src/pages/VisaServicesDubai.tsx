import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import TrustSection from "@/components/TrustSection";
import { CheckCircle2, UserCheck, Users, Briefcase, FileText, Globe, ShieldCheck, Heart, Zap, ArrowRight, Clock } from "lucide-react";
import { Link } from "wouter";

export default function VisaServicesDubai() {
  const faqs = [
    {
      question: "What exactly is the UAE Golden Visa and who is eligible?",
      answer: "The Golden Visa is a long-term residence visa (5 or 10 years) that allows foreigners to live, work, or study in the UAE without a local sponsor and with 100% ownership of their business. It is available to investors, entrepreneurs, specialized talents, researchers, and outstanding students."
    },
    {
      question: "Can I sponsor my spouse and children on my investor visa?",
      answer: "Yes, once your residency visa is issued, you can sponsor your immediate family members (spouse and children). At Bizlink, we handle the entire family sponsorship process concurrently with your own."
    },
    {
      question: "How long does the entire visa process take from start to finish?",
      answer: "A standard residency visa process typically takes 7-10 working days. This includes the entry permit issuance, status change, medical fitness test, Emirates ID biometrics, and final residency approval."
    },
    {
      question: "What is the 2-year Investor Visa?",
      answer: "The 2-year Investor or Partner Visa is the standard residency option for shareholders in a UAE mainland or free zone company. It offers full residency rights and is renewable indefinitely as long as the company license remains valid."
    }
  ];

  const visaTypes = [
    { 
      icon: Briefcase, 
      title: "Investor & Partner Visas", 
      desc: "The standard for entrepreneurs and shareholders. Offers long-term residency linked to your business license.",
      features: ["2-Year Renewable", "Family Sponsorship", "UAE Bank Account Eligibility"]
    },
    { 
      icon: UserCheck, 
      title: "UAE Golden Visa", 
      desc: "The ultimate 10-year residency for property owners, investors, and high-net-worth individuals.",
      features: ["10-Year Stability", "Self-Sponsored", "Domestic Worker Sponsorship"]
    },
    { 
      icon: Users, 
      title: "Family Sponsorship", 
      desc: "Bring your loved ones to live with you in the UAE. We manage everything from spouse to child visas.",
      features: ["Fast Documentation", "Medical Coordination", "Emirates ID Delivery"]
    }
  ];

  return (
    <>
      <SEO 
        title="Visa Services Dubai | UAE Residency & Golden Visa Experts | Bizlink"
        description="Comprehensive visa services in Dubai. Expert processing for Investor visas, Golden Visas, Family sponsorship, and Green visas. Fast-track your UAE residency."
      />
      <PageHero 
        title="Visa & Residency Solutions" 
        subtitle="Secure your future in the UAE with professional, fast-track immigration services."
      />

      {/* Modern Visa Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <Zap size={14} />
              Strategic Immigration Services
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Comprehensive Residency Pathways</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">We navigate the latest GDRFA and ICP regulations to ensure your residency is processed with zero rejection risk.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {visaTypes.map((visa, i) => (
              <div key={i} className="flex flex-col h-full p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-10 shadow-xl group-hover:bg-blue-600 transition-colors">
                  <visa.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{visa.title}</h3>
                <p className="text-slate-500 mb-10 leading-relaxed text-sm">{visa.desc}</p>
                <ul className="mt-auto space-y-4">
                  {visa.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <CheckCircle2 size={14} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid & Roadmap */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-10 bg-blue-600/5 blur-[100px] rounded-full"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                {[
                  { icon: ShieldCheck, title: "100% Compliance", text: "Aligned with GDRFA & ICP rules." },
                  { icon: Clock, title: "VIP Processing", text: "Express medical & biometrics." },
                  { icon: Globe, title: "Golden Visa Hub", text: "Specialized in 10-year residency." },
                  { icon: Heart, title: "Family Support", text: "End-to-end dependent sponsorship." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <item.icon size={32} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">The Path to Residency Simplified</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  Obtaining UAE residency involves coordination across multiple departments. We manage the entire timeline—from status change to final Emirates ID delivery—ensuring you stay informed at every milestone.
                </p>
              </div>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Entry Permit Issuance", desc: "Digital processing of your initial entry or status change permit." },
                  { step: "02", title: "VIP Medical Fitness", desc: "Priority health screening at approved government centers." },
                  { step: "03", title: "Biometric Registration", desc: "Escorted assistance at the Emirates ID authority centers." },
                  { step: "04", title: "Residency Stamping", desc: "Final verification and digital residency issuance." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl border border-slate-200 flex items-center justify-center font-black text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xl mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <Link href="/contact">
                  <button className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all group">
                    Begin Your Visa Process
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />
      <FAQAccordion items={faqs} />
      <ReusableCTA 
        title="Ready to Call Dubai Home?" 
        description="Our immigration specialists are ready to secure your residency today. Fast, reliable, and 100% compliant."
      />
    </>
  );
}
