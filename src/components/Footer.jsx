import React from 'react';
import cLogo from '../assets/cLogo.PNG';

export default function Footer() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className='footer-inner-inner'>
                    <img className="footer-logo" src={cLogo} alt="Company Logo" />
                </div>

                <nav className="footer-nav" aria-label="Footer navigation">
                    <p
                        className="footer-nav-item"
                        role="button"
                        tabIndex={0}
                        onClick={() => scrollTo("about")}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollTo("about")}
                    >
                        About Justopher
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