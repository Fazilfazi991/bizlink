import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ReusableCTA from "@/components/ReusableCTA";
import RelatedServices from "@/components/RelatedServices";
import { 
  PieChart, 
  CheckCircle2, 
  FileText, 
  ShieldCheck,
  Building2,
  Briefcase,
  AlertCircle,
  BarChart3,
  Scale
} from "lucide-react";

export default function VATCorporateTaxDubai() {
  const services = [
    { title: "VAT Registration", desc: "Mandatory registration for companies exceeding the threshold.", icon: FileText },
    { title: "Corporate Tax Registration", desc: "Ensuring compliance with the new UAE Corporate Tax laws.", icon: Building2 },
    { title: "VAT Return Filing", desc: "Accurate quarterly or monthly tax submissions.", icon: BarChart3 },
    { title: "Tax Consultancy", desc: "Expert advice on tax planning and structure.", icon: Scale }
  ];

  const relatedServices = [
    { title: "Accounting Services", link: "/accounting-services-dubai", icon: PieChart },
    { title: "Business Setup", link: "/business-setup-dubai", icon: Building2 },
    { title: "PRO Services", link: "/pro-services-dubai", icon: ShieldCheck },
    { title: "License Renewal", link: "/license-renewal-dubai", icon: Clock }
  ];

  return (
    <>
      <SEO 
        title="VAT & Corporate Tax Dubai - Bizlink" 
        description="Comprehensive tax compliance services in Dubai. We handle VAT registration, return filing, and the new Corporate Tax requirements."
      />
      <PageHero 
        title="VAT & Corporate Tax"
        subtitle="Stay compliant with UAE's evolving tax landscape."
        breadcrumb="VAT & Corporate Tax"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Expert Tax Solutions for UAE Businesses</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                With the introduction of VAT in 2018 and Corporate Tax in 2023, the UAE tax environment has become more structured. Bizlink provides end-to-end tax support to ensure your business remains compliant while optimizing your tax position.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-2xl">
                <div className="flex gap-4">
                  <AlertCircle className="text-blue-600 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">Corporate Tax Deadline</h4>
                    <p className="text-blue-700 text-sm">Most businesses must register for Corporate Tax by May 2024. Avoid penalties and register with us today.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "FTA Registration Support",
                  "Monthly/Quarterly Filing",
                  "Tax Audit Assistance",
                  "De-registration Services",
                  "Voluntary Disclosures",
                  "Corporate Tax Planning"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                    <CheckCircle2 className="text-blue-600 shrink-0" size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                    <s.icon className="text-blue-600" size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{s.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedServices services={relatedServices} />
      
      <ReusableCTA 
        title="Worry-Free Tax Compliance" 
        description="Our FTA-certified tax experts are here to handle your registration and filings accurately and on time."
      />
    </>
  );
}
