import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-background relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border bg-card hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">Bachelor of Engineering</h3>
                    <p className="text-lg text-muted-foreground mt-1">Computer Science and Engineering</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-medium">
                    <div className="flex items-center gap-2 text-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Bannari Amman Institute of Technology</span>
                    </div>
                    <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border"></div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground uppercase tracking-wider text-xs">CGPA:</span>
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-bold">7.55</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
