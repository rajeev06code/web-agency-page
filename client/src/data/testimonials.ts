export interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    content: "pixelBuilders exceeded our expectations in every way. They not only delivered a stunning website but also provided valuable insights that improved our business strategy.",
    author: {
      name: "Deepika Kumari",
      role: "Business Owner",
      company: "Scoopliner",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    }
  },
  {
    id: "2",
    content: "Working with pixelBuilders was a game-changer for our business. Their mobile app development expertise helped us reach new customers and streamline our operations.",
    author: {
      name: "Brijesh Gupta",
      role: "Sales",
      company: "Gupta Enterprises",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    }
  },
  {
    id: "3",
    content: "The team at pixelBuilders truly understands what makes a great user experience. They transformed our complex data into an intuitive dashboard that our customers love using.",
    author: {
      name: "Mushir Ul Haq",
      role: "Owner",
      company: "Freelancer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    }
  }
];
