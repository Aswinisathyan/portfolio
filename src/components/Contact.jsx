import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Download,
} from "lucide-react";
import { PROFILE, RESUME_FILE } from "../data/content";

/* Animation variants */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
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
        Get In Touch
      </motion.h2>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="max-w-3xl mx-auto text-center text-lg text-muted mb-16"
      >
        I'm currently looking for opportunities in the IT field. Whether you
        have a question or just want to say hi, feel free to reach out!
      </motion.p>

      {/* Contact Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
      >
        {/* Email */}
        <motion.a
          variants={fadeUp}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.98 }}
          href={`mailto:${PROFILE.email}`}
          className="glass-card p-6 text-center hover:border-primary/40 transition-all"
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="icon-pill mx-auto mb-4 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
          >
            <Mail size={20} />
          </motion.div>
          <h3 className="font-semibold mb-1">Email</h3>
          <p className="text-sm text-muted">{PROFILE.email}</p>
        </motion.a>

        {/* Phone */}
        <motion.a
          variants={fadeUp}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.98 }}
          href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
          className="glass-card p-6 text-center hover:border-primary/40 transition-all"
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="icon-pill mx-auto mb-4 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
          >
            <Phone size={20} />
          </motion.div>
          <h3 className="font-semibold mb-1">Phone</h3>
          <p className="text-sm text-muted">{PROFILE.phone}</p>
        </motion.a>

        {/* Location */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className="glass-card p-6 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="icon-pill mx-auto mb-4 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
          >
            <MapPin size={20} />
          </motion.div>
          <h3 className="font-semibold mb-1">Location</h3>
          <p className="text-sm text-muted">{PROFILE.location}</p>
        </motion.div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-col items-center gap-8"
      >
        {/* Resume download */}
        <motion.a
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          href={`${import.meta.env.BASE_URL}${RESUME_FILE}`}
          download
          className="btn-primary flex items-center gap-2"
        >
          <Download size={18} />
          Download Resume
        </motion.a>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {[
            {
              href: PROFILE.github,
              icon: Github,
            },
            {
              href: PROFILE.linkedin,
              icon: Linkedin,
            },
            {
              href: `mailto:${PROFILE.email}`,
              icon: Send,
            },
          ].map(({ href, icon: Icon }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10
                         flex items-center justify-center text-muted
                         hover:text-primary hover:border-primary/40 transition"
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
