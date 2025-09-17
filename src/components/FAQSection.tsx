import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does split payout work?",
    answer: "When a student pays for a class, we automatically deduct our platform commission (typically 10%) and send the remaining amount directly to the trainer's account. No manual processing, no delays, no complicated reconciliation."
  },
  {
    question: "Do trainers need to have an account?",
    answer: "Yes, trainers need to create a free account to receive payouts and manage their classes. The signup process is quick and includes identity verification for security and compliance purposes."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We support Apple Pay, Google Pay, and all major credit/debit cards (Visa, Mastercard, American Express). All payments are processed securely through our PCI-compliant payment infrastructure."
  },
  {
    question: "Is personal data safe?",
    answer: "Absolutely. We use bank-level encryption (AES-256) to protect all data. We're PCI DSS compliant and follow strict data protection regulations including GDPR. Your financial information is never stored on our servers."
  },
  {
    question: "Can I cancel or reschedule a booking?",
    answer: "Yes, you can cancel or reschedule bookings according to the trainer's cancellation policy. Refunds are processed automatically for eligible cancellations, typically within 2-3 business days."
  },
  {
    question: "How do trainers set their availability?",
    answer: "Trainers can sync their existing calendar or use our built-in scheduling system. They can set recurring availability, block out times, and update their schedule in real-time. Students only see available slots."
  },
  {
    question: "What happens if a trainer doesn't show up?",
    answer: "If a trainer fails to show up without proper notice, students receive an automatic full refund. We also have a dispute resolution system and maintain trainer performance metrics to ensure quality service."
  },
  {
    question: "Are there any setup fees for trainers?",
    answer: "No setup fees, no monthly fees, no hidden costs. We only charge a small commission on successful bookings. This means trainers can start earning immediately without any upfront investment."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about DanceBook
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl px-8 border border-border"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold text-card-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
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