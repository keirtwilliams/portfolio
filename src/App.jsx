import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    const validPages = ['overview', 'projects', 'skills', 'experience', 'education', 'contact'];
    return validPages.includes(hash) ? hash : 'overview';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('keirt-portfolio-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // Storage access safety
    }
    return 'light';
  });

  const applyTheme = (targetTheme) => {
    const root = document.documentElement;
    const body = document.body;

    if (targetTheme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      body.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      body.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    }

    try {
      localStorage.setItem('keirt-portfolio-theme', targetTheme);
    } catch {
      // Storage write safety
    }
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['overview', 'projects', 'skills', 'experience', 'education', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-canvas)',
        color: 'var(--text-primary)',
      }}
      className="min-h-screen transition-colors duration-150"
    >
      {/* Left Sidebar Navigation */}
      <Sidebar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Standalone Quick Theme Toggle (Top-Right, desktop only outside navigation bar) */}
      <div className="hidden md:flex fixed top-6 right-8 z-40 items-center">
        <button
          type="button"
          onClick={toggleTheme}
          className="btn-secondary px-3.5 py-2 text-xs font-mono uppercase tracking-wider flex items-center space-x-2 cursor-pointer shadow-none"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
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
            <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
          <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
      </div>

      {/* Main Single Page View Container */}
      <main
        id="main-content"
        className="md:pl-72 lg:pl-80 min-h-screen flex flex-col justify-between"
      >
        <div className="max-w-4xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-16">
          {currentPage === 'overview' && (
            <Overview
              onNavigate={handleNavigate}
              onOpenResume={() => setIsResumeOpen(true)}
            />
          )}
          {currentPage === 'projects' && <Projects />}
          {currentPage === 'skills' && <Skills />}
          {currentPage === 'experience' && <Experience />}
          {currentPage === 'education' && <Education />}
          {currentPage === 'contact' && <Contact />}
        </div>

        {/* Minimalist Page Footer */}
        <footer
          style={{
            borderColor: 'var(--border-rule)',
            color: 'var(--text-secondary)',
          }}
          className="border-t px-6 sm:px-10 lg:px-16 py-6 text-xs font-mono uppercase tracking-wider"
        >
          <span>Keirt William Gemperle &copy; {new Date().getFullYear()}</span>
        </footer>
      </main>

      {/* Blur Backdrop Modal for Resume Preview */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
