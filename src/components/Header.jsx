import React, { useState, useEffect } from "react";
import logoUrl from "../assets/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="site-header__inner">
        <div className="site-header__brand" onClick={() => scrollTo("home")} role="button" tabIndex={0}>
            <img src={logoUrl} alt="Justapher's Logo" className="header-logo" />
        </div>

        {/* Hamburger button for mobile */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`site-header__nav ${isMobileMenuOpen ? 'open' : ''}`} aria-label="Primary">
          <p
            className="nav-item"
            role="button"
            tabIndex={0}
            onClick={() => scrollTo("about")}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollTo("about")}
          >
            About Justopher
          </p>
          <p
            className="nav-item"
            role="button"
            tabIndex={0}
            onClick={() => scrollTo("rsvp")}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollTo("rsvp")}
          >
            RSVP
          </p>
          <p
            className="nav-item"
            role="button"
            tabIndex={0}
            onClick={() => scrollTo("venue")}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollTo("venue")}
          >
            Venue
          </p>
        </nav>
      </div>
    </header>
  );
}
