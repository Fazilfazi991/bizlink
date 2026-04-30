import { Building2, FileSignature, Settings, Landmark } from "lucide-react";

export default function SetupSteps() {
  const steps = [
    {
      number: "01",
      icon: Building2,
      title: "Select Jurisdiction & Business Activity",
      desc: "Choose between UAE mainland, free zone, or offshore based on your target market, ownership preference, and budget. Define your business activity to determine the correct license type.",
      position: "top" // meaning it sits higher, circle at bottom
    },
    {
      number: "02",
      icon: FileSignature,
      title: "Document Preparation & Trade License",
      desc: "Submit the required documents — passport copies, MOA, and activity details — to the relevant authority. Obtain your official UAE trade license issued by DED or the respective free zone authority.",
      position: "bottom" // meaning it sits lower, circle at top
    },
    {
      number: "03",
      icon: Settings,
      title: "Visa Process",
      desc: "Apply for your UAE residency visa as a business owner or investor. The process includes an entry permit, medical fitness test, Emirates ID registration, and visa stamping.",
      position: "top"
    },
    {
      number: "04",
      icon: Landmark,
      title: "Corporate Bank Account Opening",
      desc: "Open a UAE corporate bank account with a licensed local or international bank to manage business transactions, receive payments, and establish financial credibility in the UAE market.",
      position: "bottom"
    }
  ];

  return (
    <section className="py-24 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            How to Start a Business in UAE <span className="text-green-600">4 Simple Steps</span>
          </h2>
        </div>

        {/* Desktop Container */}
        <div className="relative hidden lg:block pb-16">
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`relative w-full transition-all duration-300 hover:-translate-y-1 ${
                  step.position === 'bottom' ? 'mt-24' : 'mb-24'
                }`}
              >
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col relative z-10">
                  <div className="text-green-600 mb-6">
                    <step.icon size={36} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-4 leading-tight">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-[13px]">{step.desc}</p>
                </div>
                
                {/* Step Number Circle */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1e8b4e] flex items-center justify-center text-white font-bold text-sm shadow-md border-[4px] border-[#f8f9fa] z-20 ${
                  step.position === 'top' ? '-bottom-5' : '-top-5'
                }`}>
                  {step.number}
                </div>
              </div>
            ))}
          </div>

          {/* SVGs for curved dashed arrows between columns */}
          {/* Arrow 1 -> 2 (Bottom curve) */}
          <div className="absolute left-[20%] bottom-[20%] w-[12%] h-20 pointer-events-none z-0">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <path d="M 0,0 C 40,80 80,80 100,0" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowhead)"/>
              <defs>
                <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#22c55e" />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Arrow 2 -> 3 (Top curve) */}
          <div className="absolute left-[45%] top-[10%] w-[12%] h-20 pointer-events-none z-0">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <path d="M 0,100 C 30,20 70,20 100,80" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowhead)"/>
            </svg>
          </div>

          {/* Arrow 3 -> 4 (Bottom curve) */}
          <div className="absolute left-[70%] bottom-[20%] w-[12%] h-20 pointer-events-none z-0">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <path d="M 0,0 C 40,80 80,80 100,0" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowhead)"/>
            </svg>
          </div>
        </div>

        {/* Mobile / Tablet Container */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              {/* Step Number Circle (Top Left on mobile) */}
              <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-[#1e8b4e] flex items-center justify-center text-white font-bold text-sm shadow-md border-[4px] border-[#f8f9fa]">
                {step.number}
              </div>
              <div className="text-green-600 mb-4 mt-2">
                <step.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
