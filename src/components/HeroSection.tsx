import { AnimatedText } from "./AnimatedText";

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-tight">
          <AnimatedText
            text="I've worked with a diverse range of clients for over 16 years."
            className="text-muted-foreground"
            highlightWords={["diverse"]}
          />
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "2s" }}>
          Here's my recent & best work.
        </p>
      </div>
    </section>
  );
};
