import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "SMIT Student",
      description: "Currently learning at Saylani Mass IT Training, focusing on modern web development"
    },
    {
      icon: Code,
      title: "Full Stack Journey",
      description: "Mastering React, React Native, Node.js, and MongoDB for end-to-end development"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Experienced with Git/GitHub for version control and team collaboration"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Dedicated to building efficient, scalable, and user-friendly applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate student developer on a journey to master modern web technologies 
            and create impactful digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As a dedicated student at SMIT (Saylani Mass IT Training), I'm immersing myself 
              in the world of modern web development. My focus is on mastering React
              for frontend development, while also exploring backend technologies like Node.js and MongoDB and react native for mobile app development.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I have a solid foundation in HTML, CSS, and JavaScript, enhanced by experience with 
              CSS frameworks like Tailwind CSS and Bootstrap. Version control with Git and GitHub 
              is an integral part of my development workflow.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about clean code, modern design principles, and creating applications 
              that provide excellent user experiences across all devices.
            </p>
          </div>

          <div className="grid gap-6 animate-scale-in">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 card-gradient shadow-soft transition-smooth hover:shadow-strong">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;