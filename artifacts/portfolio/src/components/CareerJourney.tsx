import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const JOURNEY_STEPS = [
  "Childhood Interest in Software",
  "Computer Science Engineering",
  "Campus Placement at IAMNEO",
  "Program Management Operations",
  "Campus Placement at WNS Vuram",
  "Associate Technical Consultant",
  "Future Goal: Technical Consultant / Business Analyst / Program Manager"
];

export function CareerJourney() {
  return (
    <section className="py-20 bg-card/30 border-y border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-4 tracking-tight">Career Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The path that led me here, and where I'm heading next.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 max-w-5xl mx-auto">
          {JOURNEY_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center"
            >
              <div className={`px-4 py-3 rounded-lg text-sm md:text-base font-medium text-center border shadow-sm transition-colors ${
                index === JOURNEY_STEPS.length - 1 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-background border-border text-foreground hover:border-primary/50"
              }`}>
                {step}
              </div>
              {index < JOURNEY_STEPS.length - 1 && (
                <ChevronRight className="w-5 h-5 text-muted-foreground mx-2 transform rotate-90 md:rotate-0 my-2 md:my-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
