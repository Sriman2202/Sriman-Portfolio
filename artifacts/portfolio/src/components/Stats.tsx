import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

function Counter({ end, suffix = "", label }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [end, isInView]);

  return (
    <div ref={ref} className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-serif">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base font-medium text-muted-foreground text-center">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
          <Counter end={1} suffix="+" label="Years Professional Experience" />
          <Counter end={4} suffix="+" label="Projects Delivered" />
          <Counter end={1} label="Appian Certification" />
          <Counter end={2} label="Professional Roles" />
        </div>
      </div>
    </section>
  );
}
