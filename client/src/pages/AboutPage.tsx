import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Target, Eye, CheckCircle2, MessageSquare, FileCheck, ShieldCheck, HeartHandshake } from "lucide-react";
import ReusableCTA from "@/components/ReusableCTA";

export default function AboutPage() {
  const steps = [
    { icon: MessageSquare, title: "Consultation", desc: "Initial discussion to understand your business goals." },
    { icon: FileCheck, title: "Documentation", desc: "Accurate preparation of all required legal documents." },
    { icon: ShieldCheck, title: "Approvals", desc: "Swift processing through government departments." },
    { icon: HeartHandshake, title: "Ongoing Support", desc: "Continuous assistance for your business growth." },
  ];

  return (
    <>
      <SEO 
        title="About Bizlink" 
        description="Learn more about BIZLINK Documents Clearing LLC, your trusted partner for business setup and PRO services in Dubai, UAE."
      />
      <PageHero 
        title="Your Trusted Partner for Business Setup & PRO Services in the UAE"
        subtitle="We simplify the complexities of starting and running a business in Dubai, providing expert guidance every step of the way."
        breadcrumb="About"
      />

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Who We Are</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                BIZLINK Documents Clearing LLC is a premier business consultancy based in Dubai. With years of experience and deep roots in the UAE's regulatory landscape, we provide seamless solutions for entrepreneurs and corporations looking to establish and grow their presence in the region.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our team consists of seasoned experts who specialize in Mainland and Free Zone formations, government liaison (PRO), and document clearing. We pride ourselves on transparency, efficiency, and our commitment to client success.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-600 text-sm">To empower entrepreneurs by providing efficient, reliable, and transparent business setup solutions in the UAE.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-slate-600 text-sm">To be the most trusted and preferred partner for all business-related services in the Middle East.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Bizlink?</h2>
            <p className="text-white/60 max-w-2xl mx-auto">We combine local expertise with international standards to deliver exceptional value.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Expert local knowledge of UAE regulations",
              "End-to-end management of all procedures",
              "Competitive and transparent pricing",
              "Dedicated account managers for every client",
              "Fast-track processing for urgent requirements",
              "Comprehensive after-setup support"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <CheckCircle2 className="text-blue-400 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Seamless Process</h2>
            <p className="text-slate-600">Four simple steps to get your business up and running.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-12 z-0" />
            
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReusableCTA 
        title="Ready to start your UAE business?" 
        description="Book a free consultation with our experts today and take the first step towards your corporate success in Dubai."
      />
    </>
  );
}
