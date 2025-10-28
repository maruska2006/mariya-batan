export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="opacity-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8">
            About Me
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              I'm Mariya — a multidisciplinary designer and visual artist crafting experiences where clarity meets emotion.
              My work moves across graphic design, UI/UX, photography, and motion, guided by a deep love for composition, rhythm, and storytelling.
            </p>
            <p>
              I believe design is not just how something looks — it's how it feels and communicates.
              Every project I take on is built with intention, shaped by detail, and driven by the idea that aesthetics and logic should coexist seamlessly.
            </p>
            <p>
              I don't chase trends — I build visual languages that speak, connect, and last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
