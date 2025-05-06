import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { FaGoogle, FaMicrosoft, FaAmazon, FaApple } from "react-icons/fa";
import { ChevronDown, Cpu, Database, Monitor, Smartphone } from "lucide-react";
import React, { useEffect, useState } from "react";
import heroImage from "../../assets/images/hero2.png"

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-full animate-rotate"></div>
        <div className="absolute top-2/3 left-10 w-48 h-48 border border-primary/10 rounded-full animate-rotate" style={{animationDuration: '30s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border border-accent/20 rounded-full animate-rotate" style={{animationDuration: '25s'}}></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 animate-fade-in">
            <div className="mb-4 inline-block mt-28 lg:mt-0 md:mt-0">
              <span className="px-3 py-1 border border-primary text-sm font-mono tracking-wider animate-pulse">NEXTGEN DIGITAL AGENCY</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none">
              We craft 
              <div className="relative inline-block mx-2 animate-glitch overflow-hidden">
                <span className="text-gradient">digital</span>
                <span className="absolute inset-0 text-primary -z-10 -ml-1 -mt-1 opacity-30">digital</span>
                <span className="absolute inset-0 text-accent -z-10 ml-1 mt-1 opacity-30">digital</span>
              </div>
              <br />experiences
            </h1>
            <p className="text-xl md:text-2xl opacity-80 mb-8 max-w-xl font-light animate-slide-up animate-delay-200">
              We help ambitious brands transform ideas into exceptional digital products that drive innovation and growth.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up animate-delay-300">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-accent px-8 py-6 text-base">
                <a href="#work">Explore our work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary hover:bg-primary/5 text-primary font-accent px-8 py-6 text-base">
                <a href="#contact">Start a project</a>
              </Button>
            </div>
            
            <div className="mt-16 flex items-center animate-slide-up animate-delay-400">
              <div className="h-px bg-border flex-grow mr-4"></div>
              <div className="flex items-center gap-6">
                <Monitor className="h-5 w-auto text-muted-foreground opacity-70 hover:opacity-100 transition-all" />
                <Smartphone className="h-5 w-auto text-muted-foreground opacity-70 hover:opacity-100 transition-all" />
                <Database className="h-5 w-auto text-muted-foreground opacity-70 hover:opacity-100 transition-all" />
                <Cpu className="h-5 w-auto text-muted-foreground opacity-70 hover:opacity-100 transition-all" />
              </div>
              <div className="h-px bg-border flex-grow ml-4"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-slide-right animate-delay-200">
            <div className="relative mx-auto max-w-lg">
              {/* Code-like overlay effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-black/50 backdrop-blur-sm p-6 overflow-hidden font-mono text-xs text-primary-foreground opacity-20">
                  <div className="animate-slide-up">
                    {'{'} <br />
                    &nbsp;&nbsp;"agency": "pixelBuilders", <br />
                    &nbsp;&nbsp;"expertise": ["web", "mobile", "ui/ux"], <br />
                    &nbsp;&nbsp;"projects": 50+, <br />
                    &nbsp;&nbsp;"clients": 25+, <br />
                    &nbsp;&nbsp;"team": 15 <br />
                    {'}'}
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 border-8 border-primary/10">
                <div className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-10 bg-black/20 z-10 flex items-center px-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent/80"></div>
                      <div className="w-3 h-3 rounded-full bg-primary/40"></div>
                      <div className="w-3 h-3 rounded-full bg-primary/80"></div>
                    </div>
                  </div>
                  <img
                    src={heroImage}
                    alt="Digital workspace"
                    className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-primary/5 animate-pulse"></div>
              <div className="absolute -top-5 -left-5 w-24 h-24 border border-primary/20 animate-rotate"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
          <span className="text-sm font-light text-muted-foreground mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 animate-pulse text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
