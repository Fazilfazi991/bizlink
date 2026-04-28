import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  CheckCircle, 
  FileText, 
  ArrowRight,
  TrendingUp,
  MapPin,
  ShieldCheck
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MainlandCompanyFormation() {
  const benefits = [
    { icon: Globe2, title: "100% Ownership", desc: "Most activities now allow 100% foreign ownership." },
    { icon: MapPin, title: "No Location Limits", desc: "Operate anywhere in the UAE and internationally." },
    { icon: TrendingUp, title: "Government Contracts", desc: "Eligible to bid for lucrative government projects." },
    { icon: ShieldCheck, title: "Multiple Visas", desc: "Scale your team with unlimited visa applications." }
  ];

  return (
    <>
      <SEO 
        title="Mainland Company Formation Dubai" 
        description="Complete guide to setting up a mainland company in Dubai. Benefits, requirements, and step-by-step process."
      />
      <PageHero 
        title="Mainland Company Formation in Dubai"
        subtitle="Unleash your business potential with a DED license and trade anywhere in the UAE."
        breadcrumb="Mainland Setup"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What is a Mainland Company?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                A Mainland company is an onshore entity licensed by the Department of Economy and Tourism (DET) in Dubai. It offers the maximum flexibility for businesses to trade within the local UAE market and expand globally without any geographical restrictions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                With recent changes in UAE laws, entrepreneurs can now enjoy 100% ownership of their mainland business for over 1,000 commercial and industrial activities.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full py-7 px-10">
                Get Your Mainland License
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <benefit.icon className="text-blue-600 mb-4" size={28} />
                  <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 md:p-16 rounded-3xl border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Required Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Personal Docs", items: ["Passport copy", "Residence visa copy", "Emirates ID copy"] },
                { title: "Company Docs", items: ["Trade name options", "MOA (legalized)", "Initial Approval"] },
                { title: "Office Docs", items: ["Tenancy contract", "Ejari certificate", "Location map"] }
              ].map((group, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                    <FileText size={20} /> {group.title}
                  </h3>
                  <ul className="space-y-3">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle size={16} className="text-slate-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Mainland Setup FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg">Do I need an office for a mainland license?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Yes, a physical office or a virtual desk (Instant License) is required for a mainland company formation. An Ejari (attested tenancy contract) must be submitted for the license issuance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg">What is an Instant License?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                The Dubai Instant License allows entrepreneurs to setup a company in 5 minutes without an office space for the first year. This is available for select legal forms and activities.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Start Your Mainland Business Today</h2>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-slate-100 rounded-full font-bold px-10 py-7">
            Consult our Mainland Experts
          </Button>
        </div>
      </section>
    </>
  );
}

// Fixed import for Globe2 (was used in benefits but not imported correctly)
import { Globe2 } from "lucide-react";
