import React from 'react';
import cLogo from '../assets/cLogo.png';

export default function Footer() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div>
                    <img className="footer-logo" src={cLogo} alt="Company Logo" style={{ width: '250px', height: '250px' }} />
                </div>

                <nav className="footer-nav" aria-label="Footer navigation">
                    <p
                        className="footer-nav-item"
                        role="button"
                        tabIndex={0}
                        onClick={() => scrollTo("about")}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollTo("about")}
                    >
                        About Justapher
                    </p>
                    <p
                        className="footer-nav-item"
                        role="button"
                        tabIndex={0}
                        onClick={() => scrollTo("rsvp")}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollTo("rsvp")}
                    >
                        RSVP
                    </p>
                    <p
                        className="footer-nav-item"
                        role="button"
                        tabIndex={0}
                        onClick={() => scrollTo("venue")}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollTo("venue")}
                    >
                        Venue
                    </p>
                </nav>
            </div>
        </footer>
    );
}