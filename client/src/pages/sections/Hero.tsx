import { Button } from "@/components/ui/button";
import { Zap, Shield, Users } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 relative overflow-hidden pt-32 pb-20"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663459703247/ZYuYH7eryfBQCq8ZAHFd5n/hero-dubai-skyline-6dpULCW7RSqDHWvoaDqD2q.webp')`,
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
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Accelerate Your Business{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Expansion in Dubai
                </span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                We provide comprehensive government liaison and document clearing services, allowing you to focus on growing your business while we handle the rest.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact">
                <Button className="px-8 py-6 bg-blue-600 text-white hover:bg-blue-700 rounded-full font-semibold flex items-center gap-2 text-base">
                  Start Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
                  </svg>
                </Button>
              </a>
              <button className="px-8 py-6 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-full font-semibold flex items-center gap-2 text-base transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M176,64v48H80V64Z" opacity="0.2" />
                  <path d="M80,120h96a8,8,0,0,0,8-8V64a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v48A8,8,0,0,0,80,120Zm8-48h80v32H88ZM200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200ZM100,148a12,12,0,1,1-12-12A12,12,0,0,1,100,148Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,140,148Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,180,148Zm-80,40a12,12,0,1,1-12-12A12,12,0,0,1,100,188Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,140,188Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,180,188Z" />
                </svg>
                Cost Estimator
              </button>
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
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
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all lg:ml-12">
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
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
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
