import { Github, Linkedin, Mail, MapPin, Phone, Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float delay-300" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image Placeholder */}
          <div className="animate-slide-up opacity-0 mb-6">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-primary animate-pulse-glow" />
              <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center overflow-hidden">
                {/* Replace this div with an img tag when you have your photo */}
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <User className="w-16 h-16 sm:w-20 sm:h-20 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up opacity-0 delay-100">
            <p className="text-primary font-mono text-sm sm:text-base mb-4">
              Hello, I'm
            </p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-slide-up opacity-0 delay-100 font-heading">
            <span className="text-foreground">KAVIRAJAN</span>{" "}
            <span className="text-gradient">E</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 animate-slide-up opacity-0 delay-200 font-heading">
            AI Engineer & Data Science Enthusiast
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up opacity-0 delay-300">
            Building intelligent systems that bridge the gap between cutting-edge AI research and real-world applications.
            Passionate about Machine Learning, NLP, and Full-Stack Development.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 animate-slide-up opacity-0 delay-400">
            <a
              href="mailto:kavirajanekadesi@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              kavirajanekadesi@gmail.com
            </a>
            <a
              href="tel:+919551422206"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={16} />
              +91 9551422206
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} />
              Chennai, Tamil Nadu
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up opacity-0 delay-500">
            <Button
              asChild
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary font-medium"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10 animate-slide-up opacity-0 delay-600">
            <a
              href="https://www.linkedin.com/in/kavirajan05/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:glow-primary"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Kavirajan05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:glow-primary"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:glow-primary"
            >
              <Download size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
