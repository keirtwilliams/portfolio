import React from 'react';

const Navbar = () => {
  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA] border-b border-[#E5E5E5]">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-[#121212] text-[#FAFAFA] px-4 py-2 text-xs font-mono uppercase tracking-wider"
      >
        Skip to main content
      </a>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-[#121212] uppercase hover:text-[#525252] transition-colors"
          aria-label="Keirt William Gemperle - Home"
        >
          Keirt William Gemperle
        </a>

        <nav aria-label="Main Navigation" className="flex items-center space-x-6 sm:space-x-8 text-xs font-medium uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#525252] hover:text-[#121212] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

