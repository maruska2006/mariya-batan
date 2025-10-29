import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Wireframing, prototyping, and interface design for web and mobile applications. Creating intuitive user experiences that delight and engage.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing", "Interface Design"],
    },
    {
      title: "Graphic Design",
      description: "Posters, branding, and print materials that capture attention and communicate your message effectively.",
      features: ["Brand Identity", "Print Design", "Marketing Materials", "Packaging Design", "Illustration"],
    },
    {
      title: "Photography & Editing",
      description: "Portrait, product, and creative photography with professional editing and retouching services.",
      features: ["Portrait Photography", "Product Photography", "Event Photography", "Photo Editing", "Retouching"],
    },
    {
      title: "Creative Direction",
      description: "Concept design, moodboards, and art direction to bring your creative vision to life.",
      features: ["Concept Development", "Moodboard Creation", "Art Direction", "Brand Strategy", "Visual Identity"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-4 sm:mb-6 opacity-0 animate-fade-in">
              Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Thoughtful design crafted to reflect who you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => {
              const sectionId = service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '') + '-service';
              return (
                <div
                  key={index}
                  id={sectionId}
                  className={cn(
                    "group bg-card border border-border rounded-lg p-5 sm:p-6 md:p-8",
                    "transition-all duration-500 hover:shadow-xl hover:scale-[1.02]",
                    "opacity-0 animate-scale-in"
                  )}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3 uppercase tracking-wide">
                    What's Included
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm sm:text-base text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing removed by request */}
                </div>
              );
            })}
          </div>

          {/* Pricing note */}
          <div className="mt-6 sm:mt-8 text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-xs sm:text-sm text-muted-foreground px-4">
              Every brief is unique — pricing is set individually.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 md:mt-20 text-center bg-secondary/30 rounded-lg p-6 sm:p-8 md:p-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-3 sm:mb-4">
              Custom Projects
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-5 sm:mb-6 px-4">
              Every project is unique. Let's discuss your specific needs and create a tailored solution.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
