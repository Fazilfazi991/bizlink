export default function Government() {
  // Official UAE government & service partners with logo URLs
  const partners = [
    {
      name: "Tasheel",
      logo: "/logos/tasheel.png",
      fallback: "TAS-HEEL",
      color: "#e63946",
    },
    {
      name: "Amer",
      logo: "/logos/amer.png",
      fallback: "Amer",
      color: "#2a9d8f",
    },
    {
      name: "Tawjeeh",
      logo: "/logos/tawjeeh.png",
      fallback: "Tawjeeh",
      color: "#e63946",
    },
    {
      name: "ICP",
      logo: "/logos/icp.png",
      fallback: "ICP",
      color: "#264653",
    },
    {
      name: "MOHRE",
      logo: "/logos/mohre.png",
      fallback: "MOHRE",
      color: "#1d3557",
    },
    {
      name: "DED",
      logo: "/logos/ded.png",
      fallback: "DED",
      color: "#2563eb",
    },
    {
      name: "RTA",
      logo: "/logos/rta.png",
      fallback: "RTA",
      color: "#e63946",
    },
    {
      name: "GDRFA",
      logo: "/logos/gdrfa.png",
      fallback: "GDRFA",
      color: "#1d3557",
    },
    {
      name: "Dubai Municipality",
      logo: "/logos/dm.png",
      fallback: "DM",
      color: "#2563eb",
    },
    {
      name: "RERA",
      logo: "/logos/rera.png",
      fallback: "RERA",
      color: "#264653",
    },
    {
      name: "SIRA",
      logo: "/logos/sira.png",
      fallback: "SIRA",
      color: "#e63946",
    },
    {
      name: "Parkin",
      logo: "/logos/parkin.png",
      fallback: "Parkin",
      color: "#2563eb",
    },
  ];

  return (
    <section id="government" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
            Regulatory Relations
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Official Partners in Government Liaison
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our deep-rooted connections with UAE authorities ensure that your applications are processed with priority and precision, minimizing delays and maximizing success.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300 min-h-[90px]"
            >
              <img
                src={partner.logo}
                alt={partner.name + " logo"}
                className="h-10 w-auto object-contain mb-2 transition-all duration-300"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const next = target.nextElementSibling as HTMLElement;
                  if (next) next.style.display = "flex";
                }}
              />
              {/* Fallback text badge */}
              <div
                className="hidden items-center justify-center w-full h-10 rounded-lg mb-2 font-bold text-white text-xs text-center px-1"
                style={{ backgroundColor: partner.color, display: "none" }}
              >
                {partner.fallback}
              </div>
              <p className="text-xs font-semibold text-slate-600 leading-tight">{partner.name}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/document-clearing-dubai">
            <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg">
              View Document Clearing Services
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
