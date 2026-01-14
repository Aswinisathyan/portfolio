import { motion } from "framer-motion";
import { User, MapPin, Mail, Phone } from "lucide-react";

/* ---------------------------------
   Motion presets (same language as Hero)
---------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* ambient background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

      {/* Section title */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-title text-center md:text-left"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT TEXT — smooth font reveal */}
        <div className="space-y-6">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted leading-relaxed"
          >
            A dedicated and analytical Physics graduate, currently pursuing an
            MCA at Government Engineering College, Thrissur, with a strong
            foundation in computational problem-solving and programming.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="text-lg md:text-xl text-muted leading-relaxed"
          >
            I am actively seeking opportunities in the IT field, where I can
            contribute to dynamic projects, enhance my technical expertise, and
            deliver impactful solutions that drive organizational success.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted leading-relaxed"
          >
            With a commitment to continuous learning and adaptability, I aim to
            excel in roles that require collaboration, creativity, and a
            problem-solving mindset.
          </motion.p>
        </div>

        {/* RIGHT INFO CARDS */}
        <div className="space-y-4">
          <InfoCard
            icon={User}
            label="Name"
            value="Aswini Sathyan C"
            highlight
            delay={0.1}
          />

          <InfoCard
            icon={MapPin}
            label="Location"
            value="Thrissur, Kerala, India"
            delay={0.2}
          />

          <InfoCard
            icon={Mail}
            label="Email"
            value={
              <a
                href="mailto:sreeaswini3@gmail.com"
                className="hover:text-primary transition"
              >
                sreeaswini3@gmail.com
              </a>
            }
            delay={0.3}
          />

          <InfoCard
            icon={Phone}
            label="Phone"
            value="+91 8590464943"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

/* =====================================
   Hero-grade Info Card
===================================== */

function InfoCard({ icon: Icon, label, value, delay, highlight }) {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}   /* mobile-safe interaction */
      className="glass-card flex items-center gap-4 p-6
                 hover:border-primary/50
                 transition-all duration-300
                 group relative overflow-hidden"
    >
      {/* shimmer sweep */}
      <span
        className="absolute inset-0 bg-gradient-to-r
                   from-transparent via-white/10 to-transparent
                   translate-x-[-120%]
                   group-hover:translate-x-[120%]
                   transition-transform duration-700"
      />

      {/* Icon — subtle lift / pulse */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 3 }}
        whileTap={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="icon-pill"
      >
        <Icon size={18} />
      </motion.div>

      <div>
        <p className="text-sm uppercase tracking-wide text-muted">
          {label}
        </p>

        <p
          className={
            highlight
              ? "text-xl md:text-2xl font-semibold tracking-tight"
              : "text-lg font-medium"
          }
        >
          {value}
        </p>
      </div>
    </motion.div>
  );
}
