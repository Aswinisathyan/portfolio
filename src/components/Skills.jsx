import { motion } from "framer-motion";
import { SKILLS as skillGroups } from "../data/content";

/* Motion variants */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="section-title text-center"
      >
        Skills & Expertise
      </motion.h2>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={group.title}
              variants={card}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-6
                         transition-all duration-300
                         hover:border-primary/50
                         group relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 260 }}
                  className="icon-pill"
                >
                  <Icon size={18} />
                </motion.div>

                <h3 className="text-lg font-semibold tracking-tight">
                  {group.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -3 }}
                    className="px-3 py-1 text-xs rounded-full
                               bg-white/5 border border-white/10
                               text-slate-200
                               hover:border-primary/40
                               hover:text-primary
                               transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
