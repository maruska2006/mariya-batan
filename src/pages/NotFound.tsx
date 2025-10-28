import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      {/* Eye Logo */}
      <motion.div
        className="mb-12"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <img
          src={`${import.meta.env.BASE_URL}eyelogoopen2.svg`}
          alt="Eye"
          className="w-64 h-64 md:w-80 md:h-80"
        />
      </motion.div>

      {/* 404 Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <h1 className="text-8xl md:text-9xl font-light text-foreground mb-4">
          404
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
          Looking for something?
        </p>
        <p className="text-lg text-muted-foreground max-w-md">
          The page you're searching for seems to have wandered off. Maybe it's hiding behind another door, or perhaps it was never here at all.
        </p>
      </motion.div>

      {/* Navigation Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 mt-8"
      >
        <button
          onClick={() => navigate('/')}
          className="px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors font-light text-lg"
        >
          ← Back to Home
        </button>
        <button
          onClick={() => navigate('/portfolio')}
          className="px-8 py-4 border-2 border-border hover:border-primary transition-colors font-light text-lg"
        >
          View My Work →
        </button>
      </motion.div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default NotFound;
