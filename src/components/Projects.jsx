import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PROJECTS as projects } from "../data/content";

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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
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
              <Wrapper
                href={project.link || undefined}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 260 }}
                  className={`relative glass-card p-8 h-full flex flex-col ${
                    project.link ? "cursor-pointer" : ""
                  }`}
                >
                  {/* icon */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="icon-pill"
                    >
                      <Icon size={20} />
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
