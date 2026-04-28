import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ReusableCTA from "@/components/ReusableCTA";
import RelatedServices from "@/components/RelatedServices";
import { 
  Clock, 
  CheckCircle2, 
  FileText, 
  ShieldCheck,
  Building2,
  Briefcase,
  AlertCircle,
  FileCheck2
} from "lucide-react";

export default function LicenseRenewalDubai() {
  const steps = [
    { title: "Review", desc: "Check existing license and lease (Ejari) validity.", icon: FileCheck2 },
    { title: "Document Prep", desc: "Gather required documents including Ejari and NOCs.", icon: FileText },
    { title: "Payment", desc: "Generate and pay the renewal voucher.", icon: Building2 },
    { title: "Issuance", desc: "Collect the renewed trade license digitally or in person.", icon: Briefcase }
  ];

  const relatedServices = [
    { title: "Trade License", link: "/trade-license-dubai", icon: Briefcase },
    { title: "Business Setup", link: "/business-setup-dubai", icon: Building2 },
    { title: "PRO Services", link: "/pro-services-dubai", icon: ShieldCheck },
    { title: "Accounting Services", link: "/accounting-services-dubai", icon: FileText }
  ];

  return (
    <>
      <SEO 
        title="Trade License Renewal Dubai - Bizlink" 
        description="Fast and reliable trade license renewal services in Dubai. We handle DED renewals, Free Zone renewals, and Ejari coordination."
      />
      <PageHero 
        title="License Renewal"
        subtitle="Keep your business running smoothly with timely license renewals."
        breadcrumb="License Renewal"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Never Miss a Renewal Deadline</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Operating with an expired license can lead to heavy fines, bank account freezes, and legal complications. Bizlink's renewal experts proactively manage your timeline, ensuring all government fees are paid and documents like Ejari are updated on time.
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8 rounded-r-2xl">
                <div className="flex gap-4">
                  <AlertCircle className="text-amber-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">Avoid Penalties</h4>
                    <p className="text-amber-700 text-sm">Fines for expired licenses in Dubai can range from AED 2,000 to AED 5,000 per month. Let us handle it before it's too late.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "DED License Renewal",
                  "Free Zone License Renewal",
                  "Ejari Coordination",
                  "Partner/Manager Change during Renewal",
                  "Activity Modification",
                  "Third-party Approvals (RTA, Dubai Health, etc.)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-blue-600" size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <step.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Table/List */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Renewal Requirements</h2>
            <p className="text-slate-400">Basic checklist for a smooth renewal process</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-blue-400 border-b border-slate-700 pb-4">Mainland (DED)</h3>
              <ul className="space-y-4">
                {["Current License Copy", "Valid Ejari (Lease Contract)", "Partner's Passport Copies", "Manager's Passport & Visa"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-cyan-400 border-b border-slate-700 pb-4">Free Zone</h3>
              <ul className="space-y-4">
                {["License Renewal Application", "Audit Report (if required)", "Updated Insurance", "Passport Copies of Shareholders"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices services={relatedServices} />
      
      <ReusableCTA 
        title="Is Your License Expiring Soon?" 
        description="Don't wait for the last minute. Get a free quote for your trade license renewal today."
      />
    </>
  );
}
