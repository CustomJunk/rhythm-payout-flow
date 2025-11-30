import { Shield, Lock, CheckCircle, Server } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "AES-256 encryption protects all your data"
  },
  {
    icon: Lock,
    title: "PCI Compliant",
    description: "Industry-standard payment security"
  },
  {
    icon: CheckCircle,
    title: "GDPR Ready",
    description: "Full compliance with data protection regulations"
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Hosted on enterprise-grade cloud servers"
  }
];

export const SecuritySection = () => {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Your security is our priority
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade security protecting your business and your clients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-background border-2 border-foreground text-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
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
