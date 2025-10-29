import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

type Category = "uiux" | "graphic" | "photography";

// Helper function to get image path with BASE_URL
const getImagePath = (path: string) => `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [loadedThumbnails, setLoadedThumbnails] = useState<Set<string>>(new Set());
  const location = useLocation();
  const navigate = useNavigate();

  // Handle navigation from dropdown menu
  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  // Handle browser back button for modal
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // Only close modal if we have a project selected
      if (selectedProject) {
        setSelectedProject(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedProject]);

  // Update URL when modal opens
  const handleOpenProject = (project: any) => {
    setSelectedProject(project);
    const projectId = project.id || 'project';
    const newUrl = `/portfolio?project=${projectId}`;
    
    // Push new state to history
    window.history.pushState({ project: projectId }, '', newUrl);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    // Simply remove project parameter from URL
    const cleanUrl = '/portfolio';
    window.history.replaceState({}, '', cleanUrl);
  };

  const handleThumbnailLoad = (projectId: string) => {
    setLoadedThumbnails(prev => new Set([...prev, projectId]));
  };

  const categories = [
    { id: "uiux" as Category, name: "UI/UX" },
    { id: "graphic" as Category, name: "Graphic Design" },
    { id: "photography" as Category, name: "Photography" },
  ];

  // Tooltip texts for projects
  const tooltipTexts: Record<string, string> = {
    "portfolio-website": "Designing my own portfolio — where creativity meets code.",
    "project-1": "Different people, same precision — identity as design language.",
    "project-2": "Two moods, one café — matcha mornings meet cocktail nights.",
    "project-3": "Metallic power meets solar glow — beauty with attitude.",
    "project-4": "Engineering elegance — structure made visual.",
    "project-5": "Three nations, three textures — one visual rhythm.",
    "project-6": "Bold colors. Sweet drinks. Zero rules.",
    "project-7": "Fresh design, warm bread, honest style.",
    "project-8": "Sound. Text. Silence — wearable emotion.",
    "project-9": "Read it like it's hot — art, irony, and pure energy.",
    "project-10": "Concrete. Memory. Design — brutalism reimagined.",
    "project-11": "Eye to eye with art — typography that watches back.",
    "project-12": "Turning agricultural data into design that grows trust.",
    "farm2fork-website": "Turning complex data ethics into visual warmth and trust.",
    "portrait-photography": "Where faces turn into stories.",
    "nature-photography": "Chaos, beauty, and everything that grows in between.",
    "product-photography": "Objects that look back at you.",
  };

  const projects = {
    uiux: [
      { 
        id: "portfolio-website",
        title: "Creative Portfolio Website", 
        description: "A personal portfolio website showcasing design work across UI/UX, graphic design, and photography.", 
        thumbnail: getImagePath("/me.png"),
        author: "Mariya Batan",
        tags: ["Web Design", "Portfolio", "UI/UX", "Self-Designed"],
        folder: "portfolio",
        files: [],
        content: {
          overview: "A fully custom-designed and developed portfolio website that showcases my work across multiple creative disciplines. Built from scratch with React, TypeScript, and Tailwind CSS, this site reflects my design philosophy: minimal, intentional, and emotional. The site features smooth animations, interactive galleries, and a cohesive visual language that connects photography, graphic design, and UI/UX work.",
          concept: "The design centers around a personal eye logo and human touch iconography, creating a visual identity that's both professional and intimate. Large typography, generous whitespace, and subtle animations guide visitors through my creative process and body of work.",
          application: "The website serves as both a portfolio and a reflection of my design approach — where clarity meets emotion, and structure meets artistry. It demonstrates full-stack design and development capabilities, from concept to deployment.",
          outcome: "Successfully created a unique online presence that authentically represents my multidisciplinary creative practice and invites potential clients and collaborators to engage with my work."
        }
      },
      { 
        id: "project-3",
        title: "Influence Beauty Digital Campaigns", 
        description: "A series of promo emails and mobile layouts for Influence Beauty product launches.", 
        thumbnail: getImagePath("/my work/grafic design/email/Free_iPhone_16_Mockup_5.png"),
        author: "Mariya Batan",
        tags: ["Email Design", "Digital", "Branding", "Mobile"],
        folder: "email",
        files: [
          "/my work/grafic design/email/Free_ihone_16_Mockup_5.png",
          "/my work/grafic design/email/email 2.0.jpg",
          "/my work/grafic design/email/Frame 1.jpg",
          "/my work/grafic design/email/Free_iPhone_16_Mockup_5.png"
        ].map(getImagePath),
        content: {
          overview: "A series of promo emails and mobile layouts for Influence Beauty product launches — Petroleum Collection and Solaris Foundation. Each design translates the brand's identity into motion and emotion: metallic gloss and holographic energy for Petroleum, warm sunlight and skincare softness for Solaris. The goal was to merge beauty storytelling with sleek e-commerce clarity.",
          concept: "Developed as responsive digital campaigns optimized for both email and mobile. Each layout combines bold typography, striking product imagery, and dynamic hierarchy to guide the user from curiosity to conversion.",
          application: "The campaigns delivered high visual impact and brand consistency across digital touchpoints. Petroleum glows with futuristic energy; Solaris radiates warmth and care — together they form a cohesive visual narrative that reflects Influence Beauty's confident, modern voice.",
          outcome: "Successfully created digital campaigns that effectively communicate product personality while driving engagement and conversion through compelling visual storytelling."
        }
      },
      { 
        id: "farm2fork-website",
        title: "FARM2FORK – Website Design for AI-Powered Agriculture", 
        description: "Designing a clear, human-centered website for FARM2FORK Data Solutions — an EU-supported initiative connecting AI, sustainability, and digital ethics in cacao farming.", 
        thumbnail: getImagePath("/my work/uiux/mockup/Free_iMac_Mockup_1.jpg"),
        author: "Mariya Batan",
        tags: ["Web Design", "AI", "Sustainability", "UI/UX"],
        folder: "uiux",
        files: [
          "/my work/uiux/mockup/Free_iMac_Mockup_1.jpg",
          "/my work/uiux/mockup/Free_iMac_Mockup_3.jpg",
          "/my work/uiux/mockup/Free_iPhone_11_Pro_Mockup_4.jpg",
          "/my work/uiux/desktop/home page web.jpg",
          "/my work/uiux/desktop/about us.jpg",
          "/my work/uiux/desktop/digital responsibility.jpg",
          "/my work/uiux/desktop/tech side.jpg",
          "/my work/uiux/desktop/our work.jpg",
          "/my work/uiux/desktop/Page - Contact Us.jpg",
          "/my work/uiux/desktop/onboarding.jpg",
          "/my work/uiux/mobile/home page.jpg",
          "/my work/uiux/mobile/Page - About Us.jpg",
          "/my work/uiux/mobile/Page - Digital Responsibility & Data Ethics.jpg",
          "/my work/uiux/mobile/Page - Our Work.jpg",
          "/my work/uiux/mobile/Page - Contact Us.jpg",
          "/my work/uiux/mobile/Page - Onboarding.jpg"
        ].map(getImagePath),
        content: {
          overview: "Designing a clear, human-centered website for FARM2FORK Data Solutions — an EU-supported initiative connecting AI, sustainability, and digital ethics in cacao farming. The concept merges organic visual language with modern data aesthetics, creating a bridge between science and storytelling.",
          concept: "Full web design and structure for a multi-page platform: Home page introducing the brand's mission ('Data Science with a Human Face'). About Us and Team sections combining personality and professionalism. Digital Responsibility and Technical Side pages visualizing GDPR, FAIR, and DRG principles through clean infographics and icons. Our Work and Products pages explaining the workflow 'from farm to consumer' using simple, looping diagrams and warm tones. Contact and Onboarding pages with soft color accents and natural forms for trust and accessibility.",
          application: "A cohesive digital identity that transforms complex AI and data ethics concepts into engaging, understandable, and visually fresh storytelling.",
          outcome: "The design is friendly, transparent, and inclusive — reflecting data science with empathy and purpose."
        }
      },
    ],
    graphic: [
      { 
        id: "project-1",
        title: "Business Card Series", 
        description: "A dual-card project exploring personal and corporate identity through minimal layout and refined typography.", 
        thumbnail: getImagePath("/my work/grafic design/business cards/Business_Card_Mockup_1.png"),
        author: "Mariya Batan",
        tags: ["Print Design", "Branding", "Typography", "Corporate Identity"],
        folder: "business cards",
        files: [
          "/my work/grafic design/business cards/Business_Card_Mockup_1.png",
          "/my work/grafic design/business cards/Business_Card_Mockup_3.png",
          "/my work/grafic design/business cards/Business_Card_Mockup_4.png",
          "/my work/grafic design/business cards/визитка1.jpg",
          "/my work/grafic design/business cards/визитка2.jpg",
          "/my work/grafic design/business cards/kateArtboard 1.jpg",
          "/my work/grafic design/business cards/kateArtboard 2.jpg",
          "/my work/grafic design/business cards/meowArtboard 1.jpg",
          "/my work/grafic design/business cards/meowArtboard 2.jpg"
        ].map(getImagePath),
        content: {
          overview: "A dual-card project exploring personal and corporate identity through minimal layout and refined typography. Each design focuses on translating individuality into visual form — from the experimental tech aesthetic of Ekaterina Kuzmina to the structured elegance of Art Line Group.",
          concept: "Created as part of a branding exercise combining two distinct worlds — technology and art. The cards were designed for both print and digital presentation mockups, emphasizing clarity, balance, and material feel.",
          application: "The final pieces highlight contrast in professional communication styles while maintaining a cohesive visual language. The minimalist approach, soft color palette, and subtle typographic rhythm make the series adaptable and timeless.",
          outcome: "The business cards showcase professional versatility while maintaining individuality, demonstrating how typography and minimal design can communicate both personal and corporate identities effectively."
        }
      },
      { 
        id: "project-2",
        title: "Efsy Morning & Evening Flyers", 
        description: "A lively flyer duo for Efsy café, celebrating the contrast between early-morning calm and late-night charm.", 
        thumbnail: getImagePath("/my work/grafic design/efsy/Free_DL_Flyer_Mockup_2.png"),
        author: "Mariya Batan",
        tags: ["Flyer Design", "Branding", "Typography", "Print"],
        folder: "efsy",
        files: [
          "/my work/grafic design/efsy/Free_DL_Flyer_Mockup_2.png",
          "/my work/grafic design/efsy/флаер1.jpg",
          "/my work/grafic design/efsy/флаер2.jpg"
        ].map(getImagePath),
        content: {
          overview: "A lively flyer duo for Efsy café, celebrating the contrast between early-morning calm and late-night charm. The design uses a clean typographic grid paired with bold color blocking — white for 'Morning Crush' and deep red for 'Sexy PM.' The playful visual rhythm mirrors the café's identity: casual, energetic, and a bit cheeky.",
          concept: "Developed as a print and digital promotion for the café's updated menu. Each flyer introduces a different mood and time of day — one inviting you for a matcha morning, the other for a cocktail evening.",
          application: "The series successfully captures Efsy's friendly and vibrant personality, uniting food and design through tone, texture, and typography. The project highlights how visual storytelling can make even a menu feel like a lifestyle moment.",
          outcome: "The flyers effectively communicate two distinct moments in the café's day, creating visual identity that speaks to diverse audiences while maintaining brand consistency."
        }
      },
      { 
        id: "project-4",
        title: "ERIELL Corporate Brochure", 
        description: "A bilingual corporate brochure designed for ERIELL Group, an international oilfield services company.", 
        thumbnail: getImagePath("/my work/grafic design/eriel/Free_A4_Brochure_Mockup_1.png"),
        author: "Mariya Batan",
        tags: ["Corporate Design", "Brochure", "Bilingual", "Print"],
        folder: "eriel",
        files: [
          "/my work/grafic design/eriel/Free_A4_Brochure_Mockup_1.png",
          "/my work/grafic design/eriel/eriell-1.jpg",
          "/my work/grafic design/eriel/eriell-2.jpg",
          "/my work/grafic design/eriel/eriell-3.jpg",
          "/my work/grafic design/eriel/eriell-4.jpg"
        ].map(getImagePath),
        content: {
          overview: "A bilingual corporate brochure designed for ERIELL Group, an international oilfield services company. The layout merges strict geometry and clarity with a subtle sense of rhythm — large circular forms and modular grids guide the reader's attention through complex technical and strategic content. The design aims to communicate innovation, scale, and transparency.",
          concept: "Created for the company's presentation at the Eurasian Forum 'Integration, Energy, Future'. The brochure was prepared for print and digital distribution, introducing ERIELL's activities, international projects, and technological leadership to a global audience.",
          application: "The final publication delivers a clear and elegant visual identity aligned with ERIELL's corporate image. Its minimalist aesthetic and precise composition highlight the company's professionalism while maintaining accessibility and visual balance.",
          outcome: "Successfully presented ERIELL's complex technical information in an accessible and visually compelling format, enhancing the company's professional image on the international stage."
        }
      },
      { 
        id: "project-5",
        title: "Cultural Festival Posters Series", 
        description: "A visual trilogy of posters designed for cultural festivals celebrating the traditional art, cuisine, and music of Uzbekistan, Belarus, and Russia.", 
        thumbnail: getImagePath("/my work/grafic design/events/Shop_Poster_Frame_Mockup_1.jpg"),
        author: "Mariya Batan",
        tags: ["Poster Design", "Cultural Identity", "Typography", "Minimalism"],
        folder: "events",
        files: [
          "/my work/grafic design/events/Glossy_A4_Paper_Mockup_6.jpg",
          "/my work/grafic design/events/uzb.jpg",
          "/my work/grafic design/events/беларусь.jpg",
          "/my work/grafic design/events/раша.jpg"
        ].map(getImagePath),
        content: {
          overview: "A visual trilogy of posters designed for cultural festivals celebrating the traditional art, cuisine, and music of Uzbekistan, Belarus, and Russia. Each design reinterprets national motifs through minimalist composition — letting color, pattern, and texture tell the story. The series balances authenticity with modern clarity, turning folklore into contemporary graphic language.",
          concept: "Created as a conceptual project exploring identity through design. Each poster uses traditional ornamentation — Uzbek ikat, Belarusian embroidery, and Russian Gzhel ceramics — adapted into clean, editorial layouts suitable for exhibition, print, or digital use.",
          application: "The project highlights cultural diversity through design minimalism. Subtle typography and composition unify the series while preserving each culture's distinct aesthetic rhythm. Together, the posters form a calm yet expressive visual narrative about heritage and modernity.",
          outcome: "Successfully created a cohesive series that celebrates cultural diversity while maintaining a unified visual language, demonstrating how minimal design can honor tradition and heritage."
        }
      },
      { 
        id: "project-6",
        title: "Cocktail Time Posters", 
        description: "A playful poster duo designed for Bla Bla Bar's summer cocktail event.", 
        thumbnail: getImagePath("/my work/grafic design/food/Glossy_A4_Paper_Mockup_6.png"),
        author: "Mariya Batan",
        tags: ["Poster Design", "Event", "Typography", "Pop Art"],
        folder: "food",
        files: [
          "/my work/grafic design/food/Free_Citylight_Poster_Mockup_3.jpg",
          "/my work/grafic design/food/aaa.jpg",
          "/my work/grafic design/food/aaaa.jpg",
          "/my work/grafic design/food/Glossy_A4_Paper_Mockup_6.png"
        ].map(getImagePath),
        content: {
          overview: "A playful poster duo designed for Bla Bla Bar's summer cocktail event. The visuals mix bold typography, punchy gradients, and glossy fruit photography to create a bright, almost pop-art mood. Each version reflects a different flavor and feeling — strawberry red for sweet fun, orange sunset tones for energetic vibes.",
          concept: "Developed as a print and social media campaign for event promotion. The minimalist layout focuses on contrast and rhythm, keeping the message clear while radiating summer warmth and nightlife energy.",
          application: "The posters capture the essence of Cocktail Time — casual, fun, and visually irresistible. Their clean geometry and saturated palette make them instantly recognizable both on walls and in digital feeds.",
          outcome: "Successfully created eye-catching event materials that communicate the vibrant atmosphere of summer nightlife while maintaining brand recognition and visual appeal."
        }
      },
      { 
        id: "project-7",
        title: "Breadly Menu Design", 
        description: "A minimalistic tri-fold menu design created for Breadly Café, focused on visual simplicity and tactile warmth.", 
        thumbnail: getImagePath("/my work/grafic design/menu/Roll_Fold_DL_Flyer_Mockup_5.png"),
        author: "Mariya Batan",
        tags: ["Menu Design", "Branding", "Typography", "Print"],
        folder: "menu",
        files: [
          "/my work/grafic design/menu/Roll_Fold_DL_Flyer_Mockup_1.png",
          "/my work/grafic design/menu/меню1.jpg",
          "/my work/grafic design/menu/меню2.jpg",
          "/my work/grafic design/menu/меню3.jpg",
          "/my work/grafic design/menu/меню4.jpg",
          "/my work/grafic design/menu/меню5.jpg",
          "/my work/grafic design/menu/меню6.jpg"
        ].map(getImagePath),
        content: {
          overview: "A minimalistic tri-fold menu design created for Breadly Café, focused on visual simplicity and tactile warmth. The layout uses generous white space and a restrained color palette to highlight the artisanal bread photography and natural textures. Typography choice reflects clarity and craftsmanship — each detail feels precise yet human.",
          concept: "Designed for print in a tri-fold A4 format. The front cover features the logo as a central accent, while the interior organizes the menu into clean typographic columns. The structure ensures readability and conveys the calm, confident atmosphere of the café.",
          application: "The final design combines elegance with authenticity — modern minimalism meets traditional bakery aesthetics. The result is a cohesive brand experience that looks as refined as the bread tastes.",
          outcome: "Successfully created a menu design that enhances the café's brand identity, demonstrating how minimal design can communicate quality and craftsmanship effectively."
        }
      },
      { 
        id: "project-8",
        title: "БЦХ Merch Collection", 
        description: "A limited T-shirt collection created for the music group БЦХ.", 
        thumbnail: getImagePath("/my work/grafic design/merch/test2.jpg"),
        author: "Mariya Batan",
        tags: ["Merchandise", "Typography", "Branding", "Fashion"],
        folder: "merch",
        files: [
          "/my work/grafic design/merch/Cropped_T-Shirt_Mockup.jpg",
          "/my work/grafic design/merch/test1.jpg",
          "/my work/grafic design/merch/test2.jpg",
          "/my work/grafic design/merch/test3.jpg"
        ].map(getImagePath),
        content: {
          overview: "A limited T-shirt collection created for the music group БЦХ. The design explores how words and visual silence interact — turning lyrics and fragments of speech into wearable graphic language. Each piece transforms emotion into layout, merging brutalist typography with poetic rawness.",
          concept: "The project combines typographic structure, cultural irony, and minimalist design. Black and white colorways highlight contrast between expression and restraint — text becomes the main visual tool.",
          application: "More than merch — it's identity translated into fabric. The collection captures the atmosphere of БЦХ: sharp, emotional, and unfiltered.",
          outcome: "Successfully created a merchandise collection that extends the band's identity into wearable form, demonstrating how typography can communicate emotion and cultural voice."
        }
      },
      { 
        id: "project-9",
        title: "MIKABOOKHOT - Read it like it's hot", 
        description: "A visual identity and campaign for an experimental project that blurs the line between art, fashion, and publishing.", 
        thumbnail: getImagePath("/my work/grafic design/mikabook/Shop_Poster_Frame_Mockup_1.jpg"),
        author: "Mariya Batan",
        tags: ["Branding", "Poster Design", "Typography", "Editorial"],
        folder: "mikabook",
        files: [
          "/my work/grafic design/mikabook/mika1.png",
          "/my work/grafic design/mikabook/mika.png",
          "/my work/grafic design/mikabook/mika2.png",
          "/my work/grafic design/mikabook/mika3.jpg",
          "/my work/grafic design/mikabook/mika3.png",
          "/my work/grafic design/mikabook/mikaa4.png",
          "/my work/grafic design/mikabook/mikabook1.jpg",
          "/my work/grafic design/mikabook/mikabook2.jpg",
          "/my work/grafic design/mikabook/IMG_0231.jpg",
          "/my work/grafic design/mikabook/IMG_0505.jpg",
          "/my work/grafic design/mikabook/Glossy_A4_Paper_Mockup_3.png"
        ].map(getImagePath),
        content: {
          overview: "A visual identity and campaign for an experimental project that blurs the line between art, fashion, and publishing. It plays with irony, pop energy, and a mix of physical and digital textures — turning reading into an act of attitude. The brand's core statement: a book can be hotter than a look.",
          concept: "The campaign includes poster series, event visuals, and editorial photography that merge typographic rhythm with personality. Each piece becomes a part of one visual system built on bold repetition, contrast, and irony. Typography drives emotion, while imagery keeps it intimate and raw.",
          application: "The final result is a recognizable and playful identity that connects the underground aesthetic with editorial confidence. MIKABOOKHOT becomes more than just a product — it's a visual statement, a collectible, and a mood.",
          outcome: "Successfully created a brand identity that challenges traditional boundaries between art forms, demonstrating how visual design can transform a product into a cultural statement."
        }
      },
      { 
        id: "project-10",
        title: "Toshkent", 
        description: "A graphic poster series dedicated to the brutalist architecture of Tashkent.", 
        thumbnail: getImagePath("/my work/grafic design/tashkent/Shop_Poster_Frame_Mockup_1.jpg"),
        author: "Mariya Batan",
        tags: ["Poster Design", "Architecture", "Typography", "Documentary"],
        folder: "tashkent",
        files: [
          "/my work/grafic design/tashkent/Poster_Wall_Mockup.jpg",
          "/my work/grafic design/tashkent/tas-01.png",
          "/my work/grafic design/tashkent/tas-02.png",
          "/my work/grafic design/tashkent/tas-03.png",
          "/my work/grafic design/tashkent/tas-04.png",
          "/my work/grafic design/tashkent/tas-05.png"
        ].map(getImagePath),
        content: {
          overview: "A graphic poster series dedicated to the brutalist architecture of Tashkent. The project reimagines Soviet-era monumental buildings through a contemporary lens, combining historical data with modern design principles. The use of halftone textures and muted tones evokes archival print aesthetics while emphasizing the sculptural nature of each structure.",
          concept: "Each poster highlights one architectural landmark — its architect, purpose, and year of construction — transforming documentary information into visual storytelling. Typography inspired by industrial stencil lettering enhances the sense of urban monumentality. The project balances precision and nostalgia, creating a bridge between architectural heritage and visual culture.",
          application: "The Toshkent series stands as both a tribute and reinterpretation of post-Soviet visual identity. It captures the quiet power of concrete forms and translates the city's historical memory into contemporary graphic expression.",
          outcome: "Successfully created a visual documentation series that preserves architectural heritage while providing fresh perspectives on urban identity and historical memory through design."
        }
      },
      { 
        id: "project-11",
        title: "Z očí do očí – OKO v umění 1900–2025", 
        description: "A poster series created for a conceptual exhibition at Museum Kampa exploring the motif of the eye in modern and contemporary art.", 
        thumbnail: getImagePath("/my work/grafic design/z oka do oka/Shop_Poster_Frame_Mockup_1.jpg"),
        author: "Mariya Batan",
        tags: ["Exhibition Design", "Typography", "Museum", "Conceptual"],
        folder: "z oka do oka",
        files: [
          "/my work/grafic design/z oka do oka/Free_Citylight_Poster_Mockup_4.jpg",
          "/my work/grafic design/z oka do oka/Poster_Frame_on_the_Wall_Mockup_3.jpg",
          "/my work/grafic design/z oka do oka/plakaty1-1.jpg",
          "/my work/grafic design/z oka do oka/plakaty1-2.jpg",
          "/my work/grafic design/z oka do oka/plakaty1-3.jpg",
          "/my work/grafic design/z oka do oka/plakaty1-4.jpg",
          "/my work/grafic design/z oka do oka/plakaty1-5.jpg",
          "/my work/grafic design/z oka do oka/plakaty1-6.jpg",
          "/my work/grafic design/z oka do oka/plakaty3-1.jpg",
          "/my work/grafic design/z oka do oka/plakaty3-2.jpg",
          "/my work/grafic design/z oka do oka/plakaty3-3.jpg",
          "/my work/grafic design/z oka do oka/plakaty4-1.jpg",
          "/my work/grafic design/z oka do oka/plakaty4-2.jpg",
          "/my work/grafic design/z oka do oka/plakaty4-3.jpg",
          "/my work/grafic design/z oka do oka/plakaty4-4.jpg",
          "/my work/grafic design/z oka do oka/plakaty5-1.jpg",
          "/my work/grafic design/z oka do oka/plakaty5-2.jpg",
          "/my work/grafic design/z oka do oka/plakaty5-3.jpg",
          "/my work/grafic design/z oka do oka/plakaty5-4.jpg",
          "/my work/grafic design/z oka do oka/plakaty5-5.jpg"
        ].map(getImagePath),
        content: {
          overview: "A poster series created for a conceptual exhibition at Museum Kampa exploring the motif of the eye in modern and contemporary art. The visual design focuses on perception and symmetry — using typographic fragmentation and spatial balance to evoke the act of looking. Each composition transforms the simple idea of an 'eye' into a rhythmic graphic form, reflecting both observation and introspection.",
          concept: "Developed as a print and digital campaign for the exhibition's promotional materials. The series includes multiple typographic variations that experiment with hierarchy, legibility, and movement. The modular grid allows flexible adaptation across different formats — from posters to exhibition signage.",
          application: "The project translates curatorial intent into a visually striking typographic system. Through minimal means, it captures the duality of the theme — seeing and being seen — while maintaining elegance and clarity suitable for a museum environment.",
          outcome: "Successfully created exhibition materials that communicate complex conceptual themes through visual design, demonstrating how typography can become a form of artistic expression."
        }
      },
      { 
        id: "project-12",
        title: "FARM2FORK — AI-Driven Agricultural Flyers", 
        description: "Visual identity and information design for a research-based agricultural project combining AI, data transparency, and sustainability.", 
        thumbnail: getImagePath("/my work/grafic design/flyers/A4_Flyer_Mockup_1.jpg"),
        author: "Mariya Batan",
        tags: ["Flyer Design", "Information Design", "Agriculture", "Data Visualization"],
        folder: "flyers",
        files: [
          "/my work/grafic design/flyers/A4_Flyer_Mockup_1.jpg",
          "/my work/grafic design/flyers/my4-1.jpg",
          "/my work/grafic design/flyers/my4-2.jpg"
        ].map(getImagePath),
        content: {
          overview: "Visual identity and information design for a research-based agricultural project combining AI, data transparency, and sustainability. The goal was to make highly technical content approachable — translating complex data pipelines into clear, visually balanced communication.",
          concept: "Design of A4 flyers for the FARM2FORK Data Solutions initiative, highlighting their two main systems: CacaoTech360 and QCtech360. Created a dual-page layout that merges earthy color tones, soft typographic hierarchy, and vector illustrations to connect tech innovation with nature. The layout follows a modular grid to keep information legible while maintaining visual warmth and trustworthiness.",
          application: "The final design communicates credibility and accessibility — turning technical AI and NIR-based systems into a story of sustainability and transparency. Used at conferences and presentations to visually explain the workflow 'from farm to consumer' in a clean, modern, and human-centered format.",
          outcome: "Successfully translated complex agricultural data systems into accessible, trustworthy visual communication suitable for scientific and commercial audiences."
        }
      },
    ],
    photography: [
      { 
        id: "portrait-photography",
        title: "Portrait Photography", 
        description: "Creative portrait sessions and people photography", 
        thumbnail: getImagePath("/my work/photos/люди/IMG_0231.jpg"),
        author: "Mariya Batan",
        tags: ["Photography", "Portraits", "People"],
        folder: "люди",
        files: [
          "/my work/photos/люди/IMG_0014.jpg",
          "/my work/photos/люди/IMG_0029.jpg",
          "/my work/photos/люди/IMG_0065.jpg",
          "/my work/photos/люди/IMG_0223.jpg",
          "/my work/photos/люди/IMG_0231.jpg",
          "/my work/photos/люди/IMG_0650.jpg",
          "/my work/photos/люди/IMG_0654.jpg",
          "/my work/photos/люди/IMG_0679.jpg",
          "/my work/photos/люди/IMG_0702.jpg",
          "/my work/photos/люди/IMG_0704.jpg",
          "/my work/photos/люди/IMG_4718.jpg",
          "/my work/photos/люди/IMG_4733.JPG",
          "/my work/photos/люди/IMG_4734.JPG",
          "/my work/photos/люди/IMG_5080.JPG",
          "/my work/photos/люди/IMG_5286.jpg",
          "/my work/photos/люди/IMG_5432.jpg",
          "/my work/photos/люди/IMG_5449.jpg",
          "/my work/photos/люди/IMG_5453.jpg",
          "/my work/photos/люди/IMG_5582.JPG",
          "/my work/photos/люди/IMG_9939 copy-2.jpg",
          "/my work/photos/люди/IMG_9967.png",
          "/my work/photos/люди/test12.jpg"
        ].map(getImagePath),
        content: {
          overview: "Creative portrait photography sessions capturing the essence and personality of individuals through thoughtful composition and lighting.",
          concept: "Focus on natural expressions and authentic moments, using available light and creative angles to create compelling portraits.",
          application: "Used for personal branding, social media content, and artistic portfolios.",
          outcome: "Striking portraits that reveal character and create emotional connections with viewers."
        }
      },
      { 
        id: "nature-photography",
        title: "Nature Photography", 
        description: "Artistic nature compositions and landscape photography", 
        thumbnail: getImagePath("/my work/photos/природа/IMG_4287.jpg"),
        author: "Mariya Batan",
        tags: ["Photography", "Nature", "Landscape"],
        folder: "природа",
        files: [
          "/my work/photos/природа/batan_monochrom_navic.jpg",
          "/my work/photos/природа/IMG_1016 (1).JPG",
          "/my work/photos/природа/IMG_1034 (1).JPG",
          "/my work/photos/природа/IMG_4287.jpg",
          "/my work/photos/природа/IMG_6200.jpg",
          "/my work/photos/природа/IMG_6819.jpg",
          "/my work/photos/природа/IMG_6997.jpg",
          "/my work/photos/природа/IMG_7025.jpg",
          "/my work/photos/природа/IMG_7030.jpg",
          "/my work/photos/природа/IMG_7055.jpg",
          "/my work/photos/природа/IMG_7074.jpg",
          "/my work/photos/природа/IMG_7077.jpg",
          "/my work/photos/природа/IMG_7098.jpg",
          "/my work/photos/природа/IMG_7118.jpg",
          "/my work/photos/природа/IMG_9850.jpg",
          "/my work/photos/природа/IMG_9946.jpg",
          "/my work/photos/природа/IMG_9948.jpg",
          "/my work/photos/природа/IMG_9954.jpg",
          "/my work/photos/природа/IMG_9959.jpg"
        ].map(getImagePath),
        content: {
          overview: "Artistic nature photography exploring the beauty of landscapes and natural forms through creative composition and lighting.",
          concept: "Focus on natural textures, patterns, and atmospheric conditions to create visually compelling nature compositions.",
          application: "Used for artistic exhibitions, environmental awareness campaigns, and creative inspiration.",
          outcome: "Stunning nature photographs that capture the essence and beauty of natural environments."
        }
      },
      { 
        id: "product-photography",
        title: "Product Photography", 
        description: "Commercial product shots and still life photography", 
        thumbnail: getImagePath("/my work/photos/still life:products/IMG_0006.jpg"),
        author: "Mariya Batan",
        tags: ["Photography", "Product", "Commercial"],
        folder: "still life:products",
        files: [
          "/my work/photos/still life:products/IMG_0006.jpg",
          "/my work/photos/still life:products/IMG_0177.jpg",
          "/my work/photos/still life:products/IMG_0424.jpg",
          "/my work/photos/still life:products/IMG_0447.jpg"
        ].map(getImagePath),
        content: {
          overview: "Professional product photography and still life compositions designed to showcase products in their best light.",
          concept: "Clean, minimalist approach focusing on product details, textures, and functionality while maintaining aesthetic appeal.",
          application: "Used for e-commerce, product catalogs, and marketing materials.",
          outcome: "High-quality product images that effectively communicate value and drive sales."
        }
      },
    ],
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Header />
      <main className="pt-20 sm:pt-24 md:pt-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {!selectedCategory ? (
            <div className="flex flex-col items-center justify-start pt-6 sm:pt-8">
              <div className="space-y-6 sm:space-y-8">
                {/* Illustration above My Work */}
                <div className="w-full flex justify-center pb-3 sm:pb-4">
                  <img
                    src={`${import.meta.env.BASE_URL}ямногорук.svg`}
                    alt="Hands illustration"
                    className="w-full max-w-24 sm:max-w-28 md:max-w-32 h-auto object-contain opacity-0 animate-bounce-in"
                    style={{ animationDelay: "0.3s" }}
                    decoding="async"
                  />
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground text-center opacity-0 animate-fade-in">
                  My Work
                </h1>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 justify-center w-full px-2 sm:px-0">
                  {categories.map((category, index) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={cn(
                        "group relative px-6 py-6 sm:px-8 sm:py-8 bg-card border border-border rounded-lg",
                        "transition-all duration-500 hover:scale-105 hover:shadow-lg",
                        "opacity-0 animate-scale-in",
                        "w-full sm:w-auto md:w-64 h-28 sm:h-32 flex items-center justify-center"
                      )}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-xl sm:text-2xl font-light text-foreground group-hover:text-primary transition-colors text-center whitespace-nowrap">
                        {category.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground opacity-0 animate-fade-in">
                  {categories.find((c) => c.id === selectedCategory)?.name}
                </h2>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedProject(null);
                    // Ensure URL is correct when going back to categories
                    window.history.replaceState({}, '', '/portfolio');
                  }}
                  className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors opacity-0 animate-fade-in whitespace-nowrap"
                  style={{ animationDelay: "0.1s" }}
                >
                  ← Back to categories
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {projects[selectedCategory].map((project, index) => (
                  <Tooltip key={project.id}>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => handleOpenProject(project)}
                        className="group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/20 flex flex-col h-full"
                      >
                    {/* Project Cover Image */}
                    <div className="relative w-full flex-shrink-0 overflow-hidden bg-muted" style={{ height: '200px', '@media (minWidth: 640px)': { height: '225px' }, '@media (minWidth: 768px)': { height: '250px' } }}>
                      {/* Skeleton loader background */}
                      {!loadedThumbnails.has(project.id) && (
                        <div className="absolute inset-0 bg-muted animate-pulse" />
                      )}

                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className={cn(
                          "w-full h-full transition-all duration-500",
                          project.id === "portfolio-website" ? "object-contain" : "object-cover group-hover:scale-110",
                          loadedThumbnails.has(project.id) ? "opacity-100" : "opacity-0"
                        )}
                        loading="lazy"
                        decoding="async"
                        onLoad={() => handleThumbnailLoad(project.id)}
                      />
                    </div>

                    {/* Project Info Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                        <h3 className="text-base sm:text-lg font-semibold">{project.title}</h3>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-3 sm:p-4 flex flex-col flex-grow">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-0.5 sm:py-1 bg-secondary/50 text-[10px] sm:text-xs text-muted-foreground rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="px-2 py-0.5 sm:py-1 bg-secondary/50 text-[10px] sm:text-xs text-muted-foreground rounded-full">
                            +{project.tags.length - 2}
                          </span>
                        )}
                      </div>

                      <div className="text-[10px] sm:text-xs text-primary font-medium mt-auto">
                        View Project →
                      </div>
                    </div>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-none whitespace-nowrap">
                      <p className="text-sm">{tooltipTexts[project.id] || project.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          )}
          
          {/* Scrolling Text Banner - Only on main page */}
          {!selectedCategory && (
            <div className="w-full overflow-hidden relative mt-16 sm:mt-20 md:mt-24">
              {/* Top line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-primary/30"></div>

              <div className="flex animate-scroll-infinite whitespace-nowrap py-6 sm:py-8">
                <div className="flex space-x-8 sm:space-x-12 md:space-x-16">
                  {Array.from({ length: 6 }, (_, i) => (
                    <span key={i} className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      JACK OF ALL TRADES
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/30"></div>
            </div>
          )}
        </div>
      </main>
      
      
      <Footer />
      
      {/* Project Case Study or Photo Gallery */}
      {selectedProject && selectedCategory === 'photography' ? (
        <PhotoGallery
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={handleCloseProject}
        />
      ) : (
        <ProjectCaseStudy
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={handleCloseProject}
        />
      )}
      </div>
    </TooltipProvider>
  );
};

export default Portfolio;
