import { motion } from "motion/react";
import { Send, Instagram, Github, Linkedin } from "lucide-react";
import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, handle form submission here
    alert("Pesan terkirim! (Demo)");
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get in <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start max-w-5xl mx-auto">
          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 lg:text-3xl">
                Mari Terhubung!
              </h3>
              <p className="text-neutral-400 leading-relaxed text-lg">
                Tertarik untuk berkolaborasi, memiliki pertanyaan, atau sekadar
                ingin menyapa? Jangan ragu untuk menghubungi saya melalui
                formulir ini atau lewat media sosial.
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/jerwhy?igsh=MWJpdGNrZDhsbDducA=="
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-neutral-400 hover:text-cyan-400 hover:border-cyan-400 transition-all hover:-translate-y-1"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://github.com/Jerwhy"
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-neutral-400 hover:text-cyan-400 hover:border-cyan-400 transition-all hover:-translate-y-1"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/jeremia-wahyu-budiyono-11a7b7398/"
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-neutral-400 hover:text-cyan-400 hover:border-cyan-400 transition-all hover:-translate-y-1"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl flex flex-col gap-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-400 mb-2"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder=""
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="jeremia@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-400 mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95 mt-2"
              >
                Kirim Pesan <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
