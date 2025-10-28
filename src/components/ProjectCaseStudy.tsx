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
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-light text-foreground">{project.title}</h1>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Project Cover */}
          <div className="relative h-[60vh] overflow-hidden">
            <img
              src={project.id === "portfolio-website" ? `${import.meta.env.BASE_URL}DFDC65E3-4603-47BD-8BBD-259F4D2795F5_1_105_c.png` : project.files[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-4xl md:text-6xl font-light mb-4">{project.title}</h2>
              {project.description && (
                <p className="text-lg mb-4 max-w-2xl">{project.description}</p>
              )}
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Content Sections */}
          <div className="container mx-auto px-6 py-16 max-w-4xl">
            {/* Overview */}
            {project.content.overview && (
              <section className="mb-16">
                <h3 className="text-3xl font-light text-foreground mb-6">Overview</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.content.overview}
                </p>
              </section>
            )}

            {/* Concept */}
            {project.content.concept && (
              <section className="mb-16">
                <h3 className="text-3xl font-light text-foreground mb-6">Concept</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.content.concept}
                </p>
              </section>
            )}

            {/* Application */}
            {project.content.application && (
              <section className="mb-16">
                <h3 className="text-3xl font-light text-foreground mb-6">Application</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.content.application}
                </p>
              </section>
            )}

            {/* Outcome */}
            {project.content.outcome && (
              <section className="mb-16">
                <h3 className="text-3xl font-light text-foreground mb-6">Outcome</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.content.outcome}
                </p>
              </section>
            )}
          </div>

          {/* Photo Grid Gallery */}
          <div className="container mx-auto px-6 py-16 max-w-6xl">
            <h3 className="text-3xl font-light text-foreground mb-8 text-center">Gallery</h3>
            
            {/* Masonry-style grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {project.files.map((file, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="break-inside-avoid mb-6 group cursor-pointer"
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={encodeURI(file)}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
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
                className="mt-12 text-center p-8 border border-border rounded-lg bg-secondary/30"
              >
                <p className="text-xl text-muted-foreground italic">
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
                className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center"
                onClick={() => setCurrentImageIndex(null)}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>

                <div onClick={(e) => e.stopPropagation()}>
                  <img
                    src={project.files[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="max-w-[90vw] max-h-[90vh] object-contain"
                  />
                </div>

                <button
                  onClick={() => setCurrentImageIndex(null)}
                  className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Footer */}
          <div className="bg-secondary/30 py-16">
            <div className="container mx-auto px-6 text-center">
              <h3 className="text-2xl font-light text-foreground mb-4">Thank you for viewing</h3>
              <p className="text-muted-foreground">
                This project showcases the intersection of design, creativity, and strategic thinking.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
