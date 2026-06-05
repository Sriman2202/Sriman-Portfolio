import { motion } from "framer-motion";
import { Download, Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import profilePic from "@assets/Profile_Pic_1780658107623.jpeg";

const badgeClass = "px-3 py-1.5 text-sm font-medium border-primary/30 bg-primary/8 text-primary";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-[100dvh] flex flex-col justify-center pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto z-10 relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 rounded-full border-2 border-primary shadow-xl shadow-primary/10 overflow-hidden">
              <img src={profilePic} alt="Sriman S" className="w-full h-full object-cover object-top" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            Sriman S
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6"
          >
            Associate Technical Consultant
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Building enterprise workflow solutions and helping organizations streamline business processes through low-code technology.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a href="/sriman-resume.pdf" download="Sriman_S_Resume.pdf">
              <Button size="lg" className="rounded-full shadow-lg shadow-primary/20">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/srimanshanmugam" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="rounded-full bg-card hover:bg-card/80">
                <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
              </Button>
            </a>
            <Button size="lg" variant="ghost" className="rounded-full" onClick={scrollToContact}>
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl"
          >
            <Badge variant="secondary" className={badgeClass}>Appian Certified Associate Developer</Badge>
            <Badge variant="secondary" className={badgeClass}>Enterprise Application Development</Badge>
            <Badge variant="secondary" className={badgeClass}>Workflow Automation</Badge>
            <Badge variant="secondary" className={badgeClass}>Technical Consulting Aspirant</Badge>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
