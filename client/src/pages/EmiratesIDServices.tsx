import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ReusableCTA from "@/components/ReusableCTA";
import RelatedServices from "@/components/RelatedServices";
import FAQAccordion from "@/components/FAQAccordion";
import { 
  CreditCard, 
  CheckCircle2, 
  FileText, 
  Clock, 
  ShieldCheck,
  Building2,
  Users2,
  ArrowRight,
  Fingerprint,
  Smartphone
} from "lucide-react";
import { Link } from "wouter";

export default function EmiratesIDServices() {
  const features = [
    { title: "Priority Processing", desc: "Direct integration with government portals for the fastest possible card issuance.", icon: Clock },
    { title: "Expert Form Typing", desc: "Certified typing services to ensure 100% accuracy and avoid rejection.", icon: FileText },
    { title: "ICP Compliance", desc: "Rigorous vetting of all biometric and documentation requirements.", icon: ShieldCheck },
    { title: "Real-time Tracking", desc: "Automated status updates from submission to the final delivery.", icon: CheckCircle2 }
  ];

  const relatedServices = [
    { title: "Visa Services", link: "/visa-services-dubai", icon: CreditCard },
    { title: "Labour & Immigration", link: "/labour-immigration-services-dubai", icon: Users2 },
    { title: "Medical Tests", link: "/document-clearing-dubai", icon: FileText },
    { title: "PRO Services", link: "/pro-services-dubai", icon: Building2 }
  ];

  const eIDFAQs = [
    {
      question: "What is the standard timeline for receiving my Emirates ID?",
      answer: "Typically, the physical card is delivered within 7 to 10 working days after the biometric appointment and medical test are successfully completed and cleared."
    },
    {
      question: "Can I use a digital version of my Emirates ID while waiting for the card?",
      answer: "Yes, you can use the UAE Pass or the ICA UAE Smart app to access a digital copy of your Emirates ID, which is legally recognized for most government and private transactions."
    },
    {
      question: "Do children require an Emirates ID in the UAE?",
      answer: "Yes, the Emirates ID is mandatory for all residents regardless of age. For children under 15, biometrics (fingerprints) are generally not required, but the application must still be processed."
    },
    {
      question: "What happens if I lose my Emirates ID?",
      answer: "You must report the loss to the police and apply for a replacement within 7 days. Bizlink handles the full replacement process, including the necessary government notifications."
    }
  ];

  return (
    <>
      <SEO 
        title="Emirates ID Services Dubai | Fast Tracking & Renewal | Bizlink" 
        description="Comprehensive Emirates ID assistance in Dubai. We handle ICP typing, biometric appointments, renewals, and replacements with speed and precision."
      />
      <PageHero 
        title="Emirates ID Services"
        subtitle="Simplifying the UAE's mandatory identification process for residents and investors."
      />

      {/* Authority Overview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                  <Fingerprint size={14} />
                  Official Identity Support
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">Essential Identity Management Made Simple</h2>
                <p className="text-slate-600 text-lg leading-relaxed mt-6">
                  The Emirates ID is the cornerstone of your residency in the UAE. From opening bank accounts to accessing government healthcare, this card is non-negotiable. Bizlink streamlines the complex government typing and scheduling, ensuring a smooth path to your digital and physical identity.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {["ICP New Application Filing", "Residency Renewal Support", "Lost/Damaged Card Recovery", "Data & Information Updates"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-300 transition-all group">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-slate-700 font-bold text-sm tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
              <div className="absolute -inset-10 bg-blue-600/5 blur-[100px] rounded-full"></div>
              {features.map((f, i) => (
                <div key={i} className="relative z-10 bg-white/80 backdrop-blur-sm p-10 rounded-[3rem] border border-slate-200 hover:shadow-2xl transition-all group hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <f.icon size={32} />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{f.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Roadmap */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">The 4-Step ID Pipeline</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Precision timing and expert filing to get your card delivered faster.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Portal Registration", desc: "We upload your passport and residency details to the ICP portal." },
              { step: "02", title: "ICP Typing", desc: "Certified typing of your official identity application forms." },
              { step: "03", title: "Biometric Sync", desc: "Scheduling and coordination of your fingerprint appointment." },
              { step: "04", title: "Activation", desc: "Issuance of your digital ID followed by courier delivery." }
            ].map((step, i) => (
              <div key={i} className="group">
                <div className="text-6xl font-black text-white/5 mb-8 group-hover:text-blue-500/20 transition-colors">{step.step}</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Promo / Info */}
      <section className="py-24 bg-blue-600 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[4rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest">
                <Smartphone size={14} />
                Smart Identity
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Digital-First Identification</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Modern residency in the UAE is digital. We help you set up the <strong>UAE Pass</strong> and the <strong>ICP Smart App</strong>, giving you immediate access to your digital Emirates ID even before the physical card arrives.
              </p>
              <Link href="/contact">
                <button className="flex items-center gap-3 text-blue-600 font-bold hover:gap-5 transition-all text-lg">
                  Learn About Digital ID Setup <ArrowRight size={24} />
                </button>
              </Link>
            </div>
            <div className="w-full lg:w-96 aspect-square bg-slate-50 rounded-[3rem] border border-slate-100 flex items-center justify-center p-12">
              <div className="w-full h-full border-4 border-dashed border-slate-200 rounded-[2rem] flex items-center justify-center">
                <Smartphone className="text-slate-300" size={100} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion items={eIDFAQs} />
      <RelatedServices services={relatedServices} />
      
      <ReusableCTA 
        title="Secure Your UAE Identity Today" 
        description="Don't let typing errors delay your residency. Contact our ID specialists for fast and reliable processing."
      />
    </>
  );
}
