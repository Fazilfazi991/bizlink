export default function Government() {
  // Official UAE government & service partners with logo URLs
  const partners = [
    {
      name: "Tasheel",
      logo: "https://www.tasheel.ae/Content/Images/TASHEEL_LOGO.svg",
      fallback: "TAS-HEEL",
      color: "#e63946",
    },
    {
      name: "Amer",
      logo: "https://www.amer.ae/Content/images/amer-logo.png",
      fallback: "Amer",
      color: "#2a9d8f",
    },
    {
      name: "Tawjeeh",
      logo: "https://www.tawjeeh.ae/Content/images/logo.png",
      fallback: "Tawjeeh",
      color: "#e63946",
    },
    {
      name: "ICP",
      logo: "https://icp.gov.ae/wp-content/themes/icp/images/logo.png",
      fallback: "ICP",
      color: "#264653",
    },
    {
      name: "MOHRE",
      logo: "https://www.mohre.gov.ae/themes/ords_molhrsite/assets/images/logo.png",
      fallback: "MOHRE",
      color: "#1d3557",
    },
    {
      name: "DED",
      logo: "https://www.dubaided.gov.ae/Style%20Library/DED/images/logo-new.png",
      fallback: "DED",
      color: "#2563eb",
    },
    {
      name: "RTA",
      logo: "https://www.rta.ae/wps/themes/html/RTA/dist/images/logo.svg",
      fallback: "RTA",
      color: "#e63946",
    },
    {
      name: "GDRFA",
      logo: "https://gdrfad.gov.ae/storage/media/gdrfa-logo.png",
      fallback: "GDRFA",
      color: "#1d3557",
    },
    {
      name: "Dubai Municipality",
      logo: "https://www.dm.gov.ae/wp-content/themes/dm/images/logo.svg",
      fallback: "DM",
      color: "#2563eb",
    },
    {
      name: "RERA",
      logo: "https://www.rera.gov.ae/img/logo.png",
      fallback: "RERA",
      color: "#264653",
    },
    {
      name: "SIRA",
      logo: "https://www.sira.gov.ae/images/logo.png",
      fallback: "SIRA",
      color: "#e63946",
    },
    {
      name: "Parkin",
      logo: "https://www.parkin.ae/assets/images/logo.png",
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
                className="h-10 w-auto object-contain mb-2 grayscale group-hover:grayscale-0 transition-all duration-300"
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
