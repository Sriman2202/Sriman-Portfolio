import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

export function Certification() {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-card/30 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-card to-card/50 shadow-lg shadow-primary/5">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Award className="w-48 h-48 text-primary" />
              </div>
              <CardHeader className="relative z-10 pb-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Appian Certified Associate Developer</h3>
                    <p className="text-primary font-medium">Appian Corporation</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 space-y-6">
                <div className="grid grid-cols-2 gap-4 max-w-md">
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Awarded</p>
                    <p className="font-semibold">May 2026</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Valid Through</p>
                    <p className="font-semibold">November 2027</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-muted-foreground leading-relaxed">
                    Certified in Appian application development, workflow automation, process modeling, and enterprise solution delivery.
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-primary font-medium bg-primary/10 w-fit px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4" />
                  <span>Credential Verified</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
