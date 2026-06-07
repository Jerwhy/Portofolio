import { motion } from "motion/react";

const skills = [
  { name: "HTML, CSS", level: 60, color: "bg-orange-500" },
  { name: "Music", level: 70, color: "bg-cyan-500" },
  { name: "Desain", level: 40, color: "bg-cyan-500" },
  { name: "Basic Cybersecurity", level: 60, color: "bg-green-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-black/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl group"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-neutral-400 text-sm font-mono">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Track */}
              <div className="w-full bg-neutral-800 rounded-full h-2.5 overflow-hidden">
                {/* Animated Progress */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 1,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className={`h-2.5 rounded-full ${skill.color} relative`}
                >
                  {/* Glow effect on the bar */}
                  <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/30 blur-[2px] rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
