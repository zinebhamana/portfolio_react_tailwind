import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { cn } from "../lib/utils";

const categories = ["all", "web dev", "app dev", "desktop app"];

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind.",
    image: "/projects/project.png",
    tags: ["React", "TailwindCSS"],
    category: "web dev",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Pomodoro Timer",
    description: "Focus timer application.",
    image: "/projects/project.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web dev",
    demoUrl: "https://focus-pomodoro-pro.netlify.app/",
    githubUrl: "https://github.com/zinebhamana/Pomodoro-Timer",
  },
  {
    id: 3,
    title: " Quiz App",
    description: "Android application for children .",
    image: "/projects/project.png",
    tags: ["Kotlin", "Android Studio", "In Progress"],
    category: "app dev",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: " Daycare managment app",
    description: "Android application for children .",
    image: "/projects/project.png",
    tags: ["React", "tailwind", "In Progress"],
    category: "desktop app",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: " Kids learning ",
    description: "Android application for children .",
    image: "/projects/project.png",
    tags: ["React", "tailwind css", "In Progress"],
    category: "web dev",
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Featured <span className="text-glow">Projects</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "border-theme card-hover shadow-xs gradient-border border px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-primary hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="text-center text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border-theme group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="gradient-border px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                  >
                    <ExternalLink size={20} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};