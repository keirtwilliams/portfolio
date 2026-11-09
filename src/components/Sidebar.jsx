import React, { useState } from 'react';

const navItems = [
  {
    id: 'overview',
    num: '01',
    label: 'Overview',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
        <circle cx="12" cy="7" r="4" />
        <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
      </svg>
    ),
  },
  {
    id: 'projects',
    num: '02',
    label: 'Projects',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: 'skills',
    num: '03',
    label: 'Skills',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 'experience',
    num: '04',
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
    num: '05',
    label: 'Education',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: 'contact',
    num: '06',
    label: 'Contact',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
];

const Sidebar = ({ currentPage, onNavigate, onOpenResume, theme, onToggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNav = (id) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

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
        <div className="space-y-3 pb-6 border-b" style={{ borderColor: 'var(--border-rule)' }}>
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
              className="text-xs font-mono mt-1"
            >
              Front-End Developer
            </p>
          </button>

          <p
            style={{ color: 'var(--text-muted)' }}
            className="text-[11px] font-mono uppercase tracking-wider"
          >
            Iloilo City, Philippines
          </p>
        </div>

        {/* Unified Navigation Index (Balanced rhythm with index numbering) */}
        <nav aria-label="Main Pages" className="pt-6 pb-6 space-y-1.5 flex-1">
          <span
            style={{ color: 'var(--text-muted)' }}
            className="text-[10px] font-mono uppercase tracking-widest font-semibold px-3 pb-2 block"
          >
            Navigation Index
          </span>

          <ul className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`w-full text-left px-3.5 py-3 text-xs uppercase tracking-wider font-medium flex items-center justify-between border cursor-pointer ${
                      isActive ? 'nav-item-active' : 'nav-item-inactive'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                    <span className="text-[10px] font-mono opacity-60">
                      {item.num}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Section: Resume, Gmail & Copyright */}
        <div
          style={{ borderColor: 'var(--border-rule)' }}
          className="mt-auto border-t pt-5 space-y-3"
        >
          {/* Resume Document Card */}
          <button
            type="button"
            onClick={onOpenResume}
            className="group block w-full text-left interactive-card p-3 cursor-pointer shadow-none transition-colors"
            title="Open Resume Preview Modal"
            aria-label="Open resume preview modal"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg
                  style={{ color: 'var(--text-primary)' }}
                  className="w-4 h-4 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span
                  style={{ color: 'var(--text-secondary)' }}
                  className="text-[10px] font-mono uppercase tracking-wider transition-colors"
                >
                  Curriculum Vitae
                </span>
              </div>
              <span
                style={{
                  backgroundColor: 'var(--bg-canvas)',
                  borderColor: 'var(--border-rule)',
                  color: 'var(--text-primary)',
                }}
                className="border px-1.5 py-0.5 text-[9px] font-mono uppercase font-bold tracking-tight"
              >
                PDF
              </span>
            </div>
            <div className="mt-1.5 flex items-center justify-between">
              <p
                style={{ color: 'var(--text-primary)' }}
                className="text-[11px] font-mono uppercase font-semibold tracking-tight"
              >
                Preview Document
              </p>
              <span
                style={{ color: 'var(--text-secondary)' }}
                className="text-xs font-mono transition-transform duration-150 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </div>
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
            className="text-[10px] font-mono uppercase tracking-wider pt-2"
          >
            <span>&copy; {new Date().getFullYear()} Keirt William Gemperle</span>
          </div>
        </div>
      </aside>

      {/* Mobile Top Header (Single Clean Bar with Generous Breathing Room) */}
      <header
        style={{
          backgroundColor: 'var(--bg-canvas)',
          borderColor: 'var(--border-rule)',
          color: 'var(--text-primary)',
        }}
        className="md:hidden sticky top-0 z-40 border-b transition-colors duration-150"
        aria-label="Mobile Navigation"
      >
        <div className="px-5 py-3.5 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => handleMobileNav('overview')}
            style={{ color: 'var(--text-primary)' }}
            className="text-left text-xs font-bold uppercase tracking-tight truncate cursor-pointer"
          >
            Keirt William Gemperle
          </button>

          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Theme Toggle Button */}
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                className="w-8 h-8 interactive-card flex items-center justify-center cursor-pointer shadow-none"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
            )}

            {/* Menu Open/Close Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn-secondary px-3 py-1.5 text-xs font-mono uppercase tracking-wider flex items-center space-x-1.5 cursor-pointer shadow-none"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              <span>{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
              <span className="font-mono text-xs">{isMobileMenuOpen ? '×' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Full Dropdown Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            style={{
              backgroundColor: 'var(--bg-canvas)',
              borderColor: 'var(--border-rule)',
            }}
            className="border-t px-5 py-6 space-y-6"
          >
            <div className="space-y-1">
              <span
                style={{ color: 'var(--text-muted)' }}
                className="text-[10px] font-mono uppercase tracking-widest font-semibold block px-1"
              >
                Navigation
              </span>
              <ul className="space-y-2 pt-2">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => handleMobileNav(item.id)}
                        className={`w-full text-left px-4 py-3 text-sm uppercase tracking-wider font-semibold flex items-center justify-between border cursor-pointer ${
                          isActive ? 'nav-item-active' : 'nav-item-inactive'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                        <span className="text-xs font-mono opacity-60">
                          {item.num}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Actions in Mobile Drawer */}
            <div
              style={{ borderColor: 'var(--border-rule)' }}
              className="pt-5 border-t space-y-3"
            >
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full interactive-card p-3 text-xs font-mono uppercase tracking-wider flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span>Curriculum Vitae</span>
                </div>
                <span className="font-semibold text-[10px]">PDF &rarr;</span>
              </button>

              <a
                href="mailto:keirtwilliamgemperle@gmail.com"
                className="block interactive-card p-3 text-xs font-mono"
              >
                <div className="flex items-center justify-between">
                  <span style={{ color: 'var(--text-secondary)' }} className="text-[10px] uppercase tracking-wider">
                    Gmail Account
                  </span>
                  <span style={{ color: 'var(--text-secondary)' }}>&rarr;</span>
                </div>
                <p style={{ color: 'var(--text-primary)' }} className="mt-1 font-semibold truncate lowercase text-[11px]">
                  keirtwilliamgemperle@gmail.com
                </p>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Sidebar;
