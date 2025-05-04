import { useState } from "react";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type CategoryFilter = 'all' | 'web' | 'mobile' | 'ui-ux';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-20 bg-gradient-to-b dark:from-background/90 dark:to-background from-background/90 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Explore our case studies and see how we've helped businesses achieve their goals.
          </p>
        </div>
        
        {/* Project filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          <Button 
            variant={activeFilter === 'all' ? 'default' : 'outline'} 
            className={activeFilter === 'all' ? 'bg-primary text-white' : 'bg-card hover:bg-primary/10'}
            size="sm"
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </Button>
          <Button 
            variant={activeFilter === 'web' ? 'default' : 'outline'} 
            className={activeFilter === 'web' ? 'bg-primary text-white' : 'bg-card hover:bg-primary/10'}
            size="sm"
            onClick={() => setActiveFilter('web')}
          >
            Web
          </Button>
          <Button 
            variant={activeFilter === 'mobile' ? 'default' : 'outline'} 
            className={activeFilter === 'mobile' ? 'bg-primary text-white' : 'bg-card hover:bg-primary/10'}
            size="sm"
            onClick={() => setActiveFilter('mobile')}
          >
            Mobile
          </Button>
          <Button 
            variant={activeFilter === 'ui-ux' ? 'default' : 'outline'} 
            className={activeFilter === 'ui-ux' ? 'bg-primary text-white' : 'bg-card hover:bg-primary/10'}
            size="sm"
            onClick={() => setActiveFilter('ui-ux')}
          >
            UI/UX
          </Button>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={project.imageSrc} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6">
                    <span className={`${project.categoryColor} text-white text-xs font-medium px-2.5 py-1 rounded-full`}>
                      {project.categoryLabel}
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2">{project.title}</h3>
                    <p className="text-white/80 text-sm mt-1">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a href={project.caseStudyUrl} className="text-primary font-medium group-hover:text-accent transition-colors flex items-center">
                  View case study
                  <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-primary hover:bg-primary/10 text-primary font-accent">
            <a href="#">View all projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Work;
