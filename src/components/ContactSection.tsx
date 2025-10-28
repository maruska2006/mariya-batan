export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="opacity-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-12">
            Let's Work Together
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl">
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out.
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:hello@example.com"
                className="block text-foreground hover:text-muted-foreground transition-colors duration-300 group"
              >
                <span className="text-sm text-muted-foreground block mb-1">Email</span>
                <span className="text-2xl font-light group-hover:translate-x-2 inline-block transition-transform duration-300">
                  hello@example.com
                </span>
              </a>
              
              <a
                href="tel:+1234567890"
                className="block text-foreground hover:text-muted-foreground transition-colors duration-300 group"
              >
                <span className="text-sm text-muted-foreground block mb-1">Phone</span>
                <span className="text-2xl font-light group-hover:translate-x-2 inline-block transition-transform duration-300">
                  +1 (234) 567-890
                </span>
              </a>
            </div>
            
            <div className="flex gap-6 pt-8">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
