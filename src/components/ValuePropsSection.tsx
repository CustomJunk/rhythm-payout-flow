import { Zap, Calendar, Heart } from "lucide-react";

const valueProps = [
  {
    icon: Zap,
    title: "Instant Payouts",
    description: "Get paid immediately after each class. No waiting, no delays."
  },
  {
    icon: Calendar,
    title: "Effortless Booking",
    description: "Simple scheduling that syncs with your calendar automatically."
  },
  {
    icon: Heart,
    title: "Built for Sport, Dance & Wellness",
    description: "Designed specifically for fitness professionals and studios."
  }
];

export const ValuePropsSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {valueProps.map((prop, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-background border-2 border-foreground text-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <prop.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {prop.title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
