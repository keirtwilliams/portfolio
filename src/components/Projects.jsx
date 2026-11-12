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
    id: 'attendance',
    title: 'BSIT Attendance System',
    subtitle: 'High-Throughput PERN Attendance Tracker',
    role: 'Front-End Developer',
    period: '2026',
    image: '/projects/wit-attendance.png',
    imageAlt: 'BSIT Student Attendance System interface featuring ID verification and live attendance logging for 300 to 500 students.',
    liveUrl: 'https://witpsits-attendace-portal.vercel.app/',
    description:
      'Engineered the front-end interface for a PERN stack attendance logging system serving 300–500 BSIT students, providing rapid student ID input verification, real-time feedback, and exportable morning and afternoon attendance rosters.',
    highlights: [
      'Engineered responsive React client interfaces for instantaneous student ID input verification and real-time confirmation.',
      'Deployed for active departmental use across assemblies and academic events, serving 300–500 BSIT students.',
      'Implemented export functionality enabling users to download complete morning and afternoon attendance records.',
      'Built client-side validation logic and real-time state updates to eliminate manual paper attendance rosters.',
    ],
    stack: ['React', 'PostgreSQL', 'Express.js', 'Node.js', 'Tailwind CSS'],
  },
  {
    id: 'wit-bsit-website',
    title: 'Official Website of BSIT WIT',
    subtitle: 'Departmental & Student Organization Web Platform',
    role: 'Front-End Developer',
    period: 'Mar 2026 — Aug 2026',
    image: '/projects/canopy.png',
    imageAlt: 'Official web platform for the Western Institute of Technology BSIT department showing curriculum tracks and departmental dispatches.',
    liveUrl: 'https://witpsits-webapp.vercel.app',
    description:
      'Co-developed the official website for the WIT BSIT department and PSITS chapter using React, Express.js, and Tailwind CSS.',
    highlights: [
      'Scaffolded application structure and backend integration using Express.js.',
      'Built accessible and reusable React UI modules adhering strictly to mobile-first responsive design.',
      'Structured institutional curriculum modules and faculty academic directory matrices.',
      'Collaborated within an agile student-faculty development squad with Git branch management.',
    ],
    stack: ['React', 'Express.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Vite'],
  },
];

const Projects = () => {
  return (
    <article className="space-y-12" aria-labelledby="projects-title">
      <header
        style={{ borderColor: 'var(--border-rule)' }}
        className="space-y-4 border-b pb-8"
      >
    

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
              {/* Visual Interface Mockup */}
              {project.image ? (
                <a
                  href={projectUrl || '#'}
                  target={projectUrl ? '_blank' : '_self'}
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
              ) : (
                <div
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderColor: 'var(--border-rule)',
                  }}
                  className="border p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider"
                >
                  <div className="space-y-1">
                    <span
                      style={{ color: 'var(--text-secondary)' }}
                      className="text-[10px] block"
                    >
                      System Architecture
                    </span>
                    <p
                      style={{ color: 'var(--text-primary)' }}
                      className="font-bold text-sm sm:text-base tracking-tight"
                    >
                      PERN Stack · PostgreSQL · Express · React · Node
                    </p>
                    <p style={{ color: 'var(--text-secondary)' }} className="text-[11px] normal-case">
                      Production logging service tested and utilized by 300–500 active BSIT students.
                    </p>
                  </div>
                  <span
                    style={{
                      borderColor: 'var(--border-rule)',
                      color: 'var(--text-primary)',
                    }}
                    className="border px-3 py-1.5 text-[11px] font-bold whitespace-nowrap"
                  >
                    300–500 Active Users
                  </span>
                </div>
              )}

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
                      target={project.liveUrl !== '#' ? '_blank' : '_self'}
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
