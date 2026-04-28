import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQAccordion({ items, title = "Frequently Asked Questions" }: FAQAccordionProps) {
  // Split items into two columns (first half left, second half right)
  const mid = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, mid);
  const rightItems = items.slice(mid);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-slate-600">Get quick answers to common questions about setting up a business in the UAE.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {leftItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-left-${index}`}
                className="bg-white border border-slate-200 rounded-lg px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {/* Right column */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {rightItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-right-${index}`}
                className="bg-white border border-slate-200 rounded-lg px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
