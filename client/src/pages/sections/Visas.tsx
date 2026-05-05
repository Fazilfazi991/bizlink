import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Visas() {
  const visaTypes = [
    { name: "Employment Visa", icon: "💼" },
    { name: "Family Visa", icon: "👨‍👩‍👧‍👦" },
    { name: "Golden Visa", icon: "✨" },
    { name: "Visit Visa", icon: "🛫" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Entry Permit",
      description: "Secure your initial approval to enter the UAE legally.",
    },
    {
      step: "02",
      title: "Medical Test",
      description: "Complete health screening at government centers.",
    },
    {
      step: "03",
      title: "Emirates ID",
      description: "Register biometrics for your official identity card.",
    },
    {
      step: "04",
      title: "Visa Stamping",
      description: "Final residency endorsement on your passport.",
    },
  ];

  const ecosystem = ["Tasheel", "Amer", "Tawjeeh", "ICP", "MOHRE", "DED"];

  return (
    <section id="visas" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
              Residency Solutions
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Seamless Visa Assistance
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We handle the end-to-end process of UAE residency, ensuring a smooth transition for you and your family.
            </p>
          </div>
        </ScrollReveal>

        {/* Visa Types */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {visaTypes.map((visa, index) => (
            <ScrollReveal key={visa.name} animation="fade-up" delay={index * 0.1}>
              <div
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{visa.icon}</div>
                <p className="font-semibold text-slate-900">{visa.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Process Journey */}
        <div className="mb-20">
          <ScrollReveal>
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              The Process Journey
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <ScrollReveal key={item.step} animation="fade-up" delay={index * 0.15}>
                <div className="relative">
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent" />
                  )}

                  {/* Card */}
                  <div className="bg-white rounded-xl p-6 shadow-md relative z-10 h-full">
                    <div className="text-4xl font-bold text-blue-600 mb-3">{item.step}</div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Ecosystem */}
        <ScrollReveal animation="scale-up">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-12 overflow-hidden relative">
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1577412647305-991150c7d163?w=1200&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-3 text-center">
                Our Ecosystem
              </h3>
              <p className="text-center text-blue-200 mb-10">
                Direct integration with the UAE's primary service centers.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {[
                  { name: "Tasheel", logo: "/logos/tasheel.png" },
                  { name: "Amer", logo: "/logos/amer.png" },
                  { name: "Tawjeeh", logo: "/logos/tawjeeh.png" },
                  { name: "ICP", logo: "/logos/icp.png" },
                  { name: "MOHRE", logo: "/logos/mohre.png" },
                  { name: "DED", logo: "/logos/ded.png" },
                ].map((service, index) => (
                  <ScrollReveal key={service.name} animation="fade-up" delay={0.2 + index * 0.05}>
                    <div
                      className="bg-white/95 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm hover:scale-105 transition-transform flex flex-col items-center justify-center min-h-[100px]"
                    >
                      <img src={service.logo} alt={service.name} className="h-10 w-auto object-contain mb-2" />
                      <p className="text-slate-900 font-bold text-xs">{service.name}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 text-center">
            <a href="/visa-services-dubai">
              <button className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Explore All Visa Services
              </button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
