import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ReusableCTA from "@/components/ReusableCTA";
import RelatedServices from "@/components/RelatedServices";
import { 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  CreditCard,
  PieChart,
  ArrowRight,
  Landmark
} from "lucide-react";

export default function BankAccountAssistanceDubai() {
  const banks = [
    { name: "Emirates NBD", type: "Local Leader", desc: "Digital-first banking with wide network." },
    { name: "Mashreq Bank", type: "Business Specialist", desc: "Excellent neo-banking options for SMEs." },
    { name: "ADCB", type: "Corporate Focus", desc: "Strong support for established companies." },
    { name: "Wio / Rakbank", type: "Digital Business", desc: "Fast approval for new startups." }
  ];

  const relatedServices = [
    { title: "Business Setup", link: "/business-setup-dubai", icon: Building2 },
    { title: "Trade License", link: "/trade-license-dubai", icon: FileText },
    { title: "VAT & Tax", link: "/vat-corporate-tax-dubai", icon: PieChart },
    { title: "PRO Services", link: "/pro-services-dubai", icon: ShieldCheck }
  ];

  return (
    <>
      <SEO 
        title="Business Bank Account Assistance Dubai - Bizlink" 
        description="Professional assistance for opening corporate bank accounts in Dubai. We help with documentation, bank selection, and application processing."
      />
      <PageHero 
        title="Bank Account Assistance"
        subtitle="Smooth corporate banking setup for your new or existing business."
        breadcrumb="Bank Account Assistance"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Simplifying Corporate Banking in the UAE</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Opening a corporate bank account in Dubai can be a complex process due to strict KYC (Know Your Customer) and compliance requirements. Bizlink acts as your bridge, connecting you with the right bankers and ensuring your documentation is perfect before submission.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Personalized Bank Selection",
                  "KYC Document Preparation",
                  "Business Profile Drafting",
                  "Bank Interview Coordination",
                  "Zero-Balance Account Options",
                  "Multi-Currency Account Support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm md:text-base">
                    <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {banks.map((bank, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <Landmark className="text-blue-600" size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900">{bank.name}</h4>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded mb-3 inline-block uppercase tracking-wider">{bank.type}</span>
                  <p className="text-slate-500 text-sm">{bank.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-12 bg-blue-600 text-white flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Document Checklist</h2>
                <p className="text-blue-100">Ensure you have these ready for a smooth application process.</p>
              </div>
              <div className="col-span-2 p-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Building2 className="text-blue-600" size={18} /> Company Docs
                  </h4>
                  <ul className="space-y-3 text-slate-600 text-sm">
                    <li>• Trade License</li>
                    <li>• MOA / AOA</li>
                    <li>• Certificate of Incorporation</li>
                    <li>• Office Tenancy / Ejari</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CreditCard className="text-blue-600" size={18} /> Shareholder Docs
                  </h4>
                  <ul className="space-y-3 text-slate-600 text-sm">
                    <li>• Passport & Visa Copy</li>
                    <li>• Emirates ID</li>
                    <li>• Last 6 Months Bank Statement</li>
                    <li>• Utility Bill (Proof of Address)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices services={relatedServices} />
      
      <ReusableCTA 
        title="Ready to Open Your Business Account?" 
        description="Our experts will guide you through the bank selection and application process to ensure a successful outcome."
      />
    </>
  );
}
