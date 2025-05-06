import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, Menu, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { smoothScroll } from "@/lib/utils";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleNavigation = (sectionId: string) => {
    closeMobileMenu();
    smoothScroll(sectionId);
  };

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
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('services');
              }}
              className="text-sm font-medium hover:text-primary transition-colors"
              aria-label="Go to Services section"
            >
              Services
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('work');
              }}
              className="text-sm font-medium hover:text-primary transition-colors"
              aria-label="Go to Work section"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('about');
              }}
              className="text-sm font-medium hover:text-primary transition-colors"
              aria-label="Go to About section"
            >
              About
            </a>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('testimonials');
              }}
              className="text-sm font-medium hover:text-primary transition-colors"
              aria-label="Go to Testimonials section"
            >
              Testimonials
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
            <Button
              onClick={() => handleNavigation('contact')}
              className="font-accent"
              aria-label="Start a new project"
            >
              Start a Project
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden" role="navigation" aria-label="Mobile navigation">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden pb-4 animate-in slide-in-from-top"
            role="navigation"
            aria-label="Mobile menu"
          >
            <div className="flex flex-col space-y-4 pt-2 pb-3">
              <button
                onClick={() => handleNavigation('services')}
                className="text-base font-medium hover:text-primary transition-colors text-left"
                aria-label="Go to Services section"
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation('work')}
                className="text-base font-medium hover:text-primary transition-colors text-left"
                aria-label="Go to Work section"
              >
                Work
              </button>
              <button
                onClick={() => handleNavigation('about')}
                className="text-base font-medium hover:text-primary transition-colors text-left"
                aria-label="Go to About section"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('testimonials')}
                className="text-base font-medium hover:text-primary transition-colors text-left"
                aria-label="Go to Testimonials section"
              >
                Testimonials
              </button>
              <Button
                onClick={() => handleNavigation('contact')}
                className="font-accent w-fit"
                aria-label="Start a new project"
              >
                Start a Project
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
