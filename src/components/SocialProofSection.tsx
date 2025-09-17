import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sofia Martinez",
    role: "Salsa Instructor",
    content: "Finally, a platform that handles payments automatically! I can focus on teaching while my students book and pay seamlessly.",
    rating: 5,
    avatar: "SM"
  },
  {
    name: "Dance Studio Elite",
    role: "Dance Studio",
    content: "The split payout system is a game-changer. We manage 15+ instructors and the automatic commission handling saves us hours each week.",
    rating: 5,
    avatar: "DE"
  },
  {
    name: "Marcus Chen",
    role: "Hip-Hop Dancer",
    content: "Booking classes is so easy now. Apple Pay makes payment instant, and I love being able to rate my trainers.",
    rating: 5,
    avatar: "MC"
  }
];

const partners = [
  "Dance Academy Pro",
  "Urban Movement",
  "Ballet Studio Central",
  "Rhythm & Flow"
];

export const SocialProofSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by dancers & trainers worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands who are already using DanceBook to streamline their dance experience
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border border-border relative"
            >
              <Quote className="w-8 h-8 text-primary-coral mb-4 opacity-50" />
              
              <p className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-coral to-accent-teal rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Partners */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8">
            Trusted by leading dance studios
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-surface rounded-lg border border-border"
              >
                <span className="text-muted-foreground font-medium">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              500+
            </p>
            <p className="text-muted-foreground">
              Beta users
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              12k+
            </p>
            <p className="text-muted-foreground">
              Classes booked
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              98%
            </p>
            <p className="text-muted-foreground">
              Satisfaction rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};