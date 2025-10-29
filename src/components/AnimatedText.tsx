import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
}

export const AnimatedText = ({ text, className, delay = 0, highlightWords = [] }: AnimatedTextProps) => {
  const [visibleWords, setVisibleWords] = useState<number>(0);
  const words = text.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      words.forEach((_, index) => {
        setTimeout(() => {
          setVisibleWords(index + 1);
        }, index * 100);
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span className={className}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
        return (
          <span
            key={index}
            className={cn(
              "inline-block opacity-0 mr-12",
              index < visibleWords && "animate-fade-in-word",
              isHighlighted && "font-bold text-foreground"
            )}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
};
