import { Calendar, CreditCard, Banknote } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Choose trainer & time",
    description: "Browse available trainers and select your preferred class time"
  },
  {
    icon: CreditCard,
    title: "Book & pay securely",
    description: "Reserve your spot with Apple Pay, Google Pay, or card payment"
  },
  {
    icon: Banknote,
    title: "Trainer receives payout",
    description: "Automatic split payout with commission deducted"
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, secure booking with automatic payments
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-coral to-accent-teal rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-20 w-full">
                    <div className="h-0.5 bg-gradient-to-r from-primary-coral to-accent-teal"></div>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-accent-teal/10 rounded-2xl p-6 md:p-8 text-center border border-accent-teal/20">
          <p className="text-foreground font-medium">
            <span className="text-accent-teal font-semibold">No hassle for trainers:</span> You don't need to receive payment into your account — funds are routed with automatic split payouts.
          </p>
        </div>
      </div>
    </section>
  );
};