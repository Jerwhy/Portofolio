import { motion } from "motion/react";
import { BookOpen, Code, Shield } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-neutral-300 leading-relaxed text-lg"
          >
            <p>
              Halo! Saya adalah seorang mahasiswa Teknik Informatika yang memiliki minat besar
              dalam dunia teknologi, khususnya di bidang{" "}
              <strong className="text-white">Cyber Security </strong> dan{" "}
              <strong className="text-white">Front-End Development</strong>.
            </p>
            <p>
            Selain memiliki minat di dalam dunia teknologi saya juga senang belajar hal-hal baru secara mandiri untuk asah skill,
            siap berkontribusi secara profesional dalam kolaborasi tim.
              
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <motion.div
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl flex flex-col items-center text-center space-y-4"
            >
              <div className="w-12 h-12 bg-cyan-400/10 rounded-full flex items-center justify-center text-cyan-400">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-semibold">Pendidikan</h3>
              <p className="text-sm text-neutral-400">
                S1 Teknik Informatika
                <br />
                Universitas Dian Nuswantoro 
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl flex flex-col items-center text-center space-y-4"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold">Front-End</h3>
              <p className="text-sm text-neutral-400">
                Menciptakan aplikasi web yang responsif & interaktif.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl flex flex-col items-center text-center space-y-4 sm:col-span-2"
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold">Cyber Security</h3>
              <p className="text-sm text-neutral-400 max-w-sm">
                Mempelajari ethical hacking, jaringan, dan cara melindungi
                data dari ancaman siber.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
