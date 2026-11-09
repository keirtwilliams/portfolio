import React from 'react';

const experiences = [
  {
    role: 'Core Developer',
    organization: 'Philippine Society of Information Technology Students (PSITS) — WIT Chapter',
    period: 'Mar 2026 — Aug 2026',
    location: 'Iloilo City, Philippines',
    description:
      'Maintained student-facing web platforms and championed structured version control.',
    responsibilities: [
      'Maintained student-facing web platforms, resolving layout defects and improving client rendering performance.',
      'Championed structured version control standards and Git branch conventions across student-led project teams.',
      'Organized collaborative technical sessions on front-end workflows, code reviews, and reproducible local setups.',
    ],
    tags: ['Git Workflow', 'Team Collaboration', 'Web Infrastructure', 'Code Reviews'],
  },
];

const Experience = () => {
  return (
    <article className="space-y-12" aria-labelledby="experience-title">
      <header
        style={{ borderColor: 'var(--border-rule)' }}
        className="space-y-4 border-b pb-8"
      >
        <div
          style={{ color: 'var(--text-secondary)' }}
          className="flex items-center justify-between text-xs font-mono uppercase tracking-widest"
        >
          <span>BACKGROUND</span>
          <span>LEADERSHIP & EXPERIENCE</span>
        </div>

        <h1
          id="experience-title"
          style={{ color: 'var(--text-primary)' }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none"
        >
          Leadership &<br />Experience.
        </h1>
      </header>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <section
            key={exp.organization}
            style={{
              backgroundColor: 'var(--bg-canvas)',
              borderColor: 'var(--border-rule)',
            }}
            className="border p-6 sm:p-8 space-y-6"
            aria-labelledby="org-role-title"
          >
            <div
              style={{ borderColor: 'var(--border-rule)' }}
              className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b pb-6"
            >
              <div className="space-y-1">
                <span
                  style={{ color: 'var(--text-secondary)' }}
                  className="text-xs font-mono uppercase block"
                >
                  Leadership Role
                </span>
                <h2
                  id="org-role-title"
                  style={{ color: 'var(--text-primary)' }}
                  className="text-2xl sm:text-3xl font-bold tracking-tight"
                >
                  {exp.role}
                </h2>
                <p
                  style={{ color: 'var(--text-secondary)' }}
                  className="text-sm sm:text-base font-semibold"
                >
                  {exp.organization}
                </p>
              </div>

              <div
                style={{ color: 'var(--text-primary)' }}
                className="text-xs font-mono uppercase tracking-wider space-y-1 sm:text-right"
              >
                <p className="font-semibold">{exp.period}</p>
                <p style={{ color: 'var(--text-secondary)' }}>{exp.location}</p>
              </div>
            </div>

            <p
              style={{ color: 'var(--text-primary)' }}
              className="text-base leading-relaxed"
            >
              {exp.description}
            </p>

            <div className="space-y-3 pt-2">
              <span
                style={{ color: 'var(--text-secondary)' }}
                className="text-xs font-mono uppercase tracking-wider block"
              >
                Key Contributions:
              </span>
              <ul
                style={{ color: 'var(--text-primary)' }}
                className="space-y-2 text-sm"
              >
                {exp.responsibilities.map((item) => (
                  <li key={item} className="flex items-start space-x-2">
                    <span
                      style={{ color: 'var(--text-primary)' }}
                      className="font-mono select-none"
                    >
                      &bull;
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{ borderColor: 'var(--border-rule)' }}
              className="pt-4 border-t flex flex-wrap gap-2"
            >
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderColor: 'var(--border-rule)',
                    color: 'var(--text-secondary)',
                  }}
                  className="inline-block border px-2.5 py-1 text-xs font-mono tracking-tight"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};

export default Experience;
