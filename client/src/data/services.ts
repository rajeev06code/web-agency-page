export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "We build responsive, scalable web applications using modern technologies like React, Next.js, and Node.js.",
    iconName: "Code",
    features: [
      "Full-stack development",
      "Progressive web apps",
      "E-commerce solutions"
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "We create native and cross-platform mobile applications that deliver exceptional user experiences.",
    iconName: "Smartphone",
    features: [
      "iOS & Android apps",
      "React Native development",
      "App store optimization"
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "We craft beautiful, intuitive interfaces that focus on user experience and business objectives.",
    iconName: "PenTool",
    features: [
      "User research & testing",
      "Wireframing & prototyping",
      "Design systems"
    ]
  }
];
