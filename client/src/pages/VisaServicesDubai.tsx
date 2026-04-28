import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import { CheckCircle2, UserCheck, Users, Briefcase } from "lucide-react";

export default function VisaServicesDubai() {
  const faqs = [
    {
      question: "What is the UAE Golden Visa?",
      answer: "The Golden Visa is a long-term residence visa (5 or 10 years) for investors, entrepreneurs, scientists, and outstanding students, allowing them to live, work, or study in the UAE without a local sponsor."
    },
    {
      question: "Can I sponsor my family with an Investor Visa?",
      answer: "Yes, once your investor visa is processed, you can sponsor your spouse, children, and even parents for their residency visas."
    },
    {
      question: "How long does the visa process take?",
      answer: "A standard residency visa process takes about 5-10 working days, including the medical test and Emirates ID biometrics."
    }
  ];

  return (
    <>
      <SEO 
        title="Visa Services Dubai | Residency & Golden Visa UAE | Bizlink"
        description="Reliable visa services in Dubai. Investor visas, Golden Visas, family sponsorship, and employment visas with expert processing support."
      />
      <PageHero 
        title="Visa Services in Dubai" 
        subtitle="End-to-end residency solutions for investors, families, and employees."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Briefcase, 
                title: "Investor / Partner Visas", 
                desc: "Ideal for business owners and shareholders of UAE companies. Valid for 2 years (renewable)." 
              },
              { 
                icon: UserCheck, 
                title: "UAE Golden Visa", 
                desc: "10-year residency for investors, property owners, and specialized talents. No sponsor required." 
              },
              { 
                icon: Users, 
                title: "Family Sponsorship", 
                desc: "Bring your family to the UAE. We handle spouse, child, and domestic worker visa applications." 
              }
            ].map((visa, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
                  <visa.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{visa.title}</h3>
                <p className="text-slate-600 mb-6">{visa.desc}</p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold group cursor-pointer">
                  Learn More <CheckCircle2 size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-200 overflow-hidden relative shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">The Residency Process Made Easy</h2>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Entry Permit", desc: "Issuance of initial entry permit to enter the UAE." },
                    { step: "02", title: "Medical Fitness", desc: "Assistance with health screening at approved centers." },
                    { step: "03", title: "Emirates ID", desc: "Biometric appointment and ID card registration." },
                    { step: "04", title: "Visa Stamping", desc: "Final residence visa approval and digital issuance." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="text-2xl font-bold text-blue-600/20">{item.step}</div>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-slate-100 rounded-3xl flex items-center justify-center">
                  <span className="text-slate-400 font-medium">Residency Flow Visualization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion items={faqs} />
      <ReusableCTA 
        whatsappMessage="Hi Bizlink, I need help with visa and Emirates ID services in UAE."
      />
    </>
  );
}
