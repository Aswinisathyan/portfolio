import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

/* ---------------------------------
   Education Data
---------------------------------- */

const education = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "Government Engineering College, Thrissur",
    location: "Thrissur, India",
    period: "2024 – Present",
    current: true,
  },
  {
    degree: "BSc Physics",
    institution: "Sreekrishna College, Guruvayur",
    location: "Guruvayur, India",
    period: "2021 – 2024",
  },
  {
    degree: "Higher Secondary (10+2)",
    institution: "Govt Model Girls Higher Secondary School",
    location: "Kunnamkulam, India",
    period: "2019 – 2021",
  },
  {
    degree: "Secondary (10th)",
    institution: "Bethany Convent Girls High School",
    location: "Kunnamkulam, India",
    period: "2019",
  },
];

/* ---------------------------------
   Motion Variants (Hero Language)
---------------------------------- */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export default function Education() {
  return (
    <section id="education" className="section relative overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="section-title text-center"
      >
        Education
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="relative max-w-5xl mx-auto"
      >
        {/* timeline spine */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-20">
          {education.map((itemData, index) => (
            <motion.div
              key={itemData.degree}
              variants={item}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="absolute left-1/2 -translate-x-1/2
                           w-4 h-4 rounded-full bg-cyan-400
                           shadow-[0_0_24px_rgba(34,211,238,0.7)]"
              />

              {/* spacer */}
              <div className="hidden md:block md:w-1/2" />

              {/* card */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 260 }}
                  className="glass-card p-7 relative overflow-hidden"
                >
                  {/* shimmer */}
                  <span
                    className="absolute inset-0 bg-gradient-to-r
                               from-transparent via-white/10 to-transparent
                               translate-x-[-120%]
                               hover:translate-x-[120%]
                               transition-transform duration-700"
                  />

                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.15 }}
                      className="icon-pill"
                    >
                      <GraduationCap size={18} />
                    </motion.div>

                    {itemData.current && (
                      <span className="text-xs px-2 py-0.5 rounded-full
                                       bg-cyan-400/20 text-cyan-400">
                        Current
                      </span>
                    )}
                  </div>

                  {/* text reveal */}
                  <motion.h3
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-xl md:text-2xl font-semibold tracking-tight mb-1"
                  >
                    {itemData.degree}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-cyan-400 font-medium"
                  >
                    {itemData.institution}
                  </motion.p>

                  <p className="text-sm text-muted">
                    {itemData.location}
                  </p>

                  <p className="text-sm text-muted mt-2">
                    {itemData.period}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
