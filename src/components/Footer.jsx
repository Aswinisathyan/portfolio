import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      {/* soft glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 py-10 text-center"
      >
        {/* name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-muted tracking-wide"
        >
          © {year}{" "}
          <span className="font-medium text-slate-200">
            Aswini Sathyan C
          </span>
        </motion.p>

        {/* tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-2 text-xs text-muted"
        >
          Crafted with passion · Designed for impact
        </motion.p>
      </motion.div>
    </footer>
  );
}
