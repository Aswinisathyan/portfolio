import { ArrowDown } from "lucide-react";
import { RESUME_FILE } from "../data/content";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle grid backdrop with center spotlight */}
      <div className="absolute inset-0 pointer-events-none bg-grid" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,102,241,0.12), transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        {/* Intro */}
        <p className="text-primary text-sm md:text-base tracking-widest uppercase mb-5 animate-fade-up">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-up delay-200">
          <span className="text-white">Aswini </span>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sathyan C
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-muted text-lg md:text-xl leading-relaxed mb-12 animate-fade-up delay-400">
          MCA Student & Aspiring Developer with a passion for AI, Machine Learning,
          and building impactful solutions
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-5 animate-fade-up delay-600">
          
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>

          <a href="#projects" className="btn-outline">
            View Projects
          </a>

          {/* Resume Button */}
          <a
            href={`${import.meta.env.BASE_URL}${RESUME_FILE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Resume
          </a>

        </div>

        {/* Down Arrow */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 animate-bounce-soft">
          <a href="#about" className="text-muted hover:text-primary transition">
            <ArrowDown size={26} />
          </a>
        </div>
      </div>
    </section>
  );
}