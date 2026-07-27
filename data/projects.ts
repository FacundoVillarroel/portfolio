import type {
  ProjectType,
  CategoryType,
} from "@/components/project-details-modal";

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "Clockaburra",
    description:
      "Full-stack workforce management platform with Web, Mobile and REST API.",
    longDescription:
      "Clockaburra is a complete SaaS platform designed to simplify workforce management. The project includes a scalable REST API, a React web application for administrators and managers, and a React Native mobile application for employees. Features include employee management, shift scheduling, attendance tracking, timesheets, role-based permissions and real-time synchronization across every client.",
    image: "/clockaburra-web.png",
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "Redux Toolkit",
      "Firebase Auth",
      "JWT",
      "REST API",
      "Swagger",
      "Role-Based Access",
      "Real-Time Sync",
      "Responsive Design",
    ],
    demoUrl: "https://youtu.be/IoPG2P4DQTI",
    repoUrl: "https://github.com/FacundoVillarroel/Clockaburra-RESTful-API",
    category: ["backend", "fullstack", "web"],
  },
  {
    id: "2",
    title: "Tu Mundo Interior",
    description:
      "Appointment management platform developed for a real psychology practice.",
    longDescription:
      "Full stack application developed for a real client. Includes appointment scheduling, availability management, contact forms, Google Calendar synchronization, email notifications and an administrative dashboard. Focused on simplifying daily operations while providing a professional experience for both administrators and patients.",
    image: "/tumundointerior.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Google Calendar API",
      "Mailjet",
    ],
    demoUrl: "https://www.tumundointerior.cl",
    repoUrl: "https://github.com/FacundoVillarroel/TuMundoInterior",
    category: ["fullstack", "web", "mobile"],
  },
  {
    id: "3",
    title: "DWORD Corporate Website",
    description:
      "Corporate website developed collaboratively for a real client.",
    longDescription:
      "Responsive corporate website built with React as part of a collaborative team project. Developed alongside UX/UI designers and frontend developers following professional workflows, transforming Figma designs into a production-ready website for a real client.",
    image: "/dword.png",
    technologies: ["React", "React Router", "Bootstrap", "CSS", "Figma"],
    demoUrl: "https://proyecto-coder-drab.vercel.app/",
    repoUrl: "https://github.com/FacundoVillarroel/Proyecto-Coder",
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
