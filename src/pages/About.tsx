import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedText } from "@/components/AnimatedText";
import { SkillEyes } from "@/components/SkillEyes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const About = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleSections((prev) => [...new Set([...prev, index])]);
            
            // Trigger skill eyes animation when skills section comes into view
            if (index === 3) {
              setAnimateSkills(true);
              // Reset animation after it completes
              setTimeout(() => setAnimateSkills(false), 1500);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-index]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSkillHover = () => {
    setAnimateSkills(true);
    setTimeout(() => setAnimateSkills(false), 1500);
  };

  const experiences = [
    { 
      title: "Freelance UI/UX Designer", 
      company: "Remote", 
      period: "2023 – Present",
      description: "Designed and optimized interfaces for 20+ websites and mobile apps, improving conversion and engagement through thoughtful visual systems. Created scalable design systems ensuring cross-platform consistency and visual harmony. Conducted user testing and implemented feedback-driven design decisions, enhancing overall usability."
    },
    { 
      title: "UI/UX Design Intern", 
      company: "GEMA Services", 
      period: "Czech Republic · 2025",
      description: "Built responsive interfaces and interactive prototypes for logistics and retail platforms. Developed modular design systems and custom iconography, reducing design time by 25%. Improved user flow clarity and task completion rates through data-based iteration."
    },
    { 
      title: "Graphic Designer", 
      company: "Art Line Group", 
      period: "Uzbekistan · 2023 – Present",
      description: "Created print and digital visuals, vector illustrations, and branding materials for campaigns. Maintained high standards of precision, accessibility, and brand coherence."
    },
    { 
      title: "Visual Content Specialist", 
      company: "Remote", 
      period: "2024 – Present",
      description: "Produced illustrations and visuals for digital campaigns, optimizing designs by engagement metrics. Strengthened brand storytelling through unified cross-platform content."
    }
  ];

  const education = [
    { 
      degree: "Bachelor's program in Applied Graphics", 
      school: "National Institute of Fine Art and Design named after Kamoliddin Behzod, Department of Applied Graphics", 
      location: "Tashkent, Uzbekistan",
      description: "Specialized in visual communication, print and digital graphics, advertising design, illustration, packaging, and art photography. Core curriculum: academic drawing and painting, color theory, art history, composition, typography, calligraphy, digital graphics (Adobe Photoshop, Illustrator), project work, exhibition practice, and internships in creative industry."
    },
  ];

  const skills = [
    { name: "UI/UX Design", openEyes: 5, totalEyes: 6 },
    { name: "Graphic Design", openEyes: 4, totalEyes: 6 },
    { name: "Photography", openEyes: 4, totalEyes: 6 },
    { name: "Web Design", openEyes: 4, totalEyes: 6 },
    { name: "Branding", openEyes: 5, totalEyes: 6 },
    { name: "Illustration", openEyes: 3, totalEyes: 6 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6">
          {/* Running Text */}
          <div className="w-full overflow-hidden mb-32 relative">
            {/* Top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-primary/30"></div>
            
            <div className="flex animate-scroll-infinite whitespace-nowrap py-8">
              <div className="flex space-x-16">
                {Array.from({ length: 6 }, (_, i) => (
                  <span key={i} className="text-2xl md:text-3xl font-bold text-foreground">
                    YOUR WISH IS MY COMMAND
                  </span>
                ))}
              </div>
            </div>
            
            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/30"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-light leading-tight" style={{ wordSpacing: '0.5em', letterSpacing: '-0.050em' }}>
              <AnimatedText
                text="Design that moves through emotion, built with intention and quiet precision."
                className="text-foreground"
                highlightWords={["emotion", "intention"]}
              />
            </h1>
          </div>
        </section>

        {/* About Text Section */}
        <section 
          id="about-me"
          data-index="0"
          className={cn(
            "py-24 px-6 transition-all duration-1000",
            visibleSections.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-foreground">About Me</h2>
            
            {/* Mobile Layout */}
            <div className="md:hidden space-y-8">
              {/* Photo on top for mobile */}
              <div className="flex justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}me.png`}
                  alt="Mariya"
                  className="w-64 h-64 object-cover rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              {/* Text content */}
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-left">
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

            {/* Desktop Layout */}
            <div className="hidden md:block relative">
              {/* Large Photo */}
              <img
                src={`${import.meta.env.BASE_URL}me.png`}
                alt="Mariya"
                className="w-150 h-150 object-cover float-right mb-1 -mt-32"
                loading="lazy"
                decoding="async"
              />
              
              {/* Text content with text wrapping */}
              <div className="text-lg text-muted-foreground leading-relaxed space-y-8 max-w-5xl text-justify">
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

        {/* Work Experience Section */}
        <section 
          id="experience"
          data-index="1"
          className={cn(
            "py-24 px-6 bg-secondary/30 transition-all duration-500 ease-in-out",
            visibleSections.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-foreground">Work Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {experiences.map((exp, index) => {
                // Calculate z-index for proper layering
                const zIndex = 10 + (experiences.length - index); // Higher index = higher z-index
                
                return (
                  <div
                    key={index}
                    className="opacity-0 animate-slide-up group"
                    style={{ 
                      animationDelay: `${index * 0.2}s`,
                      zIndex: zIndex
                    }}
                  >
                    {/* Collapsed state */}
                    <div className="bg-card/50 rounded-lg p-2 border border-border/50 group-hover:border-primary/20 transition-all duration-300 cursor-pointer overflow-hidden group-hover:shadow-2xl group-hover:bg-white">
                      <h3 className="text-base group-hover:text-lg font-semibold text-foreground mb-1 leading-tight transition-all duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground font-medium text-sm mb-1 transition-all duration-300">{exp.company}</p>
                      <p className="text-xs text-muted-foreground transition-all duration-300">{exp.period}</p>
                      
                      {/* Expanded content - hidden by default, shown on hover */}
                      <div className="max-h-0 group-hover:max-h-[500px] overflow-hidden transition-all duration-500 ease-in-out">
                        <div className="pt-3 mt-2 border-t border-border/30">
                          <div className="space-y-3">
                            {exp.description.split('. ').filter(point => point.trim()).map((point, pointIndex) => (
                              <div key={pointIndex} className="flex items-start">
                                <span className="text-primary mr-3 mt-1 text-sm font-bold">→</span>
                                <p className="text-sm text-foreground leading-relaxed">
                                  {point.trim()}{point.includes('.') ? '' : '.'}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section 
          id="education"
          data-index="2"
          className={cn(
            "transition-all duration-1000 min-h-[60vh] flex items-center",
            visibleSections.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="container mx-auto max-w-4xl w-full">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-foreground">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-border pl-6 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{edu.degree}</h3>
                  <p className="text-muted-foreground mb-1">{edu.school}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.location}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section 
          id="skills"
          data-index="3"
          className={cn(
            "py-24 px-6 bg-secondary/30 transition-all duration-1000",
            visibleSections.includes(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          onMouseEnter={handleSkillHover}
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-foreground">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">
                      {skill.openEyes}/{skill.totalEyes}
                    </span>
                  </div>
                  <SkillEyes 
                    openEyes={skill.openEyes} 
                    totalEyes={skill.totalEyes}
                    className="justify-start"
                    animate={animateSkills}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section 
          id="programs"
          data-index="4"
          className={cn(
            "py-24 px-6 transition-all duration-1000",
            visibleSections.includes(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          onMouseEnter={handleSkillHover}
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-foreground">Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Adobe Photoshop", openEyes: 5, totalEyes: 6 },
                { name: "Adobe Illustrator", openEyes: 5, totalEyes: 6 },
                { name: "Adobe InDesign", openEyes: 4, totalEyes: 6 },
                { name: "Figma", openEyes: 5, totalEyes: 6 },
                { name: "Adobe After Effects", openEyes: 4, totalEyes: 6 },
                { name: "Adobe Lightroom", openEyes: 5, totalEyes: 6 },
                { name: "Premiere Pro", openEyes: 4, totalEyes: 6 },
                { name: "Blender", openEyes: 3, totalEyes: 6 },
              ].map((program, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-foreground font-medium">{program.name}</span>
                    <span className="text-muted-foreground text-sm">
                      {program.openEyes}/{program.totalEyes}
                    </span>
                  </div>
                  <SkillEyes 
                    openEyes={program.openEyes} 
                    totalEyes={program.totalEyes}
                    className="justify-start"
                    animate={animateSkills}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* End Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-2xl text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Appreciate your time — I designed everything you've just seen. Your turn to design a message.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
