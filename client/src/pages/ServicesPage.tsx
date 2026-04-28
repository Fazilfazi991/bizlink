import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import ReusableCTA from "@/components/ReusableCTA";
import { Link } from "wouter";
import { 
  Building2, 
  Globe, 
  FileText, 
  UserCheck, 
  CreditCard, 
  BadgeCheck, 
  Calculator, 
  GanttChartSquare,
  MessageCircle,
  ArrowRight,
  Zap,
  ShieldCheck
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Mainland Formation",
      description: "Setup your business in the Dubai Mainland with 100% ownership and zero restrictions on location.",
      icon: Building2,
      link: "/mainland-company-formation",
      color: "bg-blue-600"
    },
    {
      title: "Free Zone Setup",
      description: "Enjoy 100% tax exemptions and full capital repatriation in UAE's premium Free Zones.",
      icon: Globe,
      link: "/free-zone-company-setup",
      color: "bg-cyan-600"
    },
    {
      title: "Trade License",
      description: "Fast-track assistance with new licenses, renewals, and modifications across all sectors.",
      icon: BadgeCheck,
      link: "/trade-license-dubai",
      color: "bg-indigo-600"
    },
    {
      title: "PRO Services",
      description: "Comprehensive government liaison and document clearing services for your peace of mind.",
      icon: UserCheck,
      link: "/pro-services-dubai",
      color: "bg-blue-800"
    },
    {
      title: "Visa & Emirates ID",
      description: "End-to-end processing for investor, employee, and family visas plus Emirates ID.",
      icon: FileText,
      link: "/visa-services-dubai",
      color: "bg-cyan-700"
    },
    {
      title: "Banking Assistance",
      description: "Strategic guidance to open corporate bank accounts with leading UAE and international banks.",
      icon: CreditCard,
      link: "/bank-account-assistance-dubai",
      color: "bg-slate-700"
    },
    {
      title: "Document Clearing",
      description: "Fast and reliable processing of MoFA attestations, legal translations, and govt stamps.",
      icon: GanttChartSquare,
      link: "/document-clearing-dubai",
      color: "bg-blue-500"
    },
    {
      title: "VAT & Corporate Tax",
      description: "Expert advisory for tax registration, filings, and compliance with the latest UAE tax laws.",
      icon: Calculator,
      link: "/vat-corporate-tax-dubai",
      color: "bg-slate-900"
    }
  ];

  return (
    <>
      <SEO 
        title="Our Services | Business Setup & PRO Solutions | Bizlink" 
        description="Comprehensive business setup and PRO services in Dubai. From Mainland and Free Zone formation to visa services and corporate tax support."
      />
      <PageHero 
        title="Tailored Corporate Solutions"
        subtitle="Bridging the gap between your entrepreneurial vision and a successful UAE enterprise."
      />

      {/* Services Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Expertise for Every Phase of Growth</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">We provide the technical and administrative backbone for companies looking to establish a dominant presence in the Middle East.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow">{service.description}</p>
                
                <div className="space-y-4">
                  <Link href={service.link}>
                    <button className="w-full py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                      Learn More <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <Button variant="ghost" className="w-full text-blue-600 hover:bg-blue-50 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2">
                    <MessageCircle size={16} />
                    Consult on WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust/Metric Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Excellence in Execution</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Our services are built on direct government integration and a deep understanding of UAE corporate law. We don't just facilitate; we advise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Zap, title: "24-Hour Processing", text: "Fast-track document clearing and licensing." },
                  { icon: ShieldCheck, title: "100% Legal Compliance", text: "Zero-risk approach to every application." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="text-blue-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-xs">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800 p-12 rounded-[3rem] border border-slate-700">
              <div className="space-y-10">
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <h5 className="font-bold text-lg">Mainland & Free Zone Mastery</h5>
                    <span className="text-blue-500 font-black text-2xl">99%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div className="w-[99%] h-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <h5 className="font-bold text-lg">PRO & Document Speed</h5>
                    <span className="text-blue-500 font-black text-2xl">100%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReusableCTA 
        title="Need a Custom Expansion Package?" 
        description="Whether you're a solopreneur or a multinational, we tailor our service stack to your specific growth roadmap in the UAE."
      />
    </>
  );
}
