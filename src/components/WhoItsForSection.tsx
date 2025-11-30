const categories = [
  "Personal Trainers",
  "Dance Instructors",
  "Yoga Teachers",
  "Pilates Studios",
  "Fitness Studios",
  "Gyms & Health Clubs"
];

export const WhoItsForSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who it's for
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MoveX is built for fitness professionals who want to streamline their business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 text-center hover:bg-surface transition-colors"
            >
              <p className="text-lg font-semibold text-foreground">{category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
