import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [text, setText] = useState("");
  const roles = ["Cloud Computing Enthusiast", "Full Stack Developer", "AWS Certified", "Open for Freelance"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentRole.length) {
            setText(currentRole.slice(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (text.length > 0) {
            setText(currentRole.slice(0, text.length - 1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-gradient">Niraj Kumar Singh</span>
            </h1>
            <div className="h-10 sm:h-12 md:h-16">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground">
                I'm a <span className="text-primary font-semibold">{text}</span>
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Computer Applications Student at Amity University, Patna. Passionate about cloud computing, 
              web development, and building innovative solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 px-4">
            <Button size="lg" asChild className="glow-effect w-full sm:w-auto">
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-8">
            <Button size="icon" variant="outline" asChild className="hover:glow-effect">
              <a href="https://github.com/nirajkumarsingh51" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <Button size="icon" variant="outline" asChild className="hover:glow-effect">
              <a href="https://www.linkedin.com/in/niraj-kumar-singh-116437257/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <Button size="icon" variant="outline" asChild className="hover:glow-effect">
              <a href="mailto:nirajsingh9570460932@gmail.com">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <Button size="icon" variant="outline" asChild className="hover:glow-effect">
              <a href="tel:+919153942168">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
