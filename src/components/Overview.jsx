import React from 'react';

const Overview = ({ onNavigate, onOpenResume }) => {
  return (
    <article className="space-y-12" aria-labelledby="overview-title">
      {/* Header Eyebrow, Title & Action Buttons Directly Below */}
      <header
        style={{ borderColor: 'var(--border-rule)' }}
        className="space-y-6 border-b pb-8"
      >
        <div
          style={{ color: 'var(--text-secondary)' }}
          className="flex items-center justify-between text-xs font-mono uppercase tracking-widest"
        >
          <span>PROFILE</span>
          <span>INTRODUCTION</span>
        </div>

        <h1
          id="overview-title"
          style={{ color: 'var(--text-primary)' }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none"
        >
          Keirt William<br />Gemperle.
        </h1>

        {/* Action Buttons Directly Below Name */}
        <nav className="flex flex-wrap gap-3 sm:gap-4 pt-2" aria-label="Section shortcuts">
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="btn-primary px-5 py-3 text-xs font-mono uppercase tracking-wider cursor-pointer font-semibold shadow-none"
          >
            View Projects &rarr;
          </button>

          <button
            type="button"
            onClick={() => onNavigate('skills')}
            className="btn-secondary px-5 py-3 text-xs font-mono uppercase tracking-wider cursor-pointer shadow-none"
          >
            Review Skills &rarr;
          </button>

          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="btn-secondary px-5 py-3 text-xs font-mono uppercase tracking-wider cursor-pointer shadow-none"
          >
            Contact &rarr;
          </button>

          <button
            type="button"
            onClick={onOpenResume}
            className="btn-secondary inline-flex items-center space-x-1.5 px-5 py-3 text-xs font-mono uppercase tracking-wider cursor-pointer shadow-none"
          >
            <span>View Resume</span>
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
          className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
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
          className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
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
          className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
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
          className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
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
          className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
        >
          <span
            style={{ color: 'var(--text-secondary)' }}
            className="text-xs font-mono uppercase tracking-wider"
          >
            Tools & Workflows
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
          className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
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
