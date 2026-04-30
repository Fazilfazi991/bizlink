import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import TrustSection from "@/components/TrustSection";
import { CheckCircle2, ShieldCheck, Globe, Building, Lock, Briefcase, Landmark, FileCheck } from "lucide-react";

export default function OffshoreCompanySetup() {
  const faqs = [
    {
      question: "Can an Offshore company operate within the UAE?",
      answer: "No, offshore companies are generally not permitted to carry out business activities within the UAE market. They are designed for international trade, holding companies, and asset protection outside the UAE."
    },
    {
      question: "Can I get a residency visa with an Offshore company?",
      answer: "No, offshore companies do not provide residency visas for shareholders or employees. If you require a visa, a Free Zone or Mainland company is necessary."
    },
    {
      question: "Can an Offshore company open a bank account in Dubai?",
      answer: "Yes, an offshore company registered in the UAE can open a multi-currency corporate bank account in Dubai or internationally."
    },
    {
      question: "Is physical office space required?",
      answer: "No physical office space is required. An offshore company uses the registered address of its registered agent (like Bizlink)."
    }
  ];

  return (
    <>
      <SEO 
        title="Offshore Company Setup UAE | Asset Protection & Holdings | Bizlink"
        description="Set up an offshore company in the UAE for 100% tax exemption, asset protection, and global trade. Fast incorporation with corporate bank account assistance."
      />
      <PageHero 
        title="Offshore Company Setup" 
        subtitle="The ultimate vehicle for global asset protection, international trade, and tax-efficient corporate structuring."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6">
              <ShieldCheck size={16} />
              Secure Jurisdiction
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Protect & Grow Your Global Wealth</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">UAE offshore companies offer a secure, highly confidential, and zero-tax environment for international business operations and asset holding.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lock, title: "Asset Protection", desc: "Safeguard personal and corporate wealth from future liabilities and litigation." },
              { icon: Landmark, title: "Holding Company", desc: "Hold shares, intellectual property, or real estate (in designated areas) securely." },
              { icon: Globe, title: "Global Trade", desc: "Conduct international invoicing and business operations with zero corporate tax." },
              { icon: Briefcase, title: "Bank Accounts", desc: "Access premium corporate banking facilities in the UAE and worldwide." }
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Key Benefits of UAE Offshore</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                The UAE is a fully compliant ("white-listed") jurisdiction, offering the perfect blend of international reputation and offshore benefits.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Zero Taxes", text: "100% exemption from corporate tax, personal tax, and VAT." },
                  { title: "Full Ownership", text: "100% foreign ownership with no local sponsor required." },
                  { title: "High Confidentiality", text: "Details of directors and shareholders are not kept on a public registry." },
                  { title: "No Audit Required", text: "Most offshore jurisdictions in the UAE do not require annual audit submissions." }
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
                  <FileCheck className="text-blue-500" /> Popular Jurisdictions
                </h3>
                <div className="space-y-6">
                  <div className="p-6 bg-slate-700/50 rounded-2xl border border-slate-600">
                    <h4 className="font-bold text-lg text-white mb-2">JAFZA Offshore</h4>
                    <p className="text-sm text-slate-400">The only offshore company permitted to directly own property in Dubai. Highly prestigious.</p>
                  </div>
                  <div className="p-6 bg-slate-700/50 rounded-2xl border border-slate-600">
                    <h4 className="font-bold text-lg text-white mb-2">RAK ICC</h4>
                    <p className="text-sm text-slate-400">Cost-effective, rapid incorporation, and excellent for international asset holding.</p>
                  </div>
                  <div className="p-6 bg-slate-700/50 rounded-2xl border border-slate-600">
                    <h4 className="font-bold text-lg text-white mb-2">Ajman Offshore</h4>
                    <p className="text-sm text-slate-400">One of the fastest and most affordable options for global trading structures.</p>
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
        title="Ready to Secure Your Assets?" 
        description="Speak with our offshore specialists to determine the best jurisdiction for your wealth management and corporate goals."
      />
    </>
  );
}
