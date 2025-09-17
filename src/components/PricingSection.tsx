import { Calculator, TrendingUp, DollarSign } from "lucide-react";

export const PricingSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparent commission model
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, fair pricing with no hidden fees. We only succeed when you do.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Pricing Card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                Commission-based pricing
              </h3>
              <p className="text-muted-foreground">
                We deduct a small commission from each booking. No monthly fees, no setup costs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Calculator */}
              <div className="bg-gradient-to-br from-primary-coral/10 to-accent-teal/10 rounded-2xl p-6 border border-primary-coral/20">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="w-6 h-6 text-primary-coral" />
                  <h4 className="text-lg font-semibold text-foreground">
                    Example calculation
                  </h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Class price:</span>
                    <span className="font-semibold text-foreground">1000 UAH</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Platform fee (10%):</span>
                    <span className="font-semibold text-destructive">-100 UAH</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-semibold">Trainer receives:</span>
                      <span className="text-2xl font-bold text-success">900 UAH</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Benefits */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      No double taxation
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      We don't keep full amounts. Commission is deducted transparently.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-primary-coral" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Instant payouts
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Trainers receive their share automatically after each class.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-5 h-5 text-accent-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Complete transparency
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      See exactly how much you'll receive before confirming any booking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Note */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Early access pricing. Commission rates may vary by region and volume.{" "}
              <span className="text-primary-coral font-medium">No hidden fees ever.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};