import { motion } from "framer-motion";
import { FolderGit2, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const PROJECTS = [
  {
    title: "Project Quality Governance Application",
    description: "Internal auditing solution for Delivery Managers to assess project quality and governance compliance.",
    tech: ["Appian", "SQL", "Process Models", "SAIL"],
    features: ["Audit workflows", "Automated scoring", "Reporting dashboards"]
  },
  {
    title: "Legal Entity Onboarding",
    description: "Proof-of-concept onboarding platform for investment operations teams.",
    tech: ["Appian", "Workflow Automation"],
    features: ["Entity registration", "Multi-stage approvals", "Automated workflows"]
  },
  {
    title: "Delivery Management Workflow",
    description: "Workflow solution connecting Production, Creative, and Media teams.",
    tech: ["Appian", "Process Models"],
    features: ["Automated approval chain", "Status tracking", "Cross-team collaboration"]
  },
  {
    title: "AI-Powered Turf Booking Application",
    description: "Complete booking application using AI-assisted development.",
    tech: ["Appian AI", "SAIL", "Records"],
    features: ["Slot booking", "User management", "AI-driven development process"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border bg-card hover:border-primary/30 transition-all duration-300 overflow-hidden group">
                <div className="h-2 w-full bg-border group-hover:bg-primary transition-colors"></div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <FolderGit2 className="w-5 h-5 text-primary" />
                    <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary/70 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-secondary/50 font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
