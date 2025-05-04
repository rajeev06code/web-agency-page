import { services } from "@/data/services";
import { Check, ArrowRight, Code, Smartphone, PenTool } from "lucide-react";
import React from "react";

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

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b dark:from-background dark:to-background/90 from-background to-background/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            We offer end-to-end solutions to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-card dark:bg-opacity-40 border border-primary/5 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  {getIconComponent(service.iconName)}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="opacity-80 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="text-primary font-medium group-hover:text-accent transition-colors flex items-center">
                  Learn more
                  <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
