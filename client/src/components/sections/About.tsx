import { Button } from "@/components/ui/button";
import { ArrowRight, SquareUser, Code, Terminal, Cpu } from "lucide-react";
import React, { useRef, useEffect } from "react";

const StatItem = ({ value, label, index }: { value: string, label: string, index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef} 
      className="opacity-0"
      style={{ animationDelay: `${400 + index * 150}ms` }}
    >
      <div className="border border-primary/5 p-6 group hover:border-primary/20 transition-colors duration-500">
        <h3 className="text-4xl sm:text-5xl font-bold text-primary mb-2">{value}</h3>
        <div className="w-8 h-0.5 bg-primary/50 mb-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        <p className="text-sm text-muted-foreground uppercase tracking-wider">{label}</p>
      </div>
    </div>
  );
};

const ValueItem = ({ icon, title, description, index }: { icon: React.ReactNode, title: string, description: string, index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef} 
      className="opacity-0 group"
      style={{ animationDelay: `${300 + index * 150}ms` }}
    >
      <div className="flex items-start">
        <div className="mr-5 p-2 border border-primary/10 group-hover:border-primary/30 transition-colors duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (textRef.current) textRef.current.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-20 max-w-3xl">
          <div className="inline-block mb-4">
            <div className="flex items-center">
              <div className="w-10 h-px bg-primary mr-4"></div>
              <span className="text-sm uppercase tracking-widest font-medium text-primary">About Us</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Who we are<span className="text-primary">.</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl animate-slide-up animate-delay-100">
            A collective of strategists, designers and developers building next-generation digital products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div ref={imageRef} className="relative opacity-0 animate-slide-right animate-delay-200">
            <div className="relative">
              {/* Image frame */}
              <div className="absolute -top-4 -left-4 right-4 bottom-4 border border-primary/10 -z-10"></div>
              
              <div className="relative overflow-hidden border border-primary/10">
                {/* Pattern overlay */}
                <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=900&q=80" 
                  alt="Our team working together" 
                  className="w-full h-auto aspect-[4/5] object-cover filter grayscale hover:grayscale-0 transition-all duration-1000" 
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50"></div>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-xs font-mono text-white/90 bg-black/50 backdrop-blur-sm px-3 py-1 inline-block mb-3">TEAM DevDoctors</span>
                  <h3 className="text-white/90 text-lg font-bold">Crafting digital experiences</h3>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 border border-primary/20 animate-rotate" style={{animationDuration: '30s'}}></div>
            </div>
          </div>
          
          <div ref={textRef} className="opacity-0">
            <p className="text-lg mb-6 leading-relaxed">
              DevDoctors is a team of passionate technologists creating exceptional digital products. We combine technical expertise with strategic thinking to solve complex challenges.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              we've helped startups and established businesses accelerate their digital transformation journeys. Our focus on innovation and quality has earned us the trust of clients across industries.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              <StatItem value="5+" label="Projects delivered" index={0} />
              <StatItem value="10+" label="Happy clients" index={1} />
              <StatItem value="5" label="Team members" index={2} />
              <StatItem value="3+" label="Years experience" index={3} />
            </div>
            
            <h3 className="text-2xl font-bold mb-8 animate-slide-up animate-delay-300">Our values</h3>
            
            <div className="space-y-8 mb-10">
              <ValueItem 
                icon={<SquareUser className="h-6 w-6 text-primary" />}
                title="Human-centered design"
                description="We create digital experiences with the user at the center of every decision."
                index={0}
              />
              <ValueItem 
                icon={<Code className="h-6 w-6 text-primary" />}
                title="Engineering excellence"
                description="We write clean, maintainable code that scales and performs exceptionally."
                index={1}
              />
              <ValueItem 
                icon={<Terminal className="h-6 w-6 text-primary" />}
                title="Continuous innovation"
                description="We stay ahead of the curve, adopting new technologies that drive results."
                index={2}
              />
              <ValueItem 
                icon={<Cpu className="h-6 w-6 text-primary" />}
                title="Technical leadership"
                description="We combine deep technical expertise with strategic business thinking."
                index={3}
              />
            </div>
            
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-accent px-8 py-6 text-base mt-6 group"
            >
              <a href="#contact" className="flex items-center">
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
