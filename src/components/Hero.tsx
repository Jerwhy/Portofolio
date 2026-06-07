import { motion } from "motion/react";
import { Download, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group mb-8"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <img
            src="guwa.jpeg"
            alt="Profile"
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-cyan-400 bg-neutral-900 object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Jeremia Wahyu Budiyono
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-2xl text-neutral-400 font-display mb-10 max-w-2xl"
        >
        Cyber Security | Front-End Developer 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="https://docs.google.com/document/d/1INptK785BHb6sy5x1Z8mmdms45dSo33xn9x5FUEYjcY/edit?usp=sharing"
            className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-black bg-cyan-400 rounded-full overflow-hidden transition-transform active:scale-95 neon-shadow-hover"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative flex items-center gap-2">
              <Download size={20} />
              Download CV
            </span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 font-medium text-white border border-cyan-400/50 rounded-full hover:bg-cyan-400/10 transition-colors active:scale-95"
          >
            <Mail size={20} className="mr-2" />
            Contact Me
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <a
            href="#about"
            className="text-neutral-500 hover:text-cyan-400 transition-colors"
          >
            <ChevronDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
