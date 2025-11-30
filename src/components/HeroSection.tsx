import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroImage from "@/assets/movex-app-mockup.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Book sport, dance & wellness classes.{" "}
              <span className="block mt-2">Get paid instantly.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl font-light">
              MoveX simplifies bookings, automates payments, and helps trainers grow their business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                <Download className="w-5 h-5 mr-2" />
                Download MoveX
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative max-w-xs lg:max-w-sm">
              <img
                src={heroImage}
                alt="MoveX mobile app interface showing lesson booking calendar"
                className="relative w-full rounded-3xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};