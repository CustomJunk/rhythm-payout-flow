import { 
  Zap, 
  Smartphone, 
  BarChart3, 
  Calendar, 
  Shield, 
  Star 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant split payouts",
    description: "Trainers receive earnings automatically with transparent commission deduction"
  },
  {
    icon: Smartphone,
    title: "Apple/Google Pay & card support",
    description: "Multiple secure payment options for convenient booking experience"
  },
  {
    icon: BarChart3,
    title: "Trainer dashboard",
    description: "Complete earnings overview, booking management, and performance analytics"
  },
  {
    icon: Calendar,
    title: "Simple scheduling",
    description: "Easy-to-use calendar integration with automated booking confirmations"
  },
  {
    icon: Shield,
    title: "Secure payments (PCI)",
    description: "Bank-level security with PCI compliance and encrypted data protection"
  },
  {
    icon: Star,
    title: "Reviews & ratings",
    description: "Build trust with transparent feedback system for trainers and students"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for seamless dance class booking and payments
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-coral to-accent-teal rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};