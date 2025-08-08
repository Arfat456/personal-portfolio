import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aa3919168@gmail.com",
      link: "mailto:aa3919168@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 321 28011182",
      link: "tel:+02321280111182"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Karachi, Pakistan",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for a passionate junior developer, want to collaborate 
                on a project, or simply want to discuss the latest in web development, 
                I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="p-6 card-gradient shadow-soft transition-smooth hover:shadow-strong">
                  <a href={item.link} className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            <Card className="p-6 card-gradient shadow-soft">
              <h4 className="font-semibold mb-3">Current Status</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                🎓 <strong>Learning:</strong> React.js, React Native, Node.js, MongoDB<br/>
                💼 <strong>Available for:</strong> Internships, Junior positions, Freelance projects<br/>
                🌱 <strong>Growing:</strong> Constantly improving and learning new technologies
              </p>
            </Card>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/Arfat456" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/m-arfat/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <Card className="p-8 card-gradient shadow-strong">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="What's this about?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                  />
                </div>
                
                <Button className="w-full hero-gradient text-white border-0 shadow-strong hover:scale-105 transition-smooth">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;