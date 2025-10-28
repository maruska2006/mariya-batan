import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  project: {
    id: string;
    title: string;
    description: string;
    files: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectGallery = ({ project, isOpen, onClose }: ProjectGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.files.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.files.length) % project.files.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <div className="flex items-center justify-center min-h-screen p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-light text-white mb-1">{project.title}</h2>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative bg-white rounded-lg overflow-hidden mb-4">
              <img
                src={project.files[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
              
              {/* Navigation Arrows */}
              {project.files.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {project.files.length > 1 && (
              <div className="flex gap-2 justify-center overflow-x-auto pb-2">
                {project.files.map((file, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={cn(
                      "flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all",
                      index === currentImageIndex 
                        ? "border-white" 
                        : "border-transparent hover:border-gray-400"
                    )}
                  >
                    <img
                      src={file}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Image Counter */}
            <div className="text-center text-gray-300 text-sm mt-2">
              {currentImageIndex + 1} / {project.files.length}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
