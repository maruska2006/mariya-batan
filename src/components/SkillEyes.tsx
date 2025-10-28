import { cn } from "@/lib/utils";

interface SkillEyesProps {
  openEyes: number;
  totalEyes: number;
  className?: string;
  animate?: boolean;
}

export const SkillEyes = ({ openEyes, totalEyes, className, animate = false }: SkillEyesProps) => {
  return (
    <div className={cn("flex gap-1", className, animate && "skill-eye-animate")}>
      {Array.from({ length: totalEyes }, (_, index) => {
        const isOpen = index < openEyes;
        return (
          <img
            key={index}
            src={isOpen ? `${import.meta.env.BASE_URL}eyelogoopen2.svg` : `${import.meta.env.BASE_URL}eyelogoclosed.svg`}
            alt={isOpen ? "Open eye" : "Closed eye"}
            className="h-8 w-8 object-contain skill-eye"
          />
        );
      })}
    </div>
  );
};
