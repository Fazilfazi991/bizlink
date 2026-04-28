import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  HelpCircle, 
  Building, 
  Globe2, 
  Ship,
  ArrowRight
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BusinessSetupDubai() {
  const comparison = [
    {
      title: "Mainland",
      icon: Building,
      desc: "Perfect for local market access and large-scale operations.",
      features: ["100% Ownership", "No location limits", "Government contracts allowed", "Unrestricted recruitment"],
      color: "bg-blue-50 border-blue-100",
      iconColor: "text-blue-600 bg-blue-100"
    },
    {
      title: "Free Zone",
      icon: Globe2,
      desc: "Ideal for startups, consultants, and international trade.",
      features: ["100% Tax exemption", "Full capital repatriation", "No customs duty", "Quick & easy setup"],
      color: "bg-cyan-50 border-cyan-100",
      iconColor: "text-cyan-600 bg-cyan-100"
    },
    {
      title: "Offshore",
      icon: Ship,
      desc: "Best for asset protection and international holding.",
      features: ["Highest privacy", "Zero local presence", "International banking", "Global asset holding"],
      color: "bg-slate-50 border-slate-200",
      iconColor: "text-slate-600 bg-slate-200"
    }
  ];

  const steps = [
    { title: "Select Activity", desc: "Choose the commercial activities for your business license." },
    { title: "Register Name", desc: "Reserve your unique trade name with the DED or Free Zone." },
    { title: "Get Approvals", desc: "Obtain initial and final approvals from relevant departments." },
    { title: "Visa Processing", desc: "Complete medical tests and Emirates ID for residency." }
  ];

  return (
    <>
      <SEO 
        title="Business Setup in Dubai" 
        description="Comprehensive guide to starting a business in Dubai. Compare Mainland vs Free Zone vs Offshore setups."
      />
      <PageHero 
        title="The Ultimate Guide to Business Setup in Dubai"
        subtitle="Navigate the UAE's business landscape with confidence and expert support."
        breadcrumb="Business Setup Dubai"
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Start Your Journey in the Business Hub of the World</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dubai offers a dynamic and world-class business environment. Whether you are a solo entrepreneur or a global corporation, the UAE provides the perfect platform for growth, innovation, and tax efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comparison.map((item, i) => (
              <div key={i} className={`p-8 rounded-3xl border ${item.color} flex flex-col h-full`}>
                <div className={`w-12 h-12 rounded-2xl ${item.iconColor} flex items-center justify-center mb-6`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 mb-8">{item.desc}</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {item.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 size={18} className="text-blue-600" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-full py-6">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">What documents do you need?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Passport copy of owners",
                  "Passport size photos",
                  "Visit/Tourist visa copy",
                  "No Objection (NOC) if employed",
                  "Trade name options",
                  "Business plan (optional)"
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-sm font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 p-10 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Ready to start?</h3>
              <p className="text-white/70 mb-8 leading-relaxed">Our experts will handle all the paperwork for you. Submit your documents and we'll take care of the rest.</p>
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 rounded-full py-7 flex items-center justify-center gap-2">
                Consult an Expert <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center justify-center gap-3">
              <HelpCircle className="text-blue-600" /> Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg">How long does it take to setup a business?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Most setups are completed within 3-7 working days, depending on the activity and jurisdiction. Mainland licenses can sometimes be issued in 24 hours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg">Do I need a local partner for Mainland setup?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                As per new UAE regulations, most commercial and industrial activities allow 100% foreign ownership. A local agent might still be required for administrative purposes (LSA).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-lg">What is the cost of setup?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Costs vary significantly based on activity, number of visas, and office space requirements. Free Zone packages start as low as AED 12,000.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
