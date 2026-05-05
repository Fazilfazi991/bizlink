import { Building2, Calculator, FileText, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";

export default function Services() {
  const services = [
    {
      title: "Business Setup",
      description: "Expert guidance for mainland, freezone, and offshore company formations across the UAE.",
      features: ["Mainland & Freezone", "Offshore Company", "Department Approvals"],
      icon: Building2,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Accounting & Tax",
      description: "Stay compliant with UAE tax laws while maintaining crystal clear financial records.",
      features: ["VAT Compliance", "Corporate Tax", "Auditing Services"],
      icon: Calculator,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "PRO Solutions",
      description: "Accelerated document clearing and government liaison services for all your business needs.",
      features: ["License Renewals", "Legal Translations", "Quota & Labor Cards"],
      icon: FileText,
      color: "from-emerald-500 to-cyan-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
              Our Expertise
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Comprehensive Business Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide a wide range of services to simplify your business operations in the UAE market.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} animation="fade-up" delay={index * 0.1}>
                <div
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    <Icon size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-1">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Link
                    href={
                      service.title === "Business Setup" 
                        ? "/business-setup-dubai" 
                        : service.title === "Accounting & Tax"
                        ? "/accounting-services-dubai"
                        : "/pro-services-dubai"
                    }
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group/link cursor-pointer"
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
