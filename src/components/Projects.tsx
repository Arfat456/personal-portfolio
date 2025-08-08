import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Plus } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "HTML CSS JS Project",
      description: "A modern mini ecommerce website built with HTML, CSS, and JavaScript showcasing clean design and responsive layout.",
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
      demoLink: "https://miniecommerce-website.netlify.app/",
      githubLink: "https://github.com/Arfat456"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with React and Tailwind CSS showcasing clean design and smooth animations.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      status: "Completed",
      demoLink: "#",
      githubLink: "https://github.com/Arfat456"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some projects I've been working on during my learning journey at SMIT. 
            More exciting projects coming soon!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient shadow-soft transition-smooth hover:shadow-strong animate-scale-in overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'Completed' ? 'bg-success/10 text-success' :
                    project.status === 'In Progress' ? 'bg-info/10 text-info' :
                    'bg-warning/10 text-warning'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block p-8 card-gradient shadow-soft animate-scale-in">
            <Plus className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-4">
              I'm constantly working on new projects as I continue learning and growing as a developer.
            </p>
            <Button variant="outline">
              Follow My Journey
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;