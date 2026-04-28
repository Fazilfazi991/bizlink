import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import { CheckCircle2, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

export default function ProServicesPage() {
  const proFAQs = [
    {
      question: "What is a PRO service?",
      answer: "Public Relations Officer (PRO) services involve handling all government-related documentation, approvals, and legal formalities required by a business in the UAE."
    },
    {
      question: "Why should I outsource my PRO work?",
      answer: "Outsourcing saves you time, reduces the risk of fines due to missed deadlines, and ensures all your documentation is handled by experts who understand the latest UAE regulations."
    }
  ];

  return (
    <>
      <SEO 
        title="PRO Services Dubai | Document Clearing & Govt Approvals | Bizlink"
        description="Reliable PRO services in Dubai. We handle visa processing, trade license renewal, and government approvals for mainland and free zone companies."
      />
      <PageHero 
        title="PRO Services in Dubai" 
        subtitle="Your trusted partner for all government liaison and document clearing needs."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Expert Handling of UAE Government Formalities</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Navigating the administrative landscape of the UAE can be time-consuming. Our PRO team acts as a bridge between your business and government entities like the DED, MoHRE, and Immigration.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Trade License Renewals",
                  "Employee Visa Processing",
                  "Corporate Bank Account Assistance",
                  "Labour & Immigration Cards",
                  "Family Visa Sponsorship",
                  "Document Attestation (MoFA)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 className="text-blue-600 flex-shrink-0" size={18} />
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "100% Accuracy", desc: "Mistake-free document processing." },
                { icon: Zap, title: "Swift Turnaround", desc: "Fastest possible government approvals." },
                { icon: HeartHandshake, title: "Dedicated Support", desc: "Your own account manager." },
                { icon: CheckCircle2, title: "Compliance", desc: "Stay updated with UAE laws." }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <card.icon className="text-blue-600 mb-4" size={32} />
                  <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-500 text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion items={proFAQs} />
      <ReusableCTA 
        whatsappMessage="Hi Bizlink, I need help with PRO services in Dubai."
      />
    </>
  );
}
