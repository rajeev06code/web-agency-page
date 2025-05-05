import image from "../assets/images/cake.jpeg"
import image2 from "../assets/images/clothing.jpeg"
import image3 from "../assets/images/grocerymob.jpeg"
import image4 from "../assets/images/schedul.png"
import image5 from "../assets/images/cart.png"
import image6 from "../assets/images/dashboard.png"

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'ui-ux';
  categoryLabel: string;
  categoryColor: string;
  imageSrc: string;
  caseStudyUrl: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "Online Bakery Shop",
    description: "A complete e-commerce solution with modern UX",
    category: "web",
    categoryLabel: "Web App",
    categoryColor: "bg-primary",
    imageSrc: image,
    caseStudyUrl: "#"
  },
  {
    id: "health-tracker",
    title: "Indian Clothing Brand ",
    description: "Mobile app for tracking health and fitness goals",
    category: "mobile",
    categoryLabel: "Mobile App",
    categoryColor: "bg-accent",
    imageSrc:image2,
    caseStudyUrl: "#"
  },
  {
    id: "finance-dashboard",
    title: "Daily Groceries Online Shop",
    description: "Intuitive shop for daily use",
    category: "ui-ux",
    categoryLabel: "UI/UX Design",
    categoryColor: "bg-secondary",
    imageSrc:image3,
    caseStudyUrl: "#"
  },
  {
    id: "customization",
    title: "Customization ? No Worry",
    description: "We create your ideas.",
    category: "ui-ux",
    categoryLabel: "UI/UX Design",
    categoryColor: "bg-secondary",
    imageSrc:image4,
    caseStudyUrl: "#"
  },
  {
    id: "seamless",
    title: "Seamless Checkouts",
    description: "Supports all third party payment gateway",
    category: "web",
    categoryLabel: "Web App",
    categoryColor: "bg-secondary",
    imageSrc:image5,
    caseStudyUrl: "#"
  },
  {
    id: "admin",
    title: "Grocery Admin Control",
    description: "Store and Admin Panel go side by side.",
    category: "web",
    categoryLabel: "Web App",
    categoryColor: "bg-secondary",
    imageSrc:image6,
    caseStudyUrl: "#"
  },
 
  
];
