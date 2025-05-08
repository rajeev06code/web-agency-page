import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactModal from "@/components/modals/ContactModal";

const WebDevelopment = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Web Development Services</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-xl mb-6">
            We create modern, responsive, and high-performance web applications that help businesses thrive in the digital world.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Web Development Expertise</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>Custom Web Applications</strong>
                <p className="text-muted-foreground">Tailored solutions built with modern frameworks like React, Next.js, and Vue.js</p>
              </div>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>E-commerce Solutions</strong>
                <p className="text-muted-foreground">Scalable online stores with secure payment gateways and inventory management</p>
              </div>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>Progressive Web Apps (PWA)</strong>
                <p className="text-muted-foreground">Fast, reliable, and engaging web applications that work offline</p>
              </div>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>API Development</strong>
                <p className="text-muted-foreground">RESTful and GraphQL APIs for seamless integration with other services</p>
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">1. Planning & Strategy</h3>
              <p className="text-muted-foreground">We begin with a thorough analysis of your requirements and create a detailed project roadmap.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">2. Design & Prototyping</h3>
              <p className="text-muted-foreground">Creating intuitive user interfaces and interactive prototypes for your approval.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">3. Development</h3>
              <p className="text-muted-foreground">Agile development process with regular updates and milestone deliveries.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">4. Testing & Launch</h3>
              <p className="text-muted-foreground">Comprehensive testing and smooth deployment to production.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Technologies We Use</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="px-4 py-2 bg-primary/10 rounded-full">React</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Next.js</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">TypeScript</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Node.js</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">MongoDB</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">PostgreSQL</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">AWS</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Docker</span>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="font-semibold"
              onClick={() => setIsContactModalOpen(true)}
            >
              Start Your Web Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default WebDevelopment; 