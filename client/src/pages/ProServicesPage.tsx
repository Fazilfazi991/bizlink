import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { 
  FileCheck, 
  UserCheck, 
  CreditCard, 
  ShieldCheck, 
  Timer,
  CheckCircle,
  HelpCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProServicesPage() {
  const services = [
    { title: "Visa Processing", desc: "Employment, Investor, Partner, and Family visa processing." },
    { title: "Emirates ID", desc: "Assistance with application and biometrics scheduling." },
    { title: "Labour Card", desc: "Work permit and labour card issuance and renewals." },
    { title: "Immigration Typing", desc: "Accurate typing and submission of all immigration forms." },
    { title: "Trade License Renewal", desc: "Timely renewal of licenses to avoid penalties." },
    { title: "Document Clearing", desc: "Legalization and attestation of corporate documents." },
    { title: "Government Approvals", desc: "Liaison with DED, Municipality, Civil Defence, etc." },
    { title: "Attestation Support", desc: "MOFA and embassy attestation for all documents." }
  ];

  return (
    <>
      <SEO 
        title="PRO Services in Dubai" 
        description="Professional PRO services and document clearing in Dubai. Visa processing, license renewal, and government liaison."
      />
      <PageHero 
        title="Premium PRO Services in Dubai"
        subtitle="Your bridge to government departments. We handle the paperwork, you handle the growth."
        breadcrumb="PRO Services"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What are PRO Services?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                PRO (Public Relations Officer) services involve managing all government-related documentation and approvals. In the UAE, every business needs a dedicated PRO to handle visas, licenses, and legal requirements.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Outsourcing your PRO needs to Bizlink ensures that your business remains 100% compliant while saving you time and operational costs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full py-7 px-10">
                  Enquire Now
                </Button>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Key Benefits of Outsourcing</h3>
              <div className="space-y-4">
                {[
                  { icon: Timer, title: "Time Saving", desc: "Skip the long queues and complex forms." },
                  { icon: ShieldCheck, title: "Compliance", desc: "Avoid fines with proactive renewal tracking." },
                  { icon: CreditCard, title: "Cost Effective", desc: "No need for a full-time in-house PRO salary." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <item.icon className="text-blue-600 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Comprehensive PRO Solutions</h2>
            <p className="text-slate-600">All the government liaison services you need under one roof.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow group">
                <CheckCircle className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={24} />
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">PRO Services FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg">Why should I outsource PRO services?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Outsourcing is more cost-effective than hiring a full-time PRO. You get access to a team of experts who are always up-to-date with the latest government regulations and changes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg">How do you track visa and license renewals?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                We use advanced tracking systems to monitor all your document expiry dates. We notify you well in advance to ensure timely renewals and zero penalties.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience Hassle-Free PRO Services</h2>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full font-bold px-10 py-7">
            Get a Free PRO Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
