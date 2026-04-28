import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import { CheckCircle2, Zap, Percent, Anchor } from "lucide-react";

export default function FreeZoneCompanySetup() {
  const freezoneFAQs = [
    {
      question: "Which Free Zone is best for my business?",
      answer: "The 'best' zone depends on your activity. For example, DMCC is great for commodities, while IFZA or Meydan are excellent for freelancers and startups due to their cost-effectiveness."
    },
    {
      question: "Can I live in Dubai with a Free Zone license?",
      answer: "Yes, most Free Zone licenses allow you to apply for a 2-year UAE residency visa for yourself and your family."
    }
  ];

  return (
    <>
      <SEO 
        title="Free Zone Company Setup Dubai | 100% Ownership UAE | Bizlink"
        description="Fast and affordable free zone company setup in Dubai and UAE. 100% tax exemption, full profit repatriation, and easy visa processing."
      />
      <PageHero 
        title="Free Zone Company Setup" 
        subtitle="100% ownership and zero taxes in UAE's most innovative business hubs."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Percent, title: "0% Corporate Tax", desc: "Keep 100% of your profits with zero corporate and personal income tax." },
              { icon: Zap, title: "Quick Setup", desc: "Digital registration process can be completed in as little as 3-5 days." },
              { icon: Anchor, title: "Full Repatriation", desc: "Transfer all your capital and profits back to your home country without limits." }
            ].map((card, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-blue-200">
                  <card.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                <p className="text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Popular Free Zones</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["IFZA (Dubai Silicon Oasis)", "Meydan Free Zone", "DMCC (JLT)", "SHAMS (Sharjah Media City)", "RAKEZ (Ras Al Khaimah)", "Dubai South"].map((zone, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <CheckCircle2 className="text-blue-400" size={18} />
                      <span className="text-sm font-medium">{zone}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4">Start as a Freelancer</h3>
                <p className="text-slate-400 mb-8">Low-cost freelancer permits available in select free zones, including residency visa and office access.</p>
                <div className="flex justify-center lg:justify-start">
                  <div className="px-6 py-3 bg-blue-600 rounded-full font-bold text-white">Starting from AED 12,500*</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion items={freezoneFAQs} />
      <ReusableCTA />
    </>
  );
}
