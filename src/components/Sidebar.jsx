import React from 'react';

const navGroups = [
  {
    groupLabel: 'Profile',
    items: [
      {
        id: 'overview',
        label: 'Overview',
        icon: (
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
            <circle cx="12" cy="7" r="4" />
            <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
          </svg>
        ),
      },
    ],
  },
  {
    groupLabel: 'Work',
    items: [
      {
        id: 'projects',
        label: 'Projects',
        icon: (
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        ),
      },
      {
        id: 'skills',
        label: 'Skills',
        icon: (
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        ),
      },
    ],
  },
  {
    groupLabel: 'Background',
    items: [
      {
        id: 'experience',
        label: 'Experience',
        icon: (
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
            <rect x="2" y="7" width="20" height="14" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <line x1="2" y1="12" x2="22" y2="12" />
          </svg>
        ),
      },
      {
        id: 'education',
        label: 'Education',
        icon: (
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        ),
      },
    ],
  },
  {
    groupLabel: 'Contact',
    items: [
      {
        id: 'contact',
        label: 'Contact',
        icon: (
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" />
            <path d="M2 7l10 7 10-7" />
          </svg>
        ),
      },
    ],
  },
];

const Sidebar = ({ currentPage, onNavigate, onOpenResume }) => {
  return (
    <>
      {/* Desktop Left Sidebar (Fixed) */}
      <aside
        style={{
          backgroundColor: 'var(--bg-canvas)',
          borderColor: 'var(--border-rule)',
          color: 'var(--text-primary)',
        }}
        className="hidden md:flex fixed top-0 left-0 bottom-0 w-72 lg:w-80 border-r flex-col justify-start p-7 lg:p-8 z-40 transition-colors duration-150 overflow-y-auto"
        aria-label="Primary Navigation Sidebar"
      >
        {/* Brand / Name Block */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => onNavigate('overview')}
            className="text-left group block w-full focus:outline-none cursor-pointer"
          >
            <h1
              style={{ color: 'var(--text-primary)' }}
              className="text-base font-bold tracking-tight uppercase transition-colors"
            >
              Keirt William Gemperle
            </h1>
            <p
              style={{ color: 'var(--text-secondary)' }}
              className="text-xs font-mono mt-0.5"
            >
              Front-End Developer
            </p>
          </button>

          <div
            style={{ borderColor: 'var(--border-rule)' }}
            className="pt-3 border-t"
          >
            <p
              style={{ color: 'var(--text-muted)' }}
              className="text-[11px] font-mono uppercase tracking-wider"
            >
              Iloilo City, Philippines
            </p>
          </div>
        </div>

        {/* Labeled Nav Categories with Icons (Top-aligned) */}
        <nav aria-label="Main Pages" className="pt-6 pb-4 space-y-6 flex-1">
          {navGroups.map((group) => (
            <div key={group.groupLabel} className="space-y-1.5">
              <span
                style={{ color: 'var(--text-muted)' }}
                className="text-[10px] font-mono uppercase tracking-widest font-semibold px-2 block"
              >
                {group.groupLabel}
              </span>

              <ul className="space-y-1">
                {group.items.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => onNavigate(item.id)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`w-full text-left px-3 py-2.5 text-xs uppercase tracking-wider font-medium flex items-center space-x-3 border cursor-pointer ${
                          isActive ? 'nav-item-active' : 'nav-item-inactive'
                        }`}
                      >
                        <span className="flex-shrink-0">{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Bottom Section: Resume, Gmail & Copyright */}
        <div
          style={{ borderColor: 'var(--border-rule)' }}
          className="mt-auto border-t pt-4 space-y-3"
        >
          {/* Resume Modal Trigger Button */}
          <button
            type="button"
            onClick={onOpenResume}
            className="w-full interactive-card p-2.5 text-xs font-mono uppercase tracking-wider flex items-center justify-between cursor-pointer shadow-none"
            title="Open Resume Preview Modal"
            aria-label="Open resume preview modal"
          >
            <span className="flex items-center space-x-2">
              <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <span>Resume</span>
            </span>
            <span style={{ color: 'var(--text-secondary)' }} className="text-[10px] font-semibold">
              Preview &rarr;
            </span>
          </button>

          {/* Gmail Account Block */}
          <a
            href="mailto:keirtwilliamgemperle@gmail.com"
            className="group block interactive-card p-3"
            title="Email Keirt William Gemperle"
            aria-label="Send email to keirtwilliamgemperle@gmail.com"
          >
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
                className="text-[10px] font-mono uppercase tracking-wider transition-colors"
              >
                Gmail Account
              </span>
            </div>
            <p
              style={{ color: 'var(--text-primary)' }}
              className="mt-1 text-[11px] font-mono truncate lowercase"
            >
              keirtwilliamgemperle@gmail.com
            </p>
          </a>

          <div
            style={{ color: 'var(--text-muted)' }}
            className="text-[10px] font-mono uppercase tracking-wider"
          >
            <span>&copy; {new Date().getFullYear()} Keirt William Gemperle</span>
          </div>
        </div>
      </aside>

      {/* Mobile Top Header with Icon Navigation */}
      <header
        style={{
          backgroundColor: 'var(--bg-canvas)',
          borderColor: 'var(--border-rule)',
          color: 'var(--text-primary)',
        }}
        className="md:hidden sticky top-0 z-40 border-b transition-colors duration-150"
        aria-label="Mobile Navigation"
      >
        <div
          style={{ borderColor: 'var(--border-rule)' }}
          className="px-4 py-3 border-b flex items-center justify-between gap-2"
        >
          <button
            type="button"
            onClick={() => onNavigate('overview')}
            style={{ color: 'var(--text-primary)' }}
            className="text-left text-xs font-bold uppercase tracking-tight truncate cursor-pointer"
          >
            Keirt William Gemperle
          </button>

          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Mobile Resume Modal Button */}
            <button
              type="button"
              onClick={onOpenResume}
              className="flex items-center space-x-1.5 text-[10px] font-mono interactive-card px-2 py-1 cursor-pointer"
              aria-label="Open resume preview modal"
            >
              <span>Resume</span>
            </button>

            {/* Mobile Gmail Link */}
            <a
              href="mailto:keirtwilliamgemperle@gmail.com"
              className="flex items-center space-x-1.5 text-[10px] font-mono interactive-card px-2 py-1"
              aria-label="Send email via Gmail"
            >
              <svg
                className="w-3.5 h-3.5"
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
              <span>Gmail</span>
            </a>
          </div>
        </div>

        {/* Text + Icon Horizontal Tabs on Mobile */}
        <nav
          style={{ borderColor: 'var(--border-rule)' }}
          className="flex overflow-x-auto divide-x scrollbar-none"
          aria-label="Mobile Pages"
        >
          {navGroups.flatMap((group) => group.items).map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex-none px-3.5 py-2.5 text-[11px] font-mono uppercase tracking-wider whitespace-nowrap flex items-center space-x-2 cursor-pointer font-semibold ${
                  isActive ? 'nav-item-active' : 'nav-item-inactive'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </header>
    </>
  );
};

export default Sidebar;
