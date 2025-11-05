import React from 'react';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-white">
            <span className="inline-flex items-center justify-center rounded-md bg-sky-500/10 p-1.5 ring-1 ring-sky-500/20">
              <Rocket className="text-sky-400" size={18} />
            </span>
            <span>Enterprise Full‑Stack</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Expertise />
        <Experience />
        <Projects />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Enterprise Full‑Stack. All rights reserved.</p>
          <div className="text-slate-400 text-sm">
            Built with Angular & .NET experience — focused on scalable enterprise software.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
