import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Cyber Dashboard UI",
    description:
      "Interface modern untuk pemantauan keamanan siber dan visualisasi data log server.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    github: "#",
    demo: "https://cybersecurity-dashboard-ui-u816.vercel.app/",
  },
  {
    id: 2,
    title: "Desain Minimalis",
    description:
      "Desain Poster dengan konsep Minimalis dan Elegant.",
    image:
      "Gesaffelstein.png",
    tags: ["Canva"],
    github: "#",
    demo: "Gesaffelstein.png",
  },
  {
    id: 3,
    title: "Smart Exspense Tracker",
    description:
      "Platform Pengaturan Pemasukkan dan Pengeluaran Uang.",
    image:
      "UI.png",
    tags: ["React", "Vite", "Tailwind CSS", "TypeScript",],
    github: "smart-money-tracker-phi.vercel.app",
    demo: "https://smart-money-tracker-phi.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium hover:text-cyan-400 transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm font-medium hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
