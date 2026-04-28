import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import TrustSection from "@/components/TrustSection";
import { CheckCircle2, Calculator, PieChart, ShieldCheck, FileText, BarChart, TrendingUp, Search, Zap, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function AccountingServicesPage() {
  const faqs = [
    {
      question: "Is corporate tax now mandatory for all businesses in the UAE?",
      answer: "Yes. The UAE introduced a federal corporate tax of 9% on taxable profits exceeding AED 375,000. All businesses, including Free Zone entities, must register and file annual tax returns, even if they qualify for a 0% rate."
    },
    {
      question: "What is the threshold for mandatory VAT registration in Dubai?",
      answer: "VAT registration is mandatory if your taxable supplies and imports exceed AED 375,000 per year. You can voluntarily register if your taxable supplies exceed AED 187,500."
    },
    {
      question: "Which accounting software does Bizlink support?",
      answer: "We are authorized partners for major cloud accounting platforms including Zoho Books, Xero, and QuickBooks. We handle the full setup, data migration, and daily management of these systems."
    },
    {
      question: "How does Bizlink handle the Wages Protection System (WPS) for payroll?",
      answer: "Our payroll specialists ensure your monthly salary disbursements are compliant with the UAE's WPS requirements, preventing labor department fines and ensuring smooth employee relations."
    }
  ];

  const valueProps = [
    { icon: BarChart, title: "Management Accounts", desc: "Detailed monthly insights into your cash flow, burn rate, and profit margins." },
    { icon: Search, title: "Audit Coordination", desc: "Full preparation of financial statements for external statutory audits." },
    { icon: TrendingUp, title: "Profit Optimization", desc: "Expert advisory on cost reduction and financial structuring for growth." },
    { icon: ShieldCheck, title: "Total FTA Compliance", desc: "Comprehensive management of your relationship with the Federal Tax Authority." }
  ];

  return (
    <>
      <SEO 
        title="Accounting & Bookkeeping Services Dubai | UAE Tax Experts | Bizlink"
        description="Professional accounting, bookkeeping, and tax services in Dubai. Stay compliant with UAE VAT, Corporate Tax, and IFRS standards with our certified accountants."
      />
      <PageHero 
        title="Accounting & Financial Services" 
        subtitle="Precision financial management for high-growth enterprises in the UAE."
      />

      {/* Authority Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                  <Calculator size={14} />
                  Chartered Accountants & Tax Experts
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Financial Integrity in the New UAE Fiscal Era</h2>
                <p className="text-slate-600 text-lg leading-relaxed mt-6">
                  With the introduction of federal Corporate Tax and the tightening of VAT regulations, maintaining accurate financial records is no longer just a best practice—it's a critical legal shield. Bizlink's certified team ensures your books are audit-ready 365 days a year.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {valueProps.map((item, i) => (
                  <div key={i} className="flex flex-col p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-blue-300 transition-all">
                    <item.icon className="text-blue-600 mb-6" size={32} />
                    <h4 className="font-extrabold text-slate-900 text-lg mb-3 tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-[3.5rem] p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
              <h3 className="text-3xl font-bold mb-12 tracking-tight">Full-Spectrum Financial Management</h3>
              <ul className="space-y-8">
                {[
                  { title: "Daily Bookkeeping", desc: "Categorization of every transaction into cloud-based software." },
                  { title: "VAT Filing & Refund Claims", desc: "Optimizing your VAT position and securing refunds from the FTA." },
                  { title: "Corporate Tax Registration", desc: "Expert handling of your annual tax return and legal tax planning." },
                  { title: "WPS Payroll Processing", desc: "Full management of employee salaries via the legal portal." },
                  { title: "Financial Reporting", desc: "Delivery of IFRS-compliant Balance Sheets and P&L statements." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-5 group">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-blue-900/50 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="text-white" size={16} />
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-xl mb-1 tracking-tight">{item.title}</h5>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-10 border-t border-white/10">
                <Link href="/contact">
                  <button className="flex items-center gap-3 text-blue-400 font-bold hover:text-white transition-colors group">
                    Book a Financial Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid / Comparison */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">The Bizlink Financial Edge</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Why the UAE's fastest-growing companies trust us with their financial health.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: ShieldCheck, title: "FTA Certified Agents", desc: "Our accountants are certified by the Federal Tax Authority, ensuring total legal compliance." },
              { icon: Zap, title: "Real-Time Dashboard", desc: "Access your financial health 24/7 via our secure, mobile-friendly cloud integration." },
              { icon: FileText, title: "Fixed Monthly Retainers", desc: "Predictable, transparent pricing that scales with your transaction volume—no hidden surprises." }
            ].map((card, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] border border-slate-200 hover:shadow-2xl transition-all group hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <card.icon size={36} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-5 tracking-tight">{card.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />
      <FAQAccordion items={faqs} />
      <ReusableCTA 
        title="Ready for Audit-Ready Accounts?" 
        description="Stop worrying about tax penalties. Speak with our certified accountants today for a free financial audit of your business."
      />
    </>
  );
}
