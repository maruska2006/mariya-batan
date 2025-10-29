import { AnimatedText } from "./AnimatedText";

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-light leading-tight">
          <AnimatedText
            text="I've worked with a diverse range of clients for over 16 years."
            className="text-muted-foreground"
            highlightWords={["diverse"]}
          />
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mt-8 sm:mt-10 md:mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "2s" }}>
          Here's my recent & best work.
        </p>
      </div>
    </section>
  );
};
