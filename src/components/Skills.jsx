import React from 'react';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'Supabase', 'PHP', 'MySQL'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Vercel'],
  },
  {
    title: 'Workflows & AI',
    skills: ['Google Gemini', 'Antigravity'],
  },
];

const Skills = () => {
  return (
    <article className="space-y-12" aria-labelledby="skills-title">
      <header
        style={{ borderColor: 'var(--border-rule)' }}
        className="space-y-4 border-b pb-8"
      >
       

        <h1
          id="skills-title"
          style={{ color: 'var(--text-primary)' }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none"
        >
          Technical<br />Skills.
        </h1>
      </header>

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            style={{
              backgroundColor: 'var(--bg-canvas)',
              borderColor: 'var(--border-rule)',
            }}
            className="border"
            aria-labelledby={`skill-${group.title}`}
          >
            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-rule)',
              }}
              className="p-5 border-b"
            >
              <h2
                id={`skill-${group.title}`}
                style={{ color: 'var(--text-primary)' }}
                className="text-lg font-bold tracking-tight"
              >
                {group.title}
              </h2>
            </div>

            <div className="p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="interactive-card p-2.5 sm:p-3 text-xs sm:text-sm font-medium transition-colors cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};

export default Skills;
