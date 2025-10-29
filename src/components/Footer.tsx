export const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-center items-center">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center">
            © {new Date().getFullYear()} Mariya Batan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
