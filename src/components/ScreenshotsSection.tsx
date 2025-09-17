import appScreenshots from "@/assets/app-screenshots.jpg";

export const ScreenshotsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See DanceBook in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the smooth booking flow, trainer dashboard, and secure payment confirmation
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Screenshots Container */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-coral/20 to-accent-teal/20 rounded-3xl blur-xl"></div>
            <img
              src={appScreenshots}
              alt="DanceBook app screenshots showing booking flow, trainer dashboard, and payment confirmation"
              className="relative w-full rounded-2xl shadow-2xl"
            />
          </div>
          
          {/* Feature callouts */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-coral to-accent-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Booking flow
              </h3>
              <p className="text-muted-foreground">
                Browse trainers, select times, and book with just a few taps
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-coral to-accent-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Trainer dashboard
              </h3>
              <p className="text-muted-foreground">
                Manage classes, track earnings, and view performance analytics
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-coral to-accent-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Payment confirmation
              </h3>
              <p className="text-muted-foreground">
                Secure payment processing with instant confirmation and receipts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};