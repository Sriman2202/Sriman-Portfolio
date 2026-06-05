import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Associate Technical Consultant",
    company: "WNS Vuram",
    period: "June 2025 - Present",
    responsibilities: [
      "Develop enterprise applications using Appian",
      "Design workflows and process models",
      "Build responsive interfaces using Appian SAIL",
      "Configure Records, CDTs, and Data Stores",
      "Collaborate with Business Analysts and Senior Developers",
      "Resolve production defects and support deployments"
    ]
  },
  {
    role: "Program Management Specialist Trainee",
    company: "IAMNEO",
    period: "January 2025 - May 2025",
    responsibilities: [
      "Managed university assessment workflows",
      "Coordinated content validation",
      "Performed quality assurance checks",
      "Worked with multiple stakeholders"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-card/30 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border md:block"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-[28px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background"></div>

                <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-6">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></div>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
