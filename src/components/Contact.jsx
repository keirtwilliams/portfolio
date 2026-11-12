import React, { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('keirtwilliamgemperle@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = 'mailto:keirtwilliamgemperle@gmail.com';
    }
  };

  return (
    <article className="space-y-12" aria-labelledby="contact-title">
      <header
        style={{ borderColor: 'var(--border-rule)' }}
        className="space-y-4 border-b pb-8"
      >
       

        <h1
          id="contact-title"
          style={{ color: 'var(--text-primary)' }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none"
        >
          Contact &<br />Inquiries.
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="space-y-4 lg:col-span-5">
          <h2
            style={{ color: 'var(--text-primary)' }}
            className="text-xl sm:text-2xl font-bold tracking-tight"
          >
            Ready to build clean, responsive frontend interfaces.
          </h2>
          <p
            style={{ color: 'var(--text-secondary)' }}
            className="text-base leading-relaxed"
          >
            Available for front-end developer roles, technical contracts, internships, or open-source initiatives.
          </p>
          <div
            style={{ color: 'var(--text-muted)' }}
            className="pt-2 text-xs font-mono uppercase tracking-wider"
          >
            Location: Iloilo City, Philippines (Open to Remote)
          </div>
        </div>

        <div className="lg:col-span-7">
          <div
            style={{
              backgroundColor: 'var(--bg-canvas)',
              borderColor: 'var(--border-rule)',
            }}
            className="border divide-y"
          >
            {/* Email Card with Monochromatic Gmail Icon + 1-Click Copy */}
            <div
              style={{ borderColor: 'var(--border-rule)' }}
              className="p-4 sm:p-6 space-y-3"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <svg
                    style={{ color: 'var(--text-primary)' }}
                    className="w-4 h-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" />
                    <polyline points="2,6 12,13 22,6" />
                  </svg>
                  <span
                    style={{ color: 'var(--text-secondary)' }}
                    className="text-xs font-mono uppercase tracking-wider"
                  >
                    Gmail Account
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-secondary px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono uppercase tracking-wider cursor-pointer shadow-none flex-shrink-0"
                  aria-live="polite"
                >
                  {copied ? 'Copied' : 'Copy Email'}
                </button>
              </div>

              <a
                href="mailto:keirtwilliamgemperle@gmail.com"
                style={{ color: 'var(--text-primary)' }}
                className="block text-base sm:text-xl font-semibold hover:underline underline-offset-4 transition-all break-all"
              >
                keirtwilliamgemperle@gmail.com
              </a>
            </div>

            {/* Phone / Mobile Card */}
            <div
              style={{ borderColor: 'var(--border-rule)' }}
              className="p-4 sm:p-6 space-y-2"
            >
              <span
                style={{ color: 'var(--text-secondary)' }}
                className="text-xs font-mono uppercase tracking-wider block"
              >
                Mobile Number
              </span>
              <a
                href="tel:09673186364"
                style={{ color: 'var(--text-primary)' }}
                className="inline-block text-base sm:text-lg font-semibold hover:underline underline-offset-4 transition-all font-mono"
              >
                09673186364
              </a>
            </div>

            {/* GitHub Card */}
            <div
              style={{ borderColor: 'var(--border-rule)' }}
              className="p-4 sm:p-6 space-y-2"
            >
              <span
                style={{ color: 'var(--text-secondary)' }}
                className="text-xs font-mono uppercase tracking-wider block"
              >
                Code Repository
              </span>
              <a
                href="https://github.com/keirtwilliams"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-primary)' }}
                className="inline-block text-base sm:text-lg font-semibold hover:underline underline-offset-4 transition-all break-all"
              >
                github.com/keirtwilliams &rarr;
              </a>
            </div>

            {/* LinkedIn Card */}
            <div
              style={{ borderColor: 'var(--border-rule)' }}
              className="p-4 sm:p-6 space-y-2"
            >
              <span
                style={{ color: 'var(--text-secondary)' }}
                className="text-xs font-mono uppercase tracking-wider block"
              >
                LinkedIn Profile
              </span>
              <a
                href="https://linkedin.com/in/keirtwilliamgemperle"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-primary)' }}
                className="inline-block text-base sm:text-lg font-semibold hover:underline underline-offset-4 transition-all break-all"
              >
                linkedin.com/in/keirtwilliamgemperle &rarr;
              </a>
            </div>

            {/* Physical Base */}
            <div
              style={{ borderColor: 'var(--border-rule)' }}
              className="p-4 sm:p-6 space-y-2"
            >
              <span
                style={{ color: 'var(--text-secondary)' }}
                className="text-xs font-mono uppercase tracking-wider block"
              >
                Location
              </span>
              <p
                style={{ color: 'var(--text-primary)' }}
                className="text-base font-semibold"
              >
                Iloilo City, Philippines
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Contact;
