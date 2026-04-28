import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { 
  Globe2, 
  CheckCircle, 
  Rocket, 
  Laptop, 
  ShoppingCart, 
  User,
  Coffee
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FreeZoneCompanySetup() {
  const categories = [
    { icon: Coffee, title: "Consultants", desc: "Professional services and consultancy licenses." },
    { icon: ShoppingCart, title: "Ecommerce", desc: "Sell products online with 0% customs duty." },
    { icon: Laptop, title: "IT & Tech", desc: "Software development and tech startups." },
    { icon: User, title: "Freelancers", desc: "Affordable solo-entrepreneur permits." }
  ];

  return (
    <>
      <SEO 
        title="Free Zone Company Setup UAE" 
        description="Learn how to setup a free zone company in UAE. 100% tax exemption, full capital repatriation, and easy setup."
      />
      <PageHero 
        title="Free Zone Company Setup in UAE"
        subtitle="The gateway to global trade and tax-efficient business operations."
        breadcrumb="Free Zone Setup"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {categories.map((cat, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-cyan-200 transition-colors">
                    <cat.icon className="text-cyan-600 mb-4" size={28} />
                    <h3 className="font-bold text-slate-900 mb-2">{cat.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose a Free Zone?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                UAE Free Zones are designated areas where businesses can benefit from 0% corporate and personal income tax, 100% foreign ownership, and 100% repatriation of capital and profits.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "No need for a local agent or partner",
                  "Fastest way to get a business license",
                  "Simplified recruitment procedures",
                  "Modern infrastructure and facilities"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle size={20} className="text-cyan-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 rounded-full py-7 px-10">
                Explore Free Zone Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">Ideal for Every Stage of Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <Rocket className="mx-auto text-cyan-400 mb-6" size={48} />
              <h3 className="text-xl font-bold mb-4">Startups</h3>
              <p className="text-white/60 text-sm">Low-cost entry packages and flexible coworking spaces.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <Globe2 className="mx-auto text-cyan-400 mb-6" size={48} />
              <h3 className="text-xl font-bold mb-4">Global Trading</h3>
              <p className="text-white/60 text-sm">Strategic location near ports and airports for international logistics.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <Laptop className="mx-auto text-cyan-400 mb-6" size={48} />
              <h3 className="text-xl font-bold mb-4">Freelancers</h3>
              <p className="text-white/60 text-sm">Quick permit issuance with minimal documentation required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Free Zone FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg">Can a free zone company trade in the mainland?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Generally, free zone companies cannot trade directly in the local UAE mainland market. However, they can trade via a mainland distributor or setup a mainland branch.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg">Which Free Zone is best for me?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                This depends on your activity. For example, IFZA or Meydan are great for general trading, while DMCC is preferred for commodities. Our experts can help you choose the right one.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-cyan-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get Your Free Zone License in 48 Hours</h2>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-slate-100 rounded-full font-bold px-10 py-7">
            Start Free Zone Application
          </Button>
        </div>
      </section>
    </>
  );
}
