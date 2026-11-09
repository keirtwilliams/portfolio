import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-[#E5E5E5]" aria-labelledby="hero-title">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#525252]">
            Portfolio / Engineering Profile
          </p>

          <h1
            id="hero-title"
            className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#121212] leading-none"
          >
            Front-End<br />Developer.
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-[#525252] leading-relaxed font-normal">
            Specializing in React, JavaScript (ES6+), Tailwind CSS, and Supabase. Focused on engineering high-performance, accessible, and structured web interfaces.
          </p>

          <div className="pt-6 border-t border-[#E5E5E5] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs uppercase tracking-wider text-[#525252]">
            <div>
              <span className="block font-semibold text-[#121212] mb-1">Direct Contact</span>
              <a
                href="mailto:keirtwilliamgemperle@gmail.com"
                className="hover:text-[#121212] underline underline-offset-4 decoration-[#E5E5E5] hover:decoration-[#121212] transition-colors lowercase"
              >
                keirtwilliamgemperle@gmail.com
              </a>
            </div>

            <div>
              <span className="block font-semibold text-[#121212] mb-1">Code Repository</span>
              <a
                href="https://github.com/keirtwilliams"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#121212] underline underline-offset-4 decoration-[#E5E5E5] hover:decoration-[#121212] transition-colors"
              >
                github.com/keirtwilliams
              </a>
            </div>

            <div>
              <span className="block font-semibold text-[#121212] mb-1">Location</span>
              <span className="text-[#121212]">Iloilo City, Philippines</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

