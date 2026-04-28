import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ReusableCTA from "@/components/ReusableCTA";
import RelatedServices from "@/components/RelatedServices";
import { 
  CreditCard, 
  CheckCircle2, 
  FileText, 
  Clock, 
  ShieldCheck,
  Building2,
  Users2,
  ArrowRight
} from "lucide-react";

export default function EmiratesIDServices() {
  const features = [
    { title: "Fast Processing", desc: "Expedited application handling for quick ID issuance.", icon: Clock },
    { title: "Typing Support", desc: "Expert assistance with all government typing requirements.", icon: FileText },
    { title: "Full Compliance", desc: "Ensuring all documents meet the latest ICP standards.", icon: ShieldCheck },
    { title: "Status Tracking", desc: "Real-time updates on your application progress.", icon: CheckCircle2 }
  ];

  const relatedServices = [
    { title: "Visa Services", link: "/visa-services-dubai", icon: CreditCard },
    { title: "Labour & Immigration", link: "/labour-immigration-services-dubai", icon: Users2 },
    { title: "Medical Tests", link: "/document-clearing-dubai", icon: FileText },
    { title: "PRO Services", link: "/pro-services-dubai", icon: Building2 }
  ];

  const faqs = [
    { q: "How long does it take to get an Emirates ID?", a: "Typically, it takes 7-10 working days after the medical test and biometrics are completed." },
    { q: "Can I track my application status?", a: "Yes, you can track it via the ICP website or we can provide regular updates." },
    { q: "What is the validity of an Emirates ID?", a: "The validity usually matches your residency visa (2 or 3 years)." }
  ];

  return (
    <>
      <SEO 
        title="Emirates ID Services Dubai - Bizlink" 
        description="Fast and reliable Emirates ID application and renewal services in Dubai. We handle typing, documentation, and coordination with ICP."
      />
      <PageHero 
        title="Emirates ID Services"
        subtitle="Hassle-free application and renewal for residents and investors."
        breadcrumb="Emirates ID"
      />

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">UAE's Essential Identity Card Made Simple</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                The Emirates ID is a mandatory requirement for all UAE residents. At Bizlink, we streamline the entire process, from initial typing to final delivery, ensuring you don't face any delays or complications.
              </p>
              <div className="space-y-4">
                {["New Application Support", "Renewal Services", "Lost Card Replacement", "Data Modification"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-blue-600" size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <f.icon className="text-blue-600 mb-4" size={32} />
                  <h4 className="font-bold text-slate-900 mb-2">{f.title}</h4>
                  <p className="text-slate-500 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-slate-400">Our streamlined 4-step process for your Emirates ID</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Document Submission", desc: "Send us your passport and visa copies." },
              { step: "02", title: "Form Typing", desc: "We complete the ICP application form." },
              { step: "03", title: "Biometrics", desc: "We schedule your biometric appointment." },
              { step: "04", title: "ID Delivery", desc: "Collect your card from our office or delivery." }
            ].map((step, i) => (
              <div key={i} className="relative p-8 bg-slate-800/50 rounded-2xl border border-slate-700">
                <span className="text-5xl font-black text-blue-500/20 absolute top-4 right-6">{step.step}</span>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices services={relatedServices} />
      
      <ReusableCTA 
        title="Need to Apply for Emirates ID?" 
        description="Contact our experts today for fast and reliable typing and processing services."
      />
    </>
  );
}
