import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import TrustSection from "@/components/TrustSection";
import { CheckCircle2, Scale, FileText, Gavel, Handshake, ShieldAlert, BadgeCheck, ScrollText } from "lucide-react";

export default function DubaiCourtServices() {
  const faqs = [
    {
      question: "What types of Notary Public services do you assist with?",
      answer: "We assist with the drafting, translation, and notarization of Powers of Attorney (POA), Memorandums of Association (MOA), declarations, legal notices, and signature authentications at the Dubai Courts Notary Public."
    },
    {
      question: "Do I need to be physically present at Dubai Courts for notarization?",
      answer: "While some services require physical presence, many Notary Public services in Dubai can now be completed remotely via video call. We guide you through both in-person and remote processes depending on your specific requirements."
    },
    {
      question: "Can you provide legal translation for court documents?",
      answer: "Yes, we provide certified legal translation services (Arabic/English and other languages) that are fully recognized and accepted by Dubai Courts and the Ministry of Justice."
    },
    {
      question: "Do you offer legal representation?",
      answer: "We facilitate court services, document preparation, and procedural support. For matters requiring legal representation or litigation, we work closely with top-tier licensed local advocates and legal consultants."
    }
  ];

  return (
    <>
      <SEO 
        title="Dubai Court & Notary Services | Legal Support | Bizlink"
        description="Expert assistance with Dubai Courts, Notary Public services, POA drafting, legal translation, and dispute resolution support across the UAE."
      />
      <PageHero 
        title="Dubai Court Services" 
        subtitle="Professional guidance and expedited processing for Notary Public, legal documentation, and court procedures."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6">
              <Gavel size={16} />
              Legal & Court Liaison
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Streamlining Legal Formalities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Navigating the UAE judicial system and Notary Public requirements can be complex. We provide comprehensive support to ensure your legal documents and court procedures are handled correctly and efficiently.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ScrollText, title: "Notary Public", desc: "Assistance with notarizing MOAs, declarations, and authenticating signatures." },
              { icon: FileText, title: "Power of Attorney", desc: "Drafting, translating, and registering General and Special POAs." },
              { icon: Handshake, title: "Dispute Resolution", desc: "Procedural support for mediation, arbitration, and amicable settlements." },
              { icon: BadgeCheck, title: "Legal Translation", desc: "Certified translations accredited by the UAE Ministry of Justice." }
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Why Choose Our Court Services?</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Errors in legal documentation can lead to rejected applications, invalid agreements, and unnecessary legal disputes. Our expertise ensures compliance from the start.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Bilingual Expertise", text: "Accurate drafting in both Arabic and English." },
                  { title: "Time Efficiency", text: "We manage the queueing and procedural steps on your behalf." },
                  { title: "Regulatory Compliance", text: "Up-to-date knowledge of the latest Dubai Courts rules and requirements." },
                  { title: "End-to-End Support", text: "From initial drafting to final stamping and registration." }
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
                  <Scale className="text-blue-500" /> Precision & Compliance
                </h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-3 text-sm font-bold uppercase tracking-widest text-slate-400">
                      <span>Translation Accuracy</span>
                      <span className="text-blue-500">100%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-3 text-sm font-bold uppercase tracking-widest text-slate-400">
                      <span>Procedural Success Rate</span>
                      <span className="text-blue-500">99%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="w-[99%] h-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="p-6 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                      <p className="text-sm text-slate-300 italic">"Bizlink efficiently handled the drafting and notarization of our corporate Power of Attorney. Their knowledge of Dubai Courts procedures saved us valuable time."</p>
                      <div className="mt-4 font-bold text-white text-xs">— Corporate Legal Counsel, Tech Firm</div>
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
        title="Require Court or Notary Assistance?" 
        description="Reach out to our specialists today to ensure your legal documents are processed accurately and swiftly."
      />
    </>
  );
}
