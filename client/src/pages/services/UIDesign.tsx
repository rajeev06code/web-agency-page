import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactModal from "@/components/modals/ContactModal";

const UIDesign = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">UI/UX Design Services</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-xl mb-6">
            We create intuitive, engaging, and user-centered designs that enhance user experience and drive business growth.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Design Services</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>User Interface Design</strong>
                <p className="text-muted-foreground">Creating visually appealing and functional interfaces that align with your brand</p>
              </div>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>User Experience Design</strong>
                <p className="text-muted-foreground">Designing seamless user journeys and interactions that delight users</p>
              </div>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>Design Systems</strong>
                <p className="text-muted-foreground">Building scalable design systems for consistent brand experiences</p>
              </div>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>Prototyping & Testing</strong>
                <p className="text-muted-foreground">Creating interactive prototypes and conducting user testing</p>
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">1. Research & Analysis</h3>
              <p className="text-muted-foreground">Understanding user needs, business goals, and market trends.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">2. Wireframing</h3>
              <p className="text-muted-foreground">Creating low-fidelity wireframes to establish layout and structure.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">3. Visual Design</h3>
              <p className="text-muted-foreground">Developing high-fidelity designs with attention to detail.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">4. Prototyping & Testing</h3>
              <p className="text-muted-foreground">Building interactive prototypes and gathering user feedback.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Design Tools & Technologies</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="px-4 py-2 bg-primary/10 rounded-full">Figma</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Adobe XD</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Sketch</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">InVision</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Principle</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Adobe Creative Suite</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Zeplin</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Abstract</span>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="font-semibold"
              onClick={() => setIsContactModalOpen(true)}
            >
              Start Your Design Project
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

export default UIDesign; 