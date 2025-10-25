import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Masters of Computer Application (MCA)",
      institution: "ABC COLLEGE OF EDUCATION Neora, Patliputra University, Patna,",
      percentage: "---",
      year: "2027",
      icon: GraduationCap,
      color: "from-blue-500 to-purple-500",
      
    },
    
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Amity University, Patna",
      percentage: "68.7%",
      year: "2025",
      icon: GraduationCap,
      color: "from-blue-500 to-purple-500",
    },
    {
      degree: "12th (Intermediate)",
      institution: "Hari Shankar Varma Cooperative Inter College, Ramgarhwa",
      percentage: "57.2%",
      year: "2022",
      icon: Award,
      color: "from-green-500 to-teal-500",
    },
    {
      degree: "10th (Matriculation)",
      institution: "Shantiniketan Jubilee School Motihari",
      percentage: "61.6%",
      year: "2020",
      icon: Award,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic journey and achievements
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="glass-effect p-4 sm:p-6 hover:glow-effect transition-all group"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                <edu.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3">
                {edu.institution}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  <span className="text-xs sm:text-sm font-semibold">{edu.year}</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-primary">
                  {edu.percentage}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
