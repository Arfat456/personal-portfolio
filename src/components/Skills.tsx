import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "React Native(#leaning)"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "CSS Frameworks",
      skills: ["Tailwind CSS", "Bootstrap"],
      color: "bg-red-500/10 text-red-500 border-red/20"
    },
    {
      title: "Backend Technologies #learning",
      skills: ["Node.js", "MongoDB"],
      color: "bg-green-500/10 text-green-600 border-green-500/20"
    },
    {
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "VS Code"],
      color: "bg-orange-500/10 text-orange-600 border-orange-500/20"
    }
  ];

  const learningProgress = [
    { skill: "React.js", level: 75 },
    { skill: "JavaScript", level: 80 },
    { skill: "Tailwind CSS", level: 85 },
    { skill: "Node.js", level: 10 },
    { skill: "MongoDB", level: 5 },
    { skill: "React Native", level: 5 }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies I'm working with and continuously learning 
            to build modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 card-gradient shadow-soft transition-smooth hover:shadow-strong animate-scale-in">
              <h3 className="font-semibold mb-4 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className={`${category.color} transition-smooth hover:scale-105`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Learning Progress</h3>
          <div className="space-y-6 animate-slide-up">
            {learningProgress.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="hero-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;