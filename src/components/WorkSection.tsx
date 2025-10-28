import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Project Title One",
    description: "A beautiful project showcasing creative design and development",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
  },
  {
    title: "Project Title Two",
    description: "Innovative solution for modern digital experiences",
    image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=600&fit=crop",
  },
  {
    title: "Project Title Three",
    description: "Elegant design meets functional excellence",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop",
  },
  {
    title: "Project Title Four",
    description: "Crafting memorable brand experiences",
    image: "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=800&h=600&fit=crop",
  },
  {
    title: "Project Title Five",
    description: "Strategic thinking, creative execution",
    image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&h=600&fit=crop",
  },
  {
    title: "Project Title Six",
    description: "Pushing boundaries in digital design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
  },
];

export const WorkSection = () => {
  return (
    <section id="work" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-light text-foreground mb-16 opacity-0 animate-slide-up">
          Selected Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
