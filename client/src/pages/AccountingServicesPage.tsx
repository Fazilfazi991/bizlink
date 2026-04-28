import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import TrustSection from "@/components/TrustSection";
import { CheckCircle2, Calculator, PieChart, ShieldCheck, FileText } from "lucide-react";

export default function AccountingServicesPage() {
  const faqs = [
    {
      question: "Is corporate tax mandatory in the UAE?",
      answer: "Yes, the UAE introduced a federal corporate tax of 9% on taxable profits exceeding AED 375,000, effective from June 2023."
    },
    {
      question: "Do I need to register for VAT?",
      answer: "VAT registration is mandatory if your taxable supplies and imports exceed AED 375,000 per year. Voluntary registration is available at AED 187,500."
    }
  ];

  return (
    <>
      <SEO 
        title="Accounting & Tax Services Dubai | VAT & Corporate Tax | Bizlink"
        description="Professional accounting and tax services in Dubai. Stay compliant with UAE VAT and Corporate Tax laws with our expert advisory."
      />
      <PageHero 
        title="Accounting & Tax Services" 
        subtitle="Ensuring financial transparency and total compliance for your UAE business."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Financial Compliance in the New UAE Tax Era</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                With the introduction of Corporate Tax and VAT, maintaining accurate financial records is no longer optional. Our certified accountants ensure your business stays compliant while optimizing your tax position.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Calculator, text: "Bookkeeping & Financials" },
                  { icon: PieChart, text: "VAT Registration & Filing" },
                  { icon: ShieldCheck, text: "Corporate Tax Advisory" },
                  { icon: FileText, text: "Audit Coordination" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <item.icon className="text-blue-600 flex-shrink-0" size={20} />
                    <span className="text-slate-700 font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xl font-bold mb-6">Our Accounting Packages Include:</h3>
              <ul className="space-y-4">
                {[
                  "Monthly/Quarterly Management Accounts",
                  "VAT Return Preparation & Submission",
                  "FTA Audit Representation",
                  "Corporate Tax Registration & Returns",
                  "Compliance with IFRS Standards"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />
      <FAQAccordion items={faqs} />
      <ReusableCTA 
        whatsappMessage="Hi Bizlink, I need help with accounting and tax services in Dubai."
      />
    </>
  );
}
