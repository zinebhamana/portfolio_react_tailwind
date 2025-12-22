import { FaBehance, FaFileExcel, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {Code} from "lucide-react"
import { FaMobileScreen } from "react-icons/fa6";
import { BsAndroid2 } from "react-icons/bs";



export const AboutSection = () => {
return ( <section id="about" className="py-24 px-4 relative">{" "}
<div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">

        About <span className="text-glow">Me</span>


    </h2>
    <div className=" items-center">
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold">UI/UX Designer & Web Developer</h3>
            <p className="text-muted-foreground">

                With over 3 years of experience in web development 
                 and 2 years in UI/UX design, skilled in creating 
                 responsive,
                 user-friendly websites and interfaces.
            </p>
            <p className="text-muted-foreground">
                I am passionate about creating responsive,
                 user-friendly websites and engaging digital experiences
                  that combine 
                functionality with aesthetics

            </p>
            <div className="flex  sm:flex-row gap-2 pt-4 justify-center">
              <a href="https://github.com/zinebhamana" target="_blank" className="circle-button">
            <FaGithub className="w-6 h-6 " />
            </a>
            <a href="https://www.linkedin.com/in/zineb-hamana-a73886258/" target="_blank" className="circle-button">
            <FaLinkedin className="w-6 h-6 " />
            </a>
            <a href="https://www.behance.net/9e3a18f3" target="_blank" className="circle-button">
            <FaBehance className="w-6 h-6 " />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=213779725345&text&type=phone_number&app_absent=0"  target="_blank" className="circle-button">
            <FaWhatsapp className="w-6 h-6 " />
            </a>
              </div>
              <div>

                 <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">

         <span id="services"className="text-glow">Services</span>


    </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:jsutify-self-end auto-rows-fr">
                    <div className="border-theme gradient-border p-6 card-hover h-full flex flex-col">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"></div>
                            <Code className="h-6 w-6 primary"/> 
                             <h4 className="text-lg font-bold  text-center">Web Development</h4>
                        </div>
                        <div className="text-left">
                
                            <p className="text muted-foreground text-center">
                                Creating responsive websites and web applications

                            </p>
                        </div>
                        </div> 
                    <div className="border-theme gradient-border p-6 card-hover h-full flex flex-col">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"></div>
                            <BsAndroid2 className="flex h-6 w-6 primary "/> 
                            <h4 className="text-lg font-bold  text-center">App Development</h4>
                            
                        </div>
                        <div>
                            <p className="text muted-foreground text-center">
                                Creating responsive websites and web applications
                            </p>
                        </div>
                         </div> 
                    <div className="border-theme gradient-border p-6 card-hover h-full flex flex-col">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"></div>
                            <FaFileExcel className="h-6 w-6 primary"/> 
                            <h4 className="text-lg font-bold  text-center"> Excel</h4>

                        </div>
                        <div>
                            <p className="text muted-foreground text-center">
                                I use Excel to organize, analyze, and visualize data efficiently, creating dynamic spreadsheets and charts.
                            </p>
                        </div>

                        </div> 
                        <div className="border-theme gradient-border p-6 card-hover h-full flex flex-col">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"></div>
                            <FaMobileScreen  className="h-6 w-6 primary"/> 
                            <h4 className="text-lg font-bold  text-center"> UI/UX Design</h4>

                        </div>
                        <div>
                            <p className="text muted-foreground text-center">
                                I use Excel to organize, analyze, and visualize data efficiently, creating dynamic spreadsheets and charts.
                            </p>
                        </div>
                        </div> 
                    


                </div>
                           </div>      


                


              
            

            </div>



        </div>
        <div>


        </div>

    </div>

</section>
);
};