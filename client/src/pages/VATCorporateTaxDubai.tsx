import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ReusableCTA from "@/components/ReusableCTA";
import RelatedServices from "@/components/RelatedServices";
import FAQAccordion from "@/components/FAQAccordion";
import { 
  PieChart, 
  CheckCircle2, 
  FileText, 
  ShieldCheck,
  Building2,
  AlertCircle,
  BarChart3,
  Scale,
  Clock,
  Zap,
  Lock,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";

export default function VATCorporateTaxDubai() {
  const services = [
    { title: "VAT Registration", desc: "Mandatory registration for companies exceeding the AED 375k threshold. We manage the entire FTA filing.", icon: FileText },
    { title: "Corporate Tax Setup", desc: "Ensuring 100% compliance with the new 9% UAE Corporate Tax laws for both Mainland and Free Zones.", icon: Building2 },
    { title: "Quarterly Return Filing", desc: "Accurate tax submissions with full reconciliation, protecting you from audit discrepancies.", icon: BarChart3 },
    { title: "Tax Optimization", desc: "Strategic advice on tax grouping and legal structuring to minimize your tax liability legally.", icon: Scale }
  ];

  const relatedServices = [
    { title: "Accounting Services", link: "/accounting-services-dubai", icon: PieChart },
    { title: "Mainland Setup", link: "/mainland-company-formation-dubai", icon: Building2 },
    { title: "PRO Services", link: "/pro-services-dubai", icon: ShieldCheck },
    { title: "License Renewal", link: "/license-renewal-dubai", icon: Clock }
  ];

  const taxFAQs = [
    {
      question: "Who exactly needs to register for the new Corporate Tax in the UAE?",
      answer: "Every UAE business, including those in Free Zones, must register for Corporate Tax. While certain Free Zone companies may qualify for a 0% rate, registration is still a mandatory legal requirement for all."
    },
    {
      question: "What is the threshold for mandatory VAT registration?",
      answer: "Businesses with taxable supplies and imports exceeding AED 375,000 in the previous 12 months or expected to exceed it in the next 30 days must register for VAT. Voluntary registration is available at AED 187,500."
    },
    {
      question: "What are the penalties for late tax registration?",
      answer: "Late registration for Corporate Tax or VAT can result in significant administrative penalties, starting from AED 10,000 and increasing for continued non-compliance."
    },
    {
      question: "How can Bizlink help with an FTA tax audit?",
      answer: "Our certified tax agents provide full representation during FTA audits, ensuring all documentation is presented correctly and your interests are protected throughout the process."
    }
  ];

  return (
    <>
      <SEO 
        title="VAT & Corporate Tax Dubai | FTA Registration & Filing Experts | Bizlink" 
        description="Comprehensive tax compliance in the UAE. We handle VAT registration, quarterly filing, and the new Corporate Tax requirements for businesses. Stay compliant, avoid fines."
      />
      <PageHero 
        title="Tax & Compliance Solutions"
        subtitle="Precision-engineered tax management to protect your business in the UAE's new fiscal landscape."
      />

      {/* Main Content / Why Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                  <ShieldCheck size={14} />
                  FTA Certified Expertise
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Mastering UAE Tax Compliance</h2>
                <p className="text-slate-600 text-lg leading-relaxed mt-6">
                  The UAE tax landscape has evolved rapidly. With the 2023 introduction of Corporate Tax, compliance is no longer just a checkbox—it's a critical component of your corporate strategy. Bizlink provides the technical precision required to navigate these regulations without risk.
                </p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-[2rem] shadow-sm">
                <div className="flex gap-5">
                  <AlertCircle className="text-red-600 shrink-0" size={28} />
                  <div>
                    <h4 className="font-bold text-red-900 text-lg mb-2">Corporate Tax Deadline Alert</h4>
                    <p className="text-red-700 text-sm leading-relaxed font-medium">Late registration for Corporate Tax now carries an immediate AED 10,000 fine. Ensure your business is registered before the deadline to avoid enforcement action.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Tax Residency Certificates",
                  "VAT Refund Management",
                  "Tax Agent Representation",
                  "Corporate Tax Grouping",
                  "Transfer Pricing (TP) Docs",
                  "ESR Compliance Filing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-blue-300 transition-all">
                    <CheckCircle2 className="text-blue-600 shrink-0" size={18} />
                    <span className="text-slate-700 font-bold text-sm tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
              <div className="absolute -inset-10 bg-blue-600/5 blur-[100px] rounded-full"></div>
              {services.map((s, i) => (
                <div key={i} className="relative z-10 bg-white/80 backdrop-blur-sm p-10 rounded-[3rem] border border-slate-200 hover:shadow-2xl transition-all group hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <s.icon size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{s.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{s.desc}</p>
                  <Link href="/contact">
                    <button className="text-blue-600 font-bold text-sm flex items-center gap-2 group/link">
                      Learn More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Methodology Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Bizlink Tax Edge</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Precision, punctuality, and proactive protection for your corporate assets.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: Zap, title: "Zero Penalty Record", desc: "Our proactive filing engine ensures every deadline is met with 100% accuracy, guaranteed." },
              { icon: Lock, title: "Enterprise Security", desc: "Your sensitive financial data is protected with military-grade encryption and strict confidentiality." },
              { icon: Scale, title: "Full FTA Representation", desc: "We act as your official shield during government audits, managing all queries on your behalf." }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-10 group-hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-black/20">
                  <item.icon className="text-blue-500 group-hover:text-white transition-colors" size={44} />
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion items={taxFAQs} />
      <RelatedServices services={relatedServices} />
      
      <ReusableCTA 
        title="Protect Your Business from Tax Penalties" 
        description="Don't wait for an FTA audit. Speak with our certified tax agents today for a comprehensive review of your compliance status."
      />
    </>
  );
}
