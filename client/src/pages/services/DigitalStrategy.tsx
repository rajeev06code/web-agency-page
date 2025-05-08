import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactModal from "@/components/modals/ContactModal";

const DigitalStrategy = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Digital Strategy Services</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-xl mb-6">
            We help businesses develop and execute comprehensive digital strategies that drive growth, enhance customer experience, and maximize ROI.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Digital Strategy Services</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>Digital Transformation</strong>
                <p className="text-muted-foreground">Guiding businesses through digital transformation initiatives</p>
              </div>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>Technology Roadmapping</strong>
                <p className="text-muted-foreground">Creating strategic technology roadmaps aligned with business goals</p>
              </div>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>Digital Marketing Strategy</strong>
                <p className="text-muted-foreground">Developing comprehensive digital marketing plans</p>
              </div>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>E-commerce Strategy</strong>
                <p className="text-muted-foreground">Building effective online sales and customer engagement strategies</p>
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Strategy Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">1. Analysis & Assessment</h3>
              <p className="text-muted-foreground">Evaluating current digital presence and identifying opportunities.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">2. Strategy Development</h3>
              <p className="text-muted-foreground">Creating tailored digital strategies aligned with business objectives.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">3. Implementation Planning</h3>
              <p className="text-muted-foreground">Developing detailed implementation roadmaps and timelines.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">4. Performance Monitoring</h3>
              <p className="text-muted-foreground">Setting up KPIs and monitoring systems for strategy success.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Areas of Expertise</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="px-4 py-2 bg-primary/10 rounded-full">Digital Transformation</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">E-commerce Strategy</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Content Strategy</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">SEO/SEM</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Social Media</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Analytics</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">User Experience</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Technology Stack</span>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="font-semibold"
              onClick={() => setIsContactModalOpen(true)}
            >
              Start Your Digital Strategy
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

export default DigitalStrategy; 