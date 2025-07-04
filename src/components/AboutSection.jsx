import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return <section id='about' className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About<span className="text-teal-500">Me
                    
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 ">
                    <h3 className="text-2xl font-semibold">
                        Web Developer and 
                    </h3>
                <p className="text-muted-foreground">
                            With over 3 billion money debt
                </p>
                <p className="text-muted-foreground">
                            I am a good guy
                </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href = "#contact" className="cosmic-button"> 
                       Get in Touch
                        </a>
                         <a href = "#" className="px-6 py-1 rounded-full border border-teal-500 text-teal-400 hover:bg-teal-500/10 transition-colors duration-300"> 
                        Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 tex-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development </h4>
                                <p className="text-muted-foreground">
                                    Creating bad websites
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover"> 
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 tex-primary"/>
                            </div>
                             <div className="text-left">
                                <h4 className="font-semibold text-lg">BackEnd Developer </h4>
                                <p className="text-muted-foreground">
                                    Developing scalable shits
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover"> 
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 tex-primary"/>
                            </div>
                             <div className="text-left">
                                <h4 className="font-semibold text-lg">Project management</h4>
                                <p className="text-muted-foreground">
                                   Leading the team for worst future
                                </p>
                            </div>
                        </div>
                        
                    </div>
                   

                </div>
            </div>
        </div>
    </section>
}