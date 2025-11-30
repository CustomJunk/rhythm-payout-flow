import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to simplify your business?
        </h2>
        <p className="text-xl md:text-2xl text-background/80 mb-10 max-w-3xl mx-auto">
          Join thousands of trainers and studios who trust MoveX for bookings and payments
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
            <Download className="w-5 h-5 mr-2" />
            Download MoveX
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-background text-background hover:bg-background hover:text-foreground">
            Learn More
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
