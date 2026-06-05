import { motion } from "framer-motion";
import { Download, Mail, Linkedin } from "lucide-react";
import profileCutout from "../assets/profile_cutout.png";

const btnHover = "hover:scale-105 active:scale-95 transition-transform duration-200";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="flex flex-col justify-center pt-20 pb-16 relative overflow-hidden"
      style={{
        minHeight: "100dvh",
        background: "linear-gradient(135deg, hsl(220,68%,14%) 0%, hsl(224,60%,22%) 50%, hsl(215,55%,30%) 100%)",
      }}
    >
      {/* Decorative colour orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-16 left-12 w-72 h-72 rounded-full blur-3xl opacity-30"
          style={{ background: "hsl(200,80%,55%)" }} />
        <div className="absolute bottom-24 right-16 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "hsl(260,70%,65%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{ background: "hsl(45,90%,60%)" }} />
        {/* Subtle dot grid overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container px-4 mx-auto z-10 relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

          {/* Profile photo — cutout with bottom fade */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <img
              src={profileCutout}
              alt="Sriman S"
              className="select-none"
              draggable={false}
              style={{
                height: "260px",
                width: "auto",
                display: "block",
                WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 95%)",
                maskImage: "linear-gradient(to bottom, black 55%, transparent 95%)",
                filter: "drop-shadow(0 6px 24px rgba(80,160,255,0.3))",
              }}
            />
          </motion.div>

          {/* Open to Work badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide select-none"
            style={{
              background: "rgba(34,197,94,0.12)",
              border: "1px solid rgba(34,197,94,0.35)",
              color: "rgba(134,239,172,0.95)",
              backdropFilter: "blur(6px)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Open to Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white"
          >
            Sriman S
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium mb-6"
            style={{ color: "rgba(180,210,255,0.9)" }}
          >
            Associate Technical Consultant
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg max-w-2xl mb-10 leading-relaxed"
            style={{ color: "rgba(200,220,255,0.75)" }}
          >
            Building enterprise workflow solutions and helping organizations streamline business processes through low-code technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="/sriman-resume.pdf" download="Sriman_S_Resume.pdf" className={`cursor-pointer ${btnHover}`}>
              <button className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full text-sm font-semibold border cursor-pointer"
                style={{ background: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.3)", color: "white", backdropFilter: "blur(8px)" }}>
                <Download className="h-4 w-4" /> Download Resume
              </button>
            </a>

            <a href="https://www.linkedin.com/in/srimanshanmugam" target="_blank" rel="noopener noreferrer" className={`cursor-pointer ${btnHover}`}>
              <button className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full text-sm font-semibold border cursor-pointer"
                style={{ background: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.3)", color: "white", backdropFilter: "blur(8px)" }}>
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </button>
            </a>

            <button
              onClick={scrollToContact}
              className={`inline-flex items-center gap-2 px-7 py-2.5 rounded-full text-sm font-semibold border cursor-pointer ${btnHover}`}
              style={{ background: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.3)", color: "white", backdropFilter: "blur(8px)" }}
            >
              <Mail className="h-4 w-4" /> Contact Me
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section — starts after content */}
      <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(210,25%,97%))" }} />
    </section>
  );
}
