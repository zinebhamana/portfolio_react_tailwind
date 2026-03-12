import { FaBehance, FaFileExcel, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Code } from "lucide-react";
import { FaMobileScreen } from "react-icons/fa6";
import { BsAndroid2 } from "react-icons/bs";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* About Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-glow">Me</span>
        </h2>
        
        <div className="items-center">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">UI/UX Designer & Web Developer</h3>
            <p className="text-xl text-muted-foreground">
              With over 3 years of experience in web development and 2 years in UI/UX design, 
              I am skilled in creating responsive, user-friendly websites and interfaces that 
              prioritize both functionality and aesthetics. I am passionate about designing 
              engaging digital experiences that captivate users while maintaining seamless 
              usability. By combining technical expertise with a keen eye for design, I strive 
              to build websites and applications that not only look visually appealing but 
              also deliver intuitive, enjoyable interactions for every user.
            </p>
            
            {/* Social Links */}
            <div className="flex sm:flex-row gap-2 pt-4 justify-center">
              <a href="https://github.com/zinebhamana" target="_blank" className="circle-button">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/zineb-hamana-a73886258/" target="_blank" className="circle-button">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://www.behance.net/9e3a18f3" target="_blank" className="circle-button">
                <FaBehance className="w-6 h-6" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=213779725345&text&type=phone_number&app_absent=0" target="_blank" className="circle-button">
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto max-w-7xl px-4 md:px-8 mt-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-glow">Services</span>
        </h2>

        {/* Services Grid - All boxes exactly the same size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Web Development */}
          <div className="border-theme gradient-border p-6 card-hover flex flex-col h-[280px]">
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold">Web Development</h4>
            </div>
            <div className="mt-4 flex-1 overflow-hidden">
              <p className="text-base text-black-900 leading-relaxed line-clamp-4">
                Building modern, responsive websites that combine functionality with aesthetic appeal. 
                Optimized for fast loading and seamless user experience.
              </p>
            </div>
          </div>

          {/* App Development */}
          <div className="border-theme gradient-border p-6 card-hover flex flex-col h-[280px]">
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                <BsAndroid2 className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold">App Development</h4>
            </div>
            <div className="mt-4 flex-1 overflow-hidden">
              <p className="text-base text-black-900 leading-relaxed line-clamp-4">
                Creating responsive mobile applications with smooth performance and intuitive interfaces. 
                Focused on delivering apps that users love to engage with.
              </p>
            </div>
          </div>

          {/* Excel */}
          <div className="border-theme gradient-border p-6 card-hover flex flex-col h-[280px]">
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                <FaFileExcel className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold">Excel</h4>
            </div>
            <div className="mt-4 flex-1 overflow-hidden">
              <p className="text-base text-black-900 leading-relaxed line-clamp-4">
                Designing efficient spreadsheets and dashboards for data analysis and reporting. 
                Helping businesses make smarter decisions with clear insights.
              </p>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="border-theme gradient-border p-6 card-hover flex flex-col h-[280px]">
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                <FaMobileScreen className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold">UI/UX Design</h4>
            </div>
            <div className="mt-4 flex-1 overflow-hidden">
              <p className="text-base text-black-900 leading-relaxed line-clamp-4">
                Crafting user-friendly interfaces and engaging experiences for web and mobile. 
                Focused on usability, aesthetics, and smooth interaction flows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};