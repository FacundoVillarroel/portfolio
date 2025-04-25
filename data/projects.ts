import type { ProjectType } from "@/components/project-details-modal";

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "Sword Website (Coder Project)",
    description:
      "Institutional website developed for a real client as part of a team project.",
    longDescription:
      "Collaborative project built with React during the Coderhouse program, working alongside UX/UI designers and other developers. The site was developed for an actual client (Sword), following professional design and frontend development practices.",
    image: "/dword.png",
    technologies: ["React", "CSS", "Figma"],
    demoUrl: "https://proyecto-coder-drab.vercel.app/",
    category: "web",
  },
  {
    id: "2",
    title: "Clockaburra API (Backend)",
    description: "Scalable RESTful API for shift and employee management.",
    longDescription:
      "Robust backend built with Node.js, featuring JWT authentication, Swagger documentation, MongoDB integration, and modular architecture. Ideal for HR systems, with full deployment and best backend practices.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    demoUrl: "https://sustaining-bristle-moose.glitch.me/api-docs/",
    category: "fullstack",
  },
  {
    id: "3",
    title: "Clockaburra Web (Frontend)",
    description: "Web frontend for Clockaburra app, built in React.",
    longDescription:
      "Responsive web app connected to the Clockaburra API. Allows users to log shifts, view history, and manage schedules. Uses Redux for state management and Axios for API calls.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Redux", "Axios", "React Router"],
    demoUrl: "https://clockaburra-web.vercel.app/",
    category: "web",
  },
  {
    id: "4",
    title: "Clockaburra App (Mobile)",
    description: "Mobile app built with React Native for shift tracking.",
    longDescription:
      "Developed with React Native and Expo for employees to clock in/out and view their work stats. Real-time backend integration, designed for mobile performance and usability.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React Native", "Expo", "Redux", "React Navigation"],
    demoUrl: "#",
    category: "mobile",
  },
  {
    id: "5",
    title: "Ecommerce Backend (Final Backend Project)",
    description:
      "Full-featured ecommerce backend with GraphQL and real-time updates.",
    longDescription:
      "Final project for the Backend course. Includes user authentication, cart functionality, GraphQL queries, WebSocket notifications, and email integration with Nodemailer. Deployed and production-ready.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Node.js", "GraphQL", "JWT", "WebSockets", "MongoDB"],
    demoUrl: "https://sustaining-bristle-moose.glitch.me/",
    category: "fullstack",
  },
  {
    id: "6",
    title: "Recreativo F.C. (React Final Project)",
    description:
      "Sports club website with dynamic store built in React and Firebase.",
    longDescription:
      "Final React project showcasing a full-featured frontend with Firebase integration. Includes a product catalog, cart, and responsive UI tailored to a real use case.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Firebase", "Bootstrap", "SCSS"],
    demoUrl: "https://proyecto-final-react-js-two.vercel.app/",
    category: "web",
  },
  {
    id: "7",
    title: "Recreativo F.C. (Web Dev Project)",
    description: "Responsive static site built with a mobile-first approach.",
    longDescription:
      "Developed for the Web Development course, this site applies HTML, CSS, and Bootstrap to create a static but fully responsive design. Represents a strong foundation in web layout and structure.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["HTML", "CSS", "SCSS", "Bootstrap"],
    demoUrl: "https://facundovillarroel.github.io/FinalProyectWebDevelopment/",
    category: "web",
  },
  {
    id: "8",
    title: "Personal Portfolio Website",
    description: "Professional portfolio built with React and TypeScript.",
    longDescription:
      "This personal website highlights fullstack experience and showcases key projects. Built with React and TypeScript, featuring custom components, animations, and clean design.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "TypeScript", "CSS"],
    demoUrl: "https://portfolio-delta-one-45.vercel.app/",
    category: "web",
  },
  {
    id: "9",
    title: "Mybrary",
    description: "CRUD app for managing books built with Node.js and MongoDB.",
    longDescription:
      "Educational fullstack app to manage a library of books. Implements full CRUD operations, EJS templating, and MongoDB for persistence. Demonstrates understanding of server-side rendering and Express routing.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Node.js", "Express", "MongoDB", "EJS"],
    demoUrl: "https://mybrary-web-one.herokuapp.com/",
    category: "fullstack",
  },
  {
    id: "10",
    title: "JavaScript Store (Final JS Project)",
    description:
      "Online store built with pure JavaScript and DOM manipulation.",
    longDescription:
      "Developed as a final project for the JavaScript course. Implements cart logic, filters, search, and UI interactions without frameworks. Highlights deep understanding of vanilla JS and browser APIs.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["JavaScript", "HTML", "CSS", "SCSS"],
    demoUrl: "https://facundovillarroel.github.io/FinalProyectJavaScript/",
    category: "web",
  },
];

export const getProjectById = (id: string): ProjectType | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): ProjectType[] => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};
