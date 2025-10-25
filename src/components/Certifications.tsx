import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect Associate - SAA C03",
      provider: "Udemy",
      category: "Cloud Computing",
      year: "2024",
    },
    {
      title: "AWS Training and Certification - Simple Storage Service (S3)",
      provider: "AWS",
      category: "Storage Services",
      year: "2024",
    },
    {
      title: "AWS Training and Certification - Identity and Access Management (IAM)",
      provider: "AWS",
      category: "Security & Access",
      year: "2024",
    },
    {
      title: "Getting Started with Cyber Security",
      provider: "IBM",
      category: "Cybersecurity",
      year: "2024",
    },
    {
      title: "Getting Started with Enterprise-grade AI",
      provider: "IBM",
      category: "Artificial Intelligence",
      year: "2024",
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional certifications to enhance technical expertise
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="glass-effect p-4 sm:p-6 hover:glow-effect transition-all">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold mb-2 leading-tight text-sm sm:text-base">{cert.title}</h3>
                  <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                    <p className="font-semibold text-primary">{cert.provider}</p>
                    <p>{cert.category}</p>
                    <p>{cert.year}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
