import { Star, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ahmed Al-Mansoori",
      role: "E-commerce Founder",
      text: "Bizlink made my mainland company formation incredibly smooth. Their team handled everything from DED approvals to visa processing within 10 days.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Digital Agency Owner",
      text: "Opening a business in a new country is daunting, but Bizlink provided clear guidance at every step. Their PRO services are top-notch and very reliable.",
      rating: 5
    },
    {
      name: "Mohammed Rashid",
      role: "Retail Chain Director",
      text: "Excellent service for license renewal and bank account assistance. They have deep knowledge of UAE regulations and great connections with banks.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Entrepreneurs
            </h2>
            <p className="text-slate-600 text-lg">Hear what our clients say about their experience with Bizlink.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 0.1}>
              <div
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="absolute top-6 right-8 text-slate-100 group-hover:text-blue-50 transition-colors">
                  <Quote size={48} />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, index) => (
                    <Star key={index} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-700 mb-8 italic relative z-10">
                  "{review.text}"
                </p>

                <div className="mt-auto">
                  <p className="font-bold text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
