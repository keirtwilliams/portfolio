import React from 'react';

const Overview = ({ onNavigate, onOpenResume, onOpenCv }) => {
  return (
    <article className="space-y-12 sm:space-y-16" aria-labelledby="overview-title">
      {/* Header Eyebrow, Title, Profile Avatar & Action Buttons Directly Below */}
      <header
        style={{ borderColor: 'var(--border-rule)' }}
        className="space-y-6 sm:space-y-8 border-b pb-8 sm:pb-12"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
          {/* Circular Profile Avatar with Status Indicator */}
          <div className="relative flex-shrink-0 group">
            <div
              style={{
                borderColor: 'var(--border-rule)',
                backgroundColor: 'var(--bg-surface)',
              }}
              className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 avatar-circle border-2 overflow-hidden ring-4 ring-black/5 dark:ring-white/5 transition-transform duration-200 group-hover:scale-105"
            >
              <img
                src="/img.png"
                alt="Keirt William Gemperle"
                className="w-full h-full object-cover object-top block"
                loading="eager"
              />
            </div>
            {/* Live Status Indicator (Available for work) */}
            <span
              className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 avatar-circle border-2 border-[var(--bg-canvas)]"
              title="Available for projects & roles"
              aria-label="Available for projects & roles"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span
                style={{ color: 'var(--text-secondary)' }}
                className="text-xs font-mono uppercase tracking-widest font-semibold"
              >
                Front-End Developer
              </span>
              <span style={{ color: 'var(--border-rule)' }}>·</span>
              <span
                style={{ color: 'var(--text-muted)' }}
                className="text-xs font-mono uppercase tracking-wider"
              >
                Iloilo City, PH
              </span>
            </div>

            <h1
              id="overview-title"
              style={{ color: 'var(--text-primary)' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none"
            >
              Keirt William<br />Gemperle.
            </h1>
          </div>
        </div>

        {/* Action Buttons Directly Below Name */}
        <nav className="flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4" aria-label="Section shortcuts">
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="btn-secondary px-4 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-mono uppercase tracking-wider cursor-pointer font-semibold shadow-none"
          >
            View Projects &rarr;
          </button>

          <button
            type="button"
            onClick={() => onNavigate('skills')}
            className="btn-secondary px-4 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-mono uppercase tracking-wider cursor-pointer shadow-none"
          >
            Review Skills &rarr;
          </button>

          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="btn-secondary px-4 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-mono uppercase tracking-wider cursor-pointer shadow-none"
          >
            Contact &rarr;
          </button>

          <button
            type="button"
            onClick={onOpenResume}
            className="btn-secondary inline-flex items-center space-x-1.5 sm:space-x-2 px-4 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-mono uppercase tracking-wider cursor-pointer shadow-none"
            title="Open Resume (PDF · 1 Page)"
            aria-label="Open resume preview modal"
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            <span>View Resume</span>
            <span
              style={{
                backgroundColor: 'var(--bg-canvas)',
                borderColor: 'var(--border-rule)',
                color: 'var(--text-primary)',
              }}
              className="border px-1 py-0.5 text-[9px] font-mono font-bold leading-none"
            >
              PDF
            </span>
            <span>&rarr;</span>
          </button>

          <button
            type="button"
            onClick={onOpenCv}
            className="btn-secondary inline-flex items-center space-x-1.5 sm:space-x-2 px-4 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-mono uppercase tracking-wider cursor-pointer shadow-none"
            title="Open Curriculum Vitae (CV) Preview Modal"
            aria-label="Open curriculum vitae preview modal"
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span>View CV</span>
            <span
              style={{
                backgroundColor: 'var(--bg-canvas)',
                borderColor: 'var(--border-rule)',
                color: 'var(--text-primary)',
              }}
              className="border px-1 py-0.5 text-[9px] font-mono font-bold leading-none"
            >
              CV · PDF
            </span>
            <span>&rarr;</span>
          </button>
        </nav>
      </header>

      {/* Primary Statement */}
      <section className="space-y-4">
        <h2
          style={{ color: 'var(--text-secondary)' }}
          className="text-xs font-mono uppercase tracking-wider"
        >
          ABOUT ME
        </h2>
        <p
          style={{ color: 'var(--text-primary)' }}
          className="text-base sm:text-lg leading-relaxed font-normal max-w-3xl"
        >
          I am an IT student based in Iloilo City, Philippines, currently studying at Western Institute of Technology (Expected graduation: May 2027). I am actively learning and practicing front-end development by building responsive web projects with React, JavaScript, and Tailwind CSS, while exploring Supabase for database and authentication workflows.
        </p>
      </section>

      {/* Structural Data Matrix */}
      <section
        style={{ borderColor: 'var(--border-rule)' }}
        className="border divide-y"
        aria-label="Details"
      >
        <div
          style={{ borderColor: 'var(--border-rule)' }}
          className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
        >
          <span
            style={{ color: 'var(--text-secondary)' }}
            className="text-xs font-mono uppercase tracking-wider"
          >
            Current Focus
          </span>
          <span
            style={{ color: 'var(--text-primary)' }}
            className="sm:col-span-2 text-sm"
          >
            Practicing front-end development with React, JavaScript, and Tailwind CSS.
          </span>
        </div>

        <div
          style={{ borderColor: 'var(--border-rule)' }}
          className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
        >
          <span
            style={{ color: 'var(--text-secondary)' }}
            className="text-xs font-mono uppercase tracking-wider"
          >
            Active Project
          </span>
          <span
            style={{ color: 'var(--text-primary)' }}
            className="sm:col-span-2 text-sm"
          >
            PawAdopt — A web platform for stray animal rescue workflows using Mapbox GPS pins and Supabase live boards.
          </span>
        </div>

        <div
          style={{ borderColor: 'var(--border-rule)' }}
          className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
        >
          <span
            style={{ color: 'var(--text-secondary)' }}
            className="text-xs font-mono uppercase tracking-wider"
          >
            Education
          </span>
          <span
            style={{ color: 'var(--text-primary)' }}
            className="sm:col-span-2 text-sm"
          >
            BS in Information Technology, Western Institute of Technology (Expected May 2027)
          </span>
        </div>

        <div
          style={{ borderColor: 'var(--border-rule)' }}
          className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
        >
          <span
            style={{ color: 'var(--text-secondary)' }}
            className="text-xs font-mono uppercase tracking-wider"
          >
            Organization
          </span>
          <span
            style={{ color: 'var(--text-primary)' }}
            className="sm:col-span-2 text-sm"
          >
            PSITS-WIT Chapter — Core Developer
          </span>
        </div>

        <div
          style={{ borderColor: 'var(--border-rule)' }}
          className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
        >
          <span
            style={{ color: 'var(--text-secondary)' }}
            className="text-xs font-mono uppercase tracking-wider"
          >
            Workflows & AI
          </span>
          <span
            style={{ color: 'var(--text-primary)' }}
            className="sm:col-span-2 text-sm"
          >
            Google Gemini · Antigravity
          </span>
        </div>

        <div
          style={{ borderColor: 'var(--border-rule)' }}
          className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
        >
          <span
            style={{ color: 'var(--text-secondary)' }}
            className="text-xs font-mono uppercase tracking-wider"
          >
            Location
          </span>
          <span
            style={{ color: 'var(--text-primary)' }}
            className="sm:col-span-2 text-sm"
          >
            Iloilo City, Philippines
          </span>
        </div>
      </section>
    </article>
  );
};

export default Overview;
