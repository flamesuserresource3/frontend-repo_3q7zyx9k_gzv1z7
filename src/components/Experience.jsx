import React from 'react';

const roles = [
  {
    company: 'FinServe Corp',
    period: '2022 — Present',
    title: 'Senior Full‑Stack Engineer',
    points: [
      'Led migration from legacy MVC to Angular + .NET microservices, cutting lead time by 45%.',
      'Introduced Nx workspace and shared UI libraries to standardize patterns across teams.',
      'Implemented OpenTelemetry, improving issue traceability across services by 60%.',
    ],
  },
  {
    company: 'HealthTech Systems',
    period: '2019 — 2022',
    title: 'Software Engineer',
    points: [
      'Built patient portals with Angular, NgRx, and high‑throughput .NET APIs.',
      'Hardened authentication with OAuth/OIDC and fine‑grained authorization policies.',
      'Owned CI/CD rollouts with zero‑downtime deployments and blue/green strategies.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Experience</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">
            A track record of shipping production systems in regulated, high‑stake environments.
          </p>
        </div>

        <ol className="relative border-s border-white/10">
          {roles.map((r, idx) => (
            <li key={idx} className="grid md:grid-cols-12 gap-4 md:gap-6 py-6">
              <div className="md:col-span-3">
                <p className="text-slate-400 text-sm">{r.period}</p>
                <p className="text-white font-semibold">{r.company}</p>
              </div>
              <div className="md:col-span-9">
                <p className="text-sky-300 font-medium">{r.title}</p>
                <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
