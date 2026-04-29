import { Button } from "@/components/ui/button";
import { Zap, Shield, Users, ArrowRight, Calculator } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 relative overflow-hidden pt-32 pb-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/75 z-10" />

      {/* Decorative gradient blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-blue-400 font-semibold text-sm tracking-widest">
                #1 PRO SERVICES IN DUBAI
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1]">
                Start Your UAE{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Business With Confidence
                </span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                Business setup, trade license, visa, PRO services, document clearing, and bank account assistance — handled with expert guidance from start to finish.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:min-w-[200px] h-16 bg-blue-600 text-white hover:bg-blue-700 rounded-2xl font-bold flex items-center justify-center gap-3 text-lg shadow-2xl shadow-blue-500/20 group">
                  Start Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/cost-estimator" className="w-full sm:w-auto">
                <button className="w-full sm:min-w-[200px] h-16 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-2xl font-bold flex items-center justify-center gap-3 text-lg backdrop-blur-md transition-all group">
                  <Calculator size={22} className="text-blue-400 group-hover:scale-110 transition-transform" />
                  Cost Estimator
                </button>
              </Link>
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-300">
                  <Zap size={28} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Rapid Execution</h4>
                  <p className="text-white/70 text-sm">License issuance within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all lg:ml-12">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-300">
                  <Shield size={28} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Total Compliance</h4>
                  <p className="text-white/70 text-sm">100% adherence to UAE regulations</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-300">
                  <Users size={28} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Expert Advisory</h4>
                  <p className="text-white/70 text-sm">Dedicated corporate PRO managers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-0" />
    </section>
  );
}
