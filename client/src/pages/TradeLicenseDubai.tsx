import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import TrustSection from "@/components/TrustSection";
import { CheckCircle2, ShieldCheck, Clock, FileText, Briefcase, Award, Zap, TrendingUp, Globe, ArrowRight, Landmark, Scale } from "lucide-react";
import { Link } from "wouter";

export default function TradeLicenseDubai() {
  const faqs = [
    {
      question: "What exactly is a trade license in Dubai?",
      answer: "A trade license is the legal authorization issued by the Department of Economy and Tourism (DET) or various Free Zone authorities that permits you to carry out specific business activities within the UAE legal framework. It defines your company's legal structure and operational boundaries."
    },
    {
      question: "How much does a trade license cost in Dubai?",
      answer: "Costs vary based on jurisdiction and activity. Mainland licenses typically start from AED 15,000, while Free Zone packages (including visa eligibility) can start as low as AED 12,500. We provide a transparent, itemized cost breakdown before any commitment."
    },
    {
      question: "How quickly can I get my trade license?",
      answer: "With Bizlink's 'Instant License' priority track, mainland licenses can often be issued within 24 hours. Standard registrations involving MOA notarization and physical office contracts usually take 3 to 5 working days."
    },
    {
      question: "Can I add multiple business activities to one license?",
      answer: "Yes, you can combine multiple related activities under a single license. However, combining vastly different categories (e.g., trading and consultancy) may require separate licenses or specific approvals from the DET."
    }
  ];

  const licenseTypes = [
    { title: "Commercial License", desc: "For companies engaged in trading activities, including general trade, retail, and wholesale distribution.", icon: Briefcase },
    { title: "Professional License", desc: "For service-oriented businesses, consultancies, and specialized artisanal or technical expertise.", icon: Award },
    { title: "Industrial License", desc: "For large-scale operations involved in manufacturing, processing, or raw material production.", icon: Zap },
    { title: "E-commerce License", desc: "Dedicated permits for selling products or services via digital portals and social media platforms.", icon: Globe }
  ];

  return (
    <>
      <SEO 
        title="Trade License Dubai | Business License & Registration UAE | Bizlink"
        description="Secure your Dubai trade license with technical precision. Expert guidance for Commercial, Professional, and Industrial licenses. 24-hour fast-track available."
      />
      <PageHero 
        title="Strategic Trade Licensing" 
        subtitle="The definitive legal gateway to conducting business in the UAE's world-class economy."
      />

      {/* Authority Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                  <ShieldCheck size={14} />
                  Licensed & Authorized Provider
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">Securing Your Legal Foundation</h2>
                <p className="text-slate-600 text-lg leading-relaxed mt-6">
                  Operating a legal enterprise in Dubai requires more than just a permit—it requires the *right* jurisdictional alignment. Bizlink ensures your trade license is perfectly synchronized with your operational goals, shielding your business from future audits and compliance risks.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "DET Mainland Specialists",
                  "Free Zone Multi-Permits",
                  "Instant License Priority",
                  "Renewal Lifecycle Mgmt",
                  "Activity Reclassification",
                  "Legal Structure Consulting"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-300 transition-all group">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-slate-700 font-bold text-sm tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-10 bg-blue-600/5 blur-[100px] rounded-full"></div>
              <div className="relative z-10 bg-slate-900 rounded-[4rem] p-12 text-white shadow-2xl border border-slate-800">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                <h3 className="text-3xl font-black mb-12 tracking-tight">The Bizlink Advantage</h3>
                <div className="space-y-10">
                  {[
                    { icon: Scale, title: "Risk Mitigation", text: "100% compliant licensing that withstands strict bank and government KYC audits." },
                    { icon: Clock, title: "Express Issuance", text: "Go live in as little as 24-48 hours with our priority government filing system." },
                    { icon: TrendingUp, title: "Operational Mobility", text: "Select structures that offer the highest degree of trade mobility across all Emirates." }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                        <benefit.icon size={32} />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-white text-xl mb-2 tracking-tight">{benefit.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{benefit.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of License Categories */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm border border-slate-200">
              <Landmark size={14} />
              Licensing Taxonomy
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Categorized for Your Success</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">We navigate over 2,000 distinct business activities to find the exact match for your vision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {licenseTypes.map((type, i) => (
              <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-slate-200 hover:shadow-2xl transition-all group hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <type.icon size={32} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{type.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-10">{type.desc}</p>
                <Link href="/contact">
                  <button className="flex items-center gap-3 text-blue-600 font-black text-sm group/link uppercase tracking-widest">
                    Consult Details <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">The 5-Step Issuance Roadmap</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">From activity classification to operational delivery in record time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
            <div className="hidden md:block absolute top-[28px] left-[10%] w-[80%] h-px bg-slate-100 z-0"></div>
            {[
              { title: "Select Activity", desc: "Expert selection from the DET activity master list." },
              { title: "Trade Name", desc: "Digital reservation of your corporate identity." },
              { title: "Initial Approval", desc: "Securing the official government NO Objection." },
              { title: "Legal Drafting", desc: "Preparation of MOA and Ejari documentation." },
              { title: "Final Issuance", desc: "Delivery of your active, digital trade license." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center group">
                <div className="w-14 h-14 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mx-auto mb-10 font-black text-slate-200 group-hover:border-blue-600 group-hover:text-blue-600 transition-all shadow-sm text-xl">
                  {i + 1}
                </div>
                <h4 className="font-extrabold text-slate-900 mb-4 tracking-tight">{step.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />
      <FAQAccordion items={faqs} />
      <ReusableCTA 
        title="Ready to Architect Your Enterprise?" 
        description="Don't let procedural complexity slow your entry into the Dubai market. Secure your trade license with Bizlink today."
      />
    </>
  );
}
