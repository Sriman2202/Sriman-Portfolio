import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Layers, Code, Briefcase, Bot } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Appian",
    icon: <Layers className="w-6 h-6 text-primary" />,
    skills: ["SAIL Interfaces", "Process Models", "Records", "Portals", "CDTs", "Integrations"],
  },
  {
    title: "Technical Skills",
    icon: <Code className="w-6 h-6 text-primary" />,
    skills: ["SQL", "MySQL", "MariaDB", "Python", "HTML", "CSS", "REST APIs"],
  },
  {
    title: "Business Skills",
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    skills: ["Requirement Analysis", "Stakeholder Management", "Agile/Scrum", "Process Optimization", "Workflow Automation"],
  },
  {
    title: "AI Skills",
    icon: <Bot className="w-6 h-6 text-primary" />,
    skills: ["AI-Assisted Development", "Prompt Engineering", "Workflow Documentation"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-border bg-card/50 hover:bg-card hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-background border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
