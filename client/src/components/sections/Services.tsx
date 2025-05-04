import { services } from "@/data/services";
import { Check, ArrowRight, Code, Smartphone, PenTool, Hexagon } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Code":
      return <Code className="h-6 w-6 text-primary" />;
    case "Smartphone":
      return <Smartphone className="h-6 w-6 text-primary" />;
    case "PenTool":
      return <PenTool className="h-6 w-6 text-primary" />;
    default:
      return <Code className="h-6 w-6 text-primary" />;
  }
};

const ServicesCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative p-0.5 opacity-0 transition-all duration-500`}
      style={{ animationDelay: `${200 + index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="bg-card relative border border-primary/10 transition-all group">
        <div className="absolute -top-5 -right-5 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Hexagon className="h-10 w-10 text-primary/10 animate-rotate" style={{ animationDuration: '10s' }} />
        </div>
        
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="w-14 h-14 border border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary/40 transition-colors">
              {getIconComponent(service.iconName)}
            </div>
            <span className="text-muted-foreground font-mono text-sm">0{index + 1}</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
          <div className="w-12 h-0.5 bg-primary mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          
          <p className="text-muted-foreground mb-8">
            {service.description}
          </p>
          
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <div className="min-w-5 h-5 mr-3 mt-0.5 border border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <a 
            href="#contact" 
            className="inline-flex items-center text-sm font-medium group-hover:text-primary transition-colors"
          >
            Learn more
            <ArrowRight className={`h-4 w-4 ml-2 transition-transform duration-300 ${hovered ? 'translate-x-1' : ''}`} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-64 h-64 border border-primary/5 animate-rotate" style={{animationDuration: '40s'}}></div>
      <div className="absolute bottom-32 right-10 w-40 h-40 border border-primary/10 animate-rotate" style={{animationDuration: '30s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-20 max-w-3xl">
          <div className="inline-block mb-4">
            <div className="flex items-center">
              <div className="w-10 h-px bg-primary mr-4"></div>
              <span className="text-sm uppercase tracking-widest font-medium text-primary">Services</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our expertise<span className="text-primary">.</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl animate-slide-up animate-delay-100">
            We offer comprehensive digital solutions that combine innovation and strategy to help your business thrive in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServicesCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block relative">
            <a href="#work" className="text-primary font-medium flex items-center text-lg group">
              See how we put our expertise to work
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              <div className="absolute -bottom-1 left-0 w-full h-px bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
