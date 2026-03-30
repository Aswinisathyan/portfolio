import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Soft glowing background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-primary/15 blur-[140px] rounded-full animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[22rem] h-[22rem] bg-accent/15 blur-[120px] rounded-full animate-float-slower" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        {/* Intro */}
        <p className="text-primary text-sm md:text-base tracking-widest uppercase mb-5 animate-fade-up">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-up delay-200">
          <span className="text-white">Aswini </span>
          <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent animate-gradient">
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
            href="/Resume_AI_Eng.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            AI Engineer Resume
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