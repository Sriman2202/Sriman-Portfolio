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
      className="min-h-[100dvh] flex flex-col justify-center pt-20 pb-10 relative overflow-hidden"
      style={{
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

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-6 relative flex items-end justify-center"
            style={{ height: "260px", width: "220px" }}
          >
            {/* Rotating gradient ring behind photo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, hsl(200,90%,60%), hsl(260,80%,70%), hsl(320,70%,65%), hsl(45,90%,60%), hsl(200,90%,60%))",
                filter: "blur(12px)",
                opacity: 0.5,
                width: "180px",
                height: "180px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            {/* Soft glow beneath */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-8 rounded-full"
              style={{ background: "radial-gradient(ellipse, rgba(100,180,255,0.4) 0%, transparent 70%)", filter: "blur(8px)" }}
            />
            {/* Floating cutout photo */}
            <motion.img
              src={profileCutout}
              alt="Sriman S"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 select-none"
              style={{ height: "250px", width: "auto", objectFit: "contain", filter: "drop-shadow(0 8px 32px rgba(80,140,255,0.35))" }}
              draggable={false}
            />
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

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(210,25%,97%))" }} />
    </section>
  );
}
