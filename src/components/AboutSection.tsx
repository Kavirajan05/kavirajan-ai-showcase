import { Brain, Code, Database, Layers } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Building intelligent systems with deep learning, NLP, and computer vision",
  },
  {
    icon: Database,
    title: "Data Science",
    description: "Extracting insights from complex datasets to drive business decisions",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Creating scalable web applications with modern frameworks",
  },
  {
    icon: Layers,
    title: "LLMs & NLP",
    description: "Developing conversational AI and language understanding systems",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">01. WHO I AM</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am an <span className="text-primary font-medium">AI Engineer</span>,{" "}
                <span className="text-primary font-medium">Data Scientist</span>, and{" "}
                <span className="text-primary font-medium">Full-Stack Developer</span> with a passion 
                for building intelligent systems that make a real-world impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With expertise in <strong className="text-foreground">machine learning</strong>,{" "}
                <strong className="text-foreground">natural language processing</strong>, and{" "}
                <strong className="text-foreground">large language models</strong>, I specialize in 
                creating scalable solutions that leverage both data science methodologies and modern 
                web development practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My hands-on experience with Python, React, Node.js, and LangChain allows me to bridge 
                the gap between cutting-edge AI research and practical applications. I'm currently 
                pursuing dual degrees at IIT Madras and SRM Valliammai Engineering College, constantly 
                expanding my knowledge in emerging technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to harness technology to tackle real-world challenges efficiently, whether 
                it's building legal AI chatbots, workplace safety monitoring systems, or blockchain-based 
                voting platforms.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
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
