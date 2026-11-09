import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-[#FAFAFA]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-baseline justify-between gap-4 text-xs font-mono uppercase tracking-wider text-[#525252]">
        <p>
          &copy; {new Date().getFullYear()} Keirt William Gemperle. All rights reserved.
        </p>

        <div className="flex items-center space-x-6">
          <span>React · Vite · Tailwind CSS</span>
          <a
            href="#"
            className="text-[#121212] hover:text-[#525252] underline underline-offset-4 decoration-[#E5E5E5] hover:decoration-[#121212] transition-colors"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

