const skillCategories = [
  {
    title: "Core Knowledge",
    skills: ["Feature Engineering", "MLOps", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Data Analytics"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["OpenCV", "TensorFlow", "PyTorch", "Node.js", "LangChain", "React", "FastAPI", "Scikit-learn"],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "SQL", "C", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Docker", "Git", "LLM Fine-Tuning", "Data Pipelines", "YOLOv8", "Blockchain", "REST APIs"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">02. EXPERTISE</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 font-heading flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-secondary border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                      style={{
                        animationDelay: `${(categoryIndex * 4 + skillIndex) * 50}ms`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
