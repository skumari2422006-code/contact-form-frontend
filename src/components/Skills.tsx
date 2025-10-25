import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Cloud, Code2, Palette, Database, GitBranch, Shield, Server, Smartphone } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "AWS Cloud Computing", level: 90, color: "bg-primary" },
    { name: "HTML, CSS, JavaScript", level: 90, color: "bg-primary" },
    { name: "Java Programming", level: 85, color: "bg-accent" },
    { name: "C++ Programming", level: 85, color: "bg-accent" },
    { name: "Bootstrap & Web Design", level: 85, color: "bg-accent" },
    { name: "PHP & MySQL", level: 80, color: "bg-muted-foreground" },
    { name: "Git & GitHub", level: 80, color: "bg-muted-foreground" },
    { name: "Cybersecurity", level: 75, color: "bg-muted-foreground" },
  ];

  const technologies = [
    {
      title: "Cloud Computing",
      items: ["AWS IAM", "EC2", "S3", "Route 53", "VPC", "Cloud Deployment"],
      icon: Cloud,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Web Development",
      items: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      icon: Code2,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Programming",
      items: ["C++", "C", "Java", "Object-Oriented Programming"],
      icon: Database,
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Tools & Others",
      items: ["Git/GitHub", "VS Code", "Android Studio", "IntelliJ IDEA", "Cisco Packet Tracer"],
      icon: Server,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive expertise in cloud computing, programming, and web development
          </p>
        </div>

        <div className="space-y-12">
          {/* Skills Progress */}
          <Card className="glass-effect p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Core Competencies</h3>
            <div className="space-y-4 sm:space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center text-sm sm:text-base">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="glass-effect p-4 sm:p-6 hover:glow-effect transition-all group">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <tech.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gradient">{tech.title}</h4>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
