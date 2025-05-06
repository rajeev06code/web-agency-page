import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does pixelBuilders offer?",
    answer: "We offer comprehensive web and mobile development services including custom website development, e-commerce solutions, mobile app development, UI/UX design, and digital marketing services."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary depending on complexity and scope. A typical website project takes 4-8 weeks, while mobile apps may take 8-16 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "What is your development process?",
    answer: "Our process includes discovery, planning, design, development, testing, and deployment. We maintain clear communication throughout and provide regular updates and demos."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer various maintenance and support packages to ensure your digital product continues to perform optimally after launch."
  },
  {
    question: "How do you handle project pricing?",
    answer: "We provide detailed quotes based on project requirements. Our pricing is transparent and includes all necessary features and services. We offer flexible payment terms."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and what makes us different.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 