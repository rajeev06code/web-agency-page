import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight,Code, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl  font-black tracking-tight mb-6 inline-block">
        
            <span className="text-primary"> <Code className="h-5 w-5 inline items-center mr-1 "/>pixel</span>
              <span className="text-accent">Builders </span>
            </Link>
            <p className="opacity-80 mb-6">
              Creating exceptional digital experiences for forward-thinking businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">Web Development</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">Mobile Development</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">UI/UX Design</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">MVP Development</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">Digital Strategy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">About Us</a></li>
              <li><a href="#work" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">Our Work</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">Career</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">Blog</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="opacity-80 mb-4">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-r-none"
              />
              <Button type="submit" size="icon" className="rounded-l-none">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-primary/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-60 mb-4 md:mb-0">© {new Date().getFullYear()} pixelbuilders. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="opacity-60 hover:opacity-100 hover:text-primary transition-all">Privacy Policy</a>
            <a href="/terms-and-conditions" className="opacity-60 hover:opacity-100 hover:text-primary transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
