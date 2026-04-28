import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import TrustSection from "@/components/TrustSection";
import { CheckCircle2, ShieldCheck, Zap, HeartHandshake, FileText, UserCheck, Briefcase, Building, Landmark, Award } from "lucide-react";

export default function ProServicesPage() {
  const proFAQs = [
    {
      question: "What exactly are PRO services in the UAE context?",
      answer: "Public Relations Officer (PRO) services involve managing all government-related documentation, approvals, and legal formalities required by a business in the UAE. This includes trade license renewals, visa processing, labour card applications, and coordination with various municipalities."
    },
    {
      question: "Why should I outsource my PRO work to Bizlink?",
      answer: "Outsourcing eliminates the overhead of an in-house PRO, reduces the risk of expensive government fines due to missed deadlines, and ensures all your documentation is handled by experts who stay abreast of daily changes in UAE regulations."
    },
    {
      question: "Which government departments does your team cover?",
      answer: "We cover all major entities including the Department of Economy and Tourism (DET), Ministry of Human Resources and Emiratisation (MoHRE), General Directorate of Residency and Foreigners Affairs (GDRFA), and various Free Zone authorities."
    },
    {
      question: "Can you handle PRO work for both Mainland and Free Zone companies?",
      answer: "Yes, our team is highly experienced in handling the specific administrative and legal requirements for both mainland and free zone entities across all seven emirates."
    }
  ];

  return (
    <>
      <SEO 
        title="PRO Services Dubai | Government Liaison & Document Clearing | Bizlink"
        description="Professional PRO services in Dubai. We handle trade license renewals, visa processing, and government approvals with 100% compliance and speed."
      />
      <PageHero 
        title="PRO Services in Dubai" 
        subtitle="Expert government liaison to keep your business compliant and moving at the speed of the city."
      />

      {/* Main Content / Why Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <ShieldCheck size={14} />
                Strategic Government Liaison
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Reliable Management of All UAE Formalities</h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Navigating the administrative landscape of the UAE requires more than just knowing the rules—it requires established relationships and a deep understanding of evolving government procedures. Our dedicated PRO team acts as your professional bridge to key government entities.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: Building, text: "License Renewals" },
                  { icon: UserCheck, text: "Visa Processing" },
                  { icon: Briefcase, text: "Labour Cards" },
                  { icon: FileText, text: "MoFA Attestation" },
                  { icon: HeartHandshake, text: "Family Sponsorship" },
                  { icon: ShieldCheck, text: "Golden Visa Support" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100 group hover:border-blue-300 transition-all">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <item.icon size={22} />
                    </div>
                    <span className="text-slate-800 font-bold text-sm tracking-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full"></div>
              {[
                { icon: ShieldCheck, title: "100% Accuracy", desc: "Our rigorous vetting process ensures zero-error processing for all legal submissions." },
                { icon: Zap, title: "Rapid Turnaround", desc: "Optimized liaison protocols to secure approvals in the shortest possible windows." },
                { icon: Landmark, title: "Dept. Expertise", desc: "Deep knowledge of DED, MoHRE, GDRFA, and Municipality requirements." },
                { icon: Award, title: "Zero Penalties", desc: "We proactively manage your renewal cycles to prevent government fines." }
              ].map((card, i) => (
                <div key={i} className="relative z-10 p-10 bg-white/80 backdrop-blur-sm rounded-[3rem] border border-slate-200 hover:shadow-2xl transition-all group hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <card.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{card.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Process Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Operational Workflow</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">A systematic, secure approach to managing your corporate documentation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { step: "01", title: "Needs Analysis", desc: "We review your current compliance status and provide a transparent, flat-fee quote for all required services." },
              { step: "02", title: "Secure Handover", desc: "Our couriers collect all physical documents from your premises with full tracking and security protocols." },
              { step: "03", title: "Departmental Filing", desc: "Our senior PROs execute the filing with relevant authorities, tracking every step until final delivery." }
            ].map((s, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-black text-white/5 absolute -top-12 -left-6 group-hover:text-blue-500/10 transition-colors">0{i+1}</div>
                <div className="relative z-10 space-y-6">
                  <div className="h-1 w-12 bg-blue-600 group-hover:w-20 transition-all duration-500"></div>
                  <h4 className="text-2xl font-bold tracking-tight">{s.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />
      <FAQAccordion items={proFAQs} />
      <ReusableCTA 
        title="Stop Worrying About Fines and Deadlines" 
        description="Let Dubai's most reliable PRO team handle your government paperwork while you focus on business growth."
      />
    </>
  );
}
