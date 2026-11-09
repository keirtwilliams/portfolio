import React, { useEffect } from 'react';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 lg:p-10 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--bg-canvas)',
          borderColor: 'var(--border-rule)',
          color: 'var(--text-primary)',
        }}
        className="w-full max-w-4xl h-[95vh] sm:h-[92vh] border flex flex-col shadow-none overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-rule)',
          }}
          className="px-3 sm:px-4 py-2.5 sm:py-3 border-b flex items-center justify-between gap-2 sm:gap-3 flex-shrink-0"
        >
          <div className="flex items-center space-x-2 truncate">
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
            </svg>
            <span
              id="resume-modal-title"
              style={{ color: 'var(--text-primary)' }}
              className="text-xs font-mono uppercase tracking-wider font-semibold truncate"
            >
              Keirt William Gemperle — Resume
            </span>
            <span
              style={{
                backgroundColor: 'var(--bg-canvas)',
                borderColor: 'var(--border-rule)',
                color: 'var(--text-secondary)',
              }}
              className="hidden sm:inline-block border px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider"
            >
              PDF · 1 Page
            </span>
          </div>

          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Direct Open in New Tab */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1 sm:space-x-1.5 btn-secondary px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider cursor-pointer"
              title="Open PDF in new tab"
            >
              <span>New Tab</span>
              <span>&rarr;</span>
            </a>

            {/* Direct Download */}
            <a
              href="/resume.pdf"
              download="Keirt_William_Gemperle_Resume.pdf"
              className="inline-flex items-center space-x-1 sm:space-x-1.5 btn-secondary px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider cursor-pointer"
              title="Download PDF"
            >
              <span>Download</span>
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="btn-primary px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono uppercase tracking-wider font-semibold cursor-pointer"
              aria-label="Close resume preview modal"
            >
              Close [Esc] &times;
            </button>
          </div>
        </div>

        {/* Modal Body / Embedded PDF Viewer */}
        <div
          style={{ backgroundColor: 'var(--bg-canvas)' }}
          className="flex-1 w-full h-full overflow-hidden relative"
        >
          <iframe
            src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&pagemode=none&view=FitH"
            title="Keirt William Gemperle — Resume"
            className="w-full h-full block border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;

