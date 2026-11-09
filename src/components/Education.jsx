import React from 'react';

const educationHistory = [
  {
    level: 'Undergraduate Degree',
    title: 'Bachelor of Science in Information Technology',
    institution: 'Western Institute of Technology',
    period: 'Expected May 2027',
    location: 'Iloilo City, Philippines',
  },
  {
    level: 'Senior High School',
    title: 'General Academic Strand (GAS)',
    institution: 'Iloilo National High School — Senior High School',
    period: '2021 — 2023',
    location: 'Iloilo City, Philippines',
  },
];

const Education = () => {
  return (
    <article className="space-y-12" aria-labelledby="education-title">
      <header
        style={{ borderColor: 'var(--border-rule)' }}
        className="space-y-4 border-b pb-8"
      >
        <div
          style={{ color: 'var(--text-secondary)' }}
          className="flex items-center justify-between text-xs font-mono uppercase tracking-widest"
        >
          <span>BACKGROUND</span>
          <span>EDUCATION</span>
        </div>

        <h1
          id="education-title"
          style={{ color: 'var(--text-primary)' }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none"
        >
          Formal<br />Education.
        </h1>
      </header>

      {/* Education Timeline Cards */}
      <div className="space-y-6">
        {educationHistory.map((item) => (
          <section
            key={item.level}
            style={{
              backgroundColor: 'var(--bg-canvas)',
              borderColor: 'var(--border-rule)',
            }}
            className="border p-6 sm:p-8"
            aria-label={item.level}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-1">
                <span
                  style={{ color: 'var(--text-secondary)' }}
                  className="text-xs font-mono uppercase block"
                >
                  {item.level}
                </span>
                <h2
                  style={{ color: 'var(--text-primary)' }}
                  className="text-2xl sm:text-3xl font-bold tracking-tight"
                >
                  {item.title}
                </h2>
                <p
                  style={{ color: 'var(--text-secondary)' }}
                  className="text-base font-semibold"
                >
                  {item.institution}
                </p>
              </div>

              <div
                style={{ color: 'var(--text-primary)' }}
                className="text-xs font-mono uppercase tracking-wider space-y-1 sm:text-right"
              >
                <p className="font-semibold">{item.period}</p>
                <p style={{ color: 'var(--text-secondary)' }}>{item.location}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};

export default Education;
