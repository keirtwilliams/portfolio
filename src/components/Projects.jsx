import React from 'react';

const projects = [
  {
    id: 'pawadopt',
    title: 'PawAdopt',
    subtitle: 'Stray Rescue & Animal Dispatch Platform',
    role: 'Sole Developer',
    period: 'Jan 2026 — Present',
    image: '/projects/pawadopt.png',
    imageAlt: 'PawAdopt multi-portal web platform interface featuring Mapbox GL coordinates and Supabase Realtime rescue dispatch queue.',
    liveUrl: 'https://pawadopt-main.vercel.app',
    description:
      'A multi-portal web platform (Citizen, Shelter Admin, LGU) for digitizing stray rescue workflows. Integrating Mapbox GL JS for GPS coordinate pinning and Supabase Realtime for live rescue status tracking.',
    highlights: [
      'Built 3 distinct authenticated portals for citizens, shelter administrators, and local government units.',
      'Embedded Mapbox GL JS spatial mapping for coordinate pinning and rescue radius filtering.',
      'Implemented Supabase Realtime channels for instantaneous case dispatch status updates.',
    ],
    stack: ['React', 'Supabase Realtime', 'Mapbox GL JS', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'canopy',
    title: 'Canopy',
    subtitle: 'Official Departmental Web Platform',
    role: 'Front-End Developer',
    period: 'Mar 2026 — Aug 2026',
    image: '/projects/canopy.png',
    imageAlt: 'Canopy official web platform for the Western Institute of Technology BSIT department showing curriculum tracks and departmental dispatches.',
    liveUrl: 'https://witpsits-webapp.vercel.app/?fbclid=IwY2xjawVeP1pleHRuA2FlbQIxMABwZG9mBWJyaWQRMUVaMUVYcWt5a05oQzlhb1BzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEfEMn4hC-FcRsLmg55HRBkSFNPEb681LwMFmeNxzRt1L2qi_h4Bep_BsBbUck_aem_tpDia5kiRo8UbsWzoCIaWw',
    description:
      'Co-developed the official web platform for the WIT BSIT department using React and Tailwind CSS.',
    highlights: [
      'Built accessible and reusable React UI modules adhering strictly to mobile-first responsive design.',
      'Structured institutional curriculum modules and faculty academic directory matrices.',
      'Collaborated within an agile student-faculty development squad with Git branch management.',
    ],
    stack: ['React', 'Tailwind CSS', 'JavaScript (ES6+)', 'Vite'],
  },
];

const Projects = () => {
  return (
    <article className="space-y-12" aria-labelledby="projects-title">
      <header
        style={{ borderColor: 'var(--border-rule)' }}
        className="space-y-4 border-b pb-8"
      >
        <div
          style={{ color: 'var(--text-secondary)' }}
          className="flex items-center justify-between text-xs font-mono uppercase tracking-widest"
        >
          <span>WORK</span>
          <span>FEATURED PROJECTS</span>
        </div>

        <h1
          id="projects-title"
          style={{ color: 'var(--text-primary)' }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none"
        >
          Selected<br />Projects.
        </h1>
      </header>

      {/* Projects List */}
      <div className="space-y-16">
        {projects.map((project, idx) => {
          const projectUrl = project.liveUrl;

          return (
            <section
              key={project.id}
              style={{
                backgroundColor: 'var(--bg-canvas)',
                borderColor: 'var(--border-rule)',
              }}
              className="border p-4 sm:p-8 space-y-6 sm:space-y-8"
              aria-labelledby={`project-${project.id}-title`}
            >
              {/* Visual Interface Mockup (Clickable) */}
              <a
                href={projectUrl}
                target="_blank"
                rel="noreferrer"
                className="group block interactive-media overflow-hidden cursor-pointer"
                title={`Open ${project.title}`}
                aria-label={`Open ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-auto object-cover block transition-transform duration-200 group-hover:scale-[1.01]"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </a>

              {/* Project Details Header */}
              <div
                style={{ borderColor: 'var(--border-rule)' }}
                className="space-y-3 border-b pb-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span
                    style={{ color: 'var(--text-secondary)' }}
                    className="text-xs font-mono uppercase"
                  >
                    Project
                  </span>
                  <span
                    style={{ color: 'var(--text-primary)' }}
                    className="text-xs font-mono uppercase font-semibold"
                  >
                    {project.role} · {project.period}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h2
                    id={`project-${project.id}-title`}
                    style={{ color: 'var(--text-primary)' }}
                    className="text-2xl sm:text-3xl font-bold tracking-tight"
                  >
                    {project.title}
                  </h2>

                  <p
                    style={{ color: 'var(--text-secondary)' }}
                    className="text-xs font-mono uppercase tracking-wider"
                  >
                    {project.subtitle}
                  </p>
                </div>

                {/* Clickable Action Links */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider cursor-pointer"
                    >
                      <span>Live Site</span>
                      <span>&rarr;</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Description & Technical Points */}
              <div className="space-y-4">
                <p
                  style={{ color: 'var(--text-primary)' }}
                  className="text-base leading-relaxed"
                >
                  {project.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span
                    style={{ color: 'var(--text-secondary)' }}
                    className="text-xs font-mono uppercase tracking-wider block"
                  >
                    Key Technical Highlights:
                  </span>
                  <ul
                    style={{ color: 'var(--text-secondary)' }}
                    className="space-y-1 text-sm"
                  >
                    {project.highlights.map((point) => (
                      <li key={point} className="flex items-start space-x-2">
                        <span
                          style={{ color: 'var(--text-primary)' }}
                          className="font-mono select-none"
                        >
                          &bull;
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div
                style={{ borderColor: 'var(--border-rule)' }}
                className="pt-4 border-t flex flex-wrap gap-2"
              >
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: 'var(--border-rule)',
                      color: 'var(--text-primary)',
                    }}
                    className="inline-block border px-2.5 py-1 text-xs font-mono tracking-tight"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </article>
  );
};

export default Projects;
