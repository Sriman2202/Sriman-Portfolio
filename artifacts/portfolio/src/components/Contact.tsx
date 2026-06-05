import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Download, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:srimanshanmugam22@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-card/30 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground">
                I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:srimanshanmugam22@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group cursor-pointer"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Email</p>
                  <p className="text-foreground font-medium">srimanshanmugam22@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/srimanshanmugam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                <Button className="w-full rounded-xl pointer-events-none">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </Button>
              </a>
              <a
                href="/sriman-resume.pdf"
                download="Sriman_S_Resume.pdf"
                className="flex-1 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                <Button variant="outline" className="w-full rounded-xl pointer-events-none">
                  <Download className="w-4 h-4 mr-2" /> Resume
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-card border border-border p-6 md:p-8 rounded-2xl shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus-visible:ring-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus-visible:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="bg-background border-border focus-visible:ring-primary resize-none"
                />
              </div>
              <Button type="submit" className="w-full rounded-xl" size="lg">
                <Send className="w-4 h-4 mr-2" /> Send Message
              </Button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Clicking "Send Message" will open your email app with the message pre-filled.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
