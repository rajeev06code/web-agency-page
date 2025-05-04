import { useRef } from "react";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (direction: 'prev' | 'next') => {
    if (!sliderRef.current) return;
    
    const slider = sliderRef.current;
    const slideWidth = slider.offsetWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    
    if (direction === 'prev') {
      slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="relative">
          {/* Testimonial slider */}
          <div 
            ref={sliderRef}
            className="flex flex-nowrap overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide space-x-6 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="snap-start flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-1"
              >
                <div className="bg-card border border-primary/5 rounded-xl p-6 h-full">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary" />
                  </div>
                  <p className="mb-6 text-lg">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.author.image} 
                      alt={testimonial.author.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.author.name}</h4>
                      <p className="text-sm opacity-70">{testimonial.author.role}, {testimonial.author.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <Button 
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full bg-card shadow-lg hover:bg-primary/10 transition-colors z-10"
            onClick={() => scrollToSlide('prev')}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button 
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full bg-card shadow-lg hover:bg-primary/10 transition-colors z-10"
            onClick={() => scrollToSlide('next')}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
