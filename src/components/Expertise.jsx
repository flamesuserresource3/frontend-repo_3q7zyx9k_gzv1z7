import React from 'react';
import { Code, Server, Boxes, Cloud, GitBranch, Shield } from 'lucide-react';

const skills = [
  {
    title: 'Angular',
    desc: 'Enterprise-scale SPAs, RxJS patterns, Nx monorepos, performance tuning, and testing with Jest/Cypress.',
    icon: Code,
  },
  {
    title: '.NET',
    desc: 'Clean architecture, Web APIs, microservices with minimal APIs, EF Core, async design, and observability.',
    icon: Server,
  },
  {
    title: 'Architecture',
    desc: 'Domain-driven design, modular architectures, API gateways, message queues, and event-driven systems.',
    icon: Boxes,
  },
  {
    title: 'Cloud (Azure)',
    desc: 'AKS, App Service, Functions, Cosmos DB, Azure SQL, Key Vault, and end-to-end CI/CD pipelines.',
    icon: Cloud,
  },
  {
    title: 'DevOps',
    desc: 'GitHub Actions, Azure DevOps, trunk-based development, versioning, and automated quality gates.',
    icon: GitBranch,
  },
  {
    title: 'Security & Compliance',
    desc: 'OWASP best practices, authN/Z with OAuth/OIDC, secret management, and secure SDLC.',
    icon: Shield,
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Expertise</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">
            A pragmatic, product-minded approach to shipping resilient software for complex organizations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 p-6 hover:border-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-sky-500/10 p-2.5 ring-1 ring-sky-500/20">
                  <Icon className="text-sky-400" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                  <p className="text-slate-300 mt-1 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
