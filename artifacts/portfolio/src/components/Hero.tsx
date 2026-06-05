import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Lightbulb, Target, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";
import profilePic from "@assets/Profile_Pic_1780658107623.jpeg";

const btnHover = "hover:scale-105 active:scale-95 transition-transform duration-200";

const GOALS = [
  { title: "Technical Consulting", icon: <Lightbulb className="w-5 h-5" /> },
  { title: "Business Analysis", icon: <Target className="w-5 h-5" /> },
  { title: "Program Management", icon: <Users className="w-5 h-5" /> },
  { title: "Digital Transformation Leadership", icon: <Zap className="w-5 h-5" /> },
];

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
            <a
              href="/sriman-resume.pdf"
              download="Sriman_S_Resume.pdf"
              className={`cursor-pointer ${btnHover}`}
            >
              <Button size="lg" variant="outline" className="rounded-full bg-card pointer-events-none">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/srimanshanmugam"
              target="_blank"
              rel="noopener noreferrer"
              className={`cursor-pointer ${btnHover}`}
            >
              <Button size="lg" variant="outline" className="rounded-full bg-card pointer-events-none">
                <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
              </Button>
            </a>

            <button
              onClick={scrollToContact}
              className={`inline-flex items-center gap-2 px-8 min-h-10 rounded-full text-sm font-medium
                bg-card border border-[var(--button-outline)] shadow-xs text-foreground cursor-pointer
                hover:opacity-80 ${btnHover}`}
            >
              <Mail className="h-4 w-4" /> Contact Me
            </button>
          </motion.div>

          {/* Aspirations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full max-w-3xl"
          >
            <p className="text-base text-muted-foreground italic mb-6">
              "I am passionate about bridging the gap between business and technology."
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {GOALS.map((goal, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200"
                >
                  <span className="p-2 bg-primary/10 text-primary rounded-full">{goal.icon}</span>
                  <span className="text-xs font-semibold text-foreground text-center leading-snug">{goal.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
