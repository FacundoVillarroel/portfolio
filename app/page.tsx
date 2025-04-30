"use client";

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ProjectDetailsModal,
  type ProjectType,
} from "@/components/project-details-modal";
import { getProjectsByCategory } from "@/data/projects";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    let id = e.target.id;
    if (id === "first-name") {
      id = "firstName";
    }
    if (id === "last-name") {
      id = "lastName";
    }
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
    alert("Message sent!");
    console.log(formData);
  };

  const triggerClass =
    "data-[state=active]:bg-blue-500 data-[state=active]:text-white";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-slate-950/80 dark:border-slate-800">
        <div className="container flex h-16 items-center justify-between px-8">
          <div className="font-bold text-xl">
            <span className="text-slate-900 dark:text-white">Facundo</span>
            <span className="text-blue-600">Villarroel</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#home"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#education"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Education
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <a href="/CV-FACUNDO-VILLARROEL.pdf" download>
              Download CV
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 md:pt-24 lg:pt-32 xl:pt-36">
        <div className="container px-4 md:px-6">
          <div className="px-8 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Facundo Villarroel
                </h1>
                <p className="max-w-[600px] text-slate-500 md:text-xl dark:text-slate-400">
                  Fullstack Developer | React, React Native & Node.js
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
              <div className="flex flex-col gap-2 text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>Valencia, Spain</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>+61493689631</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span>facu.villarroel96@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <Link
                    href="https://www.linkedin.com/in/facundo-villarroel-391a26236"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 text-blue-600 hover:text-blue-800" />
                  </Link>
                  <Link
                    href="https://github.com/FacundoVillarroel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 text-blue-600 hover:text-blue-800" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]">
                <Image
                  src="/FotoCv.jpg"
                  alt="Facundo Villarroel"
                  className="rounded-full object-cover"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                Professional Profile
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <p className="text-slate-500 dark:text-slate-400">
                  Full-stack developer with hands-on experience building web and
                  mobile applications from scratch using React, React Native,
                  Node.js, and Firebase.
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  Recognized for commitment and responsibility, with strong
                  ability to learn quickly, work collaboratively, and adapt to
                  dynamic projects. Passionate about solving real-world problems
                  and creating intuitive, functional interfaces.
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  Skilled in effective communication, critical thinking, and
                  time management, enabling the development of efficient
                  solutions and collaboration in fast-paced development
                  environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Technical Skills
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                Technologies and tools I work with
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">React.js</span>
                    <span className="text-sm text-slate-500">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">React Native</span>
                    <span className="text-sm text-slate-500">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Redux</span>
                    <span className="text-sm text-slate-500">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">TypeScript</span>
                    <span className="text-sm text-slate-500">70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Node.js</span>
                    <span className="text-sm text-slate-500">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Express</span>
                    <span className="text-sm text-slate-500">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">RESTful APIs</span>
                    <span className="text-sm text-slate-500">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">GraphQL</span>
                    <span className="text-sm text-slate-500">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Database & Cloud</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Firebase</span>
                    <span className="text-sm text-slate-500">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">MongoDB</span>
                    <span className="text-sm text-slate-500">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">
                      PostgreSQL/MySQL
                    </span>
                    <span className="text-sm text-slate-500">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">
                      AWS & Cloud Services
                    </span>
                    <span className="text-sm text-slate-500">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Other Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Version Control (Git & GitHub)
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Authentication & Authorization (JWT, OAuth)
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Unit & Integration Testing (Jest)
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Web Application Security Implementation
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Performance Optimization and Scalability
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">
                      Spanish (Native)
                    </span>
                    <span className="text-sm text-slate-500">100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">
                      English (C1 Level)
                    </span>
                    <span className="text-sm text-slate-500">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 md:py-24 lg:py-32 bg-slate-100 dark:bg-slate-900"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Education
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                My academic background and certifications
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>React Native</CardTitle>
                <CardDescription>Coderhouse academy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 dark:text-slate-400">
                  January 2023
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Node JS</CardTitle>
                <CardDescription>Coderhouse academy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 dark:text-slate-400">
                  October 2022
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>React JS</CardTitle>
                <CardDescription>Coderhouse academy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-500 dark:text-slate-400">April 2022</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Projects
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                Showcasing my work
              </p>
            </div>
          </div>
          <Tabs defaultValue="all" className="mt-12">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all" className={triggerClass}>
                  All
                </TabsTrigger>
                <TabsTrigger value="mobile" className={triggerClass}>
                  Mobile
                </TabsTrigger>
                <TabsTrigger value="web" className={triggerClass}>
                  Web
                </TabsTrigger>
                <TabsTrigger value="backend" className={triggerClass}>
                  Backend
                </TabsTrigger>
                <TabsTrigger value="fullstack" className={triggerClass}>
                  Fullstack
                </TabsTrigger>
              </TabsList>
            </div>
            {["all", "mobile", "web", "backend", "fullstack"].map(
              (category) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {getProjectsByCategory(category).map((project) => (
                      <Card key={project.id}>
                        <CardHeader className="p-0">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={500}
                            height={300}
                            className="rounded-t-lg object-cover w-full h-48"
                          />
                        </CardHeader>
                        <CardContent className="p-6">
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription className="mt-2">
                            {project.description}
                          </CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <div className="flex gap-2">
                            {project.demoUrl && (
                              <Button variant="outline" size="sm" asChild>
                                <a
                                  href={project.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View demo
                                </a>
                              </Button>
                            )}
                            {project.repoUrl && (
                              <Button variant="outline" size="sm" asChild>
                                <a
                                  href={project.repoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Github className="h-4 w-4 mr-2" />
                                  Repository
                                </a>
                              </Button>
                            )}
                          </div>
                          <Button
                            size="sm"
                            onClick={() => {
                              setSelectedProject(project);
                              setIsModalOpen(true);
                            }}
                          >
                            Details
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              )
            )}
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 md:py-24 lg:py-32 bg-slate-100 dark:bg-slate-900"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center  space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Me
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                Let's discuss your project or opportunities
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>
                  Fill out the form and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter the subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="flex flex-col space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-slate-500 dark:text-slate-400">
                        +61493689631
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-slate-500 dark:text-slate-400">
                        facu.villarroel96@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-slate-500 dark:text-slate-400">
                        Valencia, Spain
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.linkedin.com/in/facundo-villarroel-391a26236"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-blue-600 dark:text-slate-400"
                    >
                      <Linkedin className="h-10 w-10" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                      href="https://github.com/FacundoVillarroel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-blue-600 dark:text-slate-400"
                    >
                      <Github className="h-10 w-10" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-slate-950 dark:border-slate-800">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-8">
          <div className="text-center text-sm leading-loose text-slate-500 dark:text-slate-400 md:text-left">
            © 2025 Facundo Villarroel. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/facundo-villarroel-391a26236"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 dark:text-slate-400"
            >
              <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/FacundoVillarroel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 dark:text-slate-400"
            >
              <Github className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </footer>
      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
