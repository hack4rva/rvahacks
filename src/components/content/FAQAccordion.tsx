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
    question: "Where do I hack?",
    answer:
      "Friday kickoff and Sunday awards are at the Science Museum of Virginia. Saturday hacking happens at satellite locations across Richmond—co-working spaces, libraries, corporate hosts, and university sites. You'll select your preferred location during registration.",
  },
  {
    question: "Can I work remotely?",
    answer:
      "Yes. Remote participation is allowed for Saturday hacking. You'll have access to virtual mentor support and can submit your project like any other team. Friday kickoff and Sunday finals are in-person only.",
  },
  {
    question: "Do I need to attend all three days?",
    answer:
      "No. Friday is optional kickoff. Saturday is the main hacking day. Sunday is finals and awards. You can participate in any combination, though attending Friday helps with team formation and challenge understanding.",
  },
  {
    question: "What if I don't have a team?",
    answer:
      "Perfect! Team formation happens Friday morning at kickoff. Come solo and meet people, or bring friends. Teams are typically 3-5 people with diverse skills.",
  },
  {
    question: "How does judging work?",
    answer:
      "All teams submit via Devpost by Saturday evening. Judges review submissions overnight. Finalists are announced Sunday morning and pitch live to a panel including Mayor Avula. Winners are announced at the awards ceremony.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do. All code created during the hackathon belongs to the team that built it. We encourage open-source licensing (MIT recommended) to maximize civic impact, but the choice is yours.",
  },
  {
    question: "What happens after the event?",
    answer:
      "Winning projects have implementation pathways. The Mayor's Choice winner gets a 90-day scoping engagement with the City. Other winners may connect with nonprofit adopters or startup accelerators. See our Action Plan page for details.",
  },
  {
    question: "Can I bring my family to Sunday's event?",
    answer:
      "Absolutely! Sunday is a public celebration designed to be family-friendly. Bring your kids, parents, friends—everyone's welcome.",
  },
  {
    question: "When does registration open?",
    answer:
      "January 2026. Sign up for updates to be notified the moment registration opens.",
  },
];

interface FAQAccordionProps {
  className?: string;
  /** Limit number of FAQs shown */
  limit?: number;
}

export const FAQAccordion = ({ className = "", limit }: FAQAccordionProps) => {
  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;
  
  return (
    <Accordion type="single" collapsible className={`space-y-3 md:space-y-4 ${className}`}>
      {displayFaqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="bg-card border border-border rounded-xl px-4 md:px-6 shadow-sm hover:shadow-elegant transition-smooth"
        >
          <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-card-foreground hover:text-primary transition-smooth py-4 md:py-5">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pt-2 pb-4 md:pb-5">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export { faqs };

