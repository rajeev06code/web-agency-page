import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 geometric-pattern opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r   rounded-3xl p-10 md:p-16 shadow-2xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to bring your idea to life?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's start a conversation about your project and discover how we can help you achieve your goals.
            </p>
            <Button asChild variant="secondary" className="bg-black hover:bg-opacity-90 text-primary font-accent">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
