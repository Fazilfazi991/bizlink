import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ReusableCTA from "@/components/ReusableCTA";
import RelatedServices from "@/components/RelatedServices";
import FAQAccordion from "@/components/FAQAccordion";
import { 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  CreditCard,
  PieChart,
  ArrowRight,
  Landmark,
  ShieldAlert,
  Zap,
  Globe,
  Clock
} from "lucide-react";
import { Link } from "wouter";

export default function BankAccountAssistanceDubai() {
  const banks = [
    { name: "Emirates NBD", type: "Local Leader", desc: "Digital-first banking with the UAE's widest network and advanced corporate tools." },
    { name: "Mashreq Bank", type: "Business Specialist", desc: "Excellent neo-banking options (Mashreq NeoBiz) tailored for SMEs and startups." },
    { name: "ADCB", type: "Corporate Focus", desc: "Highly stable and supportive for established companies and large-scale enterprises." },
    { name: "Wio Bank", type: "Digital Neo-Bank", desc: "Fast-track approval for new startups with a fully digital application and 0-balance options." }
  ];

  const relatedServices = [
    { title: "Business Setup", link: "/business-setup-dubai", icon: Building2 },
    { title: "Trade License", link: "/trade-license-dubai", icon: FileText },
    { title: "VAT & Tax", link: "/vat-corporate-tax-dubai", icon: PieChart },
    { title: "PRO Services", link: "/pro-services-dubai", icon: ShieldCheck }
  ];

  const bankFAQs = [
    {
      question: "Is it difficult to open a corporate bank account in Dubai?",
      answer: "While UAE banks have strict KYC and AML regulations, opening an account is manageable with the right documentation. Bizlink pre-screens your profile to ensure you meet the specific requirements of each bank, significantly increasing your approval odds."
    },
    {
      question: "Can I open a bank account if my company is in a Free Zone?",
      answer: "Yes, Free Zone companies can open corporate accounts in the UAE. However, some banks may have specific requirements regarding the type of license or the presence of a physical office."
    },
    {
      question: "What is the minimum balance required for a corporate account?",
      answer: "Minimum balance requirements vary by bank. Digital neo-banks like Wio often offer zero-balance accounts, while traditional banks may require anywhere from AED 25,000 to AED 200,000 depending on the account type."
    },
    {
      question: "How long does the account opening process take?",
      answer: "With digital banks, accounts can be active in 48-72 hours. Traditional banks typically take 2 to 4 weeks for a full compliance review and IBAN issuance."
    }
  ];

  return (
    <>
      <SEO 
        title="Business Bank Account Assistance Dubai | Corporate Banking UAE | Bizlink" 
        description="Professional assistance for opening corporate bank accounts in Dubai. We handle KYC documentation, bank selection, and application management for high approval rates."
      />
      <PageHero 
        title="Banking & Financial Setup"
        subtitle="Bridging the gap between your new enterprise and the UAE's premium financial institutions."
      />

      {/* Authority Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                  <Landmark size={14} />
                  Strategic Banking Network
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Navigating the World's Most Rigorous Banking KYC</h2>
                <p className="text-slate-600 text-lg leading-relaxed mt-6">
                  Opening a corporate bank account in Dubai is often the final and most complex hurdle of business setup. With strict global anti-money laundering (AML) protocols, even small errors in your application can lead to immediate rejection. Bizlink acts as your professional advocate, ensuring your business profile meets every banking criteria before submission.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Zap, title: "Priority Channeling", desc: "Direct access to senior business banking relationship managers." },
                  { icon: ShieldCheck, title: "KYC Pre-Screening", desc: "Exhaustive review of shareholder profiles to ensure 100% compliance." },
                  { icon: Globe, title: "Multi-Currency Sets", desc: "Guidance on USD, EUR, and GBP account structures for global trade." },
                  { icon: CreditCard, title: "Neo-Bank Access", desc: "Expertise in fast-track digital banking for startups and freelancers." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-blue-300 transition-all">
                    <item.icon className="text-blue-600 mb-6" size={32} />
                    <h4 className="font-extrabold text-slate-900 text-lg mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
              <div className="absolute -inset-10 bg-blue-600/5 blur-[100px] rounded-full"></div>
              {banks.map((bank, i) => (
                <div key={i} className="relative z-10 p-10 bg-white rounded-[3rem] border border-slate-200 hover:shadow-2xl transition-all group hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-xl group-hover:bg-blue-600 transition-colors">
                      <Landmark size={28} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-xl tracking-tight">{bank.name}</h4>
                  </div>
                  <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-6 inline-block uppercase tracking-widest">{bank.type}</span>
                  <p className="text-slate-500 text-sm leading-relaxed">{bank.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Checklist & Technicals */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">The Compliance Checklist</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">Preparation is the key to banking success in the UAE. We help you structure these essentials for a flawless submission.</p>
              <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-3xl flex gap-5">
                <ShieldAlert className="text-blue-500 shrink-0" size={32} />
                <p className="text-sm text-blue-100 font-medium leading-relaxed">
                  <span className="block font-bold text-white text-base mb-1">Critical Insight:</span>
                  Most traditional banks now require a physical office lease (Ejari) and evidence of business activity to approve corporate accounts.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white/5 backdrop-blur-md p-12 rounded-[3.5rem] border border-white/10 shadow-2xl">
                <h4 className="text-2xl font-bold mb-8 flex items-center gap-4">
                  <Building2 className="text-blue-500" /> Corporate Pack
                </h4>
                <ul className="space-y-6">
                  {["Valid UAE Trade License", "Fully Attested MOA", "Certificate of Incorporation", "Detailed Business Forecast"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-300 font-medium">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-[10px]">
                        <CheckCircle2 size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-12 rounded-[3.5rem] border border-white/10 shadow-2xl">
                <h4 className="text-2xl font-bold mb-8 flex items-center gap-4">
                  <CreditCard className="text-blue-500" /> Shareholder Pack
                </h4>
                <ul className="space-y-6">
                  {["Original Emirates ID", "Latest Entry Stamp / Visa", "6 Months Personal Statements", "Global Proof of Residence"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-300 font-medium">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-[10px]">
                        <CheckCircle2 size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Pipeline */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Path to Approval</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">We don't just submit applications; we proactively manage the relationship with the bank.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-14 left-0 w-full h-px bg-slate-100 z-0"></div>
            {[
              { step: "01", title: "Bank Matching", desc: "We select the institution that aligns with your specific risk profile and activity." },
              { step: "02", title: "Compliance Vetting", desc: "Every document is audited against current bank-specific KYC protocols." },
              { step: "03", title: "Priority Filing", desc: "Applications are submitted via our direct senior management channels." },
              { step: "04", title: "IBAN Issuance", desc: "Persistent follow-up until your active account and cards are delivered." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 group text-center">
                <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mx-auto mb-8 font-black text-slate-200 group-hover:border-blue-600 group-hover:text-blue-600 transition-all shadow-sm">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion items={bankFAQs} />
      <RelatedServices services={relatedServices} />
      
      <ReusableCTA 
        title="Secure Your UAE Banking Today" 
        description="Don't risk a permanent rejection. Let our banking specialists review your documentation and connect you with the right bankers."
      />
    </>
  );
}
