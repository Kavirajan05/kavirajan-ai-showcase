import { Sparkles, Rocket, BookOpen, Cpu } from "lucide-react";

const interests = [
  {
    icon: Sparkles,
    title: "AI Research",
    description: "Exploring cutting-edge developments in artificial intelligence, from transformer architectures to reinforcement learning.",
  },
  {
    icon: Rocket,
    title: "Emerging Technologies",
    description: "Staying ahead with blockchain, quantum computing, edge AI, and other transformative technologies.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Constantly expanding knowledge through research papers, online courses, and hands-on experimentation.",
  },
  {
    icon: Cpu,
    title: "Data-Driven Systems",
    description: "Building intelligent systems that leverage data to make informed decisions and predictions.",
  },
];

export const InterestsSection = () => {
  return (
    <section className="py-20 sm:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">06. PASSIONS</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
              Areas of <span className="text-gradient">Interest</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div
                key={interest.title}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <interest.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-heading">
                  {interest.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
