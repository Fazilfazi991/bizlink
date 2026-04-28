import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import { CheckCircle2, ShieldCheck, Clock, FileText } from "lucide-react";

export default function TradeLicenseDubai() {
  const faqs = [
    {
      question: "What is a trade license in Dubai?",
      answer: "A trade license is a legal document issued by the Department of Economy and Tourism (DET) or Free Zone authorities that allows you to carry out specific business activities in the UAE."
    },
    {
      question: "How much does a trade license cost in Dubai?",
      answer: "The cost varies depending on the type of license (Commercial, Industrial, Professional), the activity, and whether it's Mainland or Free Zone. Typically, it starts from AED 12,000 for specific Free Zone packages."
    },
    {
      question: "How long does it take to get a license?",
      answer: "With our expert support, an Instant License can be issued in as little as 24-48 hours. Standard licenses usually take 3-5 working days."
    }
  ];

  const processSteps = [
    { title: "Select Activity", description: "Choose the business activities you want to perform." },
    { title: "Legal Form", description: "Decide whether it's a Sole Establishment, LLC, or Branch." },
    { title: "Trade Name", description: "Register and get approval for your company name." },
    { title: "Initial Approval", description: "Get the green light from the relevant authorities." },
    { title: "License Issuance", description: "Submit documents and receive your trade license." }
  ];

  return (
    <>
      <SEO 
        title="Trade License Dubai | Company License UAE | Bizlink"
        description="Get your trade license in Dubai quickly and easily. Commercial, Professional, and Industrial licenses for Mainland and Free Zone businesses."
      />
      <PageHero 
        title="Trade License Dubai" 
        subtitle="Quick and compliant business licensing for all industries in the UAE."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Securing Your Legal Foundation in Dubai</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Operating a business in Dubai requires a valid trade license. At Bizlink, we handle the entire application process, ensuring your license is correctly categorized and approved by the Department of Economy and Tourism (DET) or relevant Free Zone authorities.
              </p>
              <div className="space-y-4">
                {[
                  "Commercial Licenses (General Trading)",
                  "Professional Licenses (Service-based)",
                  "Industrial Licenses (Manufacturing)",
                  "Tourism and E-commerce Licenses"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-600" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">License Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: "100% Legal", desc: "Full compliance with UAE law." },
                  { icon: Clock, title: "Fast Track", desc: "Instant license options available." },
                  { icon: FileText, title: "Activity Range", desc: "Over 2,000+ business activities." },
                  { icon: CheckCircle2, title: "Bank Account", desc: "Easier corporate banking access." }
                ].map((benefit, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                    <benefit.icon className="text-blue-600 mb-3" size={24} />
                    <h4 className="font-bold text-slate-900 mb-1">{benefit.title}</h4>
                    <p className="text-slate-500 text-xs">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Licensing Process</h2>
            <p className="text-slate-400">Simplified 5-step journey to your UAE Trade License.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative text-center group">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold relative z-10">
                  {i + 1}
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-[2px] bg-slate-800 z-0"></div>
                )}
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion items={faqs} />
      <ReusableCTA 
        whatsappMessage="Hi Bizlink, I need help with trade license services in Dubai."
      />
    </>
  );
}
