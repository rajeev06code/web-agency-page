import { useState, useRef, useEffect } from "react";
import { projects } from "@/data/projects";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

type CategoryFilter = 'all' | 'web' | 'mobile' | 'ui-ux';

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
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
      className="group opacity-0"
      style={{ animationDelay: `${200 + index * 150}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden border border-primary/10">
        <div className="absolute top-0 left-0 p-4 z-10">
          <span className="text-xs font-mono bg-black/50 backdrop-blur-sm text-white px-3 py-1 inline-block">
            {project.categoryLabel}
          </span>
        </div>
        
        <div className="absolute bottom-0 right-0 p-4 z-10">
          <span className="font-mono text-xs bg-black/50 backdrop-blur-sm text-white px-3 py-1 inline-block">
            0{index + 1}
          </span>
        </div>
        
        <img 
          src={project.imageSrc} 
          alt={project.title} 
          className="w-full h-80 object-cover filter grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
        />
        
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col justify-end transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="p-6">
            <h3 className="text-white text-2xl font-bold">{project.title}</h3>
            <div className="w-10 h-0.5 bg-primary my-3"></div>
            <p className="text-white/80 text-sm">{project.description}</p>
          </div>
        </div>
        
        <div className={`absolute inset-0 bg-primary/5 backdrop-blur-0 opacity-0 transition-opacity duration-500 ${hovered ? 'opacity-100' : ''} flex items-center justify-center`}>
          <a 
            href={project.caseStudyUrl} 
            className="bg-primary text-primary-foreground p-4 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500"
          >
            <ArrowUpRight className="h-8 w-8" />
          </a>
        </div>
      </div>
      
      <div className="mt-6 mb-12 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.categoryLabel}</p>
        </div>
        <a 
          href={project.caseStudyUrl} 
          className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center"
        >
          View case study
          <ArrowRight className={`h-4 w-4 ml-1 transition-transform duration-300 ${hovered ? 'translate-x-1' : ''}`} />
        </a>
      </div>
    </div>
  );
};

const Work = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      
      {/* Animated background elements */}
      <div className="absolute left-0 top-1/3 w-1/3 h-px bg-gradient-to-r from-transparent to-primary/10"></div>
      <div className="absolute right-0 top-2/3 w-1/3 h-px bg-gradient-to-l from-transparent to-primary/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-20 max-w-3xl">
          <div className="inline-block mb-4">
            <div className="flex items-center">
              <div className="w-10 h-px bg-primary mr-4"></div>
              <span className="text-sm uppercase tracking-widest font-medium text-primary">Projects</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our work<span className="text-primary">.</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl animate-slide-up animate-delay-100">
            Explore our featured projects and discover how we've helped businesses transform their digital presence and accomplish their goals.
          </p>
        </div>
        
        {/* Project filters */}
        <div className="flex flex-wrap mb-16 gap-8 animate-fade-in animate-delay-200">
          <button 
            className={`text-sm font-medium relative ${activeFilter === 'all' ? 'text-primary' : 'text-muted-foreground hover:text-primary'} transition-colors`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
            {activeFilter === 'all' && (
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></div>
            )}
          </button>
          <button 
            className={`text-sm font-medium relative ${activeFilter === 'web' ? 'text-primary' : 'text-muted-foreground hover:text-primary'} transition-colors`}
            onClick={() => setActiveFilter('web')}
          >
            Web Development
            {activeFilter === 'web' && (
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></div>
            )}
          </button>
          <button 
            className={`text-sm font-medium relative ${activeFilter === 'mobile' ? 'text-primary' : 'text-muted-foreground hover:text-primary'} transition-colors`}
            onClick={() => setActiveFilter('mobile')}
          >
            Mobile Apps
            {activeFilter === 'mobile' && (
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></div>
            )}
          </button>
          <button 
            className={`text-sm font-medium relative ${activeFilter === 'ui-ux' ? 'text-primary' : 'text-muted-foreground hover:text-primary'} transition-colors`}
            onClick={() => setActiveFilter('ui-ux')}
          >
            UI/UX Design
            {activeFilter === 'ui-ux' && (
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></div>
            )}
          </button>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            asChild 
            variant="outline" 
            className="border-primary font-accent group"
          >
            <p  className="flex items-center px-8 py-6">
              {/* <Plus className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />  */}
              Many more..
            </p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Work;
