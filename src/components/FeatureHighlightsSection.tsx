import { Calendar, CreditCard, Bell, Shield, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Booking",
    description: "Clients book directly through the app with real-time availability"
  },
  {
    icon: Calendar,
    title: "Calendar Integration",
    description: "Sync with Google Calendar and other scheduling tools"
  },
  {
    icon: CreditCard,
    title: "Instant Payouts",
    description: "Receive payments immediately after each completed class"
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Automated notifications keep everyone on schedule"
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Bank-level encryption and PCI-compliant processing"
  },
  {
    icon: BarChart3,
    title: "Business Dashboard",
    description: "Track earnings, bookings, and grow your business"
  }
];

export const FeatureHighlightsSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything you need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to simplify your workflow
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-background border-2 border-foreground text-foreground rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
