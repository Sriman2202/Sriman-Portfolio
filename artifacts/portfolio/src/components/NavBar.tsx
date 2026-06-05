import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[hsl(220,68%,22%)] border-b border-white/10 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-10">
        <div
          className="h-full transition-all duration-75 ease-out"
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, hsl(175,90%,50%), hsl(195,90%,60%), hsl(220,80%,65%))",
            boxShadow: "0 0 8px hsl(185,90%,55%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div
            className={`text-xl font-bold font-serif tracking-tight cursor-pointer transition-colors duration-300 hover:opacity-80 text-white`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Sriman{" "}
            <span className="text-white/60">S</span>.
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-bold cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 text-white hover:text-white/70"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-white/10 hover:scale-110 active:scale-95 transition-transform duration-200"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 border-b border-white/10 shadow-lg p-4 flex flex-col space-y-4 bg-[hsl(220,68%,18%)]"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-left text-sm font-bold py-2 transition-opacity cursor-pointer hover:opacity-70 text-white"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
