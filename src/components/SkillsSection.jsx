import { useState } from "react";
import { cn } from "../lib/utils";
import tailwindLogo from "../assets/tailwind.svg";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import reactLogo from "../assets/react.svg";
import canvaLogo from "../assets/canva.svg";
import gitLogo from "../assets/git.svg";
import githubLogo from "../assets/github.svg";
import javaLogo from "../assets/java.svg";
import jsLogo from "../assets/js.svg";
import kotlinLogo from "../assets/kotlin.svg";
import tsLogo from "../assets/typescript.svg";
import pythonLogo from "../assets/python.svg";
import figmaLogo from "../assets/figma.svg";
import adobeLogo from "../assets/adobe.svg";
import  CLogo from "../assets/C.svg";
import sqlLogo from "../assets/sql.svg";
import liteLogo from "../assets/SQLITE.svg";





const skills = [
  // Frontend
  { images: [htmlLogo, cssLogo], name: "HTML/CSS", level: 95, category: "frontend" },
  { image: jsLogo , name: "JavaScript", level: 70, category: "frontend" },
  { image: reactLogo ,name: "React", level: 50, category: "frontend" },
  { image: tailwindLogo , name: "Tailwind CSS", level: 50, category: "frontend" },

  // Backend
  { image: pythonLogo , name: "Python", level: 60, category: "backend" },
  { image: javaLogo , name: "Java", level: 75, category: "backend" },
  { image: tsLogo , name: "TypeScript", level: 70, category: "backend" },
  { image: kotlinLogo , name: "Kotlin", level: 40, category: "backend" },
  { image: CLogo , name: "C", level: 70, category: "backend" },
  { image: sqlLogo , name: "MySql", level: 65, category: "backend" },
  { image: liteLogo , name: "SQLite", level: 65, category: "backend" },

  // Tools
  {  images: [gitLogo, githubLogo], name: "Git/GitHub", level: 60, category: "tools" },
  { image: adobeLogo, name: "Adobe XD", level: 80, category: "tools" },
  { image: figmaLogo, name: "Figma", level: 95, category: "tools" },
  { image: canvaLogo ,name: "Canva", level: 75, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-glow">Skills</span>
        </h2>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12  ">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "border-theme card-hover shadow-xs gradient-border border px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "gradient-border bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-primary hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="border-theme rounded-md p-6 bg-card shadow-xs card-hover"
            >
              {/* Skill name + optional icon */}
             <div className="flex items-center mb-4 space-x-2">
  {skill.images &&
    skill.images.map((img, i) => (
      <img key={i} src={img} alt={skill.name} className="w-6 h-6" />
    ))}

  {skill.image && (
    <img src={skill.image} alt={skill.name} className="w-6 h-6" />
  )}

  <h3 className="font-semibold text-lg">{skill.name}</h3>
</div>

              {/* Progress bar */}
              <div className="border w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="progress-bar h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              {/* Percentage */}
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};