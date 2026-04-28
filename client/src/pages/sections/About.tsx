import { CheckCircle2 } from "lucide-react";

export default function About() {
  const stats = [
    { number: "1500+", label: "Happy Clients" },
    { number: "800+", label: "Companies Setup" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Success Rate" },
  ];

  const highlights = [
    { title: "Trusted Advisor", icon: "🤝" },
    { title: "Fast Track", icon: "⚡" },
    { title: "Global Reach", icon: "🌍" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-blue-100 rounded-3xl z-0 opacity-50" />
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663459703247/ZYuYH7eryfBQCq8ZAHFd5n/business-team-office-VDnaa4JRyiKN3Jz3Tm7Mc4.webp"
              alt="Bizlink Office"
              className="w-full rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl z-20">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">15+</div>
                <div className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  Years of Expertise
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
                About BIZLINK
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 leading-tight">
                Your Strategic Partner in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  UAE Business Setup
                </span>
              </h2>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              Bizlink is a premium document clearing and business services firm dedicated to simplifying the complex UAE regulatory landscape. We bridge the gap between global entrepreneurs and local government authorities with precision and integrity.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-sm font-semibold text-slate-700">{item.title}</p>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Our Story
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-20 border-t border-slate-200">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
