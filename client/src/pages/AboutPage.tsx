import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Target, Eye, CheckCircle2, MessageSquare, FileCheck, ShieldCheck, HeartHandshake, Award, Users2, Globe, Zap, Building2 } from "lucide-react";
import ReusableCTA from "@/components/ReusableCTA";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  const steps = [
    { icon: MessageSquare, title: "Consultation", desc: "We begin with a deep dive into your business model and expansion goals." },
    { icon: FileCheck, title: "Documentation", desc: "Our legal experts prepare and vet all necessary paperwork for 100% accuracy." },
    { icon: ShieldCheck, title: "Approvals", desc: "Direct liaison with government departments ensures fast-track processing." },
    { icon: HeartHandshake, title: "Ongoing Support", desc: "Continuous assistance to help you navigate and grow in the UAE market." },
  ];

  return (
    <>
      <SEO 
        title="About Bizlink | Dubai's Leading Business Consultancy" 
        description="Learn more about BIZLINK Documents Clearing LLC. We are a premier business consultancy in Dubai, specializing in company formation, PRO, and corporate support."
      />
      <PageHero 
        title="Your Strategic Partner in the UAE"
        subtitle="Empowering global entrepreneurs to establish, scale, and succeed in the heart of Dubai."
      />

      {/* Intro Section with Stats */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="space-y-8" animation="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest">
                <Award size={14} />
                BIZLINK DOCUMENTS CLEARING LLC
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Driving Corporate Excellence Since Day One</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                BIZLINK is more than a document clearing agency; we are a strategic catalyst for business growth in the United Arab Emirates. Founded on the principles of transparency, speed, and integrity, we have helped thousands of entrepreneurs turn their UAE dreams into operational realities.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <div className="text-4xl font-black text-blue-600 mb-1">500+</div>
                  <div className="text-slate-500 font-bold text-sm uppercase tracking-wider">Companies Formed</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-blue-600 mb-1">10k+</div>
                  <div className="text-slate-500 font-bold text-sm uppercase tracking-wider">Documents Cleared</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="relative" animation="fade-left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square bg-slate-100 rounded-[2rem] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center p-8">
                      <Globe className="text-white opacity-20" size={80} />
                    </div>
                  </div>
                  <div className="p-8 bg-blue-600 text-white rounded-[2rem]">
                    <h4 className="font-bold text-xl mb-2">Global Vision</h4>
                    <p className="text-blue-100 text-xs">Supporting clients from over 50 countries.</p>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="p-8 bg-slate-900 text-white rounded-[2rem]">
                    <h4 className="font-bold text-xl mb-2">Local Roots</h4>
                    <p className="text-slate-400 text-xs">Unmatched expertise in UAE regulatory law.</p>
                  </div>
                  <div className="aspect-square bg-slate-50 border border-slate-100 rounded-[2rem] flex items-center justify-center">
                    <Building2 className="text-blue-600" size={48} />
                  </div>
                </div>
              </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="p-12 bg-white rounded-[3rem] border border-slate-200 hover:shadow-xl transition-all group h-full">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
                <p className="text-slate-600 text-lg leading-relaxed">To strip away the complexities of UAE bureaucracy, providing every entrepreneur with a clear, fast, and transparent path to business success through expert consultation and local liaison.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="p-12 bg-slate-900 text-white rounded-[3rem] border border-slate-800 hover:shadow-xl transition-all group h-full">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  <Eye size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-slate-400 text-lg leading-relaxed">To become the UAE's most influential business gateway, recognized for setting the industry gold standard in professional document clearing and corporate advisory services.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed">To strip away the complexities of UAE bureaucracy, providing every entrepreneur with a clear, fast, and transparent path to business success through expert consultation and local liaison.</p>
            </div>
            <div className="p-12 bg-slate-900 text-white rounded-[3rem] border border-slate-800 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-slate-400 text-lg leading-relaxed">To become the UAE's most influential business gateway, recognized for setting the industry gold standard in professional document clearing and corporate advisory services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Why Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">The BIZLINK Edge</h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">Our reputation is built on six core pillars of excellence that define every interaction.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Total Integrity", desc: "100% transparency in fees and government requirements." },
              { icon: Zap, title: "Unmatched Speed", desc: "Optimized internal processes for rapid turnaround." },
              { icon: Users2, title: "Dedicated PROs", desc: "Senior liaison officers assigned to your account." },
              { icon: Globe, title: "Cultural Reach", desc: "Multi-lingual team supporting global entrepreneurs." },
              { icon: Award, title: "Legal Expertise", desc: "In-depth knowledge of UAE Federal Labour & Corporate Law." },
              { icon: HeartHandshake, title: "Client First", desc: "Personalized solutions tailored to your specific budget." }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-colors h-full">
                  <item.icon className="text-blue-600 mb-6" size={32} />
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Work</h2>
              <p className="text-slate-400 text-lg">A systematic approach to your corporate evolution.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative z-10 group text-center md:text-left">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <step.icon size={28} />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-black text-blue-500">STEP {i + 1}</span>
                      <div className="h-px bg-slate-800 flex-grow"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ReusableCTA 
        title="Ready to Build Your Future in Dubai?" 
        description="Our consultants are ready to turn your vision into a registered reality. Book your complimentary expansion strategy session today."
      />
    </>
  );
}
