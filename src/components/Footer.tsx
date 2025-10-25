import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-effect border-t border-border/50 py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-xl sm:text-2xl font-bold text-gradient mb-2">Niraj Kumar Singh</p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Computer Applications Student & Cloud Computing Enthusiast
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://github.com/nirajkumarsingh51"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/niraj-kumar-singh-116437257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="mailto:nirajsingh9570460932@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="tel:+919153942168"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/50 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© {currentYear} Niraj Kumar Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
