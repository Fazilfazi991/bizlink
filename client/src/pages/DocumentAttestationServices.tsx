import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import TrustSection from "@/components/TrustSection";
import { CheckCircle2, FileSearch, Globe, FileSignature, GraduationCap, Building, Stamp, BookOpen } from "lucide-react";

export default function DocumentAttestationServices() {
  const faqs = [
    {
      question: "What is document attestation and why is it necessary in the UAE?",
      answer: "Document attestation is the process of verifying the authenticity of a document (like a degree or marriage certificate) so it can be legally recognized in the UAE. It's mandatory for employment, residency visas, setting up a business, and other official procedures."
    },
    {
      question: "Which documents require attestation?",
      answer: "Common documents include educational certificates (degrees, diplomas), personal documents (birth, marriage, death certificates), and commercial documents (company incorporation certificates, board resolutions, MOAs, and POAs)."
    },
    {
      question: "How long does the attestation process take?",
      answer: "The duration depends on the document type and the issuing country. UAE local attestation (MoFA) typically takes 1-2 working days. International attestation can take anywhere from 7 to 15 working days or more."
    },
    {
      question: "Do you offer pick-up and drop-off services for documents?",
      answer: "Yes, we provide secure door-to-door collection and delivery services for your documents across the UAE to ensure maximum convenience and safety."
    }
  ];

  return (
    <>
      <SEO 
        title="Document Attestation Services in Dubai & UAE | Bizlink"
        description="Fast and reliable document attestation services in Dubai. We handle MoFA, Embassy, and international attestations for educational, personal, and commercial documents."
      />
      <PageHero 
        title="Document Attestation Services" 
        subtitle="Secure, fast, and globally recognized attestation services for all your legal, commercial, and personal documents."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6">
              <Stamp size={16} />
              Verified & Recognized
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Attestation Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">We provide end-to-end document legalization services, ensuring your paperwork is recognized by UAE authorities and international bodies without delays.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, title: "Educational Documents", desc: "Attestation for Degrees, Diplomas, School Certificates, and Transcripts." },
              { icon: FileSignature, title: "Personal Documents", desc: "Marriage, Birth, Death Certificates, and Police Clearance verification." },
              { icon: Building, title: "Commercial Documents", desc: "MOA, Board Resolutions, Commercial Invoices, and Certificates of Origin." },
              { icon: Globe, title: "Embassy Attestation", desc: "Global coordination with embassies and consulates for international legalization." }
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">The Attestation Process Simplified</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Navigating the attestation process can be confusing and time-consuming. We handle the entire multi-step journey, from the issuing country to the UAE Ministry of Foreign Affairs (MoFA).
              </p>
              <div className="space-y-6">
                {[
                  { title: "Notary Public Verification", text: "Initial notarization in the country of origin." },
                  { title: "Foreign Affairs Attestation (Home Country)", text: "Authentication by the issuing country's government." },
                  { title: "UAE Embassy Attestation", text: "Legalization at the UAE embassy or consulate abroad." },
                  { title: "MoFA Attestation (UAE)", text: "Final stamp by the UAE Ministry of Foreign Affairs." }
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
                  <FileSearch className="text-blue-500" /> Tracking & Transparency
                </h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-3 text-sm font-bold uppercase tracking-widest text-slate-400">
                      <span>Document Safety</span>
                      <span className="text-blue-500">100%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-3 text-sm font-bold uppercase tracking-widest text-slate-400">
                      <span>On-Time Delivery</span>
                      <span className="text-blue-500">98%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="w-[98%] h-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="p-6 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                      <p className="text-sm text-slate-300 italic">"Bizlink made my degree attestation incredibly easy. They picked up the document from my home and delivered the fully attested version exactly when promised."</p>
                      <div className="mt-4 font-bold text-white text-xs">— HR Professional, Dubai</div>
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
        title="Ready to Attest Your Documents?" 
        description="Contact our experts today for a fast, secure, and hassle-free document attestation service."
      />
    </>
  );
}
