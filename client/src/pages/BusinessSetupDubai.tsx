import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import TrustSection from "@/components/TrustSection";
import { Building2, Globe, ShieldCheck, CheckCircle2, ArrowRight, Zap, Target, Users, MapPin, Briefcase } from "lucide-react";
import { Link } from "wouter";

export default function BusinessSetupDubai() {
  const setupFAQs = [
    {
      question: "Can I truly own 100% of my company in the UAE Mainland?",
      answer: "Yes, following the 2021 amendments to the UAE Commercial Companies Law, foreign investors can now own 100% of their mainland companies for over 2,000 commercial and industrial activities, without the need for a UAE National partner."
    },
    {
      question: "What is the primary difference between Mainland and Free Zone?",
      answer: "Mainland companies (DET) can trade anywhere in the UAE and internationally without restrictions. Free Zone companies are generally restricted to trading within their specific zone and internationally, requiring a distributor or agent for mainland sales."
    },
    {
      question: "Do I need a physical office to start a business in Dubai?",
      answer: "While Mainland companies typically require a physical office with an Ejari (tenancy contract), many Free Zones offer 'Virtual Office' or 'Flexi-Desk' options that satisfy legal requirements for license issuance at a lower cost."
    },
    {
      question: "What are the hidden costs of business setup in Dubai?",
      answer: "At Bizlink, we believe in transparency. Common costs include government fees (DET), name reservation, initial approval, MOA notarization, office rent, and visa processing. We provide a detailed breakdown upfront to avoid surprises."
    }
  ];

  const setupOptions = [
    {
      title: "Mainland Setup",
      icon: Globe,
      link: "/mainland-company-formation-dubai",
      desc: "The ultimate corporate structure for businesses targeting the local UAE market and government projects.",
      features: ["Unlimited local trading", "100% foreign ownership", "No currency restrictions", "Unlimited visa eligibility"]
    },
    {
      title: "Free Zone Setup",
      icon: Building2,
      link: "/free-zone-company-setup-dubai",
      desc: "The most cost-effective and tax-efficient gateway for international trade and service providers.",
      features: ["100% tax exemption", "Fast-track processing", "World-class infrastructure", "Simplified customs setup"]
    },
    {
      title: "Offshore Setup",
      icon: ShieldCheck,
      link: "/services",
      desc: "Designed specifically for asset protection, holding companies, and global tax planning.",
      features: ["Asset protection", "Zero corporate tax", "High confidentiality", "International banking access"]
    }
  ];

  return (
    <>
      <SEO 
        title="Business Setup Dubai | Company Formation & Licensing Experts | Bizlink"
        description="Comprehensive business setup services in Dubai. Expert guidance on Mainland, Free Zone, and Offshore company formation with 100% ownership support. Start your UAE journey today."
      />
      <PageHero 
        title="Business Setup Ecosystem" 
        subtitle="The definitive guide and gateway to establishing your corporate presence in the UAE."
      />

      {/* Strategic Options Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <MapPin size={14} />
              Strategic Jurisdictions
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Select Your Jurisdictional Blueprint</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">We analyze your business model to recommend the most scalable, legally sound, and cost-effective structure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {setupOptions.map((option, i) => (
              <div key={i} className="flex flex-col h-full p-12 bg-slate-50 rounded-[3.5rem] border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-1 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors"></div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg shadow-slate-200/50">
                  <option.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{option.title}</h3>
                <p className="text-slate-500 text-sm mb-10 leading-relaxed min-h-[3rem]">{option.desc}</p>
                <ul className="space-y-5 mb-12 mt-auto">
                  {option.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-4 text-slate-700 font-bold text-sm tracking-tight">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <CheckCircle2 size={14} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={option.link}>
                  <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-3 group/btn shadow-xl shadow-slate-200">
                    Get Started <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dubai Authority Section */}
      <section className="py-24 bg-slate-50 overflow-hidden relative border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-sm border border-slate-200">
                  <Briefcase size={14} />
                  Global Business Hub
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">Why Smart Investors Choose Dubai</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Dubai is more than just a city; it's a global accelerator. As the gateway to the emerging markets of Asia, Africa, and the Middle East, it offers a pro-growth legal framework and world-class logistics that no other hub can match.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Zap, title: "Velocity of Setup", text: "Go from idea to active trade license in as little as 48 hours." },
                  { icon: Target, title: "Operational Ease", text: "100% digital government portals for all corporate services." },
                  { icon: Users, title: "Global Talent Pool", text: "Simplified visa processing for a multi-national workforce." },
                  { icon: ShieldCheck, title: "Economic Stability", text: "Currency pegged to the USD and stable regulatory outlook." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <item.icon size={26} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-16 text-center">
                  <div className="space-y-4 mb-12">
                    <div className="text-7xl font-black text-white tracking-tighter">100%</div>
                    <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs">Foreign Ownership</div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-7xl font-black text-white tracking-tighter">0%</div>
                    <div className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs">Personal Income Tax</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-xs group hover:-translate-y-2 transition-transform">
                <div className="text-blue-600 font-black text-4xl mb-2 tracking-tighter">2,000+</div>
                <div className="text-slate-900 font-bold text-sm mb-1">Business Activities</div>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">Fully open for 100% foreign ownership in the UAE Mainland.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />
      <FAQAccordion items={setupFAQs} />
      <ReusableCTA 
        title="Architect Your UAE Success Story"
        description="Don't navigate the complex legal landscape alone. Speak with our senior consultants for a customized setup roadmap."
      />
    </>
  );
}
