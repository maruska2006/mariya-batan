import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export const ProjectCard = ({ title, description, image, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-card border border-border opacity-0 animate-scale-in cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted relative">
        {/* Skeleton loader background */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}

        <img
          src={image}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-out",
            isHovered && "scale-110",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 transition-all duration-500 ease-out",
          isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-background mb-1 sm:mb-2">{title}</h3>
        <p className="text-background/90 text-xs sm:text-sm">{description}</p>
      </div>
    </div>
  );
};
