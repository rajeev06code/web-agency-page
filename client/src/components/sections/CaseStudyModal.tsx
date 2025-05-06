import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    categoryLabel: string;
    imageSrc: string;
    description: string;
  };
}

const CaseStudyModal = ({ isOpen, onClose, project }: CaseStudyModalProps) => {
  const getCaseStudyContent = (title: string) => {
    const caseStudies: Record<string, {
      overview: string;
      challenge: string;
      solution: string;
      results: string[];
      technologies: string[];
    }> = {
      "Online Bakery Shop": {
        overview: "A modern e-commerce platform for a premium bakery business, enabling customers to order fresh baked goods online with real-time inventory management and delivery tracking.",
        challenge: "The client needed a solution to handle complex inventory management, real-time order tracking, and maintain product freshness while ensuring timely delivery.",
        solution: "Developed a full-stack e-commerce platform with real-time inventory tracking, automated order management, and integrated delivery system. Implemented a user-friendly interface for both customers and administrators.",
        results: [
          "40% increase in online orders within first 3 months",
          "Reduced order processing time by 60%",
          "Improved customer satisfaction with real-time tracking",
          "Streamlined inventory management reducing waste by 25%"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe API"]
      },
      "Indian Clothing Brand": {
        overview: "An e-commerce platform for a traditional Indian clothing brand, featuring virtual try-on capabilities and size recommendations based on Indian body measurements.",
        challenge: "Creating an engaging shopping experience that accurately represents traditional Indian clothing while providing accurate sizing and fit information.",
        solution: "Built a responsive e-commerce platform with AR-powered virtual try-on features, detailed product visualization, and a comprehensive size guide specifically designed for Indian body types.",
        results: [
          "50% reduction in return rates due to better size guidance",
          "35% increase in customer engagement with virtual try-on",
          "Expanded market reach to international customers",
          "Improved conversion rate by 45%"
        ],
        technologies: ["React", "Three.js", "WebGL", "Node.js", "PostgreSQL", "AWS"]
      },
      "Daily Groceries Online Shop": {
        overview: "A comprehensive online grocery shopping platform with smart inventory management, automated reordering, and efficient delivery route optimization.",
        challenge: "Managing perishable inventory, optimizing delivery routes, and ensuring timely delivery of fresh groceries while maintaining competitive pricing.",
        solution: "Developed an AI-powered platform with smart inventory management, route optimization algorithms, and real-time delivery tracking. Implemented a user-friendly mobile app for both customers and delivery personnel.",
        results: [
          "30% reduction in delivery time",
          "25% decrease in inventory waste",
          "40% growth in customer base",
          "Improved delivery efficiency by 50%"
        ],
        technologies: ["React Native", "Python", "TensorFlow", "PostgreSQL", "Google Maps API"]
      },
      "Grocery Admin Control": {
        overview: "A comprehensive admin dashboard for managing multiple grocery stores, inventory, staff, and analytics in real-time.",
        challenge: "Creating a centralized system to manage multiple store locations, complex inventory, and staff scheduling while providing actionable business insights.",
        solution: "Built a powerful admin dashboard with real-time analytics, inventory management, staff scheduling, and multi-store management capabilities. Implemented automated reporting and alert systems.",
        results: [
          "60% reduction in manual inventory management time",
          "Improved inventory accuracy by 95%",
          "30% reduction in operational costs",
          "Enhanced decision-making with real-time analytics"
        ],
        technologies: ["React", "Node.js", "MongoDB", "D3.js", "Socket.io", "Redis"]
      }
    };

    return caseStudies[title] || {
      overview: "Case study details coming soon...",
      challenge: "To be announced",
      solution: "To be announced",
      results: ["Coming soon"],
      technologies: ["To be announced"]
    };
  };

  const caseStudy = getCaseStudyContent(project.title);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex justify-between items-center">
            {project.title}
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6 space-y-8">
          {/* Hero Image */}
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <img 
              src={project.imageSrc} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-sm font-mono bg-black/50 backdrop-blur-sm text-white px-3 py-1">
                {project.categoryLabel}
              </span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-xl font-bold mb-3">Overview</h3>
            <p className="text-muted-foreground">{caseStudy.overview}</p>
          </div>

          {/* Challenge */}
          <div>
            <h3 className="text-xl font-bold mb-3">Challenge</h3>
            <p className="text-muted-foreground">{caseStudy.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-xl font-bold mb-3">Solution</h3>
            <p className="text-muted-foreground">{caseStudy.solution}</p>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-xl font-bold mb-3">Results</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {caseStudy.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal; 