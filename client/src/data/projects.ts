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
    title: "E-commerce Platform",
    description: "A complete e-commerce solution with modern UX",
    category: "web",
    categoryLabel: "Web App",
    categoryColor: "bg-primary",
    imageSrc: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=400&q=80",
    caseStudyUrl: "#"
  },
  {
    id: "health-tracker",
    title: "Health Tracker",
    description: "Mobile app for tracking health and fitness goals",
    category: "mobile",
    categoryLabel: "Mobile App",
    categoryColor: "bg-accent",
    imageSrc: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=400&q=80",
    caseStudyUrl: "#"
  },
  {
    id: "finance-dashboard",
    title: "Finance Dashboard",
    description: "Intuitive dashboard for personal finance management",
    category: "ui-ux",
    categoryLabel: "UI/UX Design",
    categoryColor: "bg-secondary",
    imageSrc: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=400&q=80",
    caseStudyUrl: "#"
  }
];
