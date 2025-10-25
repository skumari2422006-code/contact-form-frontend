import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Lock, Utensils, FileText, Cloud, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Secure OTP-Verified Signup & Login System",
      description: "A robust authentication system with OTP verification for enhanced security. Features include user registration, login, and secure session management.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/nirajkumarsingh51/Secure-OTP-Verified-Signup-Login-System",
      category: "Web Development",
      icon: Lock,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Restaurant Wheel",
      description: "Full-featured restaurant management system with menu management, order tracking, and customer management capabilities.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/nirajkumarsingh51/RestaurantWheel",
      category: "Web Development",
      icon: Utensils,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "SEO Writing Assistant",
      description: "AI-powered tool to help create SEO-optimized content with keyword suggestions and content analysis.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/nirajkumarsingh51/SEO-Writing-Assistant",
      category: "Web Development",
      icon: FileText,
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Java Attendance Tracker - AWS Deployment",
      description: "Enterprise-grade attendance tracking system deployed on AWS cloud with domain mapping and secure HTTPS tunneling.",
      tech: ["Java", "Jetty", "AWS EC2", "Route 53", "Ngrok", "Cloudflare"],
      github: "https://github.com/nirajkumarsingh51/AmityAttendanceTracker",
      category: "Cloud & AWS",
      icon: Cloud,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "XAMPP & Ngrok-based Web Hosting",
      description: "Local development environment setup with external access using Ngrok tunneling for testing and demonstration.",
      tech: ["XAMPP", "Ngrok", "PHP", "MySQL"],
      github: "https://github.com/nirajkumarsingh51",
      category: "Web Development",
      icon: Globe,
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcasing my technical projects in web development and cloud computing
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="glass-effect p-4 sm:p-6 hover:glow-effect transition-all flex flex-col group">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <project.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 sm:px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-[10px] sm:text-xs bg-secondary/50 px-2 py-1 rounded backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild className="flex-1 hover:scale-105 transition-transform">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm">View Code</span>
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
