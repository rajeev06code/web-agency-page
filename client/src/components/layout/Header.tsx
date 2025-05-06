import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, Menu, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed w-full top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "shadow-sm" : ""
      } ${
        theme === "dark"
          ? "bg-background/80"
          : "bg-background/80"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-black tracking-tight">
              <span className="text-primary">    <Code className="h-5 w-5 inline items-center mr-1 "/>pixel</span>
              <span className="text-accent">Builders</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#work"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Testimonials
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button asChild className="font-accent">
              <a href="#contact">Start a Project</a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top">
            <div className="flex flex-col space-y-4 pt-2 pb-3">
              <a
                href="#services"
                className="text-base font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Services
              </a>
              <a
                href="#work"
                className="text-base font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Work
              </a>
              <a
                href="#about"
                className="text-base font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-base font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Testimonials
              </a>
              <Button asChild className="font-accent w-fit">
                <a href="#contact" onClick={closeMobileMenu}>
                  Start a Project
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
