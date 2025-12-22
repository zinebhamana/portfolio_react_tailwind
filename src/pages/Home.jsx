import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Stars and meteors in the background */}
      <StarBackground />

      {/* navbar */}
      <Navbar/>
    
    
      {/* theme toggle */}
      <ThemeToggle />

      {/* navbar */}
    
      {/* main content */}
      <main relative z-10>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        
        
  
        
      </main>
      

      {/* footer */}
    </div>
  );
};
