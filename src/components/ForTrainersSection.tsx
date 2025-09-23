import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  FileX,
  ArrowRight
} from "lucide-react";

const trainerBenefits = [
  {
    icon: DollarSign,
    title: "Auto payouts",
    description: "Receive earnings automatically after each class"
  },
  {
    icon: Calendar,
    title: "Calendar sync",
    description: "Seamless integration with your existing schedule"
  },
  {
    icon: TrendingUp,
    title: "Earnings dashboard",
    description: "Track performance and optimize your income"
  },
  {
    icon: FileX,
    title: "No bank reconciliation",
    description: "Skip the paperwork and admin hassle"
  }
];

export const ForTrainersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-surface to-surface-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built for trainers & clubs
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Focus on teaching while we handle the business side. Get paid automatically, manage your schedule effortlessly, and grow your dance business.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {trainerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-coral to-accent-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* <Button variant="waitlist" size="lg" className="group">
              Become a trainer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button> */}
          </div>
          
          {/* Stats Card */}
          <div className="bg-card rounded-3xl p-8 border border-border shadow-xl">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              Join our growing community
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-surface rounded-xl">
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Active trainers</p>
                </div>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-surface rounded-xl">
                <div>
                  <p className="text-2xl font-bold text-foreground">12k+</p>
                  <p className="text-sm text-muted-foreground">Classes booked</p>
                </div>
                <div className="w-12 h-12 bg-primary-coral/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-coral" />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-surface rounded-xl">
                <div>
                  <p className="text-2xl font-bold text-foreground">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfaction rate</p>
                </div>
                <div className="w-12 h-12 bg-accent-teal/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-accent-teal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};