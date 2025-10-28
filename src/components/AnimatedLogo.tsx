import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  className?: string;
  onClick?: () => void;
}

export const AnimatedLogo = ({ className, onClick }: AnimatedLogoProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative transition-all duration-300 ease-out group",
        className
      )}
    >
      <div className="relative h-8 w-auto">
        {/* Inline SVG to precisely animate the upper eyelid and lashes */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 483.38 420.47"
          className="h-8 w-auto"
          aria-label="Logo"
          role="img"
        >
          {/* Lower Lash */}
          <g id="Lower_Lash" data-name="Lower Lash">
            <polygon
              points="241.69 418.59 223.75 353.64 259.63 353.64 241.69 418.59"
              fill="#b76f95"
              stroke="#b76f95"
              strokeLinecap="round"
              strokeMiterlimit={10}
            />
          </g>
          {/* Lower Lid */}
          <g id="Lower_Lid" data-name="Lower Lid">
            <path
              d="M58.66,271c96.23,71.97,216.9,84.9,323.42,27.11,7.32-4,14.5-8.27,21.6-12.74,6.03-3.87,15.12-10.26,21.04-14.37-86.24,117.39-279.78,117.26-366.05,0h0Z"
              fill="#b76f95"
            />
          </g>
          {/* Pupil */}
          <g id="Pupil" className="pupil pupil-blink-on-load">
            <circle
              cx={241.69}
              cy={178.68}
              r={77.4}
              fill="#b76f95"
              stroke="#b76f95"
              strokeLinecap="round"
              strokeMiterlimit={10}
            />
          </g>
          {/* Upper Lid (animated) */}
          <g id="Upper_Lid" data-name="Upper Lid" className="eyelid eyelid-blink-on-load">
            <path
              d="M0,215.44c8.81-15,19.66-28.85,31.68-41.46,3.95-4.22,8.45-8.25,12.62-12.25,110.34-101.36,298.97-97.98,404.36,9.07,3.09,3.02,6.09,6.42,8.99,9.62,5.88,6.35,11.24,13.47,16.37,20.39,3.23,4.86,6.43,9.67,9.36,14.65-5.17-2.73-10.08-5.63-14.96-8.48-9.81-5.45-19.65-10.69-29.56-15.73,0,0-1.83-.94-1.83-.94-1.04-.5-4.48-2.09-5.6-2.62-123.72-61-264.31-59.29-386.96,3.52-9.9,5.05-19.73,10.3-29.54,15.76-4.87,2.85-9.78,5.76-14.94,8.5h0Z"
              fill="#b76f95"
            />
          </g>
          {/* Upper Lash (animated) */}
          <g id="Upper_Lash" data-name="Upper Lash" className="eyelid eyelid-blink-on-load">
            <polygon
              points="241.69 1.88 215.26 97.57 268.12 97.57 241.69 1.88"
              fill="#b76f95"
              stroke="#b76f95"
              strokeLinecap="round"
              strokeMiterlimit={10}
            />
            <polygon
              points="34.08 91.73 60.17 153.86 88.36 131.66 34.08 91.73"
              fill="#b76f95"
              stroke="#b76f95"
              strokeLinecap="round"
              strokeMiterlimit={10}
            />
            <polygon
              points="450.77 93.28 394.01 129.6 420.7 153.58 450.77 93.28"
              fill="#b76f95"
              stroke="#b76f95"
              strokeLinecap="round"
              strokeMiterlimit={10}
            />
          </g>
        </svg>
      </div>
    </button>
  );
};
