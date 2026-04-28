import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import FAQAccordion from "@/components/FAQAccordion";
import ReusableCTA from "@/components/ReusableCTA";
import TrustSection from "@/components/TrustSection";
import { Building2, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function BusinessSetupDubai() {
  const setupFAQs = [
    {
      question: "Can I own 100% of my company in Dubai?",
      answer: "Yes, 100% foreign ownership is now possible for most mainland business activities and all free zone setups in Dubai."
    },
    {
      question: "Is there corporate tax in the UAE?",
      answer: "The UAE introduced a 9% corporate tax on taxable profits exceeding AED 375,000, though many free zone businesses remain eligible for 0% tax under specific conditions."
    }
  ];

  const setupOptions = [
    {
      title: "Mainland Setup",
      icon: Globe,
      link: "/mainland-company-formation",
      features: ["Trade anywhere in UAE", "Unlimited employee visas", "No geographical limits", "Bidding for govt projects"]
    },
    {
      title: "Free Zone Setup",
      icon: Building2,
      link: "/free-zone-company-setup",
      features: ["100% tax exemption", "Full profit repatriation", "No physical office needed", "Easy setup & renewal"]
    },
    {
      title: "Offshore Setup",
      icon: ShieldCheck,
      link: "/services",
      features: ["Zero corporate tax", "Asset protection", "Confidentiality", "International trading only"]
    }
  ];

  return (
    <>
      <SEO 
        title="Business Setup Dubai | Company Formation UAE | Bizlink"
        description="Comprehensive business setup services in Dubai. Mainland, free zone, and offshore company formation with 100% ownership support."
      />
      <PageHero 
        title="Business Setup in Dubai" 
        subtitle="Empowering entrepreneurs to build and grow their legacy in the UAE."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose the Right Jurisdiction</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We help you analyze your business goals to recommend the most efficient legal structure in the UAE.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {setupOptions.map((option, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  <option.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{option.title}</h3>
                <ul className="space-y-4 mb-10">
                  {option.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-600 text-sm">
                      <CheckCircle2 size={16} className="text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={option.link}>
                  <button className="w-full py-4 bg-white border border-slate-200 rounded-xl font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors">
                    Explore Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />
      <FAQAccordion items={setupFAQs} />
      <ReusableCTA />
    </>
  );
}
