import { Card } from "@/components/ui/card";
import { Award, Briefcase, Code2, GraduationCap } from "lucide-react";
import profileImage from "@/assets/profile-photo.jpg";

const About = () => {
  const stats = [
    { icon: Award, value: "5+", label: "Certifications" },
    { icon: Briefcase, value: "5", label: "Internships" },
    { icon: Code2, value: "5+", label: "Projects" },
    { icon: GraduationCap, value: "BCA", label: "Degree" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Driven by passion for technology and problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex justify-center order-1 md:order-none">
            <div className="relative w-full max-w-sm md:max-w-md">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img
                src={profileImage}
                alt="Niraj Kumar Singh"
                className="relative rounded-2xl w-full glass-effect p-2 sm:p-4"
              />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Computer Applications Student & Cloud Computing Enthusiast
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Eager to contribute to innovative projects and collaborate within dynamic environments, 
              I bring hands-on experience in Cloud Computing (AWS) along with proficiency in C++, C, 
              and web development technologies including HTML, CSS, JavaScript, Bootstrap.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My technical foundation is further strengthened by knowledge of database management systems 
              (MySQL) and cloud deployment tools such as AWS EC2, Route 53, Ngrok, and Cloudflare. 
              I recently deployed Java-based and PHP-based projects on AWS cloud infrastructure with 
              domain mapping and secure HTTPS tunneling.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
              {stats.map((stat, index) => (
                <Card key={index} className="glass-effect p-4 sm:p-6 text-center hover:glow-effect transition-all">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-primary" />
                  <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

            <div className="space-y-2 pt-4 text-sm sm:text-base">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-semibold">Location:</span>
                <span className="text-muted-foreground">Patna, Bihar, India</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-semibold">University:</span>
                <span className="text-muted-foreground">Amity University, Patna</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-semibold">Status:</span>
                <span className="text-primary font-semibold">Available for Freelance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
