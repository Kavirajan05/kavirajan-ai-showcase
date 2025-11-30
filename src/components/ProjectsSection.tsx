import { ExternalLink, Github, Bot, Vote, Shield, Factory, Brain } from "lucide-react";

const projects = [
  {
    title: "Legal LLM Chatbot",
    description:
      "An LLM-powered virtual legal assistant that provides accurate legal information and guidance. Built with advanced NLP techniques and fine-tuned on legal datasets for domain-specific responses.",
    techStack: ["Python", "LangChain", "OpenAI", "React", "FastAPI"],
    icon: Bot,
    featured: true,
  },
  {
    title: "InspectX Support Automation",
    description:
      "A comprehensive web automation platform designed to streamline support processes. Features intelligent ticket routing, automated responses, and analytics dashboard.",
    techStack: ["Node.js", "React", "MongoDB", "Selenium", "REST APIs"],
    icon: Brain,
    featured: true,
  },
  {
    title: "Blockchain E-Voting System",
    description:
      "A secure, decentralized electronic voting system leveraging blockchain technology to ensure transparency, immutability, and tamper-proof election results.",
    techStack: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    icon: Vote,
    featured: true,
  },
  {
    title: "YOLOv8 Workplace Safety Monitor",
    description:
      "Real-time PPE detection system using YOLOv8 for workplace safety compliance. Monitors employees for proper safety equipment and generates alerts.",
    techStack: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "Flask"],
    icon: Shield,
    featured: false,
  },
  {
    title: "Semiconductor ML Yield Prediction",
    description:
      "Machine learning model for predicting semiconductor manufacturing yield. Processed 591 features to optimize production efficiency and reduce defects.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Feature Engineering", "XGBoost"],
    icon: Factory,
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">04. PORTFOLIO</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={project.title}
                  className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3 font-heading group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <div
                  key={project.title}
                  className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <project.icon className="w-8 h-8 text-primary" />
                    <div className="flex gap-2">
                      <a
                        href="#"
                        className="p-1.5 rounded border border-border hover:border-primary hover:text-primary transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 font-heading group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono text-muted-foreground"
                      >
                        {tech}
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
