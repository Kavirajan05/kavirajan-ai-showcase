import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Data Scientist Intern",
    company: "Wipro",
    period: "Aug 2024 – Oct 2024",
    location: "Remote",
    responsibilities: [
      "Built machine learning classifier for semiconductor yield prediction using advanced ML techniques",
      "Processed and analyzed dataset with 1,567 samples and 591 features",
      "Performed comprehensive data cleaning, feature selection, and model optimization",
      "Achieved significant improvements in prediction accuracy through iterative refinement",
    ],
  },
  {
    title: "AI Intern",
    company: "Infosys Springboard",
    period: "Sep 2025 – Nov 2025",
    location: "Remote",
    responsibilities: [
      "Developed computer vision solutions using OpenCV for real-time image processing",
      "Built YOLOv8-based workplace safety detection system for PPE compliance",
      "Conducted data analytics projects to derive actionable business insights",
      "Collaborated with cross-functional teams on AI-driven automation solutions",
    ],
  },
  {
    title: "Technical Coordinator",
    company: "Paradox, IIT Madras",
    period: "Jul 2024 – Oct 2025",
    location: "Chennai",
    responsibilities: [
      "Managed technical operations for large-scale events and competitions",
      "Coordinated project development and technical team activities",
      "Implemented efficient workflows for event management systems",
      "Mentored junior team members in technical best practices",
    ],
  },
  {
    title: "Technical Coordinator",
    company: "AI Cognitron (BIS Standards), SRM",
    period: "Nov 2023 – Present",
    location: "Chennai",
    responsibilities: [
      "Leading technical initiatives aligned with BIS standards for AI projects",
      "Providing technical leadership and project oversight for AI research",
      "Coordinating with industry partners on AI implementation strategies",
      "Driving innovation in AI applications within the organization",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">03. CAREER PATH</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
              Work <span className="text-gradient">Experience</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px hidden sm:block" />

            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.title}`}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full bg-primary glow-primary hidden sm:block ${
                    index % 2 === 0 ? "md:-right-2" : "md:-left-2"
                  }`}
                />

                <div className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 group">
                  <div
                    className={`flex items-center gap-2 mb-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-primary font-medium text-sm">
                      {exp.company}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 font-heading">
                    {exp.title}
                  </h3>

                  <div
                    className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>

                  <ul
                    className={`space-y-2 ${
                      index % 2 === 0 ? "md:text-left" : ""
                    }`}
                  >
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
