import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ReusableCTA from "@/components/ReusableCTA";
import RelatedServices from "@/components/RelatedServices";
import FAQAccordion from "@/components/FAQAccordion";
import { 
  Clock, 
  CheckCircle2, 
  FileText, 
  ShieldCheck,
  Building2,
  Briefcase,
  AlertCircle,
  FileCheck2,
  Zap,
  Calendar,
  CreditCard,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";

export default function LicenseRenewalDubai() {
  const steps = [
    { title: "Compliance Review", desc: "Our experts audit your current license status, Ejari validity, and any pending government fines.", icon: FileCheck2 },
    { title: "Strategic Document Prep", desc: "We synchronize your Ejari, third-party NOCs, and insurance policies for immediate approval.", icon: FileText },
    { title: "Priority Voucher Handling", desc: "We generate DED/Free Zone vouchers and manage the secure payment of all government fees.", icon: CreditCard },
    { title: "Digital Issuance", desc: "Your renewed trade license is issued and delivered digitally, typically within 24 hours.", icon: Briefcase }
  ];

  const relatedServices = [
    { title: "Trade License", link: "/trade-license-dubai", icon: Briefcase },
    { title: "Business Setup", link: "/business-setup-dubai", icon: Building2 },
    { title: "PRO Services", link: "/pro-services-dubai", icon: ShieldCheck },
    { title: "Accounting Services", link: "/accounting-services-dubai", icon: FileText }
  ];

  const renewalFAQs = [
    {
      question: "Is there a grace period for trade license renewal in Dubai?",
      answer: "The Department of Economy and Tourism (DET) generally provides a grace period, but it's vital to renew before the expiry date to avoid administrative fines, which can be significant and accrue monthly."
    },
    {
      question: "What happens if I don't have a valid Ejari for my renewal?",
      answer: "In most cases, a valid Ejari (tenancy contract) is mandatory for mainland license renewal. However, certain licenses or Free Zones may offer 'Virtual Office' solutions. We can help you secure the necessary approvals if your office status has changed."
    },
    {
      question: "Can I change my business activities during the renewal process?",
      answer: "Yes, renewal is the perfect time to add, remove, or modify your business activities. Bizlink can manage these amendments concurrently with your renewal to save time and government fees."
    },
    {
      question: "Will an expired license affect my corporate bank account?",
      answer: "Absolutely. UAE banks are highly sensitive to compliance. An expired trade license will typically result in the immediate freezing of your corporate bank account until a renewed license is provided."
    }
  ];

  return (
    <>
      <SEO 
        title="Trade License Renewal Dubai | Fast Tracking & Compliance | Bizlink" 
        description="Fast and reliable trade license renewal services in Dubai. We handle DED and Free Zone renewals, Ejari coordination, and activity amendments with a 24-hour turnaround."
      />
      <PageHero 
        title="Trade License Renewal"
        subtitle="Ensuring operational continuity through proactive and precise regulatory management."
      />

      {/* Main Content */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                  <Clock size={14} />
                  Operational Continuity
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">Safeguard Your Business Status</h2>
                <p className="text-slate-600 text-lg leading-relaxed mt-6">
                  Operating with an expired license in the UAE is a critical risk. Beyond heavy administrative fines, an expired status triggers automatic visa blocks and bank account freezes. Bizlink provides a streamlined, hands-off renewal service that eliminates these risks and keeps you operational.
                </p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-[2rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="flex gap-5 relative z-10">
                  <AlertCircle className="text-red-600 shrink-0" size={28} />
                  <div>
                    <h4 className="font-black text-red-900 mb-2 tracking-tight uppercase text-xs">Critical Fine Alert</h4>
                    <p className="text-red-700 text-sm leading-relaxed font-medium">Fines for expired licenses start immediately and can exceed AED 5,000. Avoid penalties with our express 24-hour renewal track.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "DED Mainland Renewals",
                  "Free Zone Licensing",
                  "Ejari Certificate Updates",
                  "MOA & AOA Amendments",
                  "Partner Entry/Exit filing",
                  "Activity Modification"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-300 transition-all group">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-slate-700 font-bold text-sm tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6 relative">
              <div className="absolute -inset-10 bg-blue-600/5 blur-[100px] rounded-full"></div>
              {steps.map((step, i) => (
                <div key={i} className="relative z-10 flex gap-8 p-10 bg-white/80 backdrop-blur-sm rounded-[3rem] border border-slate-200 group hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-[1.25rem] flex items-center justify-center shrink-0 shadow-xl shadow-blue-200">
                    <step.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Matrix */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">The Renewal Blueprint</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Standard requirements for a seamless 24-hour turnaround.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-lg">DED</div>
                <h3 className="text-3xl font-black tracking-tight">Mainland Track</h3>
              </div>
              <ul className="space-y-6">
                {["Valid Ejari (Attested Lease)", "Existing Trade License Copy", "NOC from Authorities (if regulated)", "Manager's Passport & Visa Copy"].map((item, i) => (
                  <li key={i} className="flex items-center gap-5 text-slate-300 font-bold group">
                    <div className="w-6 h-6 rounded-full border border-blue-500 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Zap size={12} className="text-blue-500 group-hover:text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-14 h-14 bg-cyan-600 rounded-2xl flex items-center justify-center text-white font-black text-lg">FZ</div>
                <h3 className="text-3xl font-black tracking-tight">Free Zone Track</h3>
              </div>
              <ul className="space-y-6">
                {["Free Zone Renewal Portal Filing", "Annual Audit Report (where required)", "Updated Professional Insurance", "Board Resolution for Renewal"].map((item, i) => (
                  <li key={i} className="flex items-center gap-5 text-slate-300 font-bold group">
                    <div className="w-6 h-6 rounded-full border border-cyan-500 flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                      <Zap size={12} className="text-cyan-500 group-hover:text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proactive Management Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-24 h-24 bg-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-blue-200">
            <Calendar className="text-white" size={44} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Automated Compliance Monitoring</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-12">
            When you renew with Bizlink, you're automatically enrolled in our <strong>Proprietary Compliance Matrix</strong>. We provide proactive notifications 60 days before your next expiry, ensuring you never face a late fee or an operational block again.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center gap-3 text-blue-600 font-black text-lg hover:gap-6 transition-all">
              Enroll in Our Monitoring Program <ArrowRight size={24} />
            </button>
          </Link>
        </div>
      </section>

      <FAQAccordion items={renewalFAQs} />
      <RelatedServices services={relatedServices} />
      
      <ReusableCTA 
        title="Is Your License Expiring Soon?" 
        description="Don't wait for the bank to freeze your account. Contact our express renewal team for an instant quote and 24-hour turnaround."
      />
    </>
  );
}
