import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate?",
    answer:
      "Hack for RVA is open to everyone! Whether you're a developer, designer, entrepreneur, student, or civic enthusiast, we welcome all skill levels. You just need to be passionate about making Richmond better.",
  },
  {
    question: "Do I need a team?",
    answer:
      "No! You can come solo and we'll help you find a team during the event, or you can bring your own team. Teams typically range from 2-5 people with diverse skill sets.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your laptop, chargers, and any tools you need to build. We'll provide WiFi, workspace, meals, and plenty of snacks throughout the weekend.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No, Hack for RVA is completely free to attend! This includes all meals, workshops, and access to mentors throughout the weekend.",
  },
  {
    question: "What will I build?",
    answer:
      "You'll work on projects that address real civic challenges in Richmond. These could be apps, websites, data visualizations, or any technology solution that helps our city.",
  },
  {
    question: "Are there prizes?",
    answer:
      "Yes! We'll have prizes for winning teams in various categories. More details on prizes and awards will be announced closer to the event.",
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
            Got questions? We've got answers. If you don't see your question
            here, feel free to reach out!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-primary transition-smooth">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-2">Still have questions?</p>
          <a
            href="mailto:info@hackforrva.org"
            className="text-primary hover:text-primary-light font-semibold transition-smooth underline"
          >
            info@hackforrva.org
          </a>
        </div>
      </div>
    </section>
  );
};
