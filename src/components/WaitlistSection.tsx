import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle } from "lucide-react";

export const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !role) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to join the waitlist.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call to placeholder endpoint
      const response = await fetch("https://example.com/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          role,
          timestamp: new Date().toISOString(),
        }),
      });

      // Since this is a placeholder endpoint, we'll simulate success
      setTimeout(() => {
        toast({
          title: "Welcome to the waitlist! 🎉",
          description: "We'll notify you as soon as DanceBook launches in your area.",
        });
        setEmail("");
        setRole("");
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support if the problem persists.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-primary-coral/5 to-accent-teal/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to revolutionize your{" "}
            <span className="bg-gradient-to-r from-primary-coral to-accent-teal bg-clip-text text-transparent">
              dance experience?
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join the waitlist and be among the first to experience seamless dance class booking with automatic payouts.
          </p>
          
          {/* Waitlist Form */}
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-left">
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-base"
                  required
                />
              </div>
              
              <div className="text-left">
                <label htmlFor="role" className="block text-sm font-medium text-card-foreground mb-2">
                  I am a...
                </label>
                <Select value={role} onValueChange={setRole} required>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trainer">Trainer / Instructor</SelectItem>
                    <SelectItem value="club">Dance Club / Studio</SelectItem>
                    <SelectItem value="dancer">Dancer / Student</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full group" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Joining waitlist..."
                ) : (
                  <>
                    Join the waitlist
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                Free to join
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                Early access
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                No spam
              </div>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            By joining the waitlist, you agree to receive updates about DanceBook.{" "}
            <br className="hidden sm:block" />
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};