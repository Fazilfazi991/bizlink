import { Link } from "wouter";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
      {/* Background Image/Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/90" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="space-y-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-blue-400 text-sm font-medium">
            <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/80">{breadcrumb || title}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
