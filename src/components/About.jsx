import React from "react";

export default function About() {
  const scrollToRSVP = () => {
    const el = document.getElementById('rsvp');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text-block">
            <h2 className="about-heading">Oh, this sweet little human being</h2>
            <p className="about-paragraph">
                Meet Justopher, our tiny bundle of joy who made his grand entrance into the world on October 21, 2024 — and has been running the show ever since!
                This curious little foodie isn’t picky at all — if it’s edible, it’s acceptable! 🍉🍕🍪 From baby snacks to dad’s lunch, Justopher believes in equal opportunity eating.
                You’ll find him doing exactly what we do — watching TV, scrolling through our phones, or “helping” his dad by adding random divine touches to his laptop work with his keyboard-clicking skills. 
            </p>
          </div>
          
          <div className="about-text-block">
            <h2 className="about-heading">On this special day</h2>
            <p className="about-paragraph">
                We can’t wait to celebrate Justopher’s very first birthday with laughter, love, and a whole lot of cake (he insists on taste-testing them all).
            </p>
          </div>
          
          <div className="about-cta">
            <button className="about-rsvp-btn about-rsvp-primary" onClick={scrollToRSVP}>
              RSVP now
            </button>
          </div>
        </div>
        
        <div className="about-image">
          <div className="about-img-wrapper">
            <img src="/src/assets/circle.jpeg" alt="Liam" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
