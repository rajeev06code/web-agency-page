import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-accent rounded-full opacity-20 blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Tech startup team working together" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We build products that make a difference</h2>
            <p className="text-lg opacity-80 mb-6">
              NexDev is a team of passionate developers, designers, and strategists who love solving complex problems with elegant solutions.
            </p>
            <p className="opacity-80 mb-8">
              Founded in 2018, we've helped startups and established businesses create digital products that users love. Our approach combines technical expertise with creative thinking to deliver results that exceed expectations.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-1">50+</h3>
                <p className="text-sm opacity-80">Projects completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-1">25+</h3>
                <p className="text-sm opacity-80">Happy clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-1">15</h3>
                <p className="text-sm opacity-80">Team members</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-1">5+</h3>
                <p className="text-sm opacity-80">Years experience</p>
              </div>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-accent">
              <a href="#contact">Get to know us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
