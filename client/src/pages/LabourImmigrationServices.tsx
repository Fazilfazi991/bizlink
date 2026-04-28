import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ReusableCTA from "@/components/ReusableCTA";
import RelatedServices from "@/components/RelatedServices";
import FAQAccordion from "@/components/FAQAccordion";
import { 
  Users2, 
  CheckCircle2, 
  FileText, 
  Clock, 
  ShieldCheck,
  Building2,
  Briefcase,
  FileCheck,
  UserPlus,
  Scale,
  Zap,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";

export default function LabourImmigrationServices() {
  const services = [
    { title: "Labour Card Filing", desc: "Expert issuance and renewal of MOHRE labour cards for employees, ensuring zero late fees.", icon: FileCheck },
    { title: "Quota Management", desc: "Strategic handling of company quota requests to scale your workforce without administrative delays.", icon: Users2 },
    { title: "Legal Offer Letters", desc: "Drafting standardized contracts and offer letters in strict alignment with the latest UAE Labour Law.", icon: FileText },
    { title: "Fine Resolution", desc: "Professional representation for the reduction or waiver of labour and immigration administrative fines.", icon: ShieldCheck }
  ];

  const relatedServices = [
    { title: "Emirates ID", link: "/emirates-id-services-dubai", icon: Briefcase },
    { title: "Visa Services", link: "/visa-services-dubai", icon: Users2 },
    { title: "PRO Services", link: "/pro-services-dubai", icon: Building2 },
    { title: "License Renewal", link: "/license-renewal-dubai", icon: Clock }
  ];

  const immigrationFAQs = [
    {
      question: "What is the role of MOHRE in the employment process?",
      answer: "The Ministry of Human Resources and Emiratisation (MOHRE) regulates the private sector labor market. They issue work permits, manage labor contracts, and ensure that both employer and employee rights are protected under UAE law."
    },
    {
      question: "How long is a UAE work permit valid?",
      answer: "A standard UAE work permit is typically valid for two years. It must be renewed before expiration to avoid heavy fines and ensure the legal status of the employee."
    },
    {
      question: "What is a 'quota' and how do I increase it?",
      answer: "A quota is the number of employee visas a company is allowed to sponsor, determined by the size of the office and the business activity. To increase it, you must apply to MOHRE with justification, such as a new office lease or project contracts."
    },
    {
      question: "Can Bizlink help with labour dispute resolution?",
      answer: "While we are not a law firm, our PROs have deep experience in mediating administrative issues with MOHRE and can guide you through the process of filing or responding to labor claims."
    }
  ];

  return (
    <>
      <SEO 
        title="Labour & Immigration Services Dubai | MOHRE & GDRFA Experts | Bizlink" 
        description="Comprehensive MOHRE and Immigration services in Dubai. We manage labour cards, contracts, quotas, and government liaison for your workforce with technical precision."
      />
      <PageHero 
        title="Workforce & Immigration Compliance"
        subtitle="Expert government liaison to secure and scale your human capital in the UAE."
      />

      {/* Authority Overview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                  <Users2 size={14} />
                  Workforce Governance
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">Navigating the UAE's Evolving Labour Ecosystem</h2>
                <p className="text-slate-600 text-lg leading-relaxed mt-6">
                  Maintaining a legal workforce in Dubai requires mastery of two major government bodies: MOHRE and GDRFA. From the initial offer letter to final visa cancellation, every step must be documented with legal precision to avoid crippling fines and legal disputes. Bizlink acts as your outsourced HR and government relations department.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Establishment Card Setup",
                  "MOHRE Contract Drafting",
                  "Work Permit (New/Renew)",
                  "Employee Cancellations",
                  "E-Signature Card Support",
                  "Absconding Case Support"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
              <div className="absolute -inset-10 bg-blue-600/5 blur-[100px] rounded-full"></div>
              {services.map((s, i) => (
                <div key={i} className="relative z-10 bg-white/80 backdrop-blur-sm p-10 rounded-[3rem] border border-slate-200 hover:shadow-2xl transition-all group hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <s.icon size={32} />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{s.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Legal Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">The Bizlink Liaison Advantage</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">We eliminate the risk and friction of government administrative tasks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: Scale, title: "Federal Law Alignment", desc: "Direct adherence to the latest UAE Federal Labour Law and its recent ministerial amendments." },
              { icon: Zap, title: "Integrated Portals", desc: "Direct, high-priority access to MOHRE and GDRFA digital systems for rapid file processing." },
              { icon: UserPlus, title: "Scalable Quotas", desc: "Expert strategy for increasing your visa headcount through proper office space and project filing." }
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

      <FAQAccordion items={immigrationFAQs} />
      <RelatedServices services={relatedServices} />
      
      <ReusableCTA 
        title="Scale Your Workforce with Confidence" 
        description="Don't let government red tape slow your growth. Contact our labor specialists today for a seamless immigration and MOHRE experience."
      />
    </>
  );
}
