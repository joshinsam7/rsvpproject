import React from 'react';

export default function Invitation() {
  const scrollToRSVP = () => {
    const el = document.getElementById('rsvp');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="invitation" className="invitation-overlay">
      <div className="invitation-content">
        <h1 className="invitation-title">You are invited to Justopher's 1st birthday party</h1> 
        <button className="invitation-text" onClick={scrollToRSVP}>
          RSVP now →
        </button>
      </div>
    </section>
  );
}