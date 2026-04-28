import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import { CheckCircle2, Zap, Percent, Anchor, Clock, ShieldCheck, ArrowRight, FileCheck, Landmark, Globe } from "lucide-react";
import { Link } from "wouter";

export default function FreeZoneCompanySetup() {
  const freezoneFAQs = [
    {
      question: "Which Free Zone is best for my business activity?",
      answer: "The ideal zone depends on your specific industry. For example, DMCC is the global leader for commodities, DIFC for high-end finance, and IFZA or Meydan for cost-effective service-based startups and freelancers."
    },
    {
      question: "Can I live and work in Dubai with a Free Zone license?",
      answer: "Absolutely. Most Free Zone licenses include eligibility for a 2-year renewable UAE residency visa for the investors, employees, and their families."
    },
    {
      question: "Is 100% foreign ownership guaranteed in all Free Zones?",
      answer: "Yes, 100% foreign ownership has always been the primary legal pillar of Free Zones, along with the right to 100% repatriation of profits and capital without any local sponsor requirement."
    },
    {
      question: "Do I need to rent a physical office space?",
      answer: "Many modern Free Zones offer 'Flexi-desk' or 'Smart Office' options. These provide a legal business address required for licensing without the high overhead of a physical dedicated office."
    }
  ];

  const setupSteps = [
    { step: "01", icon: ShieldCheck, title: "Zone Selection", desc: "Expert guidance on choosing the jurisdiction that aligns with your activity and long-term scaling plans." },
    { step: "02", icon: FileCheck, title: "Documentation", desc: "Preparation of application forms, business profiles, and shareholder resolutions for a zero-rejection filing." },
    { step: "03", icon: Clock, title: "License Issuance", desc: "Digital processing and issuance of your trade license, share certificate, and lease agreement." },
    { step: "04", icon: Landmark, title: "Banking & Visa", desc: "Assistance with your Emirates ID, residency visa, and opening a corporate bank account with local banks." }
  ];

  return (
    <>
      <SEO 
        title="Free Zone Company Setup Dubai | 100% Ownership & Zero Tax | Bizlink"
        description="Launch your business in UAE's premium Free Zones. 100% ownership, zero tax, and full profit repatriation. Fast-track setup with Bizlink specialists."
      />
      <PageHero 
        title="Free Zone Company Setup" 
        subtitle="Experience total ownership and tax efficiency in UAE's most innovative business ecosystems."
      />

      {/* Core Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Percent, title: "0% Corporate Tax", desc: "Benefit from the UAE's competitive tax landscape with zero personal and corporate income tax for qualifying companies." },
              { icon: Zap, title: "Rapid Onboarding", desc: "Our digital-first approach means your company can be registered and operational in as little as 3 working days." },
              { icon: Anchor, title: "Full Profit Control", desc: "Enjoy the freedom to repatriate 100% of your capital and profits to your home country with zero restrictions." }
            ].map((card, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-center hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-8 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  <card.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Strategic Hubs for Global Trade</h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                  The UAE offers over 40 multidisciplinary free zones, each catering to specific industries. We help you navigate these to find the perfect fit for your operational needs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "IFZA (Meydan & DSO)", 
                    "DMCC (Global Commodities)", 
                    "Meydan (E-commerce Focus)", 
                    "SHAMS (Media & Creative)", 
                    "RAKEZ (Cost-effective SME)", 
                    "Dubai South (Logistics)"
                  ].map((zone, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                      <Globe className="text-blue-500 flex-shrink-0" size={20} />
                      <span className="text-sm font-bold text-slate-200">{zone}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
                <h3 className="text-3xl font-bold mb-4">Start as a Freelancer</h3>
                <p className="text-slate-400 mb-10 leading-relaxed text-sm">Low-cost freelancer permits available with residency visa eligibility and access to premium co-working spaces in Dubai.</p>
                <div className="flex flex-col gap-8">
                  <div className="text-5xl font-black text-white flex items-end gap-2">
                    <span className="text-sm font-bold text-blue-500 mb-2">Starting From</span>
                    AED 12,500
                  </div>
                  <Link href="/contact">
                    <button className="w-full py-5 bg-blue-600 rounded-2xl font-black text-white shadow-xl shadow-blue-900/40 hover:bg-blue-500 transition-all flex items-center justify-center gap-3 group">
                      Inquire about Freelancer Packages
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Setup Process */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Your Path to Licensure</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">A streamlined, transparent process designed to get you operational in record time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {setupSteps.map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <span className="text-3xl font-black text-blue-200 group-hover:text-white/20 transition-colors mt-4 mr-4">{s.step}</span>
                </div>
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                  <s.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion items={freezoneFAQs} />
      <ReusableCTA 
        title="Ready to Lead Your Industry in the UAE?"
        description="Our Free Zone specialists are ready to architect your company's entry into the Dubai market. Speak with us today."
      />
    </>
  );
}
