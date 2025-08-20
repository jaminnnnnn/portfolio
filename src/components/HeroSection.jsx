import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return <section id="hero"
            className=" relative min-h-screen flex flex-col items-center justify-center px-4"
    >
            <div className="container max-2-4xl mx-auto text-center z-10">
                <div className="space-y-6 ">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight ">
                        <span className=" animate-fade-in"> I'm ,</span>
                        <span className="text-teal-400  animate-fade-in-delay-1">Jaminli</span>
                        <span className="text-gradient ml-2  animate-fade-in-delay-1">M. Peralta</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto animate-fade-in-delay-3">
                      I’m Jaminli M. Peralta  
                      A Computer Engineering Graduate  Software Developer  
                      Specialized in Web Development, and Backend Solutions  

                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-4 pt-4  animate-fade-in-delay-4">
                        <a href='#projects' className="cosmic-button">
                            View my Work

                        </a>
                        <a href='#contact' className="px-7 py-2 rounded-full border border-teal-500 text-teal-400 hover:bg-teal-500/10 transition-colors duration-300">
                            Contact Me
                        </a>
                        
                    </div>
                    
                </div>
            </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-3">Scroll</span>
            <ArrowDown className="h-5 w-5 text-teal-600"/>
        </div>
    </section>
       
}