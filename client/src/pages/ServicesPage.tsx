import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Globe, 
  FileText, 
  UserCheck, 
  CreditCard, 
  BadgeCheck, 
  Calculator, 
  GanttChartSquare,
  MessageCircle
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Mainland Company Formation",
      description: "Setup your business in the Dubai Mainland with 100% ownership and zero restrictions on location.",
      icon: Building2,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Free Zone Company Setup",
      description: "Enjoy 100% tax exemptions and full capital repatriation in UAE's premium Free Zones.",
      icon: Globe,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Trade License Services",
      description: "Assistance with new licenses, renewals, and modifications across all sectors.",
      icon: BadgeCheck,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "PRO Services",
      description: "Comprehensive government liaison and document clearing services for your peace of mind.",
      icon: UserCheck,
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Visa & Emirates ID Services",
      description: "End-to-end processing for investor, employee, and family visas plus Emirates ID.",
      icon: FileText,
      color: "from-cyan-600 to-cyan-700"
    },
    {
      title: "Bank Account Assistance",
      description: "Strategic guidance to open corporate bank accounts with leading UAE and international banks.",
      icon: CreditCard,
      color: "from-slate-700 to-slate-800"
    },
    {
      title: "Document Clearing",
      description: "Fast and reliable processing of all government and legal documents.",
      icon: GanttChartSquare,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "VAT & Corporate Tax Support",
      description: "Expert advisory for tax registration, filings, and compliance with UAE tax laws.",
      icon: Calculator,
      color: "from-slate-800 to-slate-900"
    }
  ];

  return (
    <>
      <SEO 
        title="Our Services" 
        description="Explore our premium business setup and PRO services in Dubai, including Mainland, Free Zone, and Document Clearing."
      />
      <PageHero 
        title="Comprehensive Business Solutions"
        subtitle="Expert guidance for every stage of your business journey in the UAE."
        breadcrumb="Services"
      />

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div 
                  key={i} 
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">{service.description}</p>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-full text-xs font-bold py-5">
                      Get a Quote
                    </Button>
                    <Button variant="outline" className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 rounded-full text-xs font-bold py-5 flex items-center justify-center gap-2">
                      <MessageCircle size={14} />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-slate-600 mb-10">Every business is unique. Our experts can tailor a service package specifically for your requirements.</p>
          <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full font-bold px-10 py-7">
            Schedule a Free Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
