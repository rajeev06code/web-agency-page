import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactModal from "@/components/modals/ContactModal";

const MVPDevelopment = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">MVP Development Services</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-xl mb-6">
            We help startups and businesses validate their ideas quickly with cost-effective Minimum Viable Products that deliver core value to users.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our MVP Development Approach</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>Rapid Prototyping</strong>
                <p className="text-muted-foreground">Quick development of functional prototypes to test core features</p>
              </div>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>Market Validation</strong>
                <p className="text-muted-foreground">Testing product-market fit with real users and gathering feedback</p>
              </div>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>Iterative Development</strong>
                <p className="text-muted-foreground">Continuous improvement based on user feedback and market response</p>
              </div>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 mr-2 mt-1 text-primary" />
              <div>
                <strong>Scalable Architecture</strong>
                <p className="text-muted-foreground">Building MVPs with future growth in mind</p>
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">MVP Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">1. Idea Validation</h3>
              <p className="text-muted-foreground">Analyzing market potential and defining core features.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">2. Feature Prioritization</h3>
              <p className="text-muted-foreground">Identifying must-have features for the initial release.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">3. Rapid Development</h3>
              <p className="text-muted-foreground">Quick implementation of core features with modern technologies.</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-3">4. Launch & Feedback</h3>
              <p className="text-muted-foreground">Deploying to market and collecting user insights.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">MVP Development Technologies</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="px-4 py-2 bg-primary/10 rounded-full">React</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Next.js</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Node.js</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">MongoDB</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Firebase</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">AWS</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Docker</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">CI/CD</span>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="font-semibold"
              onClick={() => setIsContactModalOpen(true)}
            >
              Start Your MVP Project
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

export default MVPDevelopment; 