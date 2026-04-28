import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ReusableCTA from "@/components/ReusableCTA";
import RelatedServices from "@/components/RelatedServices";
import { 
  Users2, 
  CheckCircle2, 
  FileText, 
  Clock, 
  ShieldCheck,
  Building2,
  Briefcase,
  FileCheck
} from "lucide-react";

export default function LabourImmigrationServices() {
  const services = [
    { title: "Labour Cards", desc: "Issuance and renewal of MOHRE labour cards.", icon: FileCheck },
    { title: "Quota Applications", desc: "Expert handling of company quota requests.", icon: Users2 },
    { title: "Offer Letters", desc: "Standardized contract and offer letter preparation.", icon: FileText },
    { title: "Fine Resolution", desc: "Assistance with labour and immigration fine reductions.", icon: ShieldCheck }
  ];

  const relatedServices = [
    { title: "Emirates ID", link: "/emirates-id-services-dubai", icon: Briefcase },
    { title: "Visa Services", link: "/visa-services-dubai", icon: Users2 },
    { title: "PRO Services", link: "/pro-services-dubai", icon: Building2 },
    { title: "License Renewal", link: "/license-renewal-dubai", icon: Clock }
  ];

  return (
    <>
      <SEO 
        title="Labour & Immigration Services Dubai - Bizlink" 
        description="Comprehensive MOHRE and Immigration services in Dubai. We handle labour cards, contracts, quotas, and government liaison."
      />
      <PageHero 
        title="Labour & Immigration"
        subtitle="Expert government liaison for all your workforce requirements."
        breadcrumb="Labour & Immigration"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Navigating UAE Labour Laws with Ease</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Managing a workforce in Dubai requires strict adherence to Ministry of Human Resources and Emiratisation (MOHRE) and General Directorate of Residency and Foreigners Affairs (GDRFA) regulations. Bizlink provides expert support to keep your business compliant and your employees' documentation up to date.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Establishment Card Updates",
                  "Labour Contract Typing",
                  "Work Permit Processing",
                  "Employee Cancellation",
                  "E-Signature Card Support",
                  "Absconding Cases Handling"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
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

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">Why Businesses Trust Bizlink</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Legal Expertise", desc: "Deep understanding of UAE Federal Labour Law and latest updates." },
              { title: "Fast Turnaround", desc: "Direct access to government portals for rapid processing." },
              { title: "Full Compliance", desc: "Zero-risk approach to documentation and filing." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices services={relatedServices} />
      
      <ReusableCTA 
        title="Stay Compliant with UAE Labour Laws" 
        description="Let our experts handle your MOHRE and Immigration paperwork while you focus on growing your business."
      />
    </>
  );
}
