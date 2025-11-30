import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "B.Sc Data Science and Application",
    institution: "Indian Institute of Technology Madras",
    period: "Nov 2023 – Dec 2027",
    description:
      "Pursuing a comprehensive program in Data Science covering advanced mathematics, machine learning, statistical modeling, and real-world data applications.",
    highlights: ["Data Science", "Machine Learning", "Statistics", "Python"],
  },
  {
    degree: "B.Tech Artificial Intelligence and Data Science",
    institution: "SRM Valliammai Engineering College",
    period: "Sep 2023 – Apr 2027",
    description:
      "Specializing in AI and Data Science with focus on deep learning, natural language processing, computer vision, and software engineering principles.",
    highlights: ["Artificial Intelligence", "Deep Learning", "NLP", "Computer Vision"],
  },
];

const certifications = [
  { title: "Data Science Intern", issuer: "Wipro", year: "2024" },
  { title: "AI Intern", issuer: "Infosys Springboard", year: "2025" },
  { title: "Technical Coordinator", issuer: "IIT Madras Paradox", year: "2024" },
  { title: "Technical Lead", issuer: "AI Cognitron (BIS Standards)", year: "2023" },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 sm:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">05. ACADEMICS</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {education.map((edu, index) => (
              <div
                key={edu.institution}
                className="group p-6 sm:p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground font-heading">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-card border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6 font-heading flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications & Achievements
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                >
                  <p className="font-medium text-foreground text-sm mb-1">
                    {cert.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
