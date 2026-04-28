import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import TrustSection from "@/components/TrustSection";
import { CheckCircle2, FileSearch, Scale, Building2 } from "lucide-react";

export default function DocumentClearingDubai() {
  const faqs = [
    {
      question: "What is document clearing?",
      answer: "Document clearing involves getting the necessary approvals from government bodies (like the DED, MoHRE, and ICA) for business and legal procedures."
    },
    {
      question: "Which departments do you work with?",
      answer: "We work with all major UAE departments including the Department of Economy and Tourism (DET), Ministry of Labour (MoHRE), Immigration (GDRFA), and Dubai Municipality."
    }
  ];

  return (
    <>
      <SEO 
        title="Document Clearing Dubai | Legal Translation & Attestation | Bizlink"
        description="Professional document clearing services in Dubai. Attestation, legal translation, and government department approvals with 100% accuracy."
      />
      <PageHero 
        title="Document Clearing Services" 
        subtitle="Expert handling of all your corporate and legal documentation needs."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Swift Approvals, Zero Hassle</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We navigate the complexities of UAE government departments so you can focus on growing your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FileSearch, title: "Document Attestation", desc: "MoFA and Embassy attestation for degrees, certificates, and legal papers." },
              { icon: Scale, title: "Legal Translation", desc: "Certified translations for legal and corporate documents into Arabic and other languages." },
              { icon: Building2, title: "Govt Approvals", desc: "Approvals from Dubai Municipality, Civil Defence, and RERA." },
              { icon: CheckCircle2, title: "P.O. Box Setup", desc: "Registration and renewal of corporate and individual P.O. Box services." }
            ].map((service, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                <service.icon className="text-blue-600 mb-6" size={40} />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Outsource Your Document Clearing?</h2>
              <div className="space-y-4">
                {[
                  "Avoid costly delays due to incorrect documentation.",
                  "Stay updated with changing UAE laws and regulations.",
                  "Save time by letting experts handle government visits.",
                  "Ensure 100% confidentiality and data security."
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="text-white" size={14} />
                    </div>
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold mb-6">Our Success Rate</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700">Govt Approvals</span>
                      <span className="text-blue-600 font-bold">100%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-blue-600"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700">Accuracy</span>
                      <span className="text-blue-600 font-bold">99.9%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[99.9%] h-full bg-blue-600"></div>
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
        whatsappMessage="Hi Bizlink, I need help with document clearing services in Dubai."
      />
    </>
  );
}
