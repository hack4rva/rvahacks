import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to be a programmer to participate?",
    answer:
      "No! We need designers, data analysts, policy experts, community organizers, and anyone who cares about Richmond. Technical skills help, but understanding the problem is just as important.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Nothing. Hack for RVA is completely free, including meals and refreshments throughout the weekend.",
  },
  {
    question: "Do I need to attend all three days?",
    answer:
      "No. Choose Friday OR Saturday to build (or both if you're dedicated!), then join us Sunday for the public celebration. The flexible format accommodates different schedules.",
  },
  {
    question: "Can I bring my family to Sunday's event?",
    answer:
      "Absolutely! Sunday is a public celebration designed to be family-friendly. Bring your kids, parents, friends—everyone's welcome.",
  },
  {
    question: "What if I don't have a team?",
    answer:
      "Perfect! Team formation happens at the event. Come solo and meet amazing people, or bring friends. Teams are typically 3-5 people with diverse skills.",
  },
  {
    question: "Will my work actually be used by the City?",
    answer:
      "Yes. Every challenge has a City department champion ready to adopt winning solutions. Winners receive 6-month mentorship and $10k in prize money to help pilot their projects.",
  },
  {
    question: "What are the challenges?",
    answer:
      "We're co-designing 5 civic challenges with City departments, aligned with Mayor Avula's pillars. Think: 311 improvements, tree equity, small business navigation, flood risk mapping, and more. Full details coming soon.",
  },
  {
    question: "When does registration open?",
    answer:
      "January 2026. Sign up for updates to be notified the moment registration opens.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-elegant transition-smooth"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-primary transition-smooth py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
