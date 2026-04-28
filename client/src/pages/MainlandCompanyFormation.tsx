import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import { CheckCircle2, Globe, Building2, TrendingUp } from "lucide-react";

export default function MainlandCompanyFormation() {
  const mainlandFAQs = [
    {
      question: "Do I need a local sponsor for a mainland company?",
      answer: "No, under the latest UAE regulations, most business activities now allow 100% foreign ownership for mainland companies without a local sponsor."
    },
    {
      question: "Can a mainland company trade anywhere in the UAE?",
      answer: "Yes, mainland companies have the freedom to trade anywhere within the UAE, including with government entities, and internationally."
    }
  ];

  return (
    <>
      <SEO 
        title="Mainland Company Formation Dubai | LLC Setup UAE | Bizlink"
        description="Expert guidance for mainland company formation in Dubai. 100% foreign ownership, zero tax, and full trade freedom across the UAE."
      />
      <PageHero 
        title="Mainland Company Formation" 
        subtitle="Unlimited trade freedom with 100% ownership in the heart of Dubai."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Mainland Setup?</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                A Mainland company is registered with the Department of Economy and Tourism (DET) and offers the most flexibility for business owners looking to tap into the local UAE market.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Globe, title: "Global & Local Trade", desc: "No geographical restrictions on business." },
                  { icon: Building2, title: "Physical Presence", desc: "Ability to rent office space anywhere." },
                  { icon: TrendingUp, title: "Unlimited Visas", desc: "No cap on the number of employee visas." },
                  { icon: CheckCircle2, title: "Govt Projects", desc: "Eligible to bid for government contracts." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-900 rounded-[2rem] p-10 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Documents Required</h3>
                <ul className="space-y-4">
                  {[
                    "Passport copies of all shareholders",
                    "Visa or Entry Stamp copy",
                    "Emirates ID (if applicable)",
                    "Initial approval for trade name",
                    "Office lease agreement (Ejari)"
                  ].map((doc, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-slate-300 text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion items={mainlandFAQs} />
      <ReusableCTA />
    </>
  );
}
