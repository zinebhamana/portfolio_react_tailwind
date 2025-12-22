import { ArrowDown } from "lucide-react";
import { GoDownload } from "react-icons/go";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 "
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking tight">
          <span className="opacity-0 animate-fade-in-delay-2">Hi, I'm</span>{" "}
          <span className="text-glow opacity-0 animate-fade-in-delay-3">Zineb</span>{" "}
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-4">Hamana</span>{ " "}
        </h1>

        <p className="pt-4 text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">Computer Science Student with experience in operational management and early childhood education. Curious, motivated, and eager to learn, I am developing my skills in creating simple and user-friendly digital interfaces. My goal is to combine my technical knowledge and human skills to grow in a stimulating professional environment.</p>
        <div className=" pt-5 opacity-0 animate-fade-in-delay-4">
 
            <div className="flex flex-col sm:flex-row gap-2 pt-4 justify-center">
                        <a href="#contact"  target="_blank" className=" cosmic-button flex items-center justify-center text-center">
                          {" "}
                          DownLoad CV {" "}{" "} <GoDownload />
                        </a>
                        </div>
        </div>
      
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
      <ArrowDown className="h-5 w-5 text-glow"/>


      </div>



    </section>
  
  );
};
