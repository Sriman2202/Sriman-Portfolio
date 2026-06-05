import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card/30 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
            <p>
              I am an Associate Technical Consultant and Appian Developer with experience in enterprise application development, workflow automation, and business process optimization. My interest in technology began during childhood, driven by curiosity about how software applications are built and how they impact people's daily lives.
            </p>
            <p>
              This passion led me to pursue Computer Science Engineering and build a career in software development. I started my professional journey through campus placement at IAMNEO, where I gained experience in program management operations and stakeholder coordination. Shortly afterward, I joined WNS Vuram as an Associate Technical Consultant, where I work on Appian-based enterprise applications, workflow automation, and business process optimization.
            </p>
            <p>
              I aspire to grow into Technical Consulting, Business Analysis, and Program Management roles where I can combine technology, business understanding, and stakeholder collaboration to drive meaningful outcomes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
