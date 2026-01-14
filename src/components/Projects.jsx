import { motion } from "framer-motion";
import { Zap, ShoppingCart, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Lightning Hotspot Identification",
    description:
      "Analyzed satellite-based lightning data to identify global lightning hotspots, with a focus on the Congo region. Explored the relationship between lightning activity and atmospheric parameters like CAPE and K-Index.",
    tech: ["Python", "NASA Data", "ERA5", "Data Analysis"],
    icon: Zap,
    gradient: "from-yellow-400 to-orange-500",
    link: null,
  },
  {
    title: "Green VEICART",
    description:
      "AI-based smart checkout system using YOLOv8 and IoT (ESP32 + HX711) for automated product detection, weight-based billing, and QR-code digital payments.",
    tech: ["YOLOv8", "ESP32", "IoT", "Python", "AI"],
    icon: ShoppingCart,
    gradient: "from-green-400 to-emerald-500",
    link: "https://github.com/Aswinisathyan/veicart",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* section glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

      {/* Animated heading like Hero */}
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-title text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        {projects.map((project, index) => {
          const Icon = project.icon;
          const Wrapper = project.link ? "a" : "div";

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group relative h-full"
            >
              {/* ambient glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient}
                            opacity-0 group-hover:opacity-15
                            blur-3xl transition duration-500`}
              />

              {/* shimmer sweep */}
              <span
                className="absolute inset-0 bg-gradient-to-r
                           from-transparent via-white/10 to-transparent
                           translate-x-[-120%]
                           group-hover:translate-x-[120%]
                           transition-transform duration-700"
              />

              <Wrapper
                href={project.link || undefined}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260 }}
                  className={`relative glass-card p-8 h-full flex flex-col ${
                    project.link ? "cursor-pointer" : ""
                  }`}
                >
                  {/* icon */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-12 h-12 rounded-xl
                                  bg-gradient-to-br ${project.gradient}
                                  flex items-center justify-center
                                  shadow-lg`}
                    >
                      <Icon className="text-black" size={22} />
                    </motion.div>

                    {project.link && (
                      <ExternalLink className="text-muted opacity-60 group-hover:opacity-100 group-hover:text-primary transition" />
                    )}
                  </div>

                  {/* animated title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xl font-semibold mb-3 tracking-tight group-hover:text-primary transition"
                  >
                    {project.title}
                  </motion.h3>

                  {/* animated description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-muted leading-relaxed mb-6 flex-grow"
                  >
                    {project.description}
                  </motion.p>

                  {/* tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3 + i * 0.05,
                        }}
                        className="px-3 py-1 text-xs rounded-full
                                   bg-white/5 border border-border
                                   text-muted
                                   hover:text-primary
                                   hover:border-primary/40
                                   hover:-translate-y-0.5
                                   transition-all duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Wrapper>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
