import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import TrustSection from "@/components/TrustSection";
import { CheckCircle2, FileSearch, Scale, Building2, Zap, ShieldCheck, Globe, ArrowRight } from "lucide-react";

export default function DocumentClearingDubai() {
  const faqs = [
    {
      question: "What exactly is document clearing in Dubai?",
      answer: "Document clearing, often referred to as PRO services, involves obtaining the necessary approvals, attestations, and legal stamps from government bodies like the DED, MoHRE, GDRFA, and various municipalities for business or personal residency procedures."
    },
    {
      question: "Which government departments does Bizlink coordinate with?",
      answer: "We have established relationships with the Department of Economy and Tourism (DET), Ministry of Labour (MoHRE), Immigration (GDRFA), Dubai Municipality, RTA, Dubai Health Authority (DHA), and the Ministry of Foreign Affairs (MoFA)."
    },
    {
      question: "How long does document attestation typically take?",
      answer: "Local attestation (MoFA) usually takes 1-2 working days. International attestation (from the country of origin followed by UAE embassy and MoFA) can take anywhere from 7 to 15 working days depending on the country."
    }
  ];

  return (
    <>
      <SEO 
        title="Document Clearing Dubai | Legal Translation & Attestation | Bizlink"
        description="Professional document clearing services in Dubai. MoFA attestation, legal translation, and government department approvals with 100% accuracy and speed."
      />
      <PageHero 
        title="Document Clearing" 
        subtitle="Eliminating the administrative burden of government formalities and legal documentation."
      />

      {/* Hero Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6">
              <Zap size={16} />
              Fast-Track Approval System
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Swift Approvals, Zero Hassle</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">We navigate the intricacies of UAE government departments so you can focus on your core business operations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FileSearch, title: "Attestation", desc: "MoFA and Embassy attestation for degrees, marriage certificates, and powers of attorney." },
              { icon: Scale, title: "Legal Translation", desc: "Certified Arabic translations for legal and corporate documents recognized by all UAE courts." },
              { icon: Building2, title: "Dept Approvals", desc: "Coordinating approvals from Dubai Municipality, Civil Defence, RTA, and RERA." },
              { icon: ShieldCheck, title: "P.O. Box Setup", desc: "Comprehensive setup and management of corporate and individual P.O. Box services." }
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

      {/* Comparison/Benefit Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Why Professional Clearing Matters</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                A single error in a legal translation or a missing stamp on an attestation can set your business back weeks and incur heavy government fines.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Risk Mitigation", text: "Avoid costly delays due to incorrect or incomplete documentation." },
                  { title: "Legal Updates", text: "Stay ahead of frequently changing government regulations and fees." },
                  { title: "Time Efficiency", text: "Our couriers and PROs handle all physical government visits for you." },
                  { icon: Globe, title: "Global Reach", text: "Coordination with UAE embassies worldwide for international attestation." }
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
                  <Zap className="text-blue-500" /> Accuracy & Reliability
                </h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-3 text-sm font-bold uppercase tracking-widest text-slate-400">
                      <span>Government Approval Rate</span>
                      <span className="text-blue-500">100%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-3 text-sm font-bold uppercase tracking-widest text-slate-400">
                      <span>Documentation Precision</span>
                      <span className="text-blue-500">99.9%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="w-[99.9%] h-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="p-6 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                      <p className="text-sm text-slate-300 italic">"Bizlink handled our complex MOA amendment and DET approvals in record time. Their direct liaison with the departments is evident."</p>
                      <div className="mt-4 font-bold text-white text-xs">— Managing Director, Global Logistics LLC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & CTA */}
      <TrustSection />
      <FAQAccordion items={faqs} />
      <ReusableCTA 
        title="Need Urgent Document Clearing?" 
        description="Our team is ready to assist with legal translations, attestations, and government approvals today."
      />
    </>
  );
}
