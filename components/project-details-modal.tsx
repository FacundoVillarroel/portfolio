"use client";

import { X } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  category: "mobile" | "web" | "fullstack" | "backend";
};

interface ProjectDetailsModalProps {
  project: ProjectType | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailsModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">
              {project.title}
            </DialogTitle>
            <DialogClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>
          </div>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="relative h-[200px] w-full my-4">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Project Overview</h3>
            <p className="text-slate-500 dark:text-slate-400">
              {project.longDescription}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          {project.demoUrl && (
            <Button variant="outline" asChild>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo
              </a>
            </Button>
          )}
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
