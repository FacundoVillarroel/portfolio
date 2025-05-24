import type {
  ProjectType,
  CategoryType,
} from "@/components/project-details-modal";

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "Sword Website",
    description:
      "Institutional website developed for a real client as part of a team project.",
    longDescription:
      "Collaborative project built with React during the Coderhouse program, working alongside UX/UI designers and other developers. The site was developed for an actual client (Sword), following professional design and frontend development practices.",
    image: "/dword.png",
    technologies: ["React", "CSS", "Figma"],
    demoUrl: "https://proyecto-coder-drab.vercel.app/",
    repoUrl: "https://github.com/FacundoVillarroel/Proyecto-Coder",
    category: ["web"],
  },
  {
    id: "2",
    title: "Clockaburra API (Backend)",
    description: "Scalable RESTful API for shift and employee management.",
    longDescription:
      "Robust backend built with Node.js, featuring JWT authentication, Swagger documentation, Firebase integration, and modular architecture. Ideal for HR systems, with full deployment and best backend practices.",
    image: "/clockaburra-backend.png",
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "Firebase",
      "JWT",
      "Swagger",
    ],
    demoUrl: "https://clockaburra-restful-api.vercel.app/api-docs",
    repoUrl: "https://github.com/FacundoVillarroel/Clockaburra-RESTful-API",
    category: ["backend", "fullstack"],
  },
  {
    id: "3",
    title: "Clockaburra Web (Frontend)",
    description: "Web frontend for Clockaburra app, built in React.",
    longDescription:
      "Responsive web app connected to the Clockaburra API. Allows users to log shifts, view history, and manage schedules. Uses Redux for state management and Axios for API calls.",
    image: "/clockaburra-web.png",
    technologies: ["React", "Redux", "Axios", "React Router"],
    demoUrl: "https://clockaburra-web.vercel.app/",
    repoUrl: "https://github.com/FacundoVillarroel/Clockaburra-Web",
    category: ["web", "fullstack"],
  },
  {
    id: "4",
    title: "Clockaburra App (Mobile)",
    description: "Mobile app built with React Native for shift tracking.",
    longDescription:
      "Developed with React Native and Expo for employees to clock in/out and view their work stats. Real-time backend integration, designed for mobile performance and usability.",
    image: "/clockaburra-app.png",
    technologies: ["React Native", "Expo", "Redux", "React Navigation"],
    demoUrl: "",
    repoUrl: "https://github.com/FacundoVillarroel/Clockaburra-App",
    category: ["mobile", "fullstack"],
  },
  {
    id: "5",
    title: "Ecommerce Backend",
    description:
      "Full-featured ecommerce backend with GraphQL and real-time updates.",
    longDescription:
      "Final project for the Backend course. Includes user authentication, cart functionality, GraphQL queries, WebSocket notifications, and email integration with Nodemailer. Deployed and production-ready.",
    image: "/ecommerce-backend.png",
    technologies: ["Node.js", "GraphQL", "JWT", "WebSockets", "MongoDB"],
    demoUrl: "https://final-project-backend-ecommerce.vercel.app/",
    repoUrl: "https://github.com/FacundoVillarroel/finalProjectBackend",
    category: ["backend"],
  },
  {
    id: "6",
    title: "Recreativo F.C. (Ecommerce in React)",
    description:
      "Sports club website with dynamic store built in React and Firebase.",
    longDescription:
      "Final React project showcasing a full-featured frontend with Firebase integration. Includes a product catalog, cart, and responsive UI tailored to a real use case.",
    image: "/recreativo-ecommerce.png",
    technologies: ["React", "Firebase", "Bootstrap", "SCSS"],
    demoUrl: "https://proyecto-final-react-js-two.vercel.app/tienda",
    repoUrl: "https://github.com/FacundoVillarroel/ProyectoFinalReactJS",
    category: ["web"],
  },
  {
    id: "7",
    title: "Recreativo F.C. (Web Dev Project)",
    description: "Responsive static site built with a mobile-first approach.",
    longDescription:
      "Developed for the Web Development course, this site applies HTML, CSS, and Bootstrap to create a static but fully responsive design. Represents a strong foundation in web layout and structure.",
    image: "/recreativo-web.png",
    technologies: ["HTML", "CSS", "SCSS", "Bootstrap"],
    demoUrl: "https://facundovillarroel.github.io/FinalProyectWebDevelopment/",
    repoUrl: "https://github.com/FacundoVillarroel/FinalProyectWebDevelopment",
    category: ["web"],
  },
  {
    id: "8",
    title: "Mybrary",
    description: "CRUD app for managing books built with Node.js and MongoDB.",
    longDescription:
      "Educational fullstack app to manage a library of books. Implements full CRUD operations, EJS templating, and MongoDB for persistence. Demonstrates understanding of server-side rendering and Express routing.",
    image: "/mybrary.png",
    technologies: ["Node.js", "Express", "MongoDB", "EJS"],
    demoUrl: "https://mybrary-snowy.vercel.app/",
    repoUrl: "https://github.com/FacundoVillarroel/Mybrary",
    category: ["backend"],
  },
  {
    id: "9",
    title: "Exercises App",
    description:
      "Aplicación para visualizar una lista de ejercicios físicos, construida con React.",
    longDescription:
      "Aplicación educativa en desarrollo para gestionar una lista de ejercicios físicos. Actualmente, permite visualizar los ejercicios, pero no implementa operaciones CRUD. Utiliza React para la interfaz de usuario y está desplegada en Vercel.",
    image: "/exercise-app.png",
    technologies: ["React", "Vercel"],
    demoUrl: "https://exercises-app.vercel.app",
    repoUrl: "https://github.com/FacundoVillarroel/Exercises_App",
    category: ["web"],
  },
];

export const getProjectById = (id: string): ProjectType | undefined => {
  return projects.find((project) => project.id === id);
};

export function getProjectsByCategory(category: string) {
  return projects.filter(
    (project) =>
      category === "all" || project.category.includes(category as CategoryType)
  );
}
