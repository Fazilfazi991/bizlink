import { CheckCircle2 } from "lucide-react";

export default function TrustSection() {
  const points = [
    "Clear guidance before starting",
    "Mainland & free zone support",
    "PRO and document clearing assistance",
    "Visa & Emirates ID guidance",
    "Fast WhatsApp support"
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Why Clients Choose Bizlink</h2>
          <p className="text-slate-500">Trusted expertise for your UAE business journey.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center text-center group hover:bg-blue-50 hover:border-blue-100 transition-all"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <CheckCircle2 size={24} className="text-blue-600 group-hover:text-white" />
              </div>
              <p className="text-sm font-bold text-slate-900 leading-tight">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
