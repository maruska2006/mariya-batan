import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import BlinkingLogo from "@/components/BlinkingLogo";

const Contact = () => {

  const contactLinks = [
    { name: "Email", value: "mariyabatan@gmail.com", href: "mailto:mariyabatan@gmail.com" },
    { name: "LinkedIn", value: "mariya-batan", href: "https://www.linkedin.com/in/mariya-batan" },
    { name: "Behance", value: "mariyabatan", href: "https://www.behance.net/mariyabatan" },
    { name: "Instagram", value: "@riyablyatphotos", href: "https://www.instagram.com/riyablyatphotos/" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-12 px-4 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-4 sm:mb-6 opacity-0 animate-fade-in">
              Contacts
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Commissions, collaborations, or compliments — all welcome.
            </p>
          </div>
          {/* Anchor kept for menu compatibility (no duplicate email UI) */}
          <div id="contact-form" />

          {/* Contact Information */}
          <div id="get-in-touch" className="space-y-6 sm:space-y-8 opacity-0 animate-slide-up" style={{ animationDelay: "0.35s" }}>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground mb-4 sm:mb-6">Get in Touch</h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-between p-4 sm:p-5 md:p-6 bg-card border border-border rounded-lg",
                      "transition-all duration-300 hover:scale-[1.02] hover:shadow-md group"
                    )}
                  >
                    <div className="min-w-0 flex-1 pr-4">
                      <p className="text-xs sm:text-sm text-muted-foreground mb-1">{link.name}</p>
                      <p className="text-sm sm:text-base md:text-lg text-foreground group-hover:text-primary transition-colors truncate">
                        {link.value}
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          {/* End Section */}
          <div className="mt-16 sm:mt-20 md:mt-24 text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Let's see where good design leads.
            </p>
          </div>

          {/* Blinking eye at the bottom (right eye animated) */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <BlinkingLogo className="scale-125 sm:scale-150" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
