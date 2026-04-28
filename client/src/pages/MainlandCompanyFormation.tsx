import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import { CheckCircle2, Globe, Building2, TrendingUp, Clock, FileCheck, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function MainlandCompanyFormation() {
  const mainlandFAQs = [
    {
      question: "Do I still need a UAE national local sponsor?",
      answer: "No. For most commercial and industrial activities, the UAE government now allows 100% foreign ownership of mainland companies, eliminating the requirement for a local sponsor in most sectors."
    },
    {
      question: "What are the primary advantages of a Mainland license over a Free Zone?",
      answer: "A Mainland company allows you to trade directly with the local UAE market and government entities without restrictions. You also have the freedom to choose any office location across the emirate."
    },
    {
      question: "Is there a minimum capital requirement for an LLC?",
      answer: "For most activities, there is no specific minimum capital requirement for an LLC, though shareholders must state the capital amount in the Memorandum of Association (MOA)."
    },
    {
      question: "Can I open multiple branches with a Mainland license?",
      answer: "Yes, Mainland companies can easily open branches in other emirates or even internationally, making it the ideal choice for businesses looking to scale rapidly."
    }
  ];

  const setupProcess = [
    { step: "01", title: "Strategic Planning", desc: "Selecting your legal structure and identifying business activities approved by the DET." },
    { step: "02", title: "Trade Name & Approval", desc: "Reservation of your trade name and obtaining initial approval to begin the legal setup." },
    { step: "03", title: "Office Selection", desc: "Finalizing your physical office space and obtaining the Ejari (tenancy contract) required for the license." },
    { step: "04", title: "Licensing", desc: "Signing the MOA at the notary public and receiving your commercial trade license." }
  ];

  return (
    <>
      <SEO 
        title="Mainland Company Formation Dubai | 100% Ownership LLC | Bizlink"
        description="Establish your mainland company in Dubai with expert guidance. 100% foreign ownership, no local sponsor for most activities, and full market access."
      />
      <PageHero 
        title="Mainland Company Formation" 
        subtitle="Unrestricted market access and 100% ownership in the world's fastest-growing business hub."
      />

      {/* Value Proposition Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                  <Zap size={14} />
                  Complete Market Access
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Empowering Your Local Growth Strategy</h2>
                <p className="text-slate-600 text-lg leading-relaxed mt-6">
                  A Dubai Mainland license, issued by the Department of Economy and Tourism (DET), is the ultimate vehicle for entrepreneurs who want to trade directly within the UAE, bid for government contracts, and establish a physical presence anywhere in the city.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Globe, title: "Global & Local Trade", desc: "No geographical barriers on your business operations." },
                  { icon: Building2, title: "Flexible Location", desc: "Rent office space anywhere in the Dubai mainland." },
                  { icon: TrendingUp, title: "Unlimited Visa Quotas", desc: "Scale your workforce based on your office size." },
                  { icon: ShieldCheck, title: "Government Bidding", desc: "Full eligibility for lucrative govt and semi-govt tenders." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-lg">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-[100px]"></div>
                <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                  <FileCheck className="text-blue-500" size={32} />
                  Setup Requirements
                </h3>
                <div className="space-y-6">
                  {[
                    "Passport copies of all shareholders & directors",
                    "Visa/Entry stamp copy for non-residents",
                    "Emirates ID copy (if applicable)",
                    "3-4 trade name options for approval",
                    "Initial activity details",
                    "Physical office space (Virtual options available)"
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} className="text-blue-500" />
                      </div>
                      <span className="text-slate-300 font-medium">{doc}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">Starting Price</div>
                    <div className="text-4xl font-black">AED 18,500*</div>
                  </div>
                  <Link href="/contact">
                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all flex items-center gap-2 group">
                      Get Detailed Quote
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Streamlined Formation Roadmap</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">Our specialists handle the coordination with government departments, ensuring your license is ready in as little as 5 working days.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {setupProcess.map((s, i) => (
              <div key={i} className="relative p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all group overflow-hidden">
                <span className="text-7xl font-black text-slate-50 absolute -bottom-4 -right-4 leading-none group-hover:text-blue-50 transition-colors">0{i+1}</span>
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-10 shadow-xl shadow-blue-200 group-hover:scale-110 transition-transform">
                  <Clock size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion items={mainlandFAQs} />
      <ReusableCTA 
        title="Ready to Scale Your UAE Presence?" 
        description="Our mainland consultants are ready to handle your license issuance, office setup, and visa processing today."
      />
    </>
  );
}
