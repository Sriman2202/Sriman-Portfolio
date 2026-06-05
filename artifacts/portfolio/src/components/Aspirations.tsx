import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const GOALS = [
  {
    title: "Technical Consulting",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    title: "Business Analysis",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Program Management",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Digital Transformation Leadership",
    icon: <Zap className="w-6 h-6" />,
  }
];

export function Aspirations() {
  return (
    <section className="py-20 md:py-32 bg-background relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-foreground">
              "I am passionate about bridging the gap between business and technology."
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
          >
            {GOALS.map((goal, index) => (
              <Card key={index} className="bg-card/50 border-border hover:bg-primary/5 hover:border-primary/30 transition-colors">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-full">
                    {goal.icon}
                  </div>
                  <h3 className="font-semibold text-foreground">{goal.title}</h3>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
