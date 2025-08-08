import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Muhammad <span className="text-gradient">Arfat</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Frontend Developer & learning react js 
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Student at SMIT (Saylani Mass IT Training) passionate about creating 
            modern web applications with React, and cutting-edge technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="hero-gradient text-white border-0 shadow-strong hover:scale-105 transition-smooth" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="transition-smooth hover:scale-105">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Arfat456" target="_blank"
              className="p-3 rounded-full border border-border hover:border-primary transition-smooth hover:shadow-soft"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/m-arfat/" target="_blank"
              className="p-3 rounded-full border border-border hover:border-primary transition-smooth hover:shadow-soft"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            {/* <a 
              href="aa3919168@gmail.com" target="_blank"
              className="p-3 rounded-full border border-border hover:border-primary transition-smooth hover:shadow-soft"
            >
              <Mail className="w-6 h-6" />
            </a> */}
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;