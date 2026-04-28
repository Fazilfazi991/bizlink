export default function Government() {
  const agencies = [
    { name: "DED", fullName: "Dubai Economy" },
    { name: "RTA", fullName: "Roads & Transport" },
    { name: "Dubai Municipality", fullName: "Dubai Municipality" },
    { name: "GDRFA", fullName: "Immigration" },
    { name: "MOHRE", fullName: "Labor" },
    { name: "DHA", fullName: "Health Authority" },
    { name: "Dubai Courts", fullName: "Dubai Courts" },
    { name: "Land Department", fullName: "Land Department" },
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

        {/* Agencies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {agencies.map((agency) => (
            <div
              key={agency.name}
              className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-blue-100 hover:border-blue-300"
            >
              <div className="text-2xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                {agency.name}
              </div>
              <p className="text-sm text-slate-600">{agency.fullName}</p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="mt-20">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663459703247/ZYuYH7eryfBQCq8ZAHFd5n/uae-government-building-iHktLnGEWRAGEBj6ekidH4.webp"
            alt="UAE Government Building"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
