import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactModal from "@/components/modals/ContactModal";

const MobileDevelopment = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Mobile Development Services</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-xl mb-6">
            We build native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mobile Development Solutions</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>Native Mobile Apps</strong>
                <p className="text-muted-foreground">High-performance applications built specifically for iOS and Android platforms</p>
              </div>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>Cross-Platform Development</strong>
                <p className="text-muted-foreground">Efficient solutions using React Native and Flutter for faster time-to-market</p>
              </div>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>Enterprise Mobile Apps</strong>
                <p className="text-muted-foreground">Secure and scalable solutions for business operations and employee productivity</p>
              </div>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>App Maintenance & Support</strong>
                <p className="text-muted-foreground">Ongoing updates, bug fixes, and performance optimization</p>
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Development Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">1. Requirements Analysis</h3>
              <p className="text-muted-foreground">Understanding your business needs and target audience to define app features.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">2. UI/UX Design</h3>
              <p className="text-muted-foreground">Creating intuitive and engaging mobile interfaces following platform guidelines.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">3. Development & Testing</h3>
              <p className="text-muted-foreground">Agile development with continuous testing across multiple devices.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">4. Deployment & Support</h3>
              <p className="text-muted-foreground">App store submission and ongoing maintenance services.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Technologies We Use</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="px-4 py-2 bg-primary/10 rounded-full">React Native</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Flutter</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Swift</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Kotlin</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Firebase</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">AWS Amplify</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Redux</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">GraphQL</span>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="font-semibold"
              onClick={() => setIsContactModalOpen(true)}
            >
              Start Your Mobile Project
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

export default MobileDevelopment; 