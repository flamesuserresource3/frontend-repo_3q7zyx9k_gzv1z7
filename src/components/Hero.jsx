import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Mail, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Intro Content */}
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-sky-300 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
              <Rocket size={16} /> Building enterprise-grade experiences
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Full‑Stack Developer for Enterprise Software
            </h1>
            <p className="mt-4 md:mt-6 text-slate-300 text-base md:text-lg leading-relaxed">
              I craft robust, scalable solutions with Angular on the front and .NET on the back —
              designed for performance, reliability, and teams at scale.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2.5 rounded-md transition-colors"
              >
                <Rocket size={18} /> View Projects
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium px-4 py-2.5 rounded-md border border-white/10 transition-colors"
              >
                <Mail size={18} /> Contact
              </a>
              <div className="flex items-center gap-2 ml-2">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-md border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-md border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Spline Canvas */}
          <div className="relative lg:h-[640px] md:h-[520px] h-[420px] rounded-xl overflow-hidden ring-1 ring-white/10">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Soft gradient overlay for depth (doesn't block interaction) */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Background accents */}
      <div className="pointer-events-none absolute -top-10 right-0 h-72 w-72 md:h-96 md:w-96 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-8 h-72 w-72 md:h-96 md:w-96 rounded-full bg-indigo-500/20 blur-3xl" />
    </section>
  );
}
