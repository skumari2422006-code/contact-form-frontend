import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "DBA Intern",
      company: "North Bihar Power Distribution Company Limited (NBPDCL)",
      period: "June 2024 - July 2024",
      location: "Patna, Bihar",
      description: [
        "Assisted in database management and performance optimization",
        "Implemented security measures for database systems",
        "Gained hands-on experience with enterprise-level database operations",
      ],
    },
    {
      title: "Emerging Technology Intern (AI & Cloud)",
      company: "Edunet Foundation",
      period: "June 2024 - July 2024",
      location: "Remote",
      description: [
        "Developed AI and cloud-based solutions",
        "Conducted research on emerging technologies",
        "Contributed to project planning and implementation",
      ],
    },
    {
      title: "Artificial Intelligence Intern",
      company: "IBM SkillsBuild Summer GTU Internship Program",
      period: "June 2024 - July 2024",
      location: "Remote",
      description: [
        "Completed intensive program focused on AI technologies",
        "Learned practical applications of artificial intelligence",
        "Gained certification in AI fundamentals",
      ],
    },
    {
      title: "Blockchain with Cyber Security Intern",
      company: "CodroidHub Pvt. Ltd.",
      period: "June 2023 - July 2023",
      location: "Remote",
      description: [
        "Developed blockchain components and collaborated within cross-functional teams",
        "Gained hands-on experience with blockchain technology",
        "Learned cybersecurity principles and practices",
      ],
    },
    {
      title: "Campus Ambassador",
      company: "Indian Institute of Technology Patna - Anwesha'23",
      period: "January 2023 - April 2023",
      location: "Patna, Bihar",
      description: [
        "Engaged and empowered students, spreading awareness about the event",
        "Coordinated with university administration and student organizations",
        "Managed promotional activities and student registrations",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My journey through internships and professional roles
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-effect p-4 sm:p-6 hover:glow-effect transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 sm:mb-4 gap-2 sm:gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{exp.title}</h3>
                  <p className="text-primary font-semibold text-sm sm:text-base mb-2">{exp.company}</p>
                </div>
                <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground text-xs sm:text-sm flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
