import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillsSection";
import   ProjectSection  from "../components/ProjectsSection";
import  ContactSection  from "../components/ContactSection";
export const Home = () =>{

    return (
     <div className="min-h-screen bg-backgrund text-foreground overflow-x-hidden">
        
        {/*Theme */}
        <ThemeToggle/>
         {/*background effects */}
        <StarBackground/>
         {/*navbar */}
         <Navbar/>

        <main>
            <HeroSection/>  
            <AboutSection/> 
            <SkillSection/>
            <ProjectSection/>
            <ContactSection/>
        </main>
          {/*main content */}
    </div>
    );
}