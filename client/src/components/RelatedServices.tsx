import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface Service {
  title: string;
  link: string;
  icon: any;
}

interface RelatedServicesProps {
  services: Service[];
  title?: string;
}

export default function RelatedServices({ services, title = "Related Services" }: RelatedServicesProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <Link key={i} href={service.link}>
              <a className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <div className="flex items-center text-blue-600 text-sm font-semibold gap-2">
                  Learn More <ArrowRight size={16} />
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
