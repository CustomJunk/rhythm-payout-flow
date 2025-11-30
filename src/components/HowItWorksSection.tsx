const steps = [
  {
    number: "1",
    title: "Download & Sign Up",
    description: "Create your trainer profile in minutes"
  },
  {
    number: "2",
    title: "Set Your Schedule",
    description: "Add your availability and class details"
  },
  {
    number: "3",
    title: "Start Earning",
    description: "Clients book and you get paid instantly"
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-background border-2 border-foreground text-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};