import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'Ops Dashboard',
    stack: 'Angular · NgRx · .NET 8 · Azure Functions · Cosmos DB',
    desc: 'Real‑time operational insights with role‑based access and sub‑second updates.',
    links: {
      demo: '#',
      repo: '#',
    },
  },
  {
    name: 'Claims Processing API',
    stack: '.NET 8 · Minimal APIs · Kafka · PostgreSQL · OpenTelemetry',
    desc: 'High‑throughput message processing with end‑to‑end tracing and retries.',
    links: {
      demo: '#',
      repo: '#',
    },
  },
  {
    name: 'Design System',
    stack: 'Angular · Storybook · Jest · Nx · Accessibility',
    desc: 'Reusable UI kit and component library powering multiple apps across the org.',
    links: {
      demo: '#',
      repo: '#',
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Projects</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">
            A selection of work highlighting architecture, performance, and developer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="group rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 p-6 hover:border-white/20 transition-colors">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                  <p className="text-xs text-sky-300 mt-1">{p.stack}</p>
                </div>
              </div>
              <p className="text-slate-300 mt-3 text-sm leading-relaxed">{p.desc}</p>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.links.demo}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-white text-sm border border-white/10 transition-colors"
                >
                  <ExternalLink size={16} /> Live
                </a>
                <a
                  href={p.links.repo}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 text-white text-sm border border-white/10 transition-colors"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
