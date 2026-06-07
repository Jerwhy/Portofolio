import { motion } from "motion/react";
import { Award, ArrowRight } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Basic Training For Next Generation",
    platform: "DNCC",
    year: "2025",
    image:
      "BTNG.jpg",
    link: "BTNG.jpg",
  },
  {
    id: 2,
    title: "Cybersecurity Fundamentals",
    platform: "Cisco Networking Academy",
    year: "2025",
    image:
      "Cisco.png",
    link: "https://www.credly.com/badges/fd9e2eaa-e435-4486-9a5e-7c94e4681e4a/linked_in_profile",
  },
  {
    id: 3,
    title: "Network Fundamental",
    platform: "AGUNA COURSE",
    year: "2025",
    image:
      "Sertif AGUNA_page-0001.jpg",
    link: "Sertif AGUNA_page-0001.jpg",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative z-10 bg-black/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-cyan-400">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-4 group"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={cert.link}
                    className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-white transition-colors"
                  >
                    View Credential <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="px-2">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={18} className="text-cyan-400" />
                  <span className="text-xs font-mono text-neutral-400">
                    {cert.year}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-1 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-neutral-400 text-sm">{cert.platform}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
