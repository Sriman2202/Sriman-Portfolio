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

          {/* Blob photo frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-6 relative"
            style={{ height: "320px", width: "300px" }}
          >
            {/* Outer ring decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute"
              style={{
                width: "260px", height: "260px",
                top: "50%", left: "50%",
                transform: "translate(-50%, -45%)",
                border: "1.5px dashed hsl(175,80%,60%)",
                borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
                opacity: 0.45,
              }}
            />

            {/* Organic blob */}
            <motion.div
              animate={{ borderRadius: [
                "63% 37% 54% 46% / 55% 48% 52% 45%",
                "40% 60% 45% 55% / 48% 62% 38% 52%",
                "55% 45% 60% 40% / 60% 40% 55% 45%",
                "63% 37% 54% 46% / 55% 48% 52% 45%",
              ]}}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute"
              style={{
                width: "230px", height: "230px",
                top: "50%", left: "50%",
                transform: "translate(-50%, -45%)",
                background: "linear-gradient(135deg, hsl(175,90%,42%), hsl(195,90%,55%))",
                boxShadow: "0 0 50px hsl(185,90%,50% / 0.35)",
              }}
            />

            {/* "+" markers */}
            {[
              { top: "4%",  left: "14%", size: 18, delay: 0 },
              { top: "2%",  right: "10%", size: 14, delay: 0.5 },
              { top: "44%", left: "1%",  size: 13, delay: 0.9 },
              { top: "46%", right: "1%", size: 17, delay: 0.3 },
              { top: "86%", left: "18%", size: 13, delay: 0.7 },
              { top: "84%", right: "16%",size: 15, delay: 1.1 },
            ].map((pos, i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.35, 1, 0.35], scale: [0.85, 1.15, 0.85] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: pos.delay }}
                className="absolute font-bold select-none leading-none"
                style={{
                  top: pos.top,
                  left: "left" in pos ? pos.left : undefined,
                  right: "right" in pos ? pos.right : undefined,
                  fontSize: pos.size,
                  color: "hsl(175,90%,65%)",
                }}
              >+</motion.span>
            ))}

            {/* Floating cutout — bottom dissolved into blob */}
            <motion.img
              src={profileCutout}
              alt="Sriman S"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-10 select-none"
              style={{
                height: "300px",
                width: "auto",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                objectFit: "contain",
                WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 92%)",
                maskImage: "linear-gradient(to bottom, black 60%, transparent 92%)",
                filter: "drop-shadow(0 4px 24px rgba(0,210,210,0.25))",
              }}
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
