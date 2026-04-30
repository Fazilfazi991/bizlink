import { Building2, FileSignature, Settings, Landmark } from "lucide-react";

export default function SetupSteps() {
  const steps = [
    {
      number: "01",
      icon: Building2,
      title: "Select Jurisdiction & Business Activity",
      desc: "Choose between UAE mainland, free zone, or offshore based on your target market, ownership preference, and budget. Define your business activity to determine the correct license type.",
      align: "left"
    },
    {
      number: "02",
      icon: FileSignature,
      title: "Document Preparation & Trade License",
      desc: "Submit the required documents — passport copies, MOA, and activity details — to the relevant authority. Obtain your official UAE trade license issued by DED or the respective free zone authority.",
      align: "right"
    },
    {
      number: "03",
      icon: Settings,
      title: "Visa Process",
      desc: "Apply for your UAE residency visa as a business owner or investor. The process includes an entry permit, medical fitness test, Emirates ID registration, and visa stamping.",
      align: "left"
    },
    {
      number: "04",
      icon: Landmark,
      title: "Corporate Bank Account Opening",
      desc: "Open a UAE corporate bank account with a licensed local or international bank to manage business transactions, receive payments, and establish financial credibility in the UAE market.",
      align: "right"
    }
  ];

  return (
    <section className="py-24 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            How to Start a Business in UAE <span className="text-green-600 block mt-2 md:inline md:mt-0">4 Simple Steps</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-green-300 -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => {
              const isEven = i % 2 !== 0; // 0-indexed, so 1 (02) is even visually (right aligned)
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} md:mb-16 last:mb-0`}>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] relative z-10`}>
                    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
                      <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <step.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                      <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
                      
                      {/* Step Number Badge (Mobile: bottom center, Desktop: side) */}
                      <div className={`absolute -bottom-5 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-1/2 md:-translate-y-1/2 md:bottom-auto flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full font-bold shadow-lg border-4 border-[#f8f9fa] ${
                        isEven ? 'md:-left-5 md:right-auto' : 'md:-right-5 md:left-auto'
                      }`}>
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-[45%]"></div>

                  {/* Center Dot for Connecting Line */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-green-200 border-[3px] border-white z-20"></div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
