export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-center items-center">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Mariya Batan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
