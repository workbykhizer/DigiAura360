'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-24 z-50 transition-all duration-300 flex ${
        isScrolled ? 'bg-black' : 'bg-transparent'
      } text-white p-4`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          DigiAura360°
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 uppercase text-lg ">
            <li>
              <a href="#home" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-500">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-orange-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-orange-500">
                Education
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-orange-500">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#partners" className="hover:text-orange-500">
                Partners
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div className="hidden md:block text-lg text-orange-500">
          <p>+7 (212) 674-25-10</p>
        </div>
      </div>
    </header>
  );
}
