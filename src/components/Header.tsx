import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { AnimatedLogo } from "./AnimatedLogo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to section smoothly
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Navigation data for dropdown menus
  const navigationItems = [
    {
      label: "About",
      path: "/",
      subItems: [
        { label: "About Me", sectionId: "about-me" },
        { label: "Experience", sectionId: "experience" },
        { label: "Education", sectionId: "education" },
        { label: "Skills", sectionId: "skills" },
        { label: "Programs", sectionId: "programs" },
      ]
    },
    {
      label: "Portfolio",
      path: "/portfolio",
      subItems: [
        { label: "UI/UX", category: "uiux" },
        { label: "Graphic Design", category: "graphic" },
        { label: "Photography", category: "photography" },
      ]
    },
    {
      label: "Services",
      path: "/services",
      subItems: [
        { label: "UI/UX Design", sectionId: "uiux-service" },
        { label: "Graphic Design", sectionId: "graphic-service" },
        { label: "Photography & Editing", sectionId: "photography-service" },
        { label: "Creative Direction", sectionId: "creative-service" },
      ]
    },
    {
      label: "Contacts",
      path: "/contact",
      subItems: []
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border py-3 sm:py-4" : "bg-transparent py-4 sm:py-6"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <AnimatedLogo
          onClick={() => navigate("/")}
          className="text-xl font-semibold text-foreground hover:text-foreground/70 transition-colors"
        />

        <div className="hidden md:flex gap-4 lg:gap-6 xl:gap-8">
          {navigationItems.map((item) => (
            <DropdownMenu 
              key={item.label}
              onOpenChange={(open) => setOpenDropdown(open ? item.label : null)}
            >
              <div className={cn(
                "flex items-center gap-1 text-sm transition-all duration-300 group",
                location.pathname === item.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(item.path)}
                  className="outline-none"
                >
                  {item.label}
                </motion.button>

                {item.subItems.length > 0 && (
                  <DropdownMenuTrigger asChild>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Open ${item.label} menu`}
                      className="p-1 -mr-1 outline-none"
                    >
                      <motion.div
                        animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown className="w-3 h-3" />
                      </motion.div>
                    </motion.button>
                  </DropdownMenuTrigger>
                )}
              </div>

              {item.subItems.length > 0 && (
                <DropdownMenuContent 
                  align="start" 
                  className="w-48 bg-background/95 dropdown-backdrop border-border/50 shadow-xl"
                  sideOffset={8}
                >
                  <AnimatePresence>
                    {item.subItems.map((subItem, index) => (
                      <motion.div
                        key={subItem.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2, delay: index * 0.05, ease: "easeOut" }}
                      >
                        <DropdownMenuItem
                          onClick={() => {
                            if (subItem.sectionId) {
                              // If already on the page, just scroll to section
                              if (location.pathname === item.path) {
                                scrollToSection(subItem.sectionId!);
                              } else {
                                // If not on the page, navigate and scroll
                                navigate(item.path, { replace: true });
                                setTimeout(() => scrollToSection(subItem.sectionId!), 100);
                              }
                            } else if (subItem.category) {
                              // Always navigate with state for category
                              navigate(item.path, { state: { category: subItem.category } });
                            } else {
                              navigate(item.path, { replace: true });
                            }
                          }}
                          className="cursor-pointer dropdown-item-hover transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:translate-x-1 hover:shadow-sm"
                        >
                          {subItem.label}
                        </DropdownMenuItem>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </DropdownMenuContent>
              )}
            </DropdownMenu>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-foreground/70 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="container mx-auto px-4 sm:px-6 py-4 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <button
                    onClick={() => {
                      navigate(item.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left text-sm font-medium text-foreground hover:text-foreground/70 transition-colors py-2"
                  >
                    {item.label}
                  </button>
                  
                  {item.subItems.length > 0 && (
                    <div className="ml-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={() => {
                            if (subItem.sectionId) {
                              // If already on the page, just scroll to section
                              if (location.pathname === item.path) {
                                scrollToSection(subItem.sectionId!);
                              } else {
                                // If not on the page, navigate and scroll
                                navigate(item.path, { replace: true });
                                setTimeout(() => scrollToSection(subItem.sectionId!), 100);
                              }
                            } else if (subItem.category) {
                              // Always navigate with state for category
                              navigate(item.path, { state: { category: subItem.category } });
                            } else {
                              navigate(item.path, { replace: true });
                            }
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full text-left text-xs text-muted-foreground hover:text-foreground transition-colors py-1"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
