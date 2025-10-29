import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCaseStudyProps {
  project: {
    id: string;
    title: string;
    description: string;
    author: string;
    tags: string[];
    files: string[];
    content: {
      overview: string;
      concept: string;
      application: string;
      outcome: string;
    };
  };
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectCaseStudy = ({ project, isOpen, onClose }: ProjectCaseStudyProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const nextImage = () => {
    setCurrentImageIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % project.files.length;
    });
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => {
      if (prev === null) return project.files.length - 1;
      return (prev - 1 + project.files.length) % project.files.length;
    });
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (currentImageIndex !== null) {
          setCurrentImageIndex(null);
        } else {
          onClose();
        }
      } else if (currentImageIndex !== null) {
        if (event.key === 'ArrowLeft') {
          prevImage();
        } else if (event.key === 'ArrowRight') {
          nextImage();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, currentImageIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-background overflow-y-auto"
      >
        {/* Backdrop to close on outside click */}
        <div className="absolute inset-0 -z-10" onClick={onClose} />
        
        <div className="min-h-screen" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="sticky top-0 bg-background/95 backdrop-blur-lg border-b border-border z-10">
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
              <div className="min-w-0 flex-1 pr-4">
                <h1 className="text-lg sm:text-xl md:text-2xl font-light text-foreground truncate">{project.title}</h1>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Project Cover */}
          <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden bg-muted">
            <img
              src={project.id === "portfolio-website" ? `${import.meta.env.BASE_URL}DFDC65E3-4603-47BD-8BBD-259F4D2795F5_1_105_c.png` : project.files[0]}
              alt={project.title}
              className={`w-full h-full ${project.id === "portfolio-website" ? "object-contain" : "object-cover"}`}
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light mb-2 sm:mb-3 md:mb-4">{project.title}</h2>
              {project.description && (
                <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 max-w-2xl">{project.description}</p>
              )}
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Content Sections */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 max-w-4xl">
            {/* Overview */}
            {project.content.overview && (
              <section className="mb-10 sm:mb-12 md:mb-16">
                <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-4 sm:mb-6">Overview</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {project.content.overview}
                </p>
              </section>
            )}

            {/* Concept */}
            {project.content.concept && (
              <section className="mb-10 sm:mb-12 md:mb-16">
                <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-4 sm:mb-6">Concept</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {project.content.concept}
                </p>
              </section>
            )}

            {/* Application */}
            {project.content.application && (
              <section className="mb-10 sm:mb-12 md:mb-16">
                <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-4 sm:mb-6">Application</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {project.content.application}
                </p>
              </section>
            )}

            {/* Outcome */}
            {project.content.outcome && (
              <section className="mb-10 sm:mb-12 md:mb-16">
                <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-4 sm:mb-6">Outcome</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {project.content.outcome}
                </p>
              </section>
            )}
          </div>

          {/* Photo Grid Gallery */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 max-w-6xl">
            <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-6 sm:mb-8 text-center">Gallery</h3>

            {/* Masonry-style grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
              {project.files.map((file, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="break-inside-avoid mb-4 sm:mb-6 group cursor-pointer"
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md sm:shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    {/* Skeleton loader background */}
                    {!loadedImages.has(index) && (
                      <div className="absolute inset-0 bg-muted animate-pulse" />
                    )}

                    <img
                      src={encodeURI(file)}
                      alt={`${project.title} - Image ${index + 1}`}
                      className={cn(
                        "w-full h-auto transition-all duration-500 group-hover:scale-105",
                        loadedImages.has(index) ? "opacity-100" : "opacity-0"
                      )}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => handleImageLoad(index)}
                      onError={(e) => {
                        console.log("Failed to load image:", file);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    {/* Zoom icon on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Easter egg for portfolio-website */}
            {project.id === "portfolio-website" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: project.files.length * 0.1 + 0.2 }}
                className="mt-8 sm:mt-10 md:mt-12 text-center p-6 sm:p-8 border border-border rounded-lg bg-secondary/30"
              >
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground italic">
                  You're viewing this ready-made project right now!
                </p>
              </motion.div>
            )}
          </div>

          {/* Lightbox Modal */}
          {currentImageIndex !== null && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
                onClick={() => setCurrentImageIndex(null)}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 sm:left-4 p-1.5 sm:p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 sm:right-4 p-1.5 sm:p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </button>

                <div onClick={(e) => e.stopPropagation()}>
                  <img
                    src={project.files[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="max-w-[85vw] sm:max-w-[90vw] max-h-[85vh] sm:max-h-[90vh] object-contain"
                    decoding="async"
                  />
                </div>

                <button
                  onClick={() => setCurrentImageIndex(null)}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 p-1.5 sm:p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Footer */}
          <div className="bg-secondary/30 py-10 sm:py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 text-center">
              <h3 className="text-xl sm:text-2xl font-light text-foreground mb-3 sm:mb-4">Thank you for viewing</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                This project showcases the intersection of design, creativity, and strategic thinking.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
